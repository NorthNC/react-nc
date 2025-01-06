'use client'

import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import '../styles/FAQPage.css';

export default function FAQPage({ faqs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContent, setSelectedContent] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredFaqs = useMemo(() => 
    faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.subItems.some(item => 
        item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ), [faqs, searchTerm]
  );

  useEffect(() => {
    if (searchTerm) {
      const newOpenDropdowns = {};
      let foundMatch = false;
      let newSelectedContent = null;
      let newHighlightedItem = null;

      filteredFaqs.forEach(faq => {
        if (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())) {
          newOpenDropdowns[faq.id] = true;
          newSelectedContent = { question: faq.question, content: faq.answer };
          newHighlightedItem = null;
          foundMatch = true;
        } else {
          const matchingSubItem = faq.subItems.find(item =>
            item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.content.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (matchingSubItem) {
            newOpenDropdowns[faq.id] = true;
            newSelectedContent = { question: faq.question, content: matchingSubItem.content };
            newHighlightedItem = matchingSubItem.id;
            foundMatch = true;
          }
        }
      });

      if (foundMatch) {
        setOpenDropdowns(prevOpenDropdowns => {
          if (JSON.stringify(prevOpenDropdowns) !== JSON.stringify(newOpenDropdowns)) {
            return newOpenDropdowns;
          }
          return prevOpenDropdowns;
        });
        setSelectedContent(prevSelectedContent => {
          if (JSON.stringify(prevSelectedContent) !== JSON.stringify(newSelectedContent)) {
            return newSelectedContent;
          }
          return prevSelectedContent;
        });
        setHighlightedItem(prevHighlightedItem => {
          if (prevHighlightedItem !== newHighlightedItem) {
            return newHighlightedItem;
          }
          return prevHighlightedItem;
        });
      }
    } else {
      setOpenDropdowns({});
      setSelectedContent(null);
      setHighlightedItem(null);
    }
  }, [searchTerm, filteredFaqs]);

  const handleDropdownToggle = (id) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleContentSelect = (question, content, itemId = null) => {
    setSelectedContent({ question, content });
    setHighlightedItem(itemId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="faq-page">
      <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>
      <aside className={`faq-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="faq-search"
        />
        <nav className="faq-nav">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="faq-nav-item">
              <button
                className={`faq-nav-button ${openDropdowns[faq.id] ? 'active' : ''}`}
                onClick={() => handleDropdownToggle(faq.id)}
              >
                {faq.question}
                {openDropdowns[faq.id] ? (
                  <ChevronUp className="faq-chevron" />
                ) : (
                  <ChevronDown className="faq-chevron" />
                )}
              </button>
              {openDropdowns[faq.id] && (
                <div className="faq-dropdown">
                  <button
                    className={`faq-dropdown-item ${highlightedItem === null && selectedContent?.question === faq.question ? 'highlighted' : ''}`}
                    onClick={() => handleContentSelect(faq.question, faq.answer)}
                  >
                    Overview
                  </button>
                  {faq.subItems.map((item) => (
                    <button
                      key={item.id}
                      className={`faq-dropdown-item ${highlightedItem === item.id ? 'highlighted' : ''}`}
                      onClick={() => handleContentSelect(faq.question, item.content, item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
      <div className="faq-content">
        {selectedContent ? (
          <div className="faq-detail">
            <h2>{selectedContent.question}</h2>
            <p>{selectedContent.content}</p>
          </div>
        ) : (
          <div className="faq-placeholder">
            <p>Select a question from the menu to view its answer.</p>
          </div>
        )}
      </div>
    </div>
  );
}


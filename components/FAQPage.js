'use client';

import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import styles from '../styles/FAQpage.module.css';

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
        setOpenDropdowns(newOpenDropdowns);
        setSelectedContent(newSelectedContent);
        setHighlightedItem(newHighlightedItem);
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
    <div className={styles.faqPage}>
      <button
        className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.mobileMenuToggleActive : ''}`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>
      <aside className={`${styles.faqSidebar} ${isMobileMenuOpen ? styles.faqSidebarOpen : ''}`}>
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.faqSearch}
        />
        <nav className={styles.faqNav}>
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className={styles.faqNavItem}>
              <button
                className={`${styles.faqNavButton} ${openDropdowns[faq.id] ? styles.faqNavButtonActive : ''}`}
                onClick={() => handleDropdownToggle(faq.id)}
              >
                {faq.question}
                {openDropdowns[faq.id] ? (
                  <ChevronUp className={styles.faqChevron} />
                ) : (
                  <ChevronDown className={styles.faqChevron} />
                )}
              </button>
              {openDropdowns[faq.id] && (
                <div className={styles.faqDropdown}>
                  <button
                    className={`${styles.faqDropdownItem} ${highlightedItem === null && selectedContent?.question === faq.question ? styles.faqDropdownItemHighlighted : ''}`}
                    onClick={() => handleContentSelect(faq.question, faq.answer)}
                  >
                    Overview
                  </button>
                  {faq.subItems.map((item) => (
                    <button
                      key={item.id}
                      className={`${styles.faqDropdownItem} ${highlightedItem === item.id ? styles.faqDropdownItemHighlighted : ''}`}
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
      <div className={styles.faqContent}>
        {selectedContent ? (
          <div className={styles.faqDetail}>
            <h2>{selectedContent.question}</h2>
            <p>{selectedContent.content}</p>
          </div>
        ) : (
          <div className={styles.faqPlaceholder}>
            <p>Select a question from the menu to the right to view its answer.</p>
          </div>
        )}
      </div>
    </div>
  );
}


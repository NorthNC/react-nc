"use client";

import Link from 'next/link';
import { useTranslation } from '@/components/hooks/useTranslation';

const Breadcrumb = ({ items }) => {
  const { t } = useTranslation("Breadcrumb");

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={item.href} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
            {index < items.length - 1 ? (
              <Link href={item.href}>{t(item.label, item.label)}</Link>
            ) : (
              <span>{t(item.label, item.label)}</span>
            )}
            {index < items.length - 1 && <span className="separator"> / </span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

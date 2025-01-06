// components/Breadcrumb.js
import Link from 'next/link';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={item.href} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
            {index < items.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="separator"> / </span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
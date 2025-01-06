import React from 'react';
import './supportOrganizations.css';

const SupportOrganizations = () => {
  const organizations = [
    { 
      name: 'World Council for Health', 
      logo: '/supporter-logos/svg-image-1.svg',
      link: 'https://www.worldcouncilforhealth.org/'
    },
    { 
      name: 'Door to Freedom', 
      logo: '/supporter-logos/door-to-freedom.png', 
      link: 'https://doortofreedom.org/'
    },
    { 
      name: 'American Health Freedom', 
      logo: '/supporter-logos/american-health-freedom.png', 
      link: 'https://www.americansforhealthfreedom.org/'
    },
    { 
      name: 'McCullough Fundation', 
      logo: '/supporter-logos/mccullough-fund.jpg', 
      link: 'https://x.com/mcculloughfund/status/1852010989169914029?s=46&t=zG49j3dgO6EP9uYNOkasrQ'
    },
    { 
      name: 'The Cape Byron Lighthouse Declaration', 
      logo: '/supporter-logos/cape-byron.webp', 
      link: 'https://lighthousedeclaration.org/'
    },
    { 
      name: 'UK Medical Freedom Alliance', 
      logo: '/supporter-logos/uk-medical-freedom.jpeg', 
      link: 'https://www.ukmedfreedom.org/'
    },
    { 
      name: 'Front Line Covid-19 Critical Care', 
      logo: '/supporter-logos/FLCCC.webp', 
      link: 'https://covid19criticalcare.com/'
    },
    { 
      name: 'New Zealand Doctors Speaking Out with Science', 
      logo: '/supporter-logos/nzd_sos.webp', 
      link: 'https://nzdsos.com/'
    },
    { 
      name: 'Nova Health Support', 
      logo: '/supporter-logos/nova_health.png', 
      link: 'https://novahealthsupport.se/'
    },
    { 
      name: 'Samen Voor Democratie', 
      logo: '/supporter-logos/svd.png',
      link: 'https://samenvoordemocratie.be/'
    },
    { 
      name: 'Focus Who', 
      logo: '/supporter-logos/focus-who.png',
      link: 'https://focuswho.org/'
    },
  ];

  return (
    <div className="support-page">
      <h1>Our Support Organizations</h1>
      <p className="intro">We are grateful for the support of these amazing organizations:</p>
      <div className="org-grid">
        {organizations.map((org, index) => (
          <div key={index} className="org-card">
            <img src={org.logo} alt={`${org.name} logo`} className="org-logo" />
            <h4>{org.name}</h4>
            <a href={org.link} target="_blank" rel="noopener noreferrer" className="org-link">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportOrganizations;


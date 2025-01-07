'use client';

import React from 'react';
import './supportOrganizations.css';
import ScrollToTopButton from '@/components/ScrollToTop';
import Breadcrumb from '@/components/BreadCrumb';
import { useTranslation } from '@/components/hooks/useTranslation';

const SupportOrganizations = () => {
  const { t } = useTranslation('supportOrganizations');

  const breadcrumbItems = [
    { href: '/', label: t('breadcrumb.home', 'Home') },
    { href: '/support', label: t('breadcrumb.support', 'Supporters') },
  ];

  const organizations = [
    { 
      name: t('organizations.worldCouncilForHealth.name', 'World Council for Health'), 
      logo: '/supporter-logos/svg-image-1.svg',
      link: t('organizations.worldCouncilForHealth.link', 'https://www.worldcouncilforhealth.org/')
    },
    { 
      name: t('organizations.doorToFreedom.name', 'Door to Freedom'), 
      logo: '/supporter-logos/door-to-freedom.png', 
      link: t('organizations.doorToFreedom.link', 'https://doortofreedom.org/')
    },
    { 
      name: t('organizations.americanHealthFreedom.name', 'American Health Freedom'), 
      logo: '/supporter-logos/american-health-freedom.png', 
      link: t('organizations.americanHealthFreedom.link', 'https://www.americansforhealthfreedom.org/')
    },
    { 
      name: t('organizations.mcculloughFundation.name', 'McCullough Fundation'), 
      logo: '/supporter-logos/mccullough-fund.jpg', 
      link: t('organizations.mcculloughFundation.link', 'https://x.com/mcculloughfund/status/1852010989169914029?s=46&t=zG49j3dgO6EP9uYNOkasrQ')
    },
    { 
      name: t('organizations.capeByronDeclaration.name', 'The Cape Byron Lighthouse Declaration'), 
      logo: '/supporter-logos/cape-byron.webp', 
      link: t('organizations.capeByronDeclaration.link', 'https://lighthousedeclaration.org/')
    },
    { 
      name: t('organizations.ukMedicalFreedom.name', 'UK Medical Freedom Alliance'), 
      logo: '/supporter-logos/uk-medical-freedom.jpeg', 
      link: t('organizations.ukMedicalFreedom.link', 'https://www.ukmedfreedom.org/')
    },
    { 
      name: t('organizations.flccc.name', 'Front Line Covid-19 Critical Care'), 
      logo: '/supporter-logos/FLCCC.webp', 
      link: t('organizations.flccc.link', 'https://covid19criticalcare.com/')
    },
    { 
      name: t('organizations.nzDoctorsSpeakingOut.name', 'New Zealand Doctors Speaking Out with Science'), 
      logo: '/supporter-logos/nzd_sos.webp', 
      link: t('organizations.nzDoctorsSpeakingOut.link', 'https://nzdsos.com/')
    },
    { 
      name: t('organizations.novaHealthSupport.name', 'Nova Health Support'), 
      logo: '/supporter-logos/nova_health.png', 
      link: t('organizations.novaHealthSupport.link', 'https://novahealthsupport.se/')
    },
    { 
      name: t('organizations.samenVoorDemocratie.name', 'Samen Voor Democratie'), 
      logo: '/supporter-logos/svd.png',
      link: t('organizations.samenVoorDemocratie.link', 'https://samenvoordemocratie.be/')
    },
    { 
      name: t('organizations.focusWho.name', 'Focus Who'), 
      logo: '/supporter-logos/focus-who.png',
      link: t('organizations.focusWho.link', 'https://focuswho.org/')
    },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ScrollToTopButton />
      <div className="support-page">
        <h1>{t('title', 'Our Support Organizations')}</h1>
        <p className="intro">{t('intro', 'We are grateful for the support of these amazing organizations:')}</p>
        <div className="org-grid">
          {organizations.map((org, index) => {
            console.log('Link for', org.name, ':', org.link);
            return (
              <div key={index} className="org-card">
                <img src={org.logo} alt={`${org.name} logo`} className="org-logo" />
                <h4>{org.name}</h4>
                <a 
                  href={typeof org.link === 'string' ? org.link : '#'}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="org-link"
                >
                  {t('visitWebsite', 'Visit Website')}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SupportOrganizations;

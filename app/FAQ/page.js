import FAQPage from './components/FAQPage';

export default function Home() {
  const faqData = [
    {
      id: 'Denmark',
      question: "What are your opening hours?",
      answer: "We're open from 9 AM to 10 PM, seven days a week.",
      subItems: [
        { id: 'weekday-hours', label: 'Weekday Hours', content: 'Monday to Friday: 9 AM - 10 PM' },
        { id: 'weekend-hours', label: 'Weekend Hours', content: 'Saturday and Sunday: 9 AM - 11 PM' },
        { id: 'holiday-hours', label: 'Holiday Hours', content: 'We may have special hours on holidays. Please check our website for updates.' }
      ]
    },
    {
      id: 'vegetarian',
      question: "Do you offer vegetarian options?",
      answer: "Yes, we have a wide range of vegetarian dishes available.",
      subItems: [
        { id: 'veg-starters', label: 'Vegetarian Starters', content: 'We offer a variety of vegetarian starters, including salads, soups, and appetizers.' },
        { id: 'veg-mains', label: 'Vegetarian Main Courses', content: 'Our menu features several vegetarian main courses, from pasta dishes to vegetable curries.' },
        { id: 'vegan-options', label: 'Vegan Options', content: 'We also cater to vegan diets and can modify many dishes to suit your dietary requirements.' }
      ]
    },
    {
      id: 'dress-code',
      question: "Is there a dress code?",
      answer: "We have a smart casual dress code for dinner service.",
      subItems: [
        { id: 'acceptable-attire', label: 'Acceptable Attire', content: 'Collared shirts or polo shirts for gentlemen, and equivalent attire for ladies.' },
        { id: 'unacceptable-attire', label: 'Unacceptable Attire', content: 'We kindly ask that guests refrain from wearing beachwear, sports attire, or overly casual clothing during dinner hours.' },
        { id: 'special-events', label: 'Special Events', content: 'For special events, a more formal dress code may be required. Please check the event details.' }
      ]
    },
    {
      id: 'reservations',
      question: "Do you take reservations?",
      answer: "Yes, we recommend making reservations, especially for weekend dinners.",
      subItems: [
        { id: 'online-booking', label: 'Online Booking', content: 'You can make a reservation through our website or using popular restaurant booking apps.' },
        { id: 'phone-booking', label: 'Phone Booking', content: 'To book by phone, please call us at (123) 456-7890.' },
        { id: 'large-groups', label: 'Large Groups', content: 'For groups of 8 or more, please contact us directly to arrange your booking.' }
      ]
    },
    {
      id: 'accessibility',
      question: "Are you wheelchair accessible?",
      answer: "Yes, our restaurant is fully wheelchair accessible.",
      subItems: [
        { id: 'entrance', label: 'Entrance', content: 'We have a ramp at the entrance for easy wheelchair access.' },
        { id: 'interior', label: 'Interior', content: 'Our restaurant features wide doorways and ample space between tables to accommodate wheelchairs.' },
        { id: 'restrooms', label: 'Restrooms', content: 'We have accessible restrooms on the premises.' }
      ]
    }
  ];

  return (
    <main>
      <h1>FAQ</h1>
      <FAQPage faqs={faqData} />
    </main>
  );
}


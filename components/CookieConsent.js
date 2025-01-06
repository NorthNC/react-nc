"use client";

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [consent, setConsent] = useState(null)

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent')
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent))
    }
  }, [])

  const handleConsent = (accepted) => {
    const consentData = {
      accepted,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consentData))
    setConsent(consentData)
  }

  const handleRevokeConsent = () => {
    localStorage.removeItem('cookieConsent')
    setConsent(null)
    // Here you would also remove any cookies that were set
    // This is just a placeholder function
    removeCookies()
  }

  if (consent) {
    return (
      <div className="cookie-settings">
        <button onClick={handleRevokeConsent}>Manage Cookie Preferences</button>
      </div>
    )
  }

  return (
    <div className="cookie-consent">
      <p>This website uses cookies to enhance the user experience.</p>
      <div>
        <button onClick={() => handleConsent(true)}>Accept</button>
        <button onClick={() => handleConsent(false)}>Reject</button>
      </div>
    </div>
  )
}

// Placeholder function to remove cookies
function removeCookies() {
  // In a real implementation, you would iterate through your cookies and remove them
  // This might look something like:
  // document.cookie.split(";").forEach(function(c) { 
  //   document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
  // });
  console.log('Cookies have been removed')
}


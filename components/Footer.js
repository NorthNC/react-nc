import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import SocialMediaLinks from '@/components/SocialMediaLinks'

export default function Footer() {
  return (
    <footer className="footer">
      <div>© 2024 NORTH group. All rights reserved.</div>
      {/* <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div> */}
      <SocialMediaLinks />
    </footer>
  )
}


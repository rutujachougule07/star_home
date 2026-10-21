import React, { useState, useEffect } from 'react';
import { businessInfo } from '../data/businessData';
import { Menu, X, Phone, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenEnquiry, onOpenCertificate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(248, 245, 239, 0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: isScrolled ? '1px solid rgba(201, 168, 106, 0.3)' : '1px solid var(--color-border)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.06)' : 'none'
      }}
    >
      {/* Top Notification Bar */}
      <div
        style={{
          backgroundColor: '#252525',
          color: '#F8F5EF',
          fontSize: '0.785rem',
          padding: '0.45rem 1rem',
          borderBottom: '1px solid rgba(201, 168, 106, 0.25)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                backgroundColor: 'rgba(201, 168, 106, 0.2)',
                color: '#E5C788',
                padding: '0.15rem 0.5rem',
                borderRadius: '4px',
                fontWeight: 600
              }}
            >
              <ShieldCheck size={13} />
              Udyam Registered: {businessInfo.udyamRegistrationNumber}
            </span>
            <span style={{ color: '#A0988A', display: 'none', mdDisplay: 'inline' }}>
              | Micro Enterprise • Sangli, Maharashtra
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href={`tel:${businessInfo.contact.phoneTel}`}
              style={{
                color: '#E5C788',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontWeight: 500
              }}
            >
              <Phone size={12} />
              {businessInfo.contact.phone}
            </a>
            <button
              onClick={onOpenCertificate}
              style={{
                background: 'none',
                border: 'none',
                color: '#F8F5EF',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '0.75rem',
                padding: 0
              }}
            >
              Verify Certificate
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ padding: '0.75rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #252525 0%, #151515 100%)',
                border: '1.5px solid var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <Sparkles size={22} />
            </div>
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#252525',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.15
                }}
              >
                STAR HOME APPLIANCES
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#8A8275',
                  fontWeight: 600
                }}
              >
                M/S ANAND RAYCHAND BHURAT HUF
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.5rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#3B3A36',
                  transition: 'color 0.2s ease',
                  padding: '0.5rem 0.25rem'
                }}
                onMouseEnter={(e) => (e.target.style.color = '#B87333')}
                onMouseLeave={(e) => (e.target.style.color = '#3B3A36')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-cta">
            <button
              onClick={() => onOpenEnquiry('General Enquiry')}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '0.5rem',
              color: '#252525',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '2px solid var(--color-accent)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            padding: '1.25rem 1.5rem'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#252525',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #F1ECE1'
                }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('General Enquiry');
                }}
                className="btn btn-accent"
                style={{ width: '100%' }}
              >
                Enquire Now
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCertificate();
                }}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                View Udyam Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query helper for Navbar */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}

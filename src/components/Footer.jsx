import React from 'react';
import { businessInfo } from '../data/businessData';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, ExternalLink, Heart } from 'lucide-react';

export default function Footer({ onOpenCertificate, onOpenLegal }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#1A1A1A',
        color: '#E5E0D8',
        borderTop: '2px solid var(--color-accent)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand & Registration Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: '#252525',
                  border: '1.5px solid var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)'
                }}
              >
                <Sparkles size={20} />
              </div>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.04em'
                }}
              >
                STAR HOME APPLIANCES
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#B5AFA5', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Operated by <strong>{businessInfo.registeredEnterpriseName}</strong>, a registered Micro Enterprise
              under the Ministry of MSME, Government of India. Dedicated to home appliance manufacturing,
              electrical equipment, and household repair services.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(201, 168, 106, 0.12)',
                border: '1px solid rgba(201, 168, 106, 0.3)',
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.775rem',
                color: '#E5C788'
              }}
            >
              <ShieldCheck size={14} />
              <span>{businessInfo.udyamRegistrationNumber}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Product Categories', href: '#products' },
                { name: 'Repair & Services', href: '#services' },
                { name: 'Why Choose Us', href: '#why-choose-us' },
                { name: 'Business Credentials', href: '#credentials' },
                { name: 'Facility Gallery', href: '#gallery' },
                { name: 'Contact & Enquiry', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      fontSize: '0.875rem',
                      color: '#B5AFA5',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#E5C788')}
                    onMouseLeave={(e) => (e.target.style.color = '#B5AFA5')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Registered Activities */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Scope of Activities
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#B5AFA5' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>•</span>
                <span>Household Appliances Manufacturing</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>•</span>
                <span>Electrical Equipment Fabrication</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>•</span>
                <span>Household Appliance Repair &amp; Servicing</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>•</span>
                <span>Special-Purpose Machinery Assemblies</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>•</span>
                <span>Custom Appliance Spares &amp; Wiring</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Summary */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Contact Enterprise
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={18} style={{ color: '#E5C788', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#B5AFA5', lineHeight: 1.5 }}>
                  {businessInfo.address.formatted}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <Phone size={18} style={{ color: '#E5C788', flexShrink: 0 }} />
                <a
                  href={`tel:${businessInfo.contact.phoneTel}`}
                  style={{ color: '#FFFFFF', fontWeight: 600 }}
                >
                  {businessInfo.contact.phone}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <Mail size={18} style={{ color: '#E5C788', flexShrink: 0 }} />
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  style={{ color: '#FFFFFF', wordBreak: 'break-all' }}
                >
                  {businessInfo.contact.email}
                </a>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button
                  onClick={onOpenCertificate}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(229, 199, 136, 0.4)',
                    borderRadius: '6px',
                    color: '#E5C788',
                    padding: '0.45rem 0.85rem',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <ExternalLink size={14} />
                  <span>View Udyam Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Disclaimers & Legal */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.825rem',
            color: '#8A847A'
          }}
        >
          <div>
            © {currentYear} STAR HOME APPLIANCES (M/S ANAND RAYCHAND BHURAT HUF). All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenLegal('privacy')}
              style={{
                background: 'none',
                border: 'none',
                color: '#B5AFA5',
                cursor: 'pointer',
                fontSize: '0.825rem',
                padding: 0
              }}
              onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.target.style.color = '#B5AFA5')}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              style={{
                background: 'none',
                border: 'none',
                color: '#B5AFA5',
                cursor: 'pointer',
                fontSize: '0.825rem',
                padding: 0
              }}
              onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.target.style.color = '#B5AFA5')}
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={onOpenCertificate}
              style={{
                background: 'none',
                border: 'none',
                color: '#E5C788',
                cursor: 'pointer',
                fontSize: '0.825rem',
                padding: 0
              }}
            >
              Govt. Registration Record
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

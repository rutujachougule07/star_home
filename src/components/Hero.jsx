import React from 'react';
import { businessInfo } from '../data/businessData';
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, FileText } from 'lucide-react';

export default function Hero({ onOpenEnquiry, onOpenCertificate }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#252525'
      }}
    >
      {/* Background Image with Optimized Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.38,
          transform: 'scale(1.02)'
        }}
      />

      {/* Gradient Overlay for Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(20,20,20,0.92) 0%, rgba(25,25,25,0.85) 55%, rgba(30,30,30,0.65) 100%)'
        }}
      />

      {/* Decorative Warm Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,106,0.18) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '4.5rem 1.5rem' }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Udyam Verification Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: 'rgba(201, 168, 106, 0.15)',
              border: '1px solid rgba(201, 168, 106, 0.45)',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              color: '#E5C788',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              backdropFilter: 'blur(8px)'
            }}
          >
            <ShieldCheck size={18} style={{ color: '#E5C788' }} />
            <span>Govt. Registered Micro Enterprise • Sangli, Maharashtra</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.35rem, 5vw, 3.75rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Smart Home Appliances. <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 30%, #E5C788 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Reliable Service.
            </span>{' '}
            Quality You Can Trust.
          </h1>

          {/* Supporting Text */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#D8D3C8',
              lineHeight: 1.65,
              marginBottom: '2.25rem',
              maxWidth: '680px',
              fontWeight: 400
            }}
          >
            Discover home appliance solutions backed by manufacturing expertise, electrical equipment
            knowledge, and household appliance servicing.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem'
            }}
          >
            <a
              href="#products"
              className="btn btn-accent"
              style={{ fontSize: '1rem', padding: '0.95rem 1.95rem' }}
            >
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="btn btn-outline-white"
              style={{ fontSize: '1rem', padding: '0.95rem 1.85rem' }}
            >
              <span>Contact Us</span>
            </a>

            <button
              onClick={onOpenCertificate}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'transparent',
                color: '#E5C788',
                border: '1px solid rgba(229, 199, 136, 0.4)',
                borderRadius: '10px',
                padding: '0.95rem 1.5rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(229, 199, 136, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <FileText size={17} />
              <span>View Registration Certificate</span>
            </button>
          </div>

          {/* Verifiable Attribute Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              paddingTop: '1.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <CheckCircle2 size={20} style={{ color: '#C9A86A', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>
                  Manufacturing Unit
                </div>
                <div style={{ color: '#A0988A', fontSize: '0.8rem' }}>
                  Domestic Appliances &amp; Electrical Equipment
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <CheckCircle2 size={20} style={{ color: '#C9A86A', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>
                  Appliance Servicing
                </div>
                <div style={{ color: '#A0988A', fontSize: '0.8rem' }}>
                  Registered repair &amp; diagnostic support
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <CheckCircle2 size={20} style={{ color: '#C9A86A', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>
                  Udyam Registered
                </div>
                <div style={{ color: '#A0988A', fontSize: '0.8rem' }}>
                  {businessInfo.udyamRegistrationNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { businessInfo } from '../data/businessData';
import { ShieldCheck, Factory, Wrench, Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

export default function AboutUs({ onOpenCertificate, onOpenEnquiry }) {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Registered Micro Enterprise",
      subtitle: "Udyam Ministry of MSME",
      desc: "Operating officially under registration number UDYAM-MH-29-0007965 by M/S ANAND RAYCHAND BHURAT HUF.",
      badge: "Verified Status"
    },
    {
      icon: Factory,
      title: "Manufacturing Activities",
      subtitle: "Major Core Activity",
      desc: "Focused on domestic electrical equipment and household appliance fabrication, assembly, and component production.",
      badge: "NIC Major Activity"
    },
    {
      icon: Wrench,
      title: "Household Appliance Servicing",
      subtitle: "Repair & Diagnostic Support",
      desc: "Registered additional activity for testing, wiring diagnostics, component replacement, and household equipment servicing.",
      badge: "NIC Additional Activity"
    },
    {
      icon: Calendar,
      title: "Registration Record: 28 Dec 2020",
      subtitle: "Official Certificate Filing Date",
      desc: "Documented registration record under the Government of India Udyam portal for verified operational transparency.",
      badge: "Govt Record"
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#F8F5EF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>Business Profile &amp; Credibility</span>
          </div>
          <h2 className="section-title">About Star Home Appliances</h2>
          <p className="section-subtitle">
            STAR HOME APPLIANCES is associated with M/S ANAND RAYCHAND BHURAT HUF, a Micro Enterprise
            registered under the Udyam Registration system. The business activities include manufacturing,
            electrical equipment manufacturing, and household appliance repair and servicing.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="hover-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem 1.75rem',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--color-accent-light)',
                        border: '1px solid rgba(201, 168, 106, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#936F2C'
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: '#F3EFE6',
                        color: '#6E614C',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px'
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      marginBottom: '0.35rem',
                      color: 'var(--color-primary)'
                    }}
                  >
                    {card.title}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--color-bronze)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {card.subtitle}
                  </div>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.6
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Enterprise Summary Box */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              padding: '1.25rem 2rem',
              backgroundColor: '#252525',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck size={22} style={{ color: '#E5C788' }} />
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', margin: 0 }}>
                  Official Government Registration Details
                </h4>
                <p style={{ color: '#A0988A', fontSize: '0.8rem', margin: 0 }}>
                  Source: Udyam Certificate UDYAM-MH-29-0007965
                </p>
              </div>
            </div>

            <button
              onClick={onOpenCertificate}
              className="btn btn-accent"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
            >
              <ExternalLink size={15} />
              <span>Inspect Full Certificate</span>
            </button>
          </div>

          <div style={{ padding: '2rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>
                  Trading / Business Name
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#252525', marginTop: '0.2rem' }}>
                  {businessInfo.businessName}
                </div>

                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#888', fontWeight: 600, marginTop: '1.25rem' }}>
                  Registered Enterprise Name (HUF)
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#252525', marginTop: '0.2rem' }}>
                  {businessInfo.registeredEnterpriseName}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>
                  Udyam Registration Number
                </div>
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#B87333',
                    marginTop: '0.2rem',
                    fontFamily: 'monospace',
                    letterSpacing: '0.04em'
                  }}
                >
                  {businessInfo.udyamRegistrationNumber}
                </div>

                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#888', fontWeight: 600, marginTop: '1.25rem' }}>
                  Classification &amp; Ministry
                </div>
                <div style={{ fontSize: '0.95rem', color: '#454545', marginTop: '0.2rem' }}>
                  <strong>Micro Enterprise</strong> (Ministry of MSME, Govt. of India)
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>
                  Physical Location
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.2rem', color: '#333' }}>
                  <MapPin size={18} style={{ color: '#B87333', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.925rem', lineHeight: 1.5 }}>
                    {businessInfo.address.formatted}
                  </span>
                </div>

                <div style={{ marginTop: '1.25rem' }}>
                  <button
                    onClick={() => onOpenEnquiry('Registration / Verification Enquiry')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#B87333',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: 0,
                      fontSize: '0.9rem'
                    }}
                  >
                    <span>Have a question about our enterprise? Enquire directly</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

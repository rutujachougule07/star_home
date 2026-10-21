import React from 'react';
import { servicesList } from '../data/businessData';
import { Wrench, ShieldCheck, Zap, Cpu, CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';

export default function Services({ onOpenEnquiry }) {
  const getIcon = (name) => {
    switch (name) {
      case 'Wrench':
        return <Wrench size={22} />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} />;
      case 'Zap':
        return <Zap size={22} />;
      case 'Cpu':
        return <Cpu size={22} />;
      default:
        return <Wrench size={22} />;
    }
  };

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: '#F8F5EF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Servicing &amp; Technical Capabilities</span>
          </div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Providing reliable household appliance repair, electrical equipment diagnostics, and custom
            manufacturing solutions with verified technical expertise in Sangli.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="hover-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                {/* Service Card Header Banner Image */}
                <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Category Status Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '12px',
                      backgroundColor: service.verified ? 'rgba(21, 128, 61, 0.92)' : 'rgba(37, 37, 37, 0.9)',
                      color: '#FFFFFF',
                      fontSize: '0.725rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    {service.verified && <CheckCircle2 size={12} />}
                    <span>{service.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--color-accent-light)',
                        border: '1px solid rgba(201, 168, 106, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#936F2C',
                        flexShrink: 0
                      }}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--color-primary)'
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    {service.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontSize: '0.825rem',
                          color: '#555'
                        }}
                      >
                        <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div style={{ padding: '0 1.75rem 1.75rem 1.75rem' }}>
                <button
                  onClick={() => onOpenEnquiry(`Service: ${service.title}`)}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    fontSize: '0.875rem'
                  }}
                >
                  <span>{service.callToAction}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation Banner */}
        <div
          style={{
            backgroundColor: '#252525',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 2.5rem',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            border: '1px solid rgba(201, 168, 106, 0.3)'
          }}
        >
          <div>
            <h4
              style={{
                fontSize: '1.35rem',
                color: '#FFFFFF',
                marginBottom: '0.35rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Need Appliance Servicing or Custom Batch Inquiries?
            </h4>
            <p style={{ color: '#C8C2B5', fontSize: '0.925rem', margin: 0, maxWidth: '640px' }}>
              Speak directly with M/S Anand Raychand Bhurat HUF for testing schedules, component compatibility,
              or workshop repair visits in Sangli.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenEnquiry('Direct Consultation')}
              className="btn btn-accent"
              style={{ padding: '0.75rem 1.5rem' }}
            >
              <span>Contact for Details</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { whyChooseUsPoints, businessInfo } from '../data/businessData';
import { Award, Cpu, Wrench, MapPin, PhoneCall, FileCheck, CheckCircle } from 'lucide-react';

export default function WhyChooseUs({ onOpenCertificate, onOpenEnquiry }) {
  const getIcon = (name) => {
    switch (name) {
      case 'Award':
        return <Award size={24} />;
      case 'Cpu':
        return <Cpu size={24} />;
      case 'Wrench':
        return <Wrench size={24} />;
      case 'MapPin':
        return <MapPin size={24} />;
      case 'PhoneCall':
        return <PhoneCall size={24} />;
      case 'FileCheck':
        return <FileCheck size={24} />;
      default:
        return <CheckCircle size={24} />;
    }
  };

  return (
    <section id="why-choose-us" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <CheckCircle size={14} />
            <span>Verifiable Business Standards</span>
          </div>
          <h2 className="section-title">Why Choose Star Home Appliances</h2>
          <p className="section-subtitle">
            We base our business relationship on documented credentials, local accessibility in Sangli,
            direct proprietor communication, and registered manufacturing activities.
          </p>
        </div>

        {/* Grid of 6 Verifiable Points */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem'
          }}
        >
          {whyChooseUsPoints.map((item, idx) => (
            <div
              key={idx}
              className="hover-card"
              style={{
                backgroundColor: '#FAF8F5',
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem 2rem',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid rgba(201, 168, 106, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B87333',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {getIcon(item.iconName)}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    marginBottom: '0.45rem'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--color-text)',
                    lineHeight: 1.6
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment to Transparency Banner */}
        <div
          style={{
            backgroundColor: '#F8F5EF',
            border: '1px dashed #D6CEC1',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            textAlign: 'center',
            maxWidth: '840px',
            margin: '0 auto'
          }}
        >
          <h4
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#252525',
              marginBottom: '0.5rem'
            }}
          >
            Our Guarantee of Honest Representation
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            We only present verified information sourced from our official Udyam Registration Certificate
            (UDYAM-MH-29-0007965). We do not claim fabricated ratings, unverifiable warranties, or artificial stock numbers.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenCertificate} className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>
              Inspect Official Registration
            </button>
            <button
              onClick={() => onOpenEnquiry('Direct Owner Query')}
              className="btn btn-primary"
              style={{ fontSize: '0.875rem' }}
            >
              Contact Enterprise Directly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { businessInfo } from '../data/businessData';
import { ShieldCheck, FileCheck, ExternalLink, Download, CheckCircle, AlertTriangle, Building, MapPin } from 'lucide-react';

export default function BusinessCredentials({ onOpenCertificate }) {
  return (
    <section id="credentials" className="section-padding" style={{ backgroundColor: '#252525', color: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.95rem',
              backgroundColor: 'rgba(201, 168, 106, 0.15)',
              border: '1px solid rgba(201, 168, 106, 0.4)',
              color: '#E5C788',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderRadius: '9999px',
              marginBottom: '0.85rem'
            }}
          >
            <ShieldCheck size={14} />
            <span>Government MSME Verification</span>
          </div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            Business Credentials &amp; Registration
          </h2>
          <p className="section-subtitle" style={{ color: '#C8C2B5' }}>
            Star Home Appliances operates under legitimate regulatory recognition in the state of Maharashtra,
            certified by the Ministry of Micro, Small &amp; Medium Enterprises.
          </p>
        </div>

        {/* Credentials Display Card */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            backgroundColor: '#1E1E1E',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(201, 168, 106, 0.35)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
            overflow: 'hidden'
          }}
        >
          {/* Certificate Header Banner */}
          <div
            style={{
              backgroundColor: '#171717',
              padding: '1.75rem 2rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(201, 168, 106, 0.15)',
                  border: '1px solid rgba(201, 168, 106, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E5C788'
                }}
              >
                <FileCheck size={26} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: '#E5C788',
                    letterSpacing: '0.08em',
                    fontWeight: 700
                  }}
                >
                  Udyam Registration Certificate
                </span>
                <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', margin: 0 }}>
                  UDYAM-MH-29-0007965
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenCertificate}
                className="btn btn-accent"
                style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}
              >
                <ExternalLink size={15} />
                <span>View Full Certificate</span>
              </button>
            </div>
          </div>

          {/* Details Grid */}
          <div style={{ padding: '2.25rem 2rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.75rem',
                marginBottom: '2rem'
              }}
            >
              {/* Item 1 */}
              <div style={{ padding: '1rem', backgroundColor: '#262626', borderRadius: '10px' }}>
                <div style={{ color: '#9E978C', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                  Registered Enterprise Name
                </div>
                <div style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginTop: '0.25rem' }}>
                  {businessInfo.registeredEnterpriseName}
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ padding: '1rem', backgroundColor: '#262626', borderRadius: '10px' }}>
                <div style={{ color: '#9E978C', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                  Trading / Brand Name
                </div>
                <div style={{ color: '#E5C788', fontSize: '1.05rem', fontWeight: 700, marginTop: '0.25rem' }}>
                  {businessInfo.businessName}
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ padding: '1rem', backgroundColor: '#262626', borderRadius: '10px' }}>
                <div style={{ color: '#9E978C', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                  Enterprise Classification
                </div>
                <div style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginTop: '0.25rem' }}>
                  {businessInfo.enterpriseType}
                </div>
              </div>

              {/* Item 4 */}
              <div style={{ padding: '1rem', backgroundColor: '#262626', borderRadius: '10px' }}>
                <div style={{ color: '#9E978C', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                  Major Activity
                </div>
                <div style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginTop: '0.25rem' }}>
                  {businessInfo.majorActivity}
                </div>
              </div>

              {/* Item 5 */}
              <div style={{ padding: '1rem', backgroundColor: '#262626', borderRadius: '10px' }}>
                <div style={{ color: '#9E978C', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                  Registration Record Date
                </div>
                <div style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginTop: '0.25rem' }}>
                  {businessInfo.registrationDate}
                </div>
              </div>

              {/* Item 6 */}
              <div style={{ padding: '1rem', backgroundColor: '#262626', borderRadius: '10px' }}>
                <div style={{ color: '#9E978C', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                  Registered Location
                </div>
                <div style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, marginTop: '0.25rem' }}>
                  Sangli, Maharashtra – 416416
                </div>
              </div>
            </div>

            {/* Additional Registered Scope */}
            <div
              style={{
                backgroundColor: 'rgba(201, 168, 106, 0.08)',
                border: '1px solid rgba(201, 168, 106, 0.25)',
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.75rem'
              }}
            >
              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#E5C788', marginBottom: '0.5rem' }}>
                Additional Registered Business Activities:
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#D8D3C8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {businessInfo.additionalActivities.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>

            {/* Official Disclaimer (strictly complying with user prompt) */}
            <div
              style={{
                fontSize: '0.8rem',
                color: '#8E877B',
                lineHeight: 1.55,
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem'
              }}
            >
              <AlertTriangle size={16} style={{ color: '#C9A86A', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Legal &amp; Privacy Notice:</strong> This presentation displays verified public registration
                data for customer reassurance. Sensitive personal or financial information (PAN, bank credentials, etc.)
                is strictly protected and never published. This commercial business website is owned by M/S Anand Raychand
                Bhurat HUF and is not an official government portal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef } from 'react';
import { businessInfo } from '../data/businessData';
import { X, ShieldCheck, Printer, CheckCircle, Download, ExternalLink, QrCode } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{ padding: '1rem', zIndex: 2000 }}
    >
      <div
        ref={modalRef}
        className="modal-content"
        style={{
          maxWidth: '820px',
          borderRadius: '16px',
          border: '2px solid #C9A86A',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden'
        }}
      >
        {/* Certificate Modal Action Bar */}
        <div
          style={{
            backgroundColor: '#252525',
            color: '#FFFFFF',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(201, 168, 106, 0.4)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShieldCheck size={22} style={{ color: '#E5C788' }} />
            <div>
              <h3 style={{ fontSize: '1.05rem', color: '#FFFFFF', margin: 0 }}>
                Official Udyam Registration Record
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#B8B0A2' }}>
                Ministry of Micro, Small &amp; Medium Enterprises, Govt. of India
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                borderRadius: '6px',
                padding: '0.45rem 0.85rem',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <Printer size={15} />
              <span>Print Record</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close Certificate modal"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                padding: '0.35rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px'
              }}
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Certificate Body (Document Design) */}
        <div style={{ padding: '2rem', backgroundColor: '#FAF9F6' }}>
          <div
            style={{
              border: '2px solid #8C6A2E',
              padding: '2rem',
              backgroundColor: '#FFFFFF',
              position: 'relative',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}
          >
            {/* National Insignia Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #D6CEC1', paddingBottom: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-block',
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: '#F3EFE6',
                  border: '1.5px solid #8C6A2E',
                  color: '#8C6A2E',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  lineHeight: '52px',
                  textAlign: 'center',
                  marginBottom: '0.5rem'
                }}
              >
                MSME
              </div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#1A1A1A',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  margin: '0 0 0.25rem 0'
                }}
              >
                Government of India
              </h2>
              <div style={{ fontSize: '0.9rem', color: '#555', fontWeight: 600 }}>
                Ministry of Micro, Small and Medium Enterprises
              </div>
              <h1
                style={{
                  fontSize: '1.35rem',
                  color: '#8C6A2E',
                  fontWeight: 800,
                  marginTop: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}
              >
                Udyam Registration Certificate
              </h1>
            </div>

            {/* Registration Highlight Strip */}
            <div
              style={{
                backgroundColor: '#FDFCF9',
                border: '1px solid #E5DFD3',
                padding: '1rem 1.25rem',
                marginBottom: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: '#777', textTransform: 'uppercase', fontWeight: 700 }}>
                  Udyam Registration Number
                </div>
                <div
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#8C6A2E',
                    fontFamily: 'monospace',
                    letterSpacing: '0.05em'
                  }}
                >
                  {businessInfo.udyamRegistrationNumber}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: '#777', textTransform: 'uppercase', fontWeight: 700 }}>
                  Enterprise Type
                </div>
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#15803D',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <CheckCircle size={18} />
                  <span>Micro Enterprise</span>
                </div>
              </div>
            </div>

            {/* Official Table Details */}
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.875rem',
                marginBottom: '1.75rem'
              }}
            >
              <tbody>
                <tr style={{ borderBottom: '1px solid #EBE5DB' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, width: '38%', color: '#333' }}>
                    Name of Enterprise
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem', color: '#111', fontWeight: 600 }}>
                    {businessInfo.registeredEnterpriseName}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EBE5DB' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: '#333' }}>
                    Trading / Brand Name
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem', color: '#8C6A2E', fontWeight: 700 }}>
                    {businessInfo.businessName}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EBE5DB' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: '#333' }}>
                    Major Activity
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem', color: '#111' }}>
                    <strong>Manufacturing</strong>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EBE5DB' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: '#333' }}>
                    Additional Activities
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem', color: '#111' }}>
                    {businessInfo.additionalActivities.join(', ')}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EBE5DB' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: '#333' }}>
                    Official Physical Address
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem', color: '#111' }}>
                    {businessInfo.address.formatted}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EBE5DB' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: '#333' }}>
                    Date of Udyam Registration
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem', color: '#111', fontWeight: 600 }}>
                    {businessInfo.registrationDate}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: '#333' }}>
                    NIC Activity Codes
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem', color: '#555', fontSize: '0.825rem' }}>
                    <div>• 27 - Manufacture of electrical equipment</div>
                    <div>• 275 - Manufacture of domestic appliances</div>
                    <div>• 9522 - Repair of household appliances &amp; equipment</div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Footer QR / Sign Stamp Placeholder */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                paddingTop: '1rem',
                borderTop: '1px dashed #D6CEC1'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    border: '1px solid #DDD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FAF8F5'
                  }}
                >
                  <QrCode size={44} style={{ color: '#252525' }} />
                </div>
                <div style={{ fontSize: '0.725rem', color: '#777', lineHeight: 1.4 }}>
                  <div>Official MSME Verification Record</div>
                  <div>UDYAM-MH-29-0007965</div>
                  <div>Sangli, Maharashtra</div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#111' }}>
                  For Star Home Appliances
                </div>
                <div style={{ fontSize: '0.725rem', color: '#777', marginTop: '0.2rem' }}>
                  M/S ANAND RAYCHAND BHURAT HUF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

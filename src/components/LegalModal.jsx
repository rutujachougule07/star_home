import React, { useEffect } from 'react';
import { businessInfo } from '../data/businessData';
import { X, Shield, FileText } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type = 'privacy' }) {
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

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{ padding: '1.25rem', zIndex: 2000 }}
    >
      <div
        className="modal-content"
        style={{
          maxWidth: '650px',
          borderRadius: '16px',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
          border: '1px solid var(--color-border)'
        }}
      >
        <div
          style={{
            backgroundColor: '#252525',
            color: '#FFFFFF',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {type === 'privacy' ? <Shield size={20} style={{ color: '#E5C788' }} /> : <FileText size={20} style={{ color: '#E5C788' }} />}
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', margin: 0 }}>
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '2rem', maxHeight: '70vh', overflowY: 'auto', fontSize: '0.9rem', lineHeight: 1.7, color: '#454545' }}>
          {type === 'privacy' ? (
            <div>
              <p>
                <strong>STAR HOME APPLIANCES</strong> (operated by <strong>{businessInfo.registeredEnterpriseName}</strong>)
                is committed to safeguarding customer privacy. This Privacy Policy clarifies how customer enquiry information
                is handled.
              </p>

              <h4 style={{ color: '#252525', marginTop: '1.25rem', marginBottom: '0.35rem' }}>
                1. Data Collection &amp; Use
              </h4>
              <p>
                When you submit an enquiry through our website or reach out via phone/WhatsApp, we only collect basic
                contact information (such as your full name, mobile number, email address, and service/product requirements).
                This information is used strictly to communicate with you and provide relevant quotes or repair services.
              </p>

              <h4 style={{ color: '#252525', marginTop: '1.25rem', marginBottom: '0.35rem' }}>
                2. No Sensitive Data Collection
              </h4>
              <p>
                We do not solicit, process, or store sensitive financial data, banking information, or credit card
                details on this public website.
              </p>

              <h4 style={{ color: '#252525', marginTop: '1.25rem', marginBottom: '0.35rem' }}>
                3. Third-Party Sharing
              </h4>
              <p>
                We do not sell, rent, or trade your contact information to any third-party marketing companies.
              </p>

              <h4 style={{ color: '#252525', marginTop: '1.25rem', marginBottom: '0.35rem' }}>
                4. Contact Information
              </h4>
              <p>
                For questions regarding your data, contact M/S ANAND RAYCHAND BHURAT HUF directly at{' '}
                <strong>{businessInfo.contact.email}</strong> or call <strong>{businessInfo.contact.phone}</strong>.
              </p>
            </div>
          ) : (
            <div>
              <p>
                Welcome to the business landing page of <strong>STAR HOME APPLIANCES</strong>. By accessing this website,
                you agree to the following business terms.
              </p>

              <h4 style={{ color: '#252525', marginTop: '1.25rem', marginBottom: '0.35rem' }}>
                1. Business Nature &amp; Scope
              </h4>
              <p>
                STAR HOME APPLIANCES is operated by {businessInfo.registeredEnterpriseName}, a Micro Enterprise registered
                under Udyam Registration (UDYAM-MH-29-0007965) for manufacturing of domestic appliances, electrical equipment,
                and household appliance servicing in Sangli, Maharashtra.
              </p>

              <h4 style={{ color: '#252525', marginTop: '1.25rem', marginBottom: '0.35rem' }}>
                2. Quotations &amp; Custom Orders
              </h4>
              <p>
                Product specifications, pricing, timelines, and warranty terms are determined on a case-by-case basis
                via direct written quotes or repair receipts issued by the proprietor. Categories listed on this site
                reflect registered business capabilities and are subject to availability.
              </p>

              <h4 style={{ color: '#252525', marginTop: '1.25rem', marginBottom: '0.35rem' }}>
                3. Verification &amp; Accuracy
              </h4>
              <p>
                We strive for absolute accuracy in all business disclosures. Registration details are verifiable through
                the official Udyam portal of the Ministry of MSME, Government of India.
              </p>
            </div>
          )}
        </div>

        <div style={{ padding: '1rem 1.5rem', backgroundColor: '#F8F5EF', borderTop: '1px solid #EBE4D6', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Understood &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}

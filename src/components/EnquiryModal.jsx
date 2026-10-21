import React, { useState, useEffect } from 'react';
import { businessInfo } from '../data/businessData';
import { X, Send, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, initialItem = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    item: initialItem || 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialItem) {
      setFormData((prev) => ({ ...prev, item: initialItem }));
    }
  }, [initialItem]);

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

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile) errs.mobile = 'Mobile Number is required';
    else if (cleanMobile.length < 10) errs.mobile = 'Enter a valid 10-digit number';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email';
    if (!formData.message.trim()) errs.message = 'Please include details for your enquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      style={{ padding: '1rem', zIndex: 2000 }}
    >
      <div
        className="modal-content"
        style={{
          maxWidth: '560px',
          borderRadius: '16px',
          border: '1px solid var(--color-border)',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} style={{ color: '#E5C788' }} />
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', margin: 0 }}>
              Business &amp; Service Enquiry
            </h3>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close modal"
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-success-bg)',
                  color: 'var(--color-success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#252525', marginBottom: '0.4rem' }}>
                Enquiry Received!
              </h4>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Thank you for your enquiry regarding <strong>{formData.item}</strong>. We will get back to you
                promptly at <strong>{formData.mobile}</strong>.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <a
                  href={`https://wa.me/919823241411?text=Hello%20Star%20Home%20Appliances%2C%20I%20enquired%20about%20${encodeURIComponent(
                    formData.item
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <button onClick={handleClose} className="btn btn-secondary">
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div
                style={{
                  backgroundColor: '#FAF8F5',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  border: '1px solid #EBE4D6',
                  fontSize: '0.85rem',
                  color: '#666',
                  marginBottom: '1.25rem'
                }}
              >
                Enquiring About: <strong style={{ color: '#B87333' }}>{formData.item}</strong>
              </div>

              {/* Name */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#333', marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.fullName ? '1.5px solid #DC2626' : '1px solid var(--color-border)',
                    fontSize: '0.9rem',
                    backgroundColor: '#FAF8F5'
                  }}
                />
                {errors.fullName && (
                  <div style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.fullName}</div>
                )}
              </div>

              {/* Mobile */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#333', marginBottom: '0.3rem' }}>
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.mobile ? '1.5px solid #DC2626' : '1px solid var(--color-border)',
                    fontSize: '0.9rem',
                    backgroundColor: '#FAF8F5'
                  }}
                />
                {errors.mobile && (
                  <div style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.mobile}</div>
                )}
              </div>

              {/* Email */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#333', marginBottom: '0.3rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.email ? '1.5px solid #DC2626' : '1px solid var(--color-border)',
                    fontSize: '0.9rem',
                    backgroundColor: '#FAF8F5'
                  }}
                />
                {errors.email && (
                  <div style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.email}</div>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#333', marginBottom: '0.3rem' }}>
                  Requirement Description *
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide appliance model, manufacturing batch size, or servicing request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem',
                    borderRadius: '8px',
                    border: errors.message ? '1.5px solid #DC2626' : '1px solid var(--color-border)',
                    fontSize: '0.9rem',
                    backgroundColor: '#FAF8F5',
                    resize: 'vertical'
                  }}
                />
                {errors.message && (
                  <div style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.message}</div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Enquiry to Proprietor</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

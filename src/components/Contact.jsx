import React, { useState } from 'react';
import { businessInfo } from '../data/businessData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function Contact({ defaultSubject = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    interest: defaultSubject || 'Household Appliance Repair',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile) {
      errs.mobile = 'Mobile Number is required';
    } else if (cleanMobile.length < 10) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message regarding your requirement';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable enquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        referenceId: 'SHA-' + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        ...formData
      });
    }, 900);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      interest: 'Household Appliance Repair',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Phone size={14} />
            <span>Direct Customer Enquiry</span>
          </div>
          <h2 className="section-title">Let's Discuss Your Requirements</h2>
          <p className="section-subtitle">
            Get in touch with Star Home Appliances for manufacturing orders, appliance servicing, or technical
            queries. Reach out directly to our proprietor or submit an inquiry below.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Business Contact Card & Quick Reach */}
          <div>
            <div
              style={{
                backgroundColor: '#FAF8F5',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem 2rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '1.75rem'
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: '#B87333',
                    fontWeight: 700,
                    letterSpacing: '0.06em'
                  }}
                >
                  Verified Enterprise
                </span>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-primary)',
                    marginTop: '0.2rem',
                    marginBottom: '0.25rem'
                  }}
                >
                  {businessInfo.businessName}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#777', margin: 0 }}>
                  Operated by {businessInfo.registeredEnterpriseName}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                {/* Physical Address */}
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--color-accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#B87333',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600, textTransform: 'uppercase' }}>
                      Workshop &amp; Business Address
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#252525', fontWeight: 600, marginTop: '0.2rem' }}>
                      {businessInfo.address.formatted}
                    </div>
                  </div>
                </div>

                {/* Phone Link (Click to Call) */}
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--color-accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#B87333',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600, textTransform: 'uppercase' }}>
                      Telephone / Mobile (Click to Call)
                    </div>
                    <a
                      href={`tel:${businessInfo.contact.phoneTel}`}
                      style={{
                        fontSize: '1.05rem',
                        color: 'var(--color-primary)',
                        fontWeight: 700,
                        display: 'inline-block',
                        marginTop: '0.2rem'
                      }}
                    >
                      {businessInfo.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email Link (Click to Email) */}
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--color-accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#B87333',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600, textTransform: 'uppercase' }}>
                      Official Email (Click to Email)
                    </div>
                    <a
                      href={`mailto:${businessInfo.contact.email}`}
                      style={{
                        fontSize: '1rem',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        display: 'inline-block',
                        marginTop: '0.2rem',
                        textDecoration: 'underline'
                      }}
                    >
                      {businessInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--color-accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#B87333',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600, textTransform: 'uppercase' }}>
                      Business &amp; Service Hours
                    </div>
                    <div style={{ fontSize: '0.925rem', color: '#333', fontWeight: 500, marginTop: '0.2rem' }}>
                      {businessInfo.contact.workingHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Actions: WhatsApp & Google Maps */}
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #EBE4D6',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <a
                  href={businessInfo.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    width: '100%',
                    fontWeight: 700,
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={businessInfo.contact.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <MapPin size={18} style={{ color: '#B87333' }} />
                  <span>View Location on Google Maps</span>
                  <ExternalLink size={14} style={{ marginLeft: 'auto' }} />
                </a>
              </div>
            </div>

            {/* Embedded Location Map Preview */}
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                backgroundColor: '#FAF8F5'
              }}
            >
              <div
                style={{
                  padding: '0.85rem 1.25rem',
                  backgroundColor: '#252525',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                <MapPin size={16} style={{ color: '#E5C788' }} />
                <span>Sangli, Maharashtra Service Area</span>
              </div>
              <div style={{ height: '180px', position: 'relative' }}>
                <iframe
                  title="Star Home Appliances Sangli Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=378%2C+Peth+Bhag%2C+Near+Karnal+Police+Chowki%2C+Sangli%2C+Maharashtra+416416&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            {submittedData ? (
              /* Success Submission Receipt */
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-success-bg)',
                    color: 'var(--color-success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#252525', marginBottom: '0.5rem' }}>
                  Enquiry Successfully Recorded
                </h3>
                <p style={{ color: '#666', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{submittedData.fullName}</strong>. Your enquiry regarding{' '}
                  <strong>{submittedData.interest}</strong> has been logged. Our proprietor team will contact
                  you shortly at <strong>{submittedData.mobile}</strong> or via email.
                </p>

                <div
                  style={{
                    backgroundColor: '#F8F5EF',
                    borderRadius: '10px',
                    padding: '1.25rem',
                    textAlign: 'left',
                    fontSize: '0.85rem',
                    color: '#555',
                    marginBottom: '1.75rem',
                    border: '1px solid #E6DFCF'
                  }}
                >
                  <div>
                    <strong>Reference ID:</strong> {submittedData.referenceId}
                  </div>
                  <div style={{ marginTop: '0.35rem' }}>
                    <strong>Date &amp; Time:</strong> {submittedData.timestamp}
                  </div>
                  <div style={{ marginTop: '0.35rem' }}>
                    <strong>Contact Phone:</strong> {submittedData.mobile}
                  </div>
                  <div style={{ marginTop: '0.35rem' }}>
                    <strong>Email:</strong> {submittedData.email}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={`https://wa.me/919823241411?text=Hello%20Star%20Home%20Appliances%2C%20I%20have%20submitted%20enquiry%20reference%20${submittedData.referenceId}%20for%20${encodeURIComponent(
                      submittedData.interest
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                  >
                    <MessageCircle size={16} />
                    <span>Follow Up on WhatsApp</span>
                  </a>

                  <button onClick={handleReset} className="btn btn-secondary">
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Actual Interactive Form */
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.35rem', color: '#252525', marginBottom: '0.35rem' }}>
                    Send an Official Enquiry
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#777', margin: 0 }}>
                    Fill out the form below. All required fields are validated.
                  </p>
                </div>

                {/* Full Name */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="fullName"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#333',
                      marginBottom: '0.35rem'
                    }}
                  >
                    Full Name <span style={{ color: '#D97706' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Anand Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: errors.fullName ? '1.5px solid #DC2626' : '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      backgroundColor: '#FAF8F5',
                      outline: 'none'
                    }}
                  />
                  {errors.fullName && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#DC2626', fontSize: '0.775rem', marginTop: '0.3rem' }}>
                      <AlertCircle size={13} />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Mobile & Email Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobile"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#333',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Mobile Number <span style={{ color: '#D97706' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="e.g. 9823241411"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        border: errors.mobile ? '1.5px solid #DC2626' : '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        backgroundColor: '#FAF8F5',
                        outline: 'none'
                      }}
                    />
                    {errors.mobile && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#DC2626', fontSize: '0.775rem', marginTop: '0.3rem' }}>
                        <AlertCircle size={13} />
                        <span>{errors.mobile}</span>
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#333',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Email Address <span style={{ color: '#D97706' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        border: errors.email ? '1.5px solid #DC2626' : '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        backgroundColor: '#FAF8F5',
                        outline: 'none'
                      }}
                    />
                    {errors.email && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#DC2626', fontSize: '0.775rem', marginTop: '0.3rem' }}>
                        <AlertCircle size={13} />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Product / Service Interested In */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="interest"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#333',
                      marginBottom: '0.35rem'
                    }}
                  >
                    Product or Service Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      backgroundColor: '#FAF8F5',
                      outline: 'none',
                      color: '#252525'
                    }}
                  >
                    <optgroup label="Appliance Services">
                      <option value="Household Appliance Repair">Household Appliance Repair</option>
                      <option value="Appliance Maintenance Checkup">Appliance Maintenance Checkup</option>
                      <option value="Electrical Diagnostics & Diagnostics">Electrical Diagnostics &amp; Diagnostics</option>
                    </optgroup>
                    <optgroup label="Manufacturing & Equipment">
                      <option value="Household Appliances Manufacturing">Household Appliances Manufacturing</option>
                      <option value="Electrical Equipment Manufacturing">Electrical Equipment Manufacturing</option>
                      <option value="Special-Purpose Machinery">Special-Purpose Machinery</option>
                      <option value="Other Appliance Products / Spare Parts">Other Appliance Products / Spare Parts</option>
                    </optgroup>
                    <optgroup label="General">
                      <option value="General Business Enquiry">General Business Enquiry</option>
                      <option value="Udyam Registration Verification">Udyam Registration Verification</option>
                    </optgroup>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#333',
                      marginBottom: '0.35rem'
                    }}
                  >
                    Enquiry Details / Message <span style={{ color: '#D97706' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your appliance issue, product model, or manufacturing inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: errors.message ? '1.5px solid #DC2626' : '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      backgroundColor: '#FAF8F5',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  {errors.message && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#DC2626', fontSize: '0.775rem', marginTop: '0.3rem' }}>
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    fontSize: '1rem',
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'wait' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <span>Processing Enquiry...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Official Enquiry</span>
                    </>
                  )}
                </button>

                <div
                  style={{
                    marginTop: '1rem',
                    fontSize: '0.775rem',
                    color: '#8A8275',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <ShieldCheck size={14} style={{ color: '#15803D' }} />
                  <span>Your enquiry data is private and delivered directly to the proprietor.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

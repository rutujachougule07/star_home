import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BusinessCredentials from './components/BusinessCredentials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateModal from './components/CertificateModal';
import EnquiryModal from './components/EnquiryModal';
import LegalModal from './components/LegalModal';
import { businessInfo } from './data/businessData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [enquiryModalItem, setEnquiryModalItem] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (itemName = 'General Enquiry') => {
    setEnquiryModalItem(itemName);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalItem(null);
  };

  const handleOpenCertificate = () => {
    setIsCertificateOpen(true);
  };

  const handleCloseCertificate = () => {
    setIsCertificateOpen(false);
  };

  const handleOpenLegal = (type) => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
  };

  return (
    <div className="star-home-appliances-app">
      {/* Navigation Bar */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenCertificate={handleOpenCertificate}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenEnquiry={handleOpenEnquiry}
          onOpenCertificate={handleOpenCertificate}
        />

        <AboutUs
          onOpenCertificate={handleOpenCertificate}
          onOpenEnquiry={handleOpenEnquiry}
        />

        <Products
          onOpenEnquiry={handleOpenEnquiry}
        />

        <Services
          onOpenEnquiry={handleOpenEnquiry}
        />

        <WhyChooseUs
          onOpenCertificate={handleOpenCertificate}
          onOpenEnquiry={handleOpenEnquiry}
        />

        <BusinessCredentials
          onOpenCertificate={handleOpenCertificate}
        />

        <Gallery />

        <Contact defaultSubject={enquiryModalItem || ''} />
      </main>

      {/* Footer */}
      <Footer
        onOpenCertificate={handleOpenCertificate}
        onOpenLegal={handleOpenLegal}
      />

      {/* Floating Quick Action Buttons */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 800
        }}
      >
        {/* WhatsApp Float */}
        <a
          href={businessInfo.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Enquiry"
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 18px rgba(37, 211, 102, 0.4)',
            transition: 'transform 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <MessageCircle size={28} />
        </a>

        {/* Scroll To Top Float */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#252525',
              color: '#FFFFFF',
              border: '1px solid rgba(201, 168, 106, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              margin: '0 auto'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>

      {/* Interactive Modals */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={handleCloseCertificate}
      />

      <EnquiryModal
        isOpen={!!enquiryModalItem}
        onClose={handleCloseEnquiry}
        initialItem={enquiryModalItem || ''}
      />

      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType || 'privacy'}
        onClose={handleCloseLegal}
      />
    </div>
  );
}

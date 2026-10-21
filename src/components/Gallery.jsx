import React, { useState } from 'react';
import { galleryItems } from '../data/businessData';
import { Image, Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'servicing', label: 'Appliance Servicing' },
    { id: 'facility', label: 'Facility & Showroom' }
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: '#F8F5EF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Image size={14} />
            <span>Visual Tour</span>
          </div>
          <h2 className="section-title">Facility &amp; Work Gallery</h2>
          <p className="section-subtitle">
            A glimpse into our electrical workshop, precision diagnostics, appliance assemblies, and customer
            consultation space in Sangli, Maharashtra.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '2.5rem'
          }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeFilter === f.id ? 'var(--color-accent)' : 'var(--color-border)',
                backgroundColor: activeFilter === f.id ? 'var(--color-primary)' : '#FFFFFF',
                color: activeFilter === f.id ? '#E5C788' : 'var(--color-text)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeFilter === f.id ? '0 4px 12px rgba(0,0,0,0.1)' : 'var(--shadow-sm)'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="hover-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 37, 37, 0.75)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  <Maximize2 size={16} />
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    color: '#8C6A2E',
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.categoryLabel}
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#252525', marginBottom: '0.35rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Owner Quick Note */}
        <div
          style={{
            fontSize: '0.8rem',
            textAlign: 'center',
            color: '#7E776C',
            fontStyle: 'italic'
          }}
        >
          * Facility &amp; workshop imagery is representative of manufacturing and servicing activities.
          Genuine local facility photographs are regularly updated by the proprietor.
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="modal-overlay"
          onClick={closeLightbox}
          style={{ padding: '1rem', backgroundColor: 'rgba(10, 10, 10, 0.92)' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '900px',
              width: '100%',
              backgroundColor: '#1E1E1E',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              border: '1px solid rgba(201, 168, 106, 0.3)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: '#FFFFFF',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20
              }}
            >
              <X size={20} />
            </button>

            {/* Nav Arrows */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={prevLightbox}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '16px',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: '#FFFFFF',
                    border: 'none',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 20
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextLightbox}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '16px',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: '#FFFFFF',
                    border: 'none',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 20
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Lightbox Image */}
            <div style={{ maxHeight: '68vh', overflow: 'hidden', backgroundColor: '#000000', display: 'flex', justifyContent: 'center' }}>
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                style={{
                  maxHeight: '68vh',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Caption */}
            <div style={{ padding: '1.5rem', backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF' }}>
                  {filteredItems[lightboxIndex].title}
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#E5C788', fontWeight: 600 }}>
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#C8C2B5', margin: 0 }}>
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

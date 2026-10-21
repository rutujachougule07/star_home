import React from 'react';
import { productCategories } from '../data/businessData';
import { Check, MessageSquare, Info, Sparkles } from 'lucide-react';

export default function Products({ onOpenEnquiry }) {
  return (
    <section id="products" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Manufacturing &amp; Equipment Scope</span>
          </div>
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-subtitle">
            Explore our core product and manufacturing domains, structured in alignment with our registered
            business activities under Electrical Equipment &amp; Household Appliances.
          </p>
        </div>

        {/* Informative Owner / Customer Notice */}
        <div
          style={{
            backgroundColor: '#F8F5EF',
            border: '1px solid #E5DEC9',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.5rem',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem'
          }}
        >
          <Info size={20} style={{ color: '#B87333', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.875rem', color: '#555', margin: 0, lineHeight: 1.5 }}>
            <strong>Transparency Notice:</strong> Categories displayed reflect registered business manufacturing
            activities under Udyam certificate UDYAM-MH-29-0007965. Specific models, batch specifications,
            and dimensions are confirmed directly with clients upon inquiry to ensure precise engineering requirements.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {productCategories.map((product) => (
            <div
              key={product.id}
              className="hover-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Image Container with Badge */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(37, 37, 37, 0.88)',
                    color: '#E5C788',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(229, 199, 136, 0.3)'
                  }}
                >
                  {product.status}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#B87333',
                      letterSpacing: '0.04em',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {product.subtitle}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {product.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Feature Bullets */}
                  <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {product.features.map((feat, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: '#4A4A4A'
                        }}
                      >
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#F3EFE6',
                            color: '#936F2C',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Owner Editable Guidance Note */}
                  <div
                    style={{
                      fontSize: '0.775rem',
                      color: '#767676',
                      backgroundColor: '#FAF8F5',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '6px',
                      borderLeft: '3px solid var(--color-accent)',
                      marginBottom: '1.5rem',
                      fontStyle: 'italic'
                    }}
                  >
                    {product.ownerNote}
                  </div>
                </div>

                {/* Enquire Button */}
                <button
                  onClick={() => onOpenEnquiry(`Product Category: ${product.title}`)}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontWeight: 600,
                    borderColor: 'var(--color-border)'
                  }}
                >
                  <MessageSquare size={16} style={{ color: '#B87333' }} />
                  <span>Enquire About Product</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

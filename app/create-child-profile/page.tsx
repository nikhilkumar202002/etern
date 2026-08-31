import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <section
      style={{
        minHeight: '100svh',
        height: '100svh',
        backgroundColor: '#41B6F2',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <header classNameName="create-profile-header app-container">
        <Image
          src="/etern-white-logo.png"
          alt="Etern Learning"
          width={160}
          height={54}
          priority
          classNameName="create-profile-logo"
        />
      </header>

      <div>
        <div classNameName="app-container">
          <div classNameName="create-profile-copy">
            <h1 classNameName="create-profile-title" style={{ color: '#fff' }}>
              Create Child&apos;s Profile
            </h1>
            <p classNameName="create-profile-subtitle">
              Let&apos;s personalise their learning journey!
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
             <Image
          src="/characters/tiger.png"
          alt=""
          width={737}
          height={1017}
          aria-hidden="true"
          quality={100}
          style={{
            width: '300px',
            height: 'auto',
            display: 'block',
            position: 'absolute',
            zIndex: 0,
            top: 250,
            left: 100
          }}
        />
        </div>
      </div>

      <div style={{ marginTop: 'auto', width: '100%', position: 'relative' }}>
        
        <Image
          src="/patterns/create-profile-wave.png"
          alt=""
          width={2160}
          height={0}
          aria-hidden="true"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            position: 'absolute',
            zIndex: 3,
            bottom: -320,
          }}
        />

        <Image
          src="/patterns/footer-pattern.png"
          alt=""
          width={2160}
          height={747}
          aria-hidden="true"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            position: 'absolute',
            zIndex: 10,
            bottom: -170,
          }}
        />
      </div>

      <div className="form-box">
        <div className="form-container">
            <div className="form-container">
    <div className="badge-container">
        <svg className="splash" viewBox="0 0 24 24">
            <path d="M 18 6 Q 14 8 12 12 M 22 12 L 14 12 M 18 18 Q 14 16 12 12" />
        </svg>
        
        <div className="badge">Fill Your Child's Information</div>
        
        <svg className="splash" viewBox="0 0 24 24" style="transform: scaleX(-1);">
            <path d="M 18 6 Q 14 8 12 12 M 22 12 L 14 12 M 18 18 Q 14 16 12 12" />
        </svg>
    </div>

    <div className="form-fields">
        
        <label className="field-group">
            <div className="icon-box bg-blue">
                <svg viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            </div>
            <div className="input-content">
                <label>Child's name</label>
                <input type="text" placeholder="Enter child's name">
            </div>
        </label>

        <label className="field-group">
            <div className="icon-box bg-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FDF3E6" stroke="none"/>
                    <path d="M9.5 9.5C9.5 8.5 10.5 7.5 12 7.5C13.5 7.5 14.5 8.5 14.5 9.5C14.5 11 12 13 12 13" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="16" r="1" fill="#F59E0B" stroke="none"/>
                </svg>
            </div>
            <div className="input-content">
                <label>Date of Birth</label>
                <input type="text" placeholder="Select date of birth">
            </div>
            <div className="action-icon">
                <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            </div>
        </label>

        <label className="field-group">
            <div className="icon-box bg-green">
                <svg viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM12 21c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-3H7V4h10v14z"/>
                </svg>
            </div>
            <div className="input-content">
                <label>Mobile number</label>
                <input type="tel" placeholder="Enter mobile number">
            </div>
        </label>

        <label className="field-group">
            <div className="icon-box bg-purple">
                <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            </div>
            <div className="input-content">
                <label>Email address</label>
                <input type="email" placeholder="Enter email address">
            </div>
        </label>

    </div>

    <div className="security-banner">
        <div className="lock-container">
            <svg viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
        </div>
        <p>We keep your child's information safe, ensuring privacy and protection.</p>
    </div>

</div>
        </div>
      </div>
    </section>
  )
}

export default Page

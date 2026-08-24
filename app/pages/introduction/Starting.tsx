import Image from 'next/image'
import '../Styles.css'

const Starting = () => {
  return (
    <section className="starting-section">
      <div className="starting-grid">
        <div className="starting-video-pane">
          <video
            className="starting-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/video/intro-video.mp4" type="video/mp4" />
          </video>

          <div className="starting-video-overlay" />
        </div>

        <div className="starting-content-pane app-container">
          <div className="starting-orb starting-orb--left" />
          <div className="starting-orb starting-orb--right" />

          <div className="starting-card">
            <div className="starting-logo-wrap">
              <Image
                src="/etern-logo.png"
                alt="Etern Learning"
                width={320}
                height={96}
                priority
                className="h-auto w-52 sm:w-[120px]"
              />
            </div>

            <h1 className="starting-title text-balance">
              A joyful learning adventure sparks curiosity and discovery.
            </h1>

            <p className="starting-copy">
              Discover playful lessons, calm progress, and a space that feels welcoming from the first tap.
            </p>

            <button
              type="button"
              className="starting-button group"
              aria-label="Continue"
            >
              <Image
                src="/icons/black-white-arrow.png"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="starting-arrow-icon"
              />
            </button>

            <p className="starting-login">
              Already have an account?{' '}
              <span className="starting-login-link">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Starting

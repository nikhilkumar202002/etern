import Image from 'next/image'
import '../pages/Styles.css'

const buddies = [
  {
    name: 'Bunny',
    role: 'Creative Dreamer',
    image: '/characters/bunny.png',
    accent: '#2ea8e6',
    selected: false,
  },
  {
    name: 'Tiggy',
    role: 'Brave Explorer',
    image: '/characters/tiggy.png',
    accent: '#f68b1f',
    selected: true,
  },
  {
    name: 'Pingu',
    role: 'Smart Thinker',
    image: '/characters/pingu.png',
    accent: '#b35df6',
    selected: false,
  },
  {
    name: 'Brighty',
    role: 'Fast Learner',
    image: '/characters/brighty.png',
    accent: '#e85bd9',
    selected: false,
  },
  {
    name: 'Coco',
    role: 'Gentle Helper',
    image: '/characters/coco.png',
    accent: '#53c86f',
    selected: false,
  },
] as const

export default function Page() {
  return (
    <section className="profile-page">
      <div className="profile-star profile-star--one" aria-hidden="true">
        <Image
          src="/icons/star.png"
          alt=""
          width={301}
          height={301}
          aria-hidden="true"
          className="profile-star-image"
        />
      </div>
      <div className="profile-star profile-star--two" aria-hidden="true">
        <Image
          src="/icons/star.png"
          alt=""
          width={301}
          height={301}
          aria-hidden="true"
          className="profile-star-image"
        />
      </div>
      <div className="profile-star profile-star--three" aria-hidden="true">
        <Image
          src="/icons/star.png"
          alt=""
          width={301}
          height={301}
          aria-hidden="true"
          className="profile-star-image"
        />
      </div>
      <div className="profile-pattern-wrap" aria-hidden="true">
        <Image
          src="/patterns/profile-pattern.png"
          alt=""
          width={1000}
          height={0}
          priority
          className="profile-pattern"
        />
      </div>

      <main className="profile-shell">
        <div className="profile-content app-container">
          <header className="profile-header">
            <Image
              src="/etern-logo.png"
              alt="Etern Learning"
              width={180}
              height={60}
              priority
              className="profile-logo"
            />
          </header>

          <section className="profile-hero">
            <div className="profile-copy">
              <div className="profile-kicker-mark" aria-hidden="true">
                <Image
                  src="/icons/star.png"
                  alt=""
                  width={301}
                  height={301}
                  aria-hidden="true"
                  className="profile-kicker-mark-image"
                />
              </div>

              <h1 className="profile-title">
                Create Your <br />
                <span>Learning Buddy</span>
              </h1>
              <p className="profile-description">
                Pick a friendly companion who will stay with you throughout
                your learning journey.
              </p>
            </div>
          </section>

          <section
            className="profile-selector"
            aria-label="Choose your learning buddy"
          >
            <button
              type="button"
              className="profile-nav-button profile-nav-button--left"
              aria-label="Previous buddy"
            >
              <Image
                src="/icons/black-white-arrow.png"
                alt=""
                width={22}
                height={22}
                aria-hidden="true"
                className="profile-nav-icon profile-nav-icon--left"
              />
            </button>

            <div className="profile-card-row">
              {buddies.map((buddy) => (
                <article
                  key={buddy.name}
                  className={`profile-card ${buddy.selected ? 'profile-card--selected' : ''}`}
                >
                  {buddy.selected ? (
                    <span className="profile-card-check" aria-hidden="true">
                      <span />
                    </span>
                  ) : null}

                  <div className="profile-card-art">
                    <Image
                      src={buddy.image}
                      alt={buddy.name}
                      fill
                      sizes="(max-width: 1024px) 180px, 210px"
                      className="profile-card-image"
                    />
                  </div>

                  <div className="profile-card-copy">
                    <h3
                      className="profile-card-name"
                      style={{ color: buddy.accent }}
                    >
                      {buddy.name}
                    </h3>
                    <p className="profile-card-role">{buddy.role}</p>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="profile-nav-button profile-nav-button--right"
              aria-label="Next buddy"
            >
              <Image
                src="/icons/black-white-arrow.png"
                alt=""
                width={22}
                height={22}
                aria-hidden="true"
                className="profile-nav-icon"
              />
            </button>
          </section>

          <div className="profile-cta-wrap">
            <button type="button" className="profile-cta" aria-label="Continue">
              <Image
                src="/icons/black-white-arrow.png"
                alt=""
                width={26}
                height={26}
                aria-hidden="true"
                className="profile-cta-icon"
              />
            </button>
          </div>
        </div>
      </main>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'

const profiles = [
  {
    name: 'Tiggy',
    age: '4 Years Old',
    image: '/characters/tiggy.png',
    accent: 'orange',
    level: 'Level 12',
    score: 82,
  },
  {
    name: 'Bunny',
    age: '3 Years Old',
    image: '/characters/bunny.png',
    accent: 'blue',
    level: 'Level 08',
    score: 62,
  },
] as const

const Page = () => {
  return (
    <section className="create-profile-page">
       <div className="create-profile-decoration create-profile-decoration--book">
                <Image
                  src="/icons/open-book.png"
                  alt=""
                  fill
                  sizes="96px"
                  className="create-profile-decoration-image"
                />
              </div>

              <div className="create-profile-decoration create-profile-decoration--hat">
                <Image
                  src="/icons/hat.png"
                  alt=""
                  fill
                  sizes="96px"
                  className="create-profile-decoration-image"
                />
              </div>

              <div className="create-profile-decoration create-profile-decoration--star-left">
                <Image
                  src="/icons/star.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="create-profile-decoration-image"
                />
              </div>

              <div className="create-profile-decoration create-profile-decoration--star-right">
                <Image
                  src="/icons/star.png"
                  alt=""
                  fill
                  sizes="32px"
                  className="create-profile-decoration-image"
                />
              </div>
      <header className="create-profile-header app-container">
        <Image
          src="/etern-white-logo.png"
          alt="Etern Learning"
          width={160}
          height={54}
          priority
          className="create-profile-logo"
        />
      </header>

      <section className="create-profile-hero">
        <div className="create-profile-hero-inner app-container">
          <div className="create-profile-hero-grid">
            <div className="create-profile-copy">
              <h1 className="create-profile-title">
                Choose your profile
              </h1>
              <p className="create-profile-subtitle">
                Pick a profile to continue your learning adventure!
              </p>
            </div>

            <div className="create-profile-hero-art" aria-hidden="true">
              <div className="create-profile-hero-character">
                <Image
                  src="/characters/tiger.png"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 80vw, 420px"
                  className="create-profile-hero-character-image"
                  priority
                />
              </div>

             
            </div>
          </div>
        </div>

        <div className="create-profile-wave" aria-hidden="true">
          <Image
            src="/patterns/create-profile-wave.png"
            alt=""
            width={2160}
            height={856}
            className="create-profile-wave-image"
            priority
          />
        </div>
      </section>

      <section className="create-profile-content">
        <div className="create-profile-content-inner app-container">
          <div className="create-profile-content-heading">
            <h2>Your Profile</h2>
          </div>

          <div className="create-profile-card-grid">
            {profiles.map((profile) => (
              <article
                key={profile.name}
                className={`create-profile-card create-profile-card--${profile.accent}`}
              >
                <div
                  className={`create-profile-card-avatar create-profile-card-avatar--${profile.accent}`}
                >
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 700px) 110px, 132px"
                    className="create-profile-card-image"
                  />
                </div>

                <div className="create-profile-card-copy">
                  <div className="create-profile-card-title-wrap">
                    <h3 className="create-profile-card-name">{profile.name}</h3>
                    <p className="create-profile-card-age">{profile.age}</p>
                  </div>

                  <div
                    className={`create-profile-card-progress create-profile-card-progress--${profile.accent}`}
                  >
                    <div className="create-profile-card-progress-badge">
                      <Image
                        src="/icons/star.png"
                        alt=""
                        width={24}
                        height={24}
                        aria-hidden="true"
                        className="create-profile-card-progress-icon"
                      />
                      <span className="create-profile-card-progress-label">
                        {profile.level}
                      </span>
                    </div>

                    <div
                      className={`create-profile-card-meter create-profile-card-meter--${profile.accent}`}
                      aria-hidden="true"
                    >
                      <span style={{ width: `${profile.score}%` }} />
                    </div>

                    <strong className="create-profile-card-score">
                      {profile.score}%
                    </strong>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="create-profile-cta">
            <Link
              href="/create-child-profile"
              className="create-profile-cta-button"
              aria-label="Continue"
            >
              <Image
                src="/icons/black-white-arrow.png"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
                className="create-profile-cta-icon"
              />
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Page

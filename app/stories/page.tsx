import './Stories.css'
import Image from 'next/image'
import Link from "next/link";
import { IoIosLock } from 'react-icons/io'

const categories = [
  { label: 'All Stories', icon: '/icons/all-stories.png', active: true },
  { label: 'Animals', icon: '/icons/animals.png' },
  { label: 'Adventure', icon: '/icons/adventure.png' },
  { label: 'Friendship', icon: '/icons/fiendship.png' },
  { label: 'Nature', icon: '/icons/nature.png' },
  { label: 'Learning', icon: '/icons/learing.png' },
  { label: 'Fantasy', icon: '/icons/fantacy.png' },
]

const stories = [
  { image: '/images/jungle-book.jpg', badge: 'Chapter 03', progress: true },
  { image: '/images/jungle-book-2.jpg', stars: 4 },
  { image: '/images/jungle-book-3.jpg', stars: 4 },
  { image: '/images/jungle-book-4.jpg', locked: true },
  { image: '/images/jungle-book-5.jpg', locked: true },
]

const Page = () => {
  return (
    <main className="stories-page">
      <header className="activity-header app-container">
        <Link href="/activity" aria-label="Go to activities">
          <Image
          src="/etern-white-logo.png"
          alt="Etern Learning"
          width={160}
          height={54}
          priority
          className="activity-logo"
        />
        </Link>

        <nav className="activity-nav" aria-label="Activity navigation">
          <Link href="/streak" className="activity-nav-link">
            <span className="activity-nav-icon activity-nav-icon--task">
              <Image src="/icons/task.png" alt="" width={48} height={48} aria-hidden="true" />
            </span>
            <span>Tasks</span>
          </Link>

          <Link href="/profile-options" className="activity-nav-link">
            <span className="activity-nav-icon activity-nav-icon--tiggy">
              <Image src="/characters/tiggy.png" alt="" width={30} height={30} aria-hidden="true" />
            </span>
            <span>Tiggy</span>
          </Link>
        </nav>
      </header>

      <section className="stories-heading" aria-labelledby="stories-heading-title">
        <div className="stories-heading-title">
          <Image src="/icons/white-sparkle-left.png" alt="" width={24} height={32} aria-hidden="true" />
          <h1 id="stories-heading-title">Stories</h1>
          <Image src="/icons/white-sparkle-right.png" alt="" width={24} height={32} aria-hidden="true" />
        </div>
        <p>Explore, learning and enjoy<br />amazing stories!</p>
      </section>

      <section className="stories-layout app-container" aria-label="Story library">
        <nav className="stories-tabs" aria-label="Story categories">
          {categories.map((category) => (
            <a
              key={category.label}
              href={`#${category.label.toLowerCase().replace(' ', '-')}`}
              className={`stories-tab${category.active ? ' is-active' : ''}`}
            >
              <Image src={category.icon} alt="" width={28} height={28} aria-hidden="true" />
              <span>{category.label}</span>
            </a>
          ))}
        </nav>

        <section className="stories-panel" aria-labelledby="stories-title">
          <h1 id="stories-title" className="sr-only">All Stories</h1>
          <div className="stories-grid">
            {stories.map((story, index) => (
              <a href={`#story-${index + 1}`} className="story-card" key={story.image}>
                <div className="story-card-image">
                  <Image
                    src={story.image}
                    alt="The Jungle Book"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                  />
                  {story.badge && <span className="story-card-badge">{story.badge}</span>}
                </div>
                <div className="story-card-content">
                  <h2>The Jungle Book</h2>
                  <p>Meet the animals</p>
                  <div className="story-card-footer">
                    {story.progress && (
                      <>
                        <span className="story-progress"><b /></span>
                        <small>64%</small>
                      </>
                    )}
                    {story.stars && (
                      <span className="story-stars" aria-label={`${story.stars} stars`}>
                        {Array.from({ length: story.stars }, (_, star) => (
                          <Image key={star} src="/icons/star-2.png" alt="" width={22} height={22} aria-hidden="true" />
                        ))}
                      </span>
                    )}
                    {story.locked && (
                      <span className="story-locked">
                        <IoIosLock aria-hidden="true" /> Unlock at level 5
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default Page

import Image from 'next/image'
import Link from "next/link";
import './Streak.css'

const Page = () => {
  return (
    <main className="streak-page">
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
              <Image
                src="/icons/task.png"
                alt=""
                width={48}
                height={48}
                aria-hidden="true"
              />
            </span>
            <span>Tasks</span>
          </Link>

          <Link href="/profile-options" className="activity-nav-link">
            <span className="activity-nav-icon activity-nav-icon--tiggy">
              <Image
                src="/characters/tiggy.png"
                alt=""
                width={30}
                height={30}
                aria-hidden="true"
              />
            </span>
            <span>Tiggy</span>
          </Link>
        </nav>
      </header>

      <div className="streak-heading">
        <h1>Hello Tiggy</h1>
        <p>Let&apos;s make today amazing!</p>
      </div>

      <section className="streak-content app-container" aria-label="Learning streak dashboard">
        <aside className="streak-sidebar">
          <section className="streak-card streak-summary">
            <div className="streak-summary-icon" aria-hidden="true">
              <Image src="/icons/calender.png" alt="" width={48} height={48} />
            </div>
            <div>
              <p className="streak-eyebrow">Your Streak</p>
              <h1>7 Days</h1>
            </div>
            <div className="streak-week" aria-label="Seven day streak">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <div key={`${day}-${index}`}>
                  <span>{day}</span>
                  <b className={index > 4 ? 'is-muted' : ''}>✓</b>
                </div>
              ))}
            </div>
          </section>

          <section className="streak-card streak-progress">
            <h2><Link href="/progress">Today&apos;s Progress</Link></h2>
            <div className="streak-progress-grid">
              <div className="streak-progress-ring">
                <strong>75%</strong>
                <span>Completed</span>
              </div>
              <div className="streak-stat">
                <Image src="/icons/star.png" alt="" width={28} height={28} />
                <strong>12/16</strong>
                <span>Tasks done</span>
              </div>
              <div className="streak-stat streak-stat--bars" aria-label="Daily activity">
                <i />
                <i />
                <i />
              </div>
            </div>
          </section>
        </aside>

        <div className="streak-main">
          <section className="streak-card streak-fun">
            <div className="streak-grid-heading">
              <Image
                src="/icons/orange-sparkle-right.png"
                alt=""
                width={16}
                height={32}
                aria-hidden="true"
                className="streak-fun-spark streak-fun-spark--left"
              />
              <h2>Choose fun</h2>
              <Image
                src="/icons/orange-sparkle-right.png"
                alt=""
                width={16}
                height={32}
                aria-hidden="true"
                className="streak-fun-spark"
              />
            </div>

            <div className="streak-fun-grid">
              <Link href="/stories" className="streak-fun-card" aria-label="Stories">
                <Image src="/images/stories-3.png" alt="Stories" fill sizes="(max-width: 760px) 50vw, 20vw" />
              </Link>
              <a href="#self-help" className="streak-fun-card" aria-label="Self help">
                <Image src="/images/stories-1.png" alt="Self help" fill sizes="(max-width: 760px) 50vw, 20vw" />
              </a>
              <a href="#mindful" className="streak-fun-card" aria-label="Mindful">
                <Image src="/images/stories-2.png" alt="Mindful" fill sizes="(max-width: 760px) 50vw, 20vw" />
              </a>
              <a href="#science" className="streak-fun-card" aria-label="Science">
                <Image src="/images/stories-4.png" alt="Science" fill sizes="(max-width: 760px) 50vw, 20vw" />
              </a>
            </div>
          </section>

          <Link href="/stories" className="streak-learning">
            <Image src="/images/chapter.jpg" alt="" width={76} height={76} />
            <div className="streak-learning-copy">
              <p>Continue Learning</p>
              <h2>The Jungle Book</h2>
              <span>Chapter 3 : Meet the animals</span>
            </div>
            <div className="streak-learning-progress">
              <span><b /></span>
              <small>64%</small>
            </div>
            <span className="streak-learning-arrow" aria-hidden="true">
              <Image src="/icons/black-violet-arrow.png" alt="" width={24} height={24} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Page

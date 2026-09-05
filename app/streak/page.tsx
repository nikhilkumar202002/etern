import Image from 'next/image'

const Page = () => {
  return (
    <main
      className="streak-page"
      style={{
        minHeight: '100svh',
        backgroundColor: '#41b6f2',
        backgroundImage: "url('/background/activity.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
          <header className="activity-header app-container">
                <Image
                  src="/etern-white-logo.png"
                  alt="Etern Learning"
                  width={160}
                  height={54}
                  priority
                  className="activity-logo"
                />
        
                <nav className="activity-nav" aria-label="Activity navigation">
                  <a href="#tasks" className="activity-nav-link">
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
                  </a>
        
                  <a href="#tiggy" className="activity-nav-link">
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
                  </a>
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
            <h2>Today&apos;s Progress</h2>
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
            <h2><span>~</span> Choose fun <span>~</span></h2>
            <div className="streak-fun-grid">
              <a href="#stories" className="streak-fun-card streak-fun-card--green">
                <Image src="/icons/open-book.png" alt="" width={80} height={80} />
                <strong>STORIES</strong>
                <span>18 / 30</span>
              </a>
              <a href="#self-help" className="streak-fun-card streak-fun-card--orange">
                <Image src="/characters/tiggy.png" alt="" width={80} height={80} />
                <strong>SELF HELP</strong>
                <span>12 / 20</span>
              </a>
              <a href="#mindful" className="streak-fun-card streak-fun-card--blue">
                <Image src="/icons/star.png" alt="" width={80} height={80} />
                <strong>SELF HELP</strong>
                <span>15 / 25</span>
              </a>
              <a href="#science" className="streak-fun-card streak-fun-card--violet">
                <Image src="/icons/open-book.png" alt="" width={80} height={80} />
                <strong>SELF HELP</strong>
                <span>Unlock at Level 5</span>
              </a>
            </div>
          </section>

          <a href="#jungle-book" className="streak-learning">
            <Image src="/characters/tiger.png" alt="" width={76} height={76} />
            <div className="streak-learning-copy">
              <p>Continue Learning</p>
              <h2>The Jungle Book</h2>
              <span>Chapter 3 : Meet the animals</span>
            </div>
            <div className="streak-learning-progress">
              <span><b /></span>
              <small>64%</small>
            </div>
            <span className="streak-learning-arrow">&gt;</span>
          </a>
        </div>
      </section>

        </main>
  )
}

export default Page

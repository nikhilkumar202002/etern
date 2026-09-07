import React from 'react'
import Image from 'next/image'
import './Progress.css'

const categories = [
  { label: 'All', icon: '/icons/all-stories.png', active: true },
  { label: 'Colouring', icon: '/icons/paint-icon.png' },
  { label: 'Stories', icon: '/icons/book-icon.png' },
  { label: 'Puzzles', icon: '/icons/puzzle-icon.png' },
  { label: 'Learning Songs', icon: '/icons/music-icon.png' },
]

const activities = [
  { image: '/characters/paint-elephant.png', title: 'Paint the elephant picture.', level: 'Easy', color: 'green', complete: true },
  { image: '/characters/color-elephant.png', title: 'Color the elephant picture.', level: 'Easy', color: 'yellow' },
  { image: '/characters/elephant-puzzle.png', title: 'Puzzle time: elephant', level: 'Hard', color: 'purple' },
  { image: '/characters/elephant-stories.png', title: 'Elephant Stories', level: 'Easy', color: 'blue' },
  { image: '/characters/color-elephant.png', title: 'Color the elephant picture.', level: 'Easy', color: 'yellow' },
]

const Page = () => {
  return (
    <main className="progress-page">
      <header className="activity-header app-container">
        <Image src="/etern-white-logo.png" alt="Etern Learning" width={160} height={54} priority className="activity-logo" />
        <nav className="activity-nav" aria-label="Activity navigation">
          <a href="#tasks" className="activity-nav-link"><span className="activity-nav-icon activity-nav-icon--task"><Image src="/icons/task.png" alt="" width={48} height={48} aria-hidden="true" /></span><span>Tasks</span></a>
          <a href="#tiggy" className="activity-nav-link"><span className="activity-nav-icon activity-nav-icon--tiggy"><Image src="/characters/tiggy.png" alt="" width={30} height={30} aria-hidden="true" /></span><span>Tiggy</span></a>
        </nav>
      </header>

      <section className="progress-content app-container" aria-label="Learning progress">
        <aside className="progress-summary">
          <h1>Daily Progress</h1>
          <Image className="progress-trophy" src="/icons/trophy.png" alt="" width={150} height={150} aria-hidden="true" />
          <div className="progress-ring"><div><strong>Tasks Completed</strong><b>8/12</b><span>74%</span></div></div>
          <p>Keep going, you’re<br />doing amazing!</p>
        </aside>

        <section className="progress-board" aria-labelledby="progress-title">
          <h2 id="progress-title" className="sr-only">Activity progress</h2>
          <nav className="progress-filters" aria-label="Activity categories">
            {categories.map((category) => <a key={category.label} href={`#${category.label.toLowerCase()}`} className={`progress-filter${category.active ? ' is-active' : ''}`}><Image src={category.icon} alt="" width={32} height={32} aria-hidden="true" /><span>{category.label}</span></a>)}
          </nav>
          <div className="progress-activities">
            {activities.map((activity, index) => <article className="progress-activity" key={`${activity.title}-${index}`}>
              {activity.complete && <span className="progress-complete" aria-label="Completed">✓</span>}
              <span className={`progress-level progress-level--${activity.color}`}>{activity.level}</span>
              <div className="progress-activity-image"><Image src={activity.image} alt="" fill sizes="210px" /></div>
              <h3>{activity.title}</h3>
              <a href={`#activity-${index + 1}`} className={`progress-activity-arrow progress-activity-arrow--${activity.color}`} aria-label={`Open ${activity.title}`}><Image src="/icons/black-white-arrow.png" alt="" width={24} height={24} aria-hidden="true" /></a>
            </article>)}
          </div>
        </section>
      </section>
    </main>
  )
}

export default Page

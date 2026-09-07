import React from 'react'
import './LearningBuddy.css'
import Image from 'next/image'
import { FiCamera, FiCheck, FiImage } from 'react-icons/fi'

const buddies = [
  { name: 'Tiggy', image: '/characters/tiggy.png', selected: true },
  { name: 'Pingu', image: '/characters/pingu.png' },
  { name: 'Trixie', image: '/characters/coco.png' },
  { name: 'Benny', image: '/characters/bunny.png' },
]

const page = () => {
  return (
    <main className="learning-buddy-page">
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

      <section className="learning-buddy-heading" aria-labelledby="learning-buddy-title">
        <h1 id="learning-buddy-title">Choose Your Learning Buddy</h1>
        <p>Pick a friend for your learning journey</p>
      </section>

      <section className="learning-buddy-content app-container" aria-label="Learning buddy selection">
        <article className="learning-buddy-preview">
          <span className="learning-buddy-preview-star" aria-hidden="true">★</span>
          <h2>Tiggy</h2>
        </article>

        <div className="learning-buddy-selection">
          <div className="learning-buddy-cards">
            {buddies.map((buddy) => (
              <a
                key={buddy.name}
                href={`#${buddy.name.toLowerCase()}`}
                className={`learning-buddy-card${buddy.selected ? ' is-selected' : ''}`}
              >
                <div className="learning-buddy-card-image">
                  <Image src={buddy.image} alt={buddy.name} fill sizes="150px" />
                </div>
                <strong>{buddy.name}</strong>
                {buddy.selected && (
                  <span className="learning-buddy-selected" aria-label="Selected">
                    <FiCheck aria-hidden="true" />
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="learning-buddy-controls">
            <a href="#previous" className="learning-buddy-arrow learning-buddy-arrow--back" aria-label="Previous step">
              <span aria-hidden="true">←</span>
            </a>
            <div className="learning-buddy-actions">
              <a href="#camera" className="learning-buddy-action learning-buddy-action--camera">
                <FiCamera aria-hidden="true" />
                <span>Camera</span>
              </a>
              <a href="#gallery" className="learning-buddy-action learning-buddy-action--gallery">
                <FiImage aria-hidden="true" />
                <span>Gallery</span>
              </a>
            </div>
            <a href="#next" className="learning-buddy-arrow learning-buddy-arrow--next" aria-label="Next step">
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page

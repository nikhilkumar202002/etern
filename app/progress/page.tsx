import React from 'react'
import Image from 'next/image'
import './Progress.css'

const page = () => {
  return (
    <main className="progress-page">
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
    </main>
  )
}

export default page
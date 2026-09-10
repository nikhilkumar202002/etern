'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

type BuddyName = (typeof buddies)[number]['name']

const defaultBuddy: BuddyName =
  buddies.find((buddy) => buddy.selected)?.name ?? buddies[0].name

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  const rotate = direction === 'left' ? 'rotate(180 12 12)' : undefined

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="profile-nav-icon"
      fill="none"
    >
      <g transform={rotate}>
        <path
          d="M9.5 6.5L15 12l-5.5 5.5"
          stroke="currentColor"
          strokeWidth="2.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default function Page() {
  const [selectedBuddy, setSelectedBuddy] = useState<BuddyName>(defaultBuddy)

  return (
    <section className="profile-page">
      <div className="profile-pattern-wrap" aria-hidden="true">
        <Image
          src="/patterns/profile-pattern.png"
          alt=""
          width={1000}
          height={0}
          priority
          className="profile-pattern"
        />
        <div className="profile-pattern-decor profile-pattern-decor--star-left">
          <Image
            src="/icons/star.png"
            alt=""
            width={301}
            height={301}
            aria-hidden="true"
            className="profile-pattern-decor-image"
          />
        </div>
        <div className="profile-pattern-decor profile-pattern-decor--star-mid">
          <Image
            src="/icons/star.png"
            alt=""
            width={301}
            height={301}
            aria-hidden="true"
            className="profile-pattern-decor-image"
          />
        </div>
        <div className="profile-pattern-decor profile-pattern-decor--cloud">
          <Image
            src="/icons/cloud.png"
            alt=""
            width={2355}
            height={1548}
            aria-hidden="true"
            className="profile-pattern-decor-image"
          />
        </div>
      </div>

      <main className="profile-shell app-container">
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

        <div className="profile-bottom-group">
          <div className="profile-carousel-header">
            <div className="profile-copy profile-carousel-copy">
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

            <div className="profile-carousel-meta" aria-hidden="true">
              <h2 className="profile-carousel-name">{selectedBuddy}</h2>
              <p className="profile-carousel-subtitle">
                Brave &bull; Curious &bull; Loves Coding
              </p>
            </div>
          </div>

          <section
            className="profile-selector"
            aria-label="Choose your learning buddy"
          >
            <button
              type="button"
              className="profile-nav-button profile-nav-button--left"
              aria-label="Previous buddy"
            >
              <ArrowIcon direction="left" />
            </button>

            <div className="profile-card-row">
              {buddies.map((buddy) => (
                <button
                  key={buddy.name}
                  type="button"
                  className={`profile-card ${selectedBuddy === buddy.name ? 'profile-card--selected' : ''}`}
                  aria-pressed={selectedBuddy === buddy.name}
                  onClick={() => setSelectedBuddy(buddy.name)}
                >
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
                </button>
              ))}
            </div>

            <button
              type="button"
              className="profile-nav-button profile-nav-button--right"
              aria-label="Next buddy"
            >
              <ArrowIcon direction="right" />
            </button>
          </section>

          <div className="profile-cta-wrap">
            <Link href="/learning-buddy" className="profile-cta" aria-label="Continue">
              <Image
                src="/icons/black-white-arrow.png"
                alt=""
                width={26}
                height={26}
                aria-hidden="true"
                className="profile-cta-icon"
              />
            </Link>
          </div>
        </div>
      </main>
    </section>
  )
}

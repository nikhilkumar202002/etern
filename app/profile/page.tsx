'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../pages/Styles.css'

const buddies = [
  {
    name: 'Bunny',
    role: 'Creative Dreamer',
    traits: 'Imaginative • Artistic • Big Dreams',
    image: '/characters/bunny.png',
    accent: '#2ea8e6',
    selected: false,
  },
  {
    name: 'Tiggy',
    role: 'Brave Explorer',
    traits: 'Brave • Curious • Loves Coding',
    image: '/characters/tiggy.png',
    accent: '#f68b1f',
    selected: true,
  },
  {
    name: 'Pingu',
    role: 'Smart Thinker',
    traits: 'Analytical • Logical • Loves Puzzles',
    image: '/characters/pingu.png',
    accent: '#b35df6',
    selected: false,
  },
  {
    name: 'Brighty',
    role: 'Fast Learner',
    traits: 'Quick • Energetic • Loves Science',
    image: '/characters/brighty.png',
    accent: '#e85bd9',
    selected: false,
  },
  {
    name: 'Coco',
    role: 'Gentle Helper',
    traits: 'Kind • Patient • Loves Stories',
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
  const cardRowRef = useRef<HTMLDivElement>(null)

  const currentBuddy =
    buddies.find((buddy) => buddy.name === selectedBuddy) ?? buddies[0]

  const scrollToCard = (index: number) => {
    if (cardRowRef.current) {
      const cards =
        cardRowRef.current.querySelectorAll<HTMLElement>('.profile-card')
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      }
    }
  }

  const handleSelect = (name: BuddyName, index: number) => {
    setSelectedBuddy(name)
    scrollToCard(index)
  }

  const handlePrev = () => {
    const currentIndex = buddies.findIndex((b) => b.name === selectedBuddy)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : buddies.length - 1
    handleSelect(buddies[prevIndex].name, prevIndex)
  }

  const handleNext = () => {
    const currentIndex = buddies.findIndex((b) => b.name === selectedBuddy)
    const nextIndex = currentIndex < buddies.length - 1 ? currentIndex + 1 : 0
    handleSelect(buddies[nextIndex].name, nextIndex)
  }

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
              <h2 className="profile-carousel-name">{currentBuddy.name}</h2>
              <p className="profile-carousel-subtitle">
                {currentBuddy.traits}
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
              onClick={handlePrev}
            >
              <ArrowIcon direction="left" />
            </button>

            <div className="profile-card-row" ref={cardRowRef}>
              {buddies.map((buddy, index) => (
                <button
                  key={buddy.name}
                  type="button"
                  className={`profile-card ${selectedBuddy === buddy.name ? 'profile-card--selected' : ''}`}
                  aria-pressed={selectedBuddy === buddy.name}
                  onClick={() => handleSelect(buddy.name, index)}
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
              onClick={handleNext}
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

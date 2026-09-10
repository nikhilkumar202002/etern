"use client";

import React, { useState, useRef } from "react";
import "./LearningBuddy.css";
import Image from "next/image";
import Link from "next/link";
import { FiCamera, FiCheck, FiImage } from "react-icons/fi";

const buddies = [
  { name: "Tiggy", image: "/characters/tiggy.png", selected: true },
  { name: "Pingu", image: "/characters/pingu.png" },
  { name: "Trixie", image: "/characters/coco.png" },
  { name: "Benny", image: "/characters/bunny.png" },
];

const Page = () => {
  const [selectedBuddyName, setSelectedBuddyName] = useState("Tiggy");
  const cardsRef = useRef<HTMLDivElement>(null);

  const selectedBuddy =
    buddies.find((buddy) => buddy.name === selectedBuddyName) ?? buddies[0];

  const handleSelect = (name: string, index: number) => {
    setSelectedBuddyName(name);
    if (cardsRef.current) {
      const cards =
        cardsRef.current.querySelectorAll<HTMLElement>(".learning-buddy-card");
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <main className="learning-buddy-page">
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
                src={selectedBuddy.image}
                alt=""
                width={30}
                height={30}
                aria-hidden="true"
              />
            </span>
            <span>{selectedBuddy.name}</span>
          </Link>
        </nav>
      </header>

      <section className="learning-buddy-middlecontent app-container">
        <section
          className="learning-buddy-heading"
          aria-labelledby="learning-buddy-title"
        >
          <h1 id="learning-buddy-title">Choose Your Learning Buddy</h1>
          <p>Pick a friend for your learning journey</p>
        </section>

        <section
          className="learning-buddy-content"
          aria-label="Learning buddy selection"
        >
          <article className="learning-buddy-preview">
            <span className="learning-buddy-preview-star" aria-hidden="true">
              ★
            </span>
            <h2>{selectedBuddy.name}</h2>
            <div className="learning-buddy-preview-image">
              <Image
                src={selectedBuddy.image}
                alt={selectedBuddy.name}
                width={260}
                height={390}
                priority
              />
            </div>
          </article>

          <div className="learning-buddy-selection">
            <div className="learning-buddy-cards" ref={cardsRef}>
              {buddies.map((buddy, index) => (
                <button
                  key={buddy.name}
                  type="button"
                  onClick={() => handleSelect(buddy.name, index)}
                  className={`learning-buddy-card${selectedBuddy.name === buddy.name ? " is-selected" : ""}`}
                  aria-pressed={selectedBuddy.name === buddy.name}
                >
                  <div className="learning-buddy-card-image">
                    <Image
                      src={buddy.image}
                      alt={buddy.name}
                      fill
                      sizes="(max-width: 768px) 130px, 150px"
                    />
                  </div>
                  <h2>{buddy.name}</h2>
                  {selectedBuddy.name === buddy.name && (
                    <span
                      className="learning-buddy-selected"
                      aria-label="Selected"
                    >
                      <FiCheck aria-hidden="true" />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="learning-buddy-controls">
              <Link
                href="/profile"
                className="learning-buddy-arrow learning-buddy-arrow--back"
                aria-label="Previous step"
              >
                <Image
                  src="/icons/black-white-arrow.png"
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden="true"
                />
              </Link>
              <div className="learning-buddy-actions">
                <a
                  href="#camera"
                  className="learning-buddy-action learning-buddy-action--camera"
                >
                  <FiCamera aria-hidden="true" />
                  <span>Camera</span>
                </a>
                <a
                  href="#gallery"
                  className="learning-buddy-action learning-buddy-action--gallery"
                >
                  <FiImage aria-hidden="true" />
                  <span>Gallery</span>
                </a>
              </div>
              <Link
                href="/activity"
                className="learning-buddy-arrow learning-buddy-arrow--next"
                aria-label="Next step"
              >
                <Image
                  src="/icons/black-white-arrow.png"
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Page;

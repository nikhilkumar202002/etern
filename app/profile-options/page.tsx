import React from "react";
import "./ProfileOptions.css";
import Image from "next/image";
import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";

const page = () => {
  return (
    <main className="profile-options-page">
      <header className="profile-options-header app-container">
        <Link href="/activity" aria-label="Go to activities">
          <Image
          src="/etern-white-logo.png"
          alt="Etern Learning"
          width={160}
          height={54}
          priority
          className="profile-options-logo"
        />
        </Link>

        <div className="profile-options-account">
          <div className="profile-options-account-info">
            <div className="profile-options-avatar">
              <Image
                src="/characters/tiggy.png"
                alt="Tiggy"
                fill
                sizes="48px"
              />
            </div>
            <div className="profile-options-account-copy">
              <strong>Tiggy</strong>
              <span>4 Years old</span>
            </div>
          </div>

          <Image
            src="/icons/balloon.png"
            alt=""
            width={60}
            height={60}
            aria-hidden="true"
            className="profile-options-balloon"
          />

          <Link href="/create-child-profile" className="profile-options-edit">
            <FiEdit3 aria-hidden="true" />
            <span>Edit profile</span>
          </Link>
        </div>
      </header>

      <section className="profile-options-grid app-container" aria-label="Profile options">
        <Link href="/activity" className="profile-option-card profile-option-card--games">
          <span className="profile-option-icon">
            <Image src="/icons/gaming-console.png" alt="" width={92} height={92} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>Games</strong>
            <span>Play and learn with fun games</span>
          </span>
          <b className="profile-option-badge">10</b>
        </Link>

        <div aria-disabled="true" className="profile-option-card profile-option-card--subscription">
          <span className="profile-option-icon">
            <Image src="/icons/subscription.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>My Subscriptions</strong>
            <span>Coming soon</span>
          </span>
        </div>

        <Link href="/progress" className="profile-option-card profile-option-card--performance">
          <span className="profile-option-icon">
            <Image src="/icons/analytics.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>My Performance</strong>
            <span>Track your progress and growth</span>
          </span>
        </Link>

        <Link href="/profile-view" className="profile-option-card profile-option-card--profile">
          <span className="profile-option-icon">
            <Image src="/icons/profile.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>My Profile</strong>
            <span>Manage your personal information</span>
          </span>
        </Link>

        <div aria-disabled="true" className="profile-option-card profile-option-card--messages">
          <span className="profile-option-icon">
            <Image src="/icons/mail.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>My Messages</strong>
            <span>Coming soon</span>
          </span>
        
        </div>

        <Link href="/" className="profile-option-card profile-option-card--logout">
          <span className="profile-option-icon">
            <Image src="/icons/logout.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>Log Out</strong>
            <span>Sign out from your account</span>
          </span>
        </Link>
      </section>
    </main>
  );
};

export default page;

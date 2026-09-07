import React from "react";
import "./ProfileOptions.css";
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";

const page = () => {
  return (
    <main className="profile-options-page">
      <header className="profile-options-header app-container">
        <Image
          src="/etern-white-logo.png"
          alt="Etern Learning"
          width={160}
          height={54}
          priority
          className="profile-options-logo"
        />

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

          <a href="#edit-profile" className="profile-options-edit">
            <FiEdit3 aria-hidden="true" />
            <span>Edit profile</span>
          </a>
        </div>
      </header>

      <section className="profile-options-grid app-container" aria-label="Profile options">
        <a href="#games" className="profile-option-card profile-option-card--games">
          <span className="profile-option-icon">
            <Image src="/icons/gaming-console.png" alt="" width={92} height={92} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>Games</strong>
            <span>Play and learn with fun games</span>
          </span>
          <b className="profile-option-badge">10</b>
        </a>

        <a href="#subscription" className="profile-option-card profile-option-card--subscription">
          <span className="profile-option-icon">
            <Image src="/icons/subscription.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>My Subscriptions</strong>
            <span>View your active subscriptions</span>
          </span>
          <b className="profile-option-badge profile-option-badge--new">New</b>
        </a>

        <a href="#performance" className="profile-option-card profile-option-card--performance">
          <span className="profile-option-icon">
            <Image src="/icons/analytics.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>My Performance</strong>
            <span>Track your progress and growth</span>
          </span>
        </a>

        <a href="#profile" className="profile-option-card profile-option-card--profile">
          <span className="profile-option-icon">
            <Image src="/icons/profile.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>My Profile</strong>
            <span>Manage your personal information</span>
          </span>
        </a>

        <a href="#messages" className="profile-option-card profile-option-card--messages">
          <span className="profile-option-icon">
            <Image src="/icons/mail.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>My Messages</strong>
            <span>Check your message and updates</span>
          </span>
        
        </a>

        <a href="#logout" className="profile-option-card profile-option-card--logout">
          <span className="profile-option-icon">
            <Image src="/icons/logout.png" alt="" width={76} height={76} aria-hidden="true" />
          </span>
          <span className="profile-option-copy">
            <strong>Log Out</strong>
            <span>Sign out from your account</span>
          </span>
        </a>
      </section>
    </main>
  );
};

export default page;

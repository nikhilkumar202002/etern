import React from "react";
import "./ProfileView.css";
import Image from "next/image";
import Link from "next/link";
import { FiCamera, FiEdit3 } from "react-icons/fi";

const Page = () => {
  return (
    <main className="profile-view-main">
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
      <section className="profile-view-layout" aria-label="Tiggy profile">
        <article className="profile-view-card">
          <div className="profile-view-avatar">
            <Image src="/characters/tiggy-circle.png" alt="Tiggy" fill sizes="150px" />
            <Link href="/learning-buddy" className="profile-view-camera" aria-label="Change learning buddy">
              <FiCamera aria-hidden="true" />
            </Link>
          </div>
          <h1>Tiggy</h1>
          <span className="profile-view-level">
            <Image
              src="/icons/star.png"
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
            />{" "}
            Level 3
          </span>
        </article>

        <section className="profile-view-details" aria-label="Profile details">
          <div className="profile-view-field">
            <span className="profile-view-field-icon profile-view-field-icon--blue">
              <Image
                src="/icons/profile-3.png"
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
              />
            </span>
            <span>
              <small>Name</small>
              <strong>Tiggy</strong>
            </span>
            <Link href="/create-child-profile" aria-label="Edit name">
              <FiEdit3 aria-hidden="true" />
            </Link>
          </div>
          <div className="profile-view-field">
            <span className="profile-view-field-icon profile-view-field-icon--violet">
              <Image
                src="/icons/calender-2.png"
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
              />
            </span>
            <span>
              <small>Date Of Birth</small>
              <strong>01 - 10 - 2020</strong>
            </span>
            <Link href="/create-child-profile" aria-label="Edit date of birth">
              <FiEdit3 aria-hidden="true" />
            </Link>
          </div>
          <div className="profile-view-field">
            <span className="profile-view-field-icon profile-view-field-icon--green">
              <Image
                src="/icons/phone-2.png"
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
              />
            </span>
            <span>
              <small>Mobile Number</small>
              <strong>+91 1234567890</strong>
            </span>
            <Link href="/create-child-profile" aria-label="Edit mobile number">
              <FiEdit3 aria-hidden="true" />
            </Link>
          </div>
          <div className="profile-view-field">
            <span className="profile-view-field-icon profile-view-field-icon--yellow">
              <Image
                src="/icons/mail-3.png"
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
              />
            </span>
            <span>
              <small>Email Id</small>
              <strong>tiggy@gmail.com</strong>
            </span>
            <Link href="/create-child-profile" aria-label="Edit email address">
              <FiEdit3 aria-hidden="true" />
            </Link>
          </div>
          <Link
            href="/profile-options"
            className="profile-view-back"
            aria-label="Back to profile options"
          >
            <Image
              src="/icons/black-white-arrow.png"
              alt=""
              width={28}
              height={28}
              aria-hidden="true"
            />
          </Link>
        </section>
      </section>
    </main>
  );
};

export default Page;

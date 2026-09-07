import React from 'react'
import './ProfileView.css'
import Image from 'next/image'

const Page = () => {
  return (
    <main className="profile-view-main">
      <section className="profile-view-layout" aria-label="Tiggy profile">
        <article className="profile-view-card">
          <div className="profile-view-avatar">
            <Image src="/characters/tiggy.png" alt="Tiggy" fill sizes="150px" />
            <span className="profile-view-camera" aria-hidden="true">+</span>
          </div>
          <h1>Tiggy</h1>
          <span className="profile-view-level"><Image src="/icons/star.png" alt="" width={18} height={18} aria-hidden="true" /> Level 3</span>
        </article>

        <section className="profile-view-details" aria-label="Profile details">
          <div className="profile-view-field">
            <span className="profile-view-field-icon profile-view-field-icon--blue"><Image src="/icons/profile.png" alt="" width={40} height={40} aria-hidden="true" /></span>
            <span><small>Name</small><strong>Tiggy</strong></span>
            <b aria-hidden="true">&#9998;</b>
          </div>
          <div className="profile-view-field">
            <span className="profile-view-field-icon profile-view-field-icon--violet"><Image src="/icons/calender.png" alt="" width={40} height={40} aria-hidden="true" /></span>
            <span><small>Date Of Birth</small><strong>01 - 10 - 2020</strong></span>
            <b aria-hidden="true">&#9998;</b>
          </div>
          <div className="profile-view-field">
            <span className="profile-view-field-icon profile-view-field-icon--green"><Image src="/icons/task.png" alt="" width={40} height={40} aria-hidden="true" /></span>
            <span><small>Mobile Number</small><strong>+91 1234567890</strong></span>
            <b aria-hidden="true">&#9998;</b>
          </div>
          <div className="profile-view-field">
            <span className="profile-view-field-icon profile-view-field-icon--yellow"><Image src="/icons/mail.png" alt="" width={40} height={40} aria-hidden="true" /></span>
            <span><small>Email Id</small><strong>tiggy@gmail.com</strong></span>
            <b aria-hidden="true">&#9998;</b>
          </div>
        </section>

        <a href="#profile-options" className="profile-view-back" aria-label="Back to profile options">
          <Image src="/icons/black-green-arrow.png" alt="" width={28} height={28} aria-hidden="true" />
        </a>
      </section>
    </main>
  )
}

export default Page

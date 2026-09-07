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
    </main>
  );
};

export default page;

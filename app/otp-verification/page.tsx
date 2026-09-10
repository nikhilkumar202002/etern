import React from "react";
import "./OtpVerification.css";
import Image from "next/image";
import Link from "next/link";
import OtpForm from "../components/ui/OtpForm";

const page = () => {
  return (
    <>
      <main className="otp-verification-page">
        <div className="otp-verification-glow" aria-hidden="true" />
        

        <header className="otp-verification-header app-container">
          <Image
            src="/etern-white-logo.png"
            alt="Etern Learning"
            width={180}
            height={60}
            priority
            className="otp-verification-logo"
          />
        </header>

        <div className="otp-verification-form-box">
          <OtpForm />
        </div>

        <div>
          <div className="app-container">
            <div className="otp-verification-copy">
              <h1 className="otp-verification-title">
                Verify OTP code
              </h1>
              <p className="otp-verification-subtitle">
                Enter the 4 digit code we’ve sent to your mobile number
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Image
              src="/characters/tiger.png"
              alt=""
              width={737}
              height={1017}
              aria-hidden="true"
              quality={100}
              className="otp-verification-mascot"
            />
          </div>

          <div>
            <Image
              src="/icons/cloud.png"
              alt=""
              width={737}
              height={1017}
              aria-hidden="true"
              quality={100}
              className="otp-verification-cloud"
            />
          </div>

          <div>
            <Image
              src="/icons/star.png"
              alt=""
              width={737}
              height={1017}
              aria-hidden="true"
              quality={100}
              className="otp-verification-star"
            />
          </div>

          <div>
            <Image
              src="/icons/open-book.png"
              alt=""
              width={737}
              height={1017}
              aria-hidden="true"
              quality={100}
              className="otp-verification-book"
            />
          </div>

          <div>
            <Image
              src="/icons/hat.png"
              alt=""
              width={600}
              height={600}
              aria-hidden="true"
              quality={100}
              className="otp-verification-hat"
            />
          </div>
        </div>

        <div className="otp-verification-bottom">
          <Image
            src="/patterns/create-profile-wave.png"
            alt=""
            width={2160}
            height={0}
            aria-hidden="true"
            className="otp-verification-wave"
          />

          <Image
            src="/patterns/footer-pattern.png"
            alt=""
            width={2160}
            height={747}
            aria-hidden="true"
            className="otp-verification-footer-pattern"
          />
        </div>

        <div className="otp-verification-cta">
          <Link
            href="/profile"
            className="otp-verification-cta-button otp-verification-cta-button-white"
            aria-label="Continue"
          >
            <Image
              src="/icons/black-blue-arrow.png"
              alt=""
              width={35}
              height={0}
              aria-hidden="true"
              className="otp-verification-cta-icon"
            />
          </Link>
        </div>
      </main>
    </>
  );
};

export default page;

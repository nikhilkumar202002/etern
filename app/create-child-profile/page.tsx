import React from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "../components/ui/Form";

const Page = () => {
  return (
    <section
      style={{
        minHeight: "100svh",
        height: "100svh",
        backgroundColor: "#41B6F2",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <header className="create-profile-header app-container">
        <Image
          src="/etern-white-logo.png"
          alt="Etern Learning"
          width={160}
          height={54}
          priority
          className="create-profile-logo"
        />
      </header>

      <div className="form-box">
        <Form />
      </div>

      <div>
        <div className="app-container">
          <div className="create-profile-copy">
            <h1 className="create-profile-title" style={{ color: "#fff" }}>
              Create Child&apos;s Profile
            </h1>
            <p className="create-profile-subtitle">
              Let&apos;s personalise their learning journey!
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
            style={{
              width: "300px",
              height: "auto",
              display: "block",
              position: "absolute",
              zIndex: 0,
              top: 250,
              left: 100,
            }}
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
            style={{
              width: "60px",
              height: "auto",
              display: "block",
              position: "absolute",
              zIndex: 0,
              top: 135,
              left: 568,
            }}
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
            style={{
              width: "50px",
              height: "auto",
              display: "block",
              position: "absolute",
              zIndex: 0,
              top: 100,
              left: -10,
            }}
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
            style={{
              width: "100px",
              height: "auto",
              display: "block",
              position: "absolute",
              zIndex: 0,
              top: 250,
              left: 480,
            }}
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
            style={{
              width: "90px",
              height: "auto",
              display: "block",
              position: "absolute",
              zIndex: 0,
              top: 60,
              right: 500,
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: "auto", width: "100%", position: "relative" }}>
        <Image
          src="/patterns/create-profile-wave.png"
          alt=""
          width={2160}
          height={0}
          aria-hidden="true"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            position: "absolute",
            zIndex: 3,
            bottom: -320,
          }}
        />

        <Image
          src="/patterns/footer-pattern.png"
          alt=""
          width={2160}
          height={747}
          aria-hidden="true"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            position: "absolute",
            zIndex: 10,
            bottom: -170,
          }}
        />
      </div>

      <div
        className="create-profile-cta"
        style={{
          position: "absolute",
          left: "50%",
          bottom: "100px",
          transform: "translateX(-50%)",
          zIndex: 20,
          marginTop: 0,
        }}
      >
        <Link
          href="/profile"
          className="create-profile-cta-button create-profile-cta-button-white"
          aria-label="Continue"
        >
          <Image
            src="/icons/black-blue-arrow.png"
            alt=""
            width={35}
            height={0}
            aria-hidden="true"
            className="create-profile-cta-icon"
          />
        </Link>
      </div>
    </section>
  );
};

export default Page;

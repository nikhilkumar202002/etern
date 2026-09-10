import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main
      className="activity-page"
      style={{
        minHeight: "100svh",
        backgroundColor: "#41b6f2",
        backgroundImage: "url('/background/activity.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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

      <section
        className="activity-content app-container"
        aria-labelledby="activity-title"
      >
        <div className="activity-intro">
          <h1 id="activity-title" className="activity-title">
            Hello Tiggy
          </h1>
          <p className="activity-subtitle">
            What would you like to explore today?
          </p>
          <div className="activity-choice-label" aria-hidden="true">
            <Image
              src="/icons/white-sparkle-left.png"
              width={0}
              height={0}
              alt=""
            />
            <span>Choose an activity</span>
            <Image
              src="/icons/white-sparkle-right.png"
              width={0}
              height={0}
              alt=""
            />
          </div>
        </div>

        <div className="activity-card-grid">
          <Link href="/stories" className="activity-card activity-card--blue">
            <div className="activity-card-image">
              <Image
                src="/images/kutty-stories.jpg"
                alt="A child enjoying a colourful story in a garden"
                fill
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 30vw, 390px"
              />
            </div>
            <div className="activity-card-footer">
              <div>
                <h2 className="activity-card-title activity-card-title--blue">
                  Kutty Stories
                </h2>
                <p>Fun stories for kids</p>
              </div>
              <span className="activity-card-arrow" aria-hidden="true">
                <Image
                  src="/icons/black-blue-arrow.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </span>
            </div>
          </Link>

          <Link href="/progress" className="activity-card activity-card--orange">
            <div className="activity-card-image">
              <Image
                src="/images/creative-kids.jpg"
                alt="Two children painting together"
                fill
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 30vw, 390px"
              />
            </div>
            <div className="activity-card-footer">
              <div>
                <h2 className="activity-card-title activity-card-title--orange">
                  Creative Kids
                </h2>
                <p>Create, imagine and learn</p>
              </div>
              <span className="activity-card-arrow" aria-hidden="true">
                <Image
                  src="/icons/black-orange-arrow.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </span>
            </div>
          </Link>

          <Link href="/progress" className="activity-card activity-card--green">
            <div className="activity-card-image">
              <Image
                src="/images/curious-mind.jpg"
                alt="A child exploring science with a clipboard"
                fill
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 30vw, 390px"
              />
            </div>
            <div className="activity-card-footer">
              <div>
                <h2 className="activity-card-title activity-card-title--green">
                  Curious Mind
                </h2>
                <p>Explore, discover and grow</p>
              </div>
              <span className="activity-card-arrow" aria-hidden="true">
                <Image
                  src="/icons/black-green-arrow.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </span>
            </div>
          </Link>
        </div>

        <div className="activity-footer-copy">
             <Image
            src="/icons/flower.png"
            alt=""
            width={118}
            height={70}
            aria-hidden="true"
          />
          <div>
            <h2>A Safe Space To Learn And Grow</h2>
            <p>We personalise learning for your child&apos;s bright future</p>
          </div>
          <Image
            src="/icons/book-bag.png"
            alt=""
            width={118}
            height={70}
            aria-hidden="true"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;

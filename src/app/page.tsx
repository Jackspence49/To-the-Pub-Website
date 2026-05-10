import Link from "next/link"
import { Search, MapPin, Calendar, Clock, BarChart2, Bell, Users, Dot, Instagram, Notebook, Facebook } from "lucide-react"
import styles from "./page.module.css"

export default function HomePage() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              Find Your Perfect{" "}
              <span className={styles.heroTitleAccent}>Night Out</span>
            </h1>
            <p className={styles.heroSubtext}>
              Discover bars, pubs, and events near you. From live music to trivia nights, To The Pub connects you with the nightlife you love.
            </p>
            <div className={styles.heroActions}>
              <a
                href="https://apps.apple.com/us/app/to-the-pub/id6763960326"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnLg} ${styles.btnTeal}`}
              >
                Download the App
              </a>
              <Link
                href="/the-business"
                className={`${styles.btn} ${styles.btnLg} ${styles.btnOutline}`}
              >
                For Businesses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={`${styles.badge} ${styles.badgeTeal}`}>Features</span>
            <h2 className={styles.sectionTitle}>Everything you need for a great night</h2>
            <p className={styles.sectionSubtext}>
              Whether you&rsquo;re planning ahead or deciding on the fly, we&rsquo;ve got you covered.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrap}>
                <MapPin size={24} className={styles.tealIcon} />
              </div>
              <p className={styles.featureCardTitle}>Discover Open Bars</p>
              <p className={styles.featureCardText}>Find open spots nearby with filters for atmosphere, activities (darts, pool, live music), and service types.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrap}>
                <Calendar size={24} className={styles.tealIcon} />
              </div>
              <p className={styles.featureCardTitle}>Find Live Events</p>
              <p className={styles.featureCardText}>Never miss out. Filter for upcoming DJ sets, exclusive drink specials, and the best happy hours in town.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrap}>
                <Search size={24} className={styles.tealIcon} />
              </div>
              <p className={styles.featureCardTitle}>Personalized Search</p>
              <p className={styles.featureCardText}>Looking for something specific? Search our database of local establishments instantly.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrap}>
                <Notebook size={24} className={styles.tealIcon} />
              </div>
              <p className={styles.featureCardTitle}>Coming Soon: Log Your Rounds</p>
              <p className={styles.featureCardText}>Track your journey by marking bars you&rsquo;ve visited and leaving tips for the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Users */}
      <section className={styles.usersSection}>
        <div className={styles.container}>
          <div className={styles.splitGrid}>
            <div className={styles.splitContent}>
              <h2 className={styles.splitTitle}>Stop scrolling. Start going.</h2>
              <p className={styles.splitText}>
                No more guessing what&rsquo;s on tonight. To The Pub surfaces the best bars and events that match your vibe — so you spend less time searching and more time out.
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <Dot size={20} className={styles.goldIcon} />
                  <span>Personalised picks based on what you&rsquo;re into</span>
                </li>
                <li className={styles.bulletItem}>
                  <Dot size={20} className={styles.goldIcon} />
                  <span>Filter by event type — live music, sports, quiz nights &amp; more</span>
                </li>
                <li className={styles.bulletItem}>
                  <Dot size={20} className={styles.goldIcon} />
                  <span>Detailed venue pages with hours, tags, and upcoming events</span>
                </li>
              </ul>
              <div>
                <a
                  href="https://apps.apple.com/us/app/to-the-pub/id6763960326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${styles.btnTeal}`}
                >
                  Download Free
                </a>
              </div>
            </div>

            <div className={styles.eventCards}>
              <div className={styles.eventCard}>
                <div>
                  <p className={styles.eventCardTitle}>Layla&rsquo;s American Tavern</p>
                  <p className={styles.eventCardVenue}>Boston, MA</p>
                </div>
                <div className={styles.eventCardTime}>
                  <MapPin size={14} className={styles.tealIcon} />
                  <span>0.13 mi away &middot; Closes 1:00 AM</span>
                </div>
                <div className={styles.eventCardTags}>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Restaurant</span>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Outdoor Seating</span>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Food Service</span>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Touch Tunes</span>
                </div>
                <div className={styles.cardSocialRow}>
                  <div className={styles.cardSocial}>
                    <Instagram size={18} className={styles.socialIcon} />
                  </div>
                  <div className={styles.cardSocial}>
                    <Facebook size={18} className={styles.socialIcon} />
                  </div>
                </div>
              </div>

              <div className={styles.eventCard}>
                <div>
                  <p className={styles.eventCardTitle}>Tom English&rsquo;s Cottage</p>
                  <p className={styles.eventCardVenue}>Boston, MA</p>
                </div>
                <div className={styles.eventCardTime}>
                  <MapPin size={14} className={styles.tealIcon} />
                  <span>0.31 mi away &middot; Closes 1:00 AM</span>
                </div>
                <div className={styles.eventCardTags}>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Pub</span>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Billards</span>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Touch Tunes</span>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Darts</span>
                </div>
                <div className={styles.cardSocialRow}>
                  <div className={styles.cardSocial}>
                    <Instagram size={18} className={styles.socialIcon} />
                  </div>
                  <div className={styles.cardSocial}>
                    <Facebook size={18} className={styles.socialIcon} />
                  </div>
                </div>
              </div>

              <div className={styles.eventCard}>
                <div>
                  <p className={styles.eventCardTitle}>4th Wall Resturant & Bar</p>
                  <p className={styles.eventCardVenue}>Boston, MA</p>
                </div>
                <div className={styles.eventCardTime}>
                  <MapPin size={14} className={styles.tealIcon} />
                  <span>0.94 mi away &middot; Closes 2:00 AM</span>
                </div>
                <div className={styles.eventCardTags}>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Pub</span>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Food Service</span>
                  <span className={`${styles.badge} ${styles.badgeOutlineTeal}`}>Touch Tunes</span>
                </div>
                <div className={styles.cardSocialRow}>
                  <div className={styles.cardSocial}>
                    <Instagram size={18} className={styles.socialIcon} />
                  </div>
                  <div className={styles.cardSocial}>
                    <Facebook size={18} className={styles.socialIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses */}
      <section className={styles.businessSection}>
        <div className={styles.container}>
          <div className={styles.splitGrid}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <Users size={32} className={styles.tealIcon} />
                <p className={styles.statCardTitle}>More Reach</p>
                <p className={styles.statCardText}>Appear in searches from people actively looking for venues like yours</p>
              </div>
              <div className={styles.statCard}>
                <BarChart2 size={32} className={styles.tealIcon} />
                <p className={styles.statCardTitle}>Easy Mgmt</p>
                <p className={styles.statCardText}>Update your events, hours, and tags from one simple dashboard</p>
              </div>
              <div className={styles.statCard}>
                <Bell size={32} className={styles.tealIcon} />
                <p className={styles.statCardTitle}>Stay Current</p>
                <p className={styles.statCardText}>Push last-minute events and keep your listing accurate in real time</p>
              </div>
              <div className={styles.statCard}>
                <MapPin size={32} className={styles.tealIcon} />
                <p className={styles.statCardTitle}>Local First</p>
                <p className={styles.statCardText}>Connect with your community — the people most likely to walk through your door</p>
              </div>
            </div>

            <div className={styles.splitContent}>
              <span className={`${styles.badge} ${styles.badgeGold}`}>For Venues</span>
              <h2 className={styles.splitTitle}>Grow your crowd, not your workload.</h2>
              <p className={styles.splitText}>
                List your bar or pub on To The Pub and reach customers who are actively looking for venues and events exactly like yours — for free.
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <Dot size={20} className={styles.goldIcon} />
                  <span>Create and manage events directly from your dashboard</span>
                </li>
                <li className={styles.bulletItem}>
                  <Dot size={20} className={styles.goldIcon} />
                  <span>Tag your venue so the right crowd finds you</span>
                </li>
                <li className={styles.bulletItem}>
                  <Dot size={20} className={styles.goldIcon} />
                  <span>Keep hours and listings up-to-date in minutes</span>
                </li>
              </ul>
              <div>
                <Link href="/the-business" className={`${styles.btn} ${styles.btnGold}`}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready for your next great night?</h2>
          <p className={styles.ctaSubtext}>
            Download To The Pub and discover what&rsquo;s on near you tonight.
          </p>
          <a
            href="https://apps.apple.com/us/app/to-the-pub/id6763960326"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnLg} ${styles.btnTeal}`}
          >
            Download on the App Store
          </a>
        </div>
      </section>

    </div>
  )
}

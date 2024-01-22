import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const name = "Next.js Blog";
export const siteTitle = "Next.js Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <img
                src="/images/profile.png"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;

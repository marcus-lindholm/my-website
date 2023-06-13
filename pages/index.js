import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BusinessCard from '../components/BusinessCard';


function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcus Lindholm</title>
        <meta name="Marcus Lindholm" content="Student at Linköping University | Industrial Engineering and management" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
      <main className={styles.main}>
      
      <div>
        <BusinessCard />
      </div>

      {/*<h1 className={styles.title}>
          Get in touch with me
      </h1>
      <div className={styles.business_card}>
        <div className={styles.upper}>
          <span className={styles.imgProfile}><Image src="/profile.jpg" width={50} height={50}/></span>
        </div>
        <div className={styles.lower}>
          <p className={styles.card_title}>Marcus Lindholm</p>
          <p>Engineering Student | E-com</p>
          <a href="https://www.linkedin.com/in/marcus-lindholm/" target="_blank"><Image alt="linkedin button" src="/linkedin.png" width={25} height={25}/></a>
          <a href="https://www.instagram.com/marcuslindholm_/" target="_blank"><Image alt="instagram button" src="/instagram.png" width={25} height={25}/></a>
        </div>
  </div>

        

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/sandbox" className={styles.card}>
            <h2>sandbox &rarr;</h2>
            <p>Random stuff</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>*/}
      </main>

      {/*<footer className={styles.footer}>
        
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        
      </footer>*/}
    </div>
  );
};

export default Home

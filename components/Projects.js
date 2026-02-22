import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  { name: 'APKrona.se',  href: 'https://apkrona.se/',    image: '/projects/apkrona.png' },
  { name: 'I-portalen',  href: 'https://i-portalen.se/', image: '/projects/i-portalen.png' },
  { name: 'Kiwok.se',    href: 'https://www.kiwok.se/',  image: '/projects/kiwok.png' },
  { name: 'Fornbod.se',  href: 'https://fornbod.se/',    image: null },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projectsTitle}>Some projects I've worked on</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <div className={styles.projectLogo}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={64}
                  height={64}
                  style={{ objectFit: 'contain' }}
                />
              ) : (
                <span className={styles.projectLogoText}>Fornbod</span>
              )}
            </div>
            <span className={styles.projectName}>{project.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

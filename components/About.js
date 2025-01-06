import styles from './About.module.css'

export default function About() {
    return (
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
            <h2>About NORTH group</h2>
            <p className="translate" data-key="about">NORTH, A growing coalition of engaged citizens from countries throughout Northern Europe. To raise awareness about the potential harms posed by modified mRNA therapeutics.</p>
            <div className={styles.email}>
                <p><span className="translate" data-key="contact">Contact us at: </span><a href="mailto:info@northgroup.info">info@northgroup.info</a></p>
            </div>
          </div>
      </section>
    )
}
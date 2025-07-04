import styles from './hero.module.css'

const Hero = ({ imageMobile, imageDesktop, title }) => {
  return (
    <section data-aos='fade-up' className={`${styles.hero}`}>
      <picture>
        <source media='(max-width: 767px)' srcSet={imageMobile} />
        <img
          className={`img-fluid ${styles.imgHero}`}
          src={imageDesktop}
          alt='Hero section'
        />
      </picture>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
    </section>
  )
}

export default Hero

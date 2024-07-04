import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme }= useTheme()
    const themeIcon = theme === 'light' ? sun : moon
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id='hero' className={ styles.container }>
        <div className={ styles.colorModeContainer }>
            <img className={styles.hero} src={ heroImg } alt="Profile picture of Samuel Waithaka" />
            <img className={styles.colorMode} src={ themeIcon } alt="Color mode icon" 
                onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Samuel 
                <br /> 
                Waithaka
            </h1>
            <h2>FullStack Developer</h2>
            <span>
                <a href="#" target='_blank'><img src={twitterIcon} alt="Twitter icon" /></a>
            </span>
            <span>
                <a href="#" target='_blank'><img src={githubIcon} alt="Github icon" /></a>
            </span>
            <span>
                <a href="#" target='_blank'><img src={linkedinIcon} alt="Linkedin icon" /></a>
            </span>
            <p>With a passion for developing modern react web Apps for commercial businesses</p>
            <a href={CV} downlaod>
                <button className='hover' >Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
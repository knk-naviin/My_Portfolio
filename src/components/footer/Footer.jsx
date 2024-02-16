import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>𝓝𝓪𝓿𝓮𝓮𝓷 𝓚</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
                    <li><a href="#achievements">Achievements</a></li>

            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/nviink/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/knk-naviin" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/nviin__k" target="_blank" rel='noreferrer'><BsInstagram/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Naveen K. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
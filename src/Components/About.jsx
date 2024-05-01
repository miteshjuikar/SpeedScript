import React from 'react'
import style from './CSSFiles/About.module.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className={style.about_page} >
        <div className={style.about_page_content} >
        <header className={style.about_header}>
            <h1>About Us</h1>
        </header>
        <main className={style.about_main}>
            <section id="mission" className={style.about_section}>
                <h2 className={style.about_section_title}>About Our Typing Game</h2>
                <p className={style.about_section_content}>Welcome to SpeedScript, the ultimate destination for honing your typing skills while having fun! Whether you're a seasoned typist looking to improve your speed or a beginner eager to learn, our game offers an exciting and engaging way to enhance your typing proficiency.</p>
            </section>
            <section id="sets_apart" className={style.about_section}>
                <h2 className={style.about_section_title}>What Sets Us Apart</h2>
                <p className={style.about_section_content}>At SpeedScript, we believe that learning should be enjoyable. That's why we've crafted an immersive gaming experience that combines the thrill of competition with the benefits of skill development. Our game features:</p>

                <ul>
                    <li>Diverse Challenges:</li><p>From simple sentences to complex paragraphs, our game offers a wide range of typing exercises suitable for all skill levels.</p>
                    <li>Real-time Feedback:</li><p>Receive instant feedback on your typing accuracy and speed, empowering you to track your progress and identify areas for improvement.</p>
                    <li>Customizable Settings:</li><p>Tailor the game to your preferences with customizable settings for difficulty level, typing mode, and more.</p>
                    <li>Leaderboards:</li><p>Compete against friends and players from around the world on our global leaderboards, and see how you stack up against the best typists.</p>
                </ul>
            </section>
            <section id="community" className={style.about_section}>
                <h2 className={style.about_section_title}>Our Mission</h2>
                <p className={style.about_section_content}>At SpeedScript, our mission is to make typing practice accessible, enjoyable, and rewarding for everyone. We believe that strong typing skills are essential in today's digital world, and we're committed to helping our players unlock their full typing potential.</p>
            </section>
            <section id="get_in_touch" className={style.about_section}>
                <h2 className={style.about_section_title}>Get Started</h2>
                <p className={style.about_section_content}>Ready to embark on your typing journey? Head over to our game and start typing your way to mastery today! Whether you're aiming to boost your productivity, ace that typing test, or simply impress your friends with your lightning-fast typing skills, SpeedScript is here to help you succeed.</p>
            </section>
            <section id="get_in_touch" className={style.about_section}>
                <h2 className={style.about_section_title}>Contact Us</h2>
                <p className={style.about_section_content}>Have questions, feedback, or suggestions? We'd love to hear from you! Get in touch with our team at speedscript@gmail.com and let us know how we can improve your gaming experience.</p>
            </section>
            <section id="get_in_touch" className={style.about_section}>
                <h2 className={style.about_section_title}>Connect With Us</h2>
                <p className={style.about_section_content}>Stay up to date with the latest news, updates, and typing tips by following us on social media. Join our community of typing enthusiasts and become part of the SpeedScript family today!</p>
            </section>
        </main>
        </div>
        <footer className={style.about_footer}>
        <div className={style.footer_content} >
            <p className={style.about_footer_content}>Thank you for joining us on this culinary journey. Together, let's explore the endless possibilities of the kitchen and create delicious memories that last a lifetime!</p>
            <p className={style.about_footer_content}>Happy cooking!</p>
            <p className={style.about_footer_content}>The React JS Team</p>
        </div>
        </footer>
        
    </div>
  )
}


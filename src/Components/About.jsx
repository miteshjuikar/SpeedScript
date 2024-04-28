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
                <h2 className={style.about_section_title}>Our Mission</h2>
                <p className={style.about_section_content}>Our mission is simple: to empower you to create delicious meals that delight your taste buds and nourish your body and soul. We believe that cooking should be fun, accessible, and rewarding for all skill levels. Through our carefully curated collection of recipes, instructional videos, and cooking resources, we strive to make your kitchen endeavors enjoyable and successful.</p>
            </section>
            <section id="sets_apart" className={style.about_section}>
                <h2 className={style.about_section_title}>What Sets Us Apart</h2>
                <p className={style.about_section_content}>What makes Your Recipe unique is our commitment to quality and authenticity. Our team of experienced chefs, food writers, and culinary enthusiasts work tirelessly to bring you tried-and-tested recipes from around the globe. From classic comfort foods to innovative culinary creations, we ensure that every recipe is meticulously crafted and thoroughly tested to guarantee outstanding results.</p>
            </section>
            <section id="community" className={style.about_section}>
                <h2 className={style.about_section_title}>Our Community</h2>
                <p className={style.about_section_content}>At Your Recipe Detail, we believe in the power of community. Our platform is more than just a collection of recipes; it's a vibrant community where food lovers come together to share their passion, knowledge, and experiences. Whether you're seeking cooking advice, exchanging recipe ideas, or simply looking for inspiration, you'll find a warm and welcoming community of like_minded individuals here.</p>
            </section>
            <section id="get_in_touch" className={style.about_section}>
                <h2 className={style.about_section_title}>Get in Touch</h2>
                <p className={style.about_section_content}>We love hearing from our audience! Whether you have a question about a recipe, a suggestion for future content, or just want to say hello, we're here for you. Feel free to reach out to us via our. Register with us <Link to="/signUp">sign up page</Link> to explore our site.</p>
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


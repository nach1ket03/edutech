import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Empowering minds with knowledge, discipline, and innovation.</h1>
                <p>EduTech is a premier institution dedicated to providing world-class education in the fields of Computer Science, Data Science, and Information Technology. With a commitment to academic excellence, industry-oriented learning, and holistic student development, we prepare our students to become leaders of tomorrow.</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>EduTech is a prestigious private university located in Pune, Maharashtra. Founded on the legacy of the EduTech Group of Institutions, it stands as a beacon of excellence in education, innovation, and entrepreneurship. The university is dedicated to nurturing students into global professionals who are not only academically strong but also socially responsible.</p>
            <p>With over a decade of academic legacy, EduTech has evolved into a multidisciplinary hub offering programs in Engineering, Management, Design, Performing Arts, and Humanities. The campus is known for its world-class infrastructure, tech-driven learning, and an ecosystem that fosters creativity and leadership.</p>
            <p>Our students are encouraged to think independently, engage in real-world problem-solving, and explore research and innovation. With a strong network of industry partnerships, we ensure that education goes beyond classrooms and prepares students for dynamic global careers.</p>
        </div>
        
    </div>
  )
}

export default About
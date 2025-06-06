import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

      const slider = useRef();
      let tx = 0;
      

  const slideForward = ()=> {
    if(tx > -50){
      tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=> {
      if(tx < 0){
      tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Rohit Sharma</h3>
                    <span>B.Tech CSE (Batch 2022)</span>
                  </div>
                </div>
                <p>EduTech gave me more than just a degree — it gave me confidence, direction, and lifelong friendships. The faculty members were incredibly supportive, and the hands-on learning helped me land my first internship even before graduation.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Sneha Patil</h3>
                    <span>BBA (Batch 2023)</span>
                  </div>
                </div>
                <p>The campus environment at EduTech is both inspiring and vibrant. I loved being a part of the various student clubs, and the events kept our energy high throughout the year. The infrastructure is simply world-class."</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Harshad Jadhav</h3>
                    <span>EduTech, USA</span>
                  </div>
                </div>
                <p>Coming from a small town, I was initially nervous, but EduTech quickly became a second home. The professors treat you like family, and the mentorship here goes beyond textbooks. Today, I work at a top tech company thanks to the placement training we received.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Aishwarya Mehta</h3>
                    <span>B.Des (Batch 2022)</span>
                  </div>
                </div>
                <p>As a design student, the exposure I got at EduTech was phenomenal. From studio work to real-world projects and international guest lectures — every day was a new opportunity to learn and grow.</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials
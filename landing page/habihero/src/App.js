import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactForm from './Contact';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';

function App() {
  var boldStyle = {
    color: '#a7d056',
    fontWeight: 'bold',
  }

  return (
    <div className='App'>
      <header className='header'> 
        <img src={ require('./assets/img/branding/logo.png') } alt='habi hero logo' />
        {/* <a href='https://github.com/jyu98-1661808/capstone2020'>Sign Up</a>
        <button type='button' className='btn btn-outline-success'>Sign In</button> */}
      </header>
      <div className='banner'>
        <ScrollAnimation delay={800} animateIn="fadeInLeft">
          <img src={ require('./assets/img/characters/panda.png') } className='panda' alt='panda' />
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInDown">
        <div className="logo-container"> 
          <img src={ require('./assets/img/branding/white-logo.png') } className='logo' alt='white logo' />
          <a className="btn btn-danger" href='https://github.com/jyu98-1661808/capstone2020'>Play Now</a>
        </div>
        </ScrollAnimation>
        <ScrollAnimation delay={800} animateIn="fadeInRight">
          <img src={ require('./assets/img/characters/myhero.png') } className='hero' alt='habi hero mascot' />
        </ScrollAnimation>
      </div>
      <div className='slogan'> 
        <h2>"Saving a habitat, One problem at a time."</h2>
      </div>
      <div className='about'>
        <h1>About Habi Hero</h1>
        <div className='about-container'>
          <div className='about-description'>
            <h2>Purpose</h2>
            <h3>
              Habi Hero is <span style={boldStyle}>math-based learning game</span> helping <span style={boldStyle}>1st graders</span> overcome 
              their numeracy challenges through motivation as they <span style={boldStyle}>save virtual endangered animals</span>.
            </h3>
            <p>
              From basic addition to subtraction, the application utilizes gamification with a focus on 
              saving endangered animals and their habitats. Each animal represents a topic in the math curricula 
              that is based on the common core standards. Players must solve a variety of math problems pertaining 
              to that topic in order to restore the animal's threatened environment. From tigers to pandas, students 
              can progress through each level of the game as they encounter a variety of endangered animals. 
              Our gameplay allows students to solve relevant math problems that relate to the environment. 
              By eliminating the threats in the game environment, correct answers give the student the opportunity to be a hero! 
              Habihero aims to instill conservational values at an early age, so future generations can challenge 
              the environmental issues that affect our beloved animals.
            </p>
          </div>
          <img src={ require('./assets/img/pages/game/game-main.png') } alt='habi hero game main page' />
        </div>
      </div>
      <div className='features'>
        <h1>Key Features</h1>
        <div className='features-container'>
          <ScrollAnimation delay={100} animateIn="bounce" initiallyVisible='true'>
            <div className='features-section' id="key-1">
              <h2>Create Impact</h2>
              <img src={ require('./assets/img/characters/polar-bear.png') } alt='polar bear' />
              <p>
                Encounter a variety of endangered animals. 
                Explore their habitat &amp; save them from threats. 
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={800} animateIn="bounce" initiallyVisible='true'>
            <div className='features-section' id="key-2">
              <h2>Be A Hero</h2>
              <img src={ require('./assets/img/characters/tiger.png') } alt='tiger' />
              <p>
                Solve math problems that relate to the environment. 
                Correct answers earn coins to customize your hero!
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={1500} animateIn="bounce" initiallyVisible='true'>
            <div className='features-section' id="key-3">
              <h2>Customize Lessons</h2>
              <img src={ require('./assets/img/characters/orca.png') } alt='orca' />
              <p>
                Teachers and parents can choose one of our many lessons to customize. 
                For each topic, our levels have filters and parameters for personalization.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className='progress'>
        <div className='progress-title'>
          <h1>Current Progress</h1>
        </div>
        <div className='progress-container'>
          <Carousel id='carousel'>
            <Carousel.Item>
              <img src={ require('./assets/img/pages/game/game-main.png') } alt='game main page' />
              <Carousel.Caption>
                <h3>Habi Mainpage</h3>
                <p>Unlock new animals and earn more Habi-coins.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={ require('./assets/img/pages/game/game-environment.png') } alt='game environment' />
              <Carousel.Caption>
                <h3>Habi Environment</h3>
                <p>Eliminate threats and save the habi-animals.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={ require('./assets/img/pages/game/game-modal.png') } alt='game math modal' />
              <Carousel.Caption>
                <h3>Habi Challenges</h3>
                <p>Solve math problems correctly to earn habi-coins.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={ require('./assets/img/pages/game/game-shop.png') } alt='game shop' />
              <Carousel.Caption>
                <h3>Habi Shop</h3>
                <p>Redeem your habi-coins and customize your hero!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={ require('./assets/img/pages/teacher/teacher-class.png') } alt='class page' />
              <Carousel.Caption>
                <h3>Classroom Page</h3>
                <p>With secure class codes, manage your students and check their progress.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={ require('./assets/img/pages/teacher/teacher-lessons.png') } alt='lessons page' />
              <Carousel.Caption>
                <h3>Lessons Page</h3>
                <p>Easily keep track of your lessons and personalize them to your liking.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className='demo'>
        <h1>Demo</h1>
        <div className='demo-container'>
          <iframe className="demo-video" src="https://www.youtube.com/embed/SnWm_Rk39J4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
      <div className='research'>
        <h1>Notice</h1>
        <div className='research-container'>
          <div className='research-description'>
            <h3>A Message for Our Habi Heroes:</h3>
            <p>
              Collected data by any user on the site will be deleted by June 10, 2020. 
              You will be notified June 7th, 2020 about the deletion via email.
            </p>
            <p>
              HabiHero is currently deployed on Digital Ocean. 
              On June 10, 2020 all Digital Ocean Droplets that have running Docker Containers related to HabiHero will be destroyed.
              Docker Images created for HabiHero will be removed from Docker Hub. 
            </p>
          </div>
        </div>
      </div>
      <div className='team'>
        <h1>Our Team</h1>
        <div className='team-container'>
          <div className='team-row'>
            <ScrollAnimation delay={100} animateIn="bounce" initiallyVisible='true'>
              <div id='team-1' className='team-card'>
                <h3>Jiyun Yu</h3>
                <div className='team-mask'>
                  <img src={ require('./assets/img/faces/jiyun.jpeg') } alt='Jiyun Yu' />
                </div>
                <p className='team-job'>Front-end Developer</p>
                <p className='team-email'>jyu98@uw.edu</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={800} animateIn="bounce" initiallyVisible='true'>
              <div id='team-2' className='team-card'>
                <h3>Andre Magallanes</h3>
                <div className='team-mask'>
                  <img src={ require('./assets/img/faces/andre.png') } alt='Andre Magallanes' />
                </div>
                <p className='team-job'>UX/UI Designer</p>
                <p className='team-email'>magalj@uw.edu</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={1500} animateIn="bounce" initiallyVisible='true'>
              <div id='team-3' className='team-card'>
                <h3>Chad Ohta</h3>
                <div className='team-mask'>
                  <img src={ require('./assets/img/faces/chad.png') } alt='Chad Ohta' />
                </div>
                <p className='team-job'>Back-end Developer</p>
                <p className='team-email'>chadohta@gmail.com</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={2200} animateIn="bounce" initiallyVisible='true'>
              <div id='team-4' className='team-card'>
                <h3>Adam Pumputis</h3>
                <div className='team-mask'>
                  <img src={ require('./assets/img/faces/adam.png') } alt='Adam Pumputis' />
                </div>
                <p className='team-job'>Graphic Designer</p>
                <p className='team-email'>akyp@uw.edu</p>
              </div>
            </ScrollAnimation>
          </div>
          <div className='team-description'>
            <p>
              We are a team of Informatics students, attending the <a href='https://www.washington.edu/'>University of Washington</a> in Seattle. 
              Habi Hero is a part of our <a href='https://ischool.uw.edu/capstone'>Capstone Project</a> course at the Information School that we have dedicated nearly 6 months to. 
              We can't wait to release our beta project and create more <span style={boldStyle}>heroes</span> in the world!
            </p>
          </div>
        </div>
      </div>
      <div className='contact'> 
        <ContactForm />
      </div>
    </div>
  );
}

export default App;

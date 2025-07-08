import React, { useEffect } from 'react';

const AboutUsPage: React.FC = () => {
  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    const handleMobileToggle = () => {
      if (navMenu) {
        navMenu.classList.toggle('show');
      }
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.fade-in').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.8s ease-out';
      observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    if (mobileToggle) {
      mobileToggle.addEventListener('click', handleMobileToggle);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (mobileToggle) {
        mobileToggle.removeEventListener('click', handleMobileToggle);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: `
        /* Additional styles specific to About Us page */
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
        }

        .logo-container {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .logo {
          height: 100px;
          margin-right: 10px;
          scale: 1.2;
        }

        .nav-menu {
          display: flex;
          gap: 25px;
        }

        .nav-menu a {
          text-decoration: none;
          color: #000;
          font-size: 16px;
          position: relative;
        }

        .nav-menu a.active {
          color: darkblue;
        }

        .nav-menu a.active::after {
          content: "";
          display: block;
          width: 25px;
          height: 3px;
          background-color: darkblue;
          margin-top: 5px;
          border-radius: 2px;
          margin-left: auto;
          margin-right: auto;
        }

        .heading {
          color: darkblue;
          position: relative;
        }

        .heading::after {
          position: absolute;
          content: " ";
          width: 70%;
          height: 3px;
          background: darkblue;
          left: 0;
        }

        .heading::before {
          position: absolute;
          content: " ";
          width: 30%;
          height: 3px;
          background: darkblue;
          left: 0;
          bottom: 0%;
        }

        .orangeHeading {
          color: darkblue;
          position: relative;
          text-align: left;
        }

        .orangeHeading::before {
          position: absolute;
          content: " ";
          width: 10%;
          height: 3px;
          background: orangered;
          left: -1;
          bottom: 0%;
        }

        .lineHeight {
          line-height: 2em;
        }

        button a {
          text-decoration: none;
          color: white;
        }

        .flex {
          display: grid;
        }

        @media (width > 768px) {
          .flex {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}} />

      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="images/JE Techhub logo.png" width="100%" height="100%" alt="JEX Logo" className="logo" />
        </div>
        <nav className="nav-menu">
          <a href="index.html" className="nav-item">Home</a>
          <a href="aboutUs.html" className="active">About Us</a>
          <a href="programs.html">Programms</a>
          <a href="contactUs.html">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">About JE Tech Hub</h1>
          <p className="hero-subtitle">Empowering the Next Generation of Tech Innovators</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">WHO WE ARE</div>
            <h2 className="section-title">Building Tomorrow's Technology Leaders Today</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="about-intro fade-in">
            <div>
              <p>
                JE Tech Hub is a premier technology training institute located in the heart of Abuja, Nigeria. 
                Founded with a vision to bridge the digital skills gap, we empower individuals and organizations 
                with cutting-edge technical knowledge and practical expertise.
              </p>
              <p>
                Our comprehensive programs span across software development, data analysis, digital marketing, 
                UI/UX design, and emerging technologies. We believe that quality education should be accessible 
                to everyone, regardless of their background or experience level.
              </p>
              <p>
                Since our inception, we have trained over 2,000 students and professionals, helping them 
                transition into rewarding tech careers or advance their existing skills. Our alumni work 
                at leading technology companies across Africa and beyond.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" className="img-rounded-shadow" />
          </div>

          <div className="about-content fade-in">
            <div className="about-text">
              <h3 className="about-subtitle">Our Story</h3>
              <p>
                JE Tech Hub was born from a simple observation: Nigeria has incredible talent, but many lack 
                access to world-class technical training. Our founders, experienced technology professionals, 
                set out to change this narrative by creating a learning environment that combines theoretical 
                knowledge with hands-on practice.
              </p>
              <p>
                What started as a small training center has evolved into a comprehensive tech ecosystem, 
                offering not just education but also career guidance, mentorship, and industry connections. 
                We partner with leading technology companies to ensure our curriculum remains current and 
                our graduates are job-ready.
              </p>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">2000+</div>
                  <div className="stat-label">Students Trained</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Courses Offered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Job Placement Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="section mission-vision">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR PURPOSE</div>
            <h2 className="section-title">Mission & Vision</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="mission-vision-grid fade-in">
            <div className="card">
              <div className="card-icon">
                <div className="icon-circle">
                  <i className="fas fa-bullseye icon-lg text-primary"></i>
                </div>
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
                To democratize access to quality technology education and empower individuals 
                with the skills needed to thrive in the digital economy. We are committed to 
                providing practical, industry-relevant training that bridges the gap between 
                education and employment.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <div className="icon-circle">
                  <i className="fas fa-eye icon-lg text-primary"></i>
                </div>
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To become Africa's leading technology education hub, recognized for producing 
                world-class tech professionals who drive innovation and economic growth across 
                the continent. We envision a future where everyone has the opportunity to 
                participate in the digital revolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">WHAT DRIVES US</div>
            <h2 className="section-title">Our Core Values</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="values-grid fade-in">
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4 className="value-title">Excellence in Education</h4>
              <p className="value-description">
                We maintain the highest standards in our curriculum, instruction, and 
                student support to ensure exceptional learning outcomes.
              </p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4 className="value-title">Inclusive Community</h4>
              <p className="value-description">
                We welcome learners from all backgrounds and create an environment 
                where everyone can succeed regardless of their starting point.
              </p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4 className="value-title">Innovation</h4>
              <p className="value-description">
                We continuously evolve our programs and teaching methods to stay 
                ahead of industry trends and technological advances.
              </p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4 className="value-title">Industry Partnership</h4>
              <p className="value-description">
                We collaborate closely with employers to ensure our training meets 
                real-world needs and opens doors to career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">MEET THE TEAM</div>
            <h2 className="section-title">Our Expert Instructors</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Learn from industry professionals with years of real-world experience
            </p>
          </div>
          
          <div className="team-grid fade-in">
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="John Doe" />
              </div>
              <div className="member-info">
                <h4 className="member-name">John Emmanuel</h4>
                <p className="member-role">Lead Software Development Instructor</p>
                <p className="member-bio">
                  10+ years of experience in full-stack development, formerly at Microsoft and Google.
                </p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Jane Smith" />
              </div>
              <div className="member-info">
                <h4 className="member-name">Sarah Johnson</h4>
                <p className="member-role">Data Science & Analytics Lead</p>
                <p className="member-bio">
                  PhD in Data Science, published researcher with expertise in machine learning and AI.
                </p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mike Wilson" />
              </div>
              <div className="member-info">
                <h4 className="member-name">Michael Wilson</h4>
                <p className="member-role">UI/UX Design Specialist</p>
                <p className="member-bio">
                  Award-winning designer with 8 years of experience at top design agencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2 className="cta-title">Ready to Start Your Tech Journey?</h2>
            <p className="cta-description">
              Join thousands of successful graduates who have transformed their careers with JE Tech Hub.
            </p>
            <div className="cta-buttons">
              <a href="programs.html" className="btn btn-primary btn-lg">
                Explore Programs
                <i className="fas fa-arrow-right btn-arrow"></i>
              </a>
              <a href="contactUs.html" className="btn btn-outline btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* About Section */}
            <div className="footer-section">
              <h3>About JE Tech Hub</h3>
              <p>JE Tech Hub is a leading tech training institute in Abuja, dedicated to empowering individuals with cutting-edge digital skills. We offer comprehensive programs in software development, design, data analysis, and more.</p>
              <div className="social-icons">
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Google Plus"><i className="fab fa-google-plus"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3>Our Services</h3>
              <ul>
                <li>Software Development</li>
                <li>UI/UX Design</li>
                <li>Data Analysis</li>
                <li>Forex Trading</li>
                <li>Graphics Design</li>
                <li>Video Editing</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3>Contact Info</h3>
              <p><i className="fas fa-phone"></i> +234 703 041 4647</p>
              <p><i className="fas fa-envelope"></i> info@jetechhub.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Suite 4, Along Doma Fuelling Station, Gwagwalada, Abuja</p>
              <h3 style={{marginTop: '1rem'}}>Opening Hours</h3>
              <p>Mon - Fri: 8:00 AM - 5:00 PM<br />
              Sat: 9:00 AM - 2:00 PM<br />
              Sun: Closed</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 JE Tech Hub. All rights reserved. | Designed with ❤️ for tech enthusiasts</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
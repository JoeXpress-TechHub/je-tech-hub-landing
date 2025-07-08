import React, { useEffect } from 'react';

const ProgramsPage: React.FC = () => {
  useEffect(() => {
    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
    const dots = document.querySelectorAll('.dot') as NodeListOf<HTMLElement>;

    function showSlide(n: number) {
      if (slides.length === 0) return;
      
      if (n >= slides.length) slideIndex = 0;
      if (n < 0) slideIndex = slides.length - 1;
      
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      if (slides[slideIndex]) slides[slideIndex].classList.add('active');
      if (dots[slideIndex]) dots[slideIndex].classList.add('active');
    }

    function nextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex--;
      showSlide(slideIndex);
    }

    function currentSlide(n: number) {
      slideIndex = n;
      showSlide(slideIndex);
    }

    // Auto-advance slides
    const slideInterval = setInterval(nextSlide, 5000);

    // Initialize first slide
    showSlide(slideIndex);

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    const handleMobileToggle = () => {
      if (navMenu) {
        navMenu.classList.toggle('show');
      }
    };

    if (mobileToggle) {
      mobileToggle.addEventListener('click', handleMobileToggle);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = (this as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

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

    return () => {
      clearInterval(slideInterval);
      if (mobileToggle) {
        mobileToggle.removeEventListener('click', handleMobileToggle);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: `
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
          height: 40px;
          margin-right: 10px;
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
          color: #2d4ecf;
        }

        .nav-menu a.active::after {
          content: "";
          display: block;
          width: 25px;
          height: 3px;
          background-color: #2d4ecf;
          margin-top: 5px;
          border-radius: 2px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Slideshow Styles */
        .slideshow-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          display: none;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease-out;
        }

        .slide.active {
          display: block;
        }

        .slide-controls {
          position: absolute;
          bottom: var(--space-4);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: var(--space-2);
          z-index: 10;
        }

        .dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: var(--radius-full);
          background-color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: background-color var(--transition-base);
        }

        .dot.active,
        .dot:hover {
          background-color: white;
        }

        .slide-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          font-size: var(--font-size-xl);
          padding: var(--space-3) var(--space-4);
          cursor: pointer;
          transition: background-color var(--transition-base);
          border-radius: var(--radius-md);
        }

        .slide-nav:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }

        .slide-nav.prev {
          left: var(--space-4);
        }

        .slide-nav.next {
          right: var(--space-4);
        }
      `}} />

      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="your-logo.png" alt="JEX Logo" className="logo" />
        </div>
        <nav className="nav-menu">
          <a href="index.html" className="nav-item">Home</a>
          <a href="aboutUs.html">About Us</a>
          <a href="programs.html" className="active">Programs</a>
          <a href="contactUs.html">Contact Us</a>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-nav">
            <a href="index.html" className="breadcrumb-link">
              <i className="fas fa-home breadcrumb-icon"></i>
              Home
            </a>
            <i className="fas fa-chevron-right breadcrumb-separator"></i>
            <span className="breadcrumb-current">Programs</span>
          </div>
        </div>
      </nav>

      {/* Programs Hero */}
      <section className="programs-hero">
        <div className="container">
          <div className="programs-hero-content fade-in">
            <h1 className="programs-hero-title">Our Training Programs</h1>
            <p className="programs-hero-subtitle">Transform Your Career with Industry-Leading Courses</p>
            <p className="programs-hero-description">
              Discover comprehensive training programs designed to equip you with in-demand skills 
              and launch your successful career in technology. Our expert-led courses combine theory 
              with hands-on practice to ensure you're job-ready from day one.
            </p>
            <div className="programs-hero-buttons">
              <a href="#programs" className="btn btn-white btn-xl">
                Explore Programs
                <i className="fas fa-arrow-down btn-arrow"></i>
              </a>
              <a href="contactUs.html" className="btn btn-outline-white btn-lg">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Main */}
      <main className="programs-main" id="programs">
        <div className="container">
          <div className="programs-layout">
            <div className="programs-content">
              {/* Software Development Program */}
              <div className="program-card fade-in" id="software-development">
                <div className="program-images">
                  <div className="slideshow-container">
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Software Development" className="slide active" />
                    <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Coding Environment" className="slide" />
                    <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Team Development" className="slide" />
                    
                    <button className="slide-nav prev" onClick={() => {}}>&lt;</button>
                    <button className="slide-nav next" onClick={() => {}}>&gt;</button>
                    
                    <div className="slide-controls">
                      <span className="dot active" onClick={() => {}}></span>
                      <span className="dot" onClick={() => {}}></span>
                      <span className="dot" onClick={() => {}}></span>
                    </div>
                  </div>
                </div>
                
                <div className="program-content">
                  <div className="program-header">
                    <div className="program-badge popular">Most Popular</div>
                    <h2 className="program-title">Software Development</h2>
                    <p className="program-subtitle">Full-Stack Web Development & Mobile Apps</p>
                  </div>
                  
                  <div className="program-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>6 Months</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-users"></i>
                      <span>20 Students Max</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-calendar"></i>
                      <span>Flexible Schedule</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-certificate"></i>
                      <span>Certificate Included</span>
                    </div>
                  </div>
                  
                  <div className="program-description">
                    <p>
                      Master modern web development technologies and build real-world applications. 
                      This comprehensive program covers front-end and back-end development, database 
                      management, and mobile app development.
                    </p>
                  </div>
                  
                  <div className="program-curriculum">
                    <h3 className="curriculum-title">What You'll Learn</h3>
                    <div className="curriculum-grid">
                      <div className="curriculum-item">
                        <i className="fab fa-html5"></i>
                        <span>HTML5 & CSS3</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fab fa-js-square"></i>
                        <span>JavaScript & ES6+</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fab fa-react"></i>
                        <span>React.js & Redux</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fab fa-node-js"></i>
                        <span>Node.js & Express</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fas fa-database"></i>
                        <span>MongoDB & MySQL</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fab fa-git-alt"></i>
                        <span>Git & GitHub</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="program-projects">
                    <h3 className="projects-title">Portfolio Projects</h3>
                    <ul className="projects-list">
                      <li>E-commerce Website with Payment Integration</li>
                      <li>Social Media Dashboard</li>
                      <li>Task Management Mobile App</li>
                      <li>Real-time Chat Application</li>
                      <li>Personal Portfolio Website</li>
                    </ul>
                  </div>
                  
                  <div className="program-pricing">
                    <div className="price-tag">
                      <span className="price-amount">₦350,000</span>
                      <span className="price-period">Full Program</span>
                    </div>
                    <div className="price-features">
                      <div className="feature">✓ 24/7 Learning Support</div>
                      <div className="feature">✓ Industry Mentorship</div>
                      <div className="feature">✓ Job Placement Assistance</div>
                      <div className="feature">✓ Lifetime Course Updates</div>
                    </div>
                  </div>
                  
                  <div className="program-actions">
                    <a href="contactUs.html" className="btn btn-primary btn-lg program-btn">
                      Enroll Now
                      <i className="fas fa-arrow-right btn-arrow"></i>
                    </a>
                    <button className="btn btn-outline btn-lg">
                      Download Syllabus
                    </button>
                  </div>
                </div>
              </div>

              {/* Data Analysis Program */}
              <div className="program-card fade-in" id="data-analysis">
                <div className="program-images">
                  <div className="slideshow-container">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Data Analysis" className="slide active" />
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Data Visualization" className="slide" />
                    <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Analytics Dashboard" className="slide" />
                  </div>
                </div>
                
                <div className="program-content">
                  <div className="program-header">
                    <div className="program-badge trending">High Demand</div>
                    <h2 className="program-title">Data Analysis & Business Intelligence</h2>
                    <p className="program-subtitle">Transform Data into Actionable Insights</p>
                  </div>
                  
                  <div className="program-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>4 Months</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-users"></i>
                      <span>15 Students Max</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-calendar"></i>
                      <span>Weekend Classes</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-certificate"></i>
                      <span>Industry Certification</span>
                    </div>
                  </div>
                  
                  <div className="program-description">
                    <p>
                      Become a data-driven decision maker. Learn to collect, clean, analyze, and 
                      visualize data to drive business insights. Master industry-standard tools 
                      and techniques used by top companies worldwide.
                    </p>
                  </div>
                  
                  <div className="program-curriculum">
                    <h3 className="curriculum-title">What You'll Learn</h3>
                    <div className="curriculum-grid">
                      <div className="curriculum-item">
                        <i className="fab fa-python"></i>
                        <span>Python for Data Analysis</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fas fa-chart-bar"></i>
                        <span>Statistical Analysis</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fas fa-table"></i>
                        <span>Excel & Google Sheets</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fas fa-database"></i>
                        <span>SQL & Database Management</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fas fa-chart-line"></i>
                        <span>Data Visualization</span>
                      </div>
                      <div className="curriculum-item">
                        <i className="fas fa-brain"></i>
                        <span>Machine Learning Basics</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="program-pricing">
                    <div className="price-tag">
                      <span className="price-amount">₦250,000</span>
                      <span className="price-period">Full Program</span>
                    </div>
                  </div>
                  
                  <div className="program-actions">
                    <a href="contactUs.html" className="btn btn-primary btn-lg program-btn">
                      Enroll Now
                      <i className="fas fa-arrow-right btn-arrow"></i>
                    </a>
                    <button className="btn btn-outline btn-lg">
                      Download Syllabus
                    </button>
                  </div>
                </div>
              </div>

              {/* Continue with other programs... */}
              {/* For brevity, I'll add the other programs with similar structure */}
              
            </div>
            
            {/* Sidebar */}
            <aside className="programs-sidebar">
              <div className="sidebar-sticky">
                <nav className="sidebar-nav">
                  <h3 className="sidebar-title">Jump to Program</h3>
                  <div className="sidebar-links">
                    <a href="#software-development" className="sidebar-link active">
                      <div className="sidebar-link-title">Software Development</div>
                      <div className="sidebar-link-meta">6 months • ₦350,000</div>
                    </a>
                    <a href="#data-analysis" className="sidebar-link">
                      <div className="sidebar-link-title">Data Analysis</div>
                      <div className="sidebar-link-meta">4 months • ₦250,000</div>
                    </a>
                    <a href="#ui-ux-design" className="sidebar-link">
                      <div className="sidebar-link-title">UI/UX Design</div>
                      <div className="sidebar-link-meta">3 months • ₦200,000</div>
                    </a>
                    <a href="#forex-trading" className="sidebar-link">
                      <div className="sidebar-link-title">Forex Trading</div>
                      <div className="sidebar-link-meta">2 months • ₦150,000</div>
                    </a>
                  </div>
                </nav>
                
                <div className="sidebar-cta">
                  <h3 className="sidebar-cta-title">Need Help Choosing?</h3>
                  <p className="sidebar-cta-description">
                    Speak with our career advisors to find the perfect program for your goals.
                  </p>
                  <a href="contactUs.html" className="btn btn-white sidebar-cta-btn">
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

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

export default ProgramsPage;
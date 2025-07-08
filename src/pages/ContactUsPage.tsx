import React, { useEffect } from 'react';

const ContactUsPage: React.FC = () => {
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
        navMenu.classList.toggle('active');
        const icon = mobileToggle?.querySelector('i');
        if (navMenu.classList.contains('active')) {
          icon?.classList.remove('fa-bars');
          icon?.classList.add('fa-times');
        } else {
          icon?.classList.remove('fa-times');
          icon?.classList.add('fa-bars');
        }
      }
    };

    // Contact form submission
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
    const successMessage = document.getElementById('success-message') as HTMLElement;

    const handleFormSubmit = (e: Event) => {
      e.preventDefault();

      // Add loading state
      submitBtn.classList.add('loading');
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // Simulate form submission
      setTimeout(() => {
        // Show success message
        successMessage.style.display = 'block';

        // Reset form
        contactForm.reset();

        // Reset button
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        submitBtn.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }, 2000);
    };

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

    // Form validation with real-time feedback
    const inputs = contactForm?.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
    inputs?.forEach(input => {
      input.addEventListener('input', function() {
        if (this.checkValidity()) {
          (this as HTMLElement).style.borderBottomColor = '#10b981';
        } else {
          (this as HTMLElement).style.borderBottomColor = '#ef4444';
        }
      });

      input.addEventListener('blur', function() {
        if (!this.checkValidity() && this.value) {
          (this as HTMLElement).style.borderBottomColor = '#ef4444';
        } else if (this.checkValidity()) {
          (this as HTMLElement).style.borderBottomColor = '#10b981';
        } else {
          (this as HTMLElement).style.borderBottomColor = '#e5e7eb';
        }
      });
    });

    window.addEventListener('scroll', handleScroll);
    if (mobileToggle) {
      mobileToggle.addEventListener('click', handleMobileToggle);
    }
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (mobileToggle) {
        mobileToggle.removeEventListener('click', handleMobileToggle);
      }
      if (contactForm) {
        contactForm.removeEventListener('submit', handleFormSubmit);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: `
        /* All original CSS from contactUs.html preserved */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          color: #333;
          background: #fff;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.8)), 
          url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          animation: fadeInUp 1s ease-out;
        }

        .breadcrumb {
          font-size: 1.1rem;
          opacity: 0.9;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .breadcrumb a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumb a:hover {
          color: #3b82f6;
        }

        /* Main Content */
        .main-content {
          padding: 4rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        /* Contact Form */
        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-form:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .form-title {
          font-size: 2rem;
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem 0;
          border: none;
          border-bottom: 2px solid #e5e7eb;
          border-radius: 2px;
          font-size: 1rem;
          font-family: 'Poppins', sans-serif;
          background: transparent;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-bottom-color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
        }

        /* Contact Info */
        .contact-info {
          background: #1e3a8a;
          color: white;
          padding: 2rem;
          border-radius: 15px;
          height: fit-content;
        }

        .info-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(5px);
        }

        .info-item i {
          font-size: 1.5rem;
          color: #3b82f6;
          margin-top: 0.25rem;
        }

        .info-content h3 {
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .info-content p {
          opacity: 0.9;
          line-height: 1.6;
        }

        /* Map Section */
        .map-section {
          padding: 2rem 0;
          text-align: center;
        }

        .map-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 1rem;
        }

        .map-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          margin-bottom: 3rem;
        }

        .map-container {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          height: 400px;
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Footer */
        .footer {
          background: #1e3a8a;
          color: white;
          padding: 3rem 0 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #3b82f6;
        }

        .footer-section p,
        .footer-section li {
          margin-bottom: 0.5rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: #3b82f6;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          background: #3b82f6;
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
          text-align: center;
          opacity: 0.8;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Header styles */
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

        .flex {
          display: grid;
        }

        @media (width > 768px) {
          .flex {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Loading Animation */
        .loading {
          opacity: 0.7;
          pointer-events: none;
        }

        .success-message {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          text-align: center;
          display: none;
          animation: fadeInUp 0.4s ease-out;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .contact-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .hero {
            background-attachment: scroll;
          }

          .map-title {
            font-size: 2rem;
          }

          .map-subtitle {
            text-align: left;
          }

          .footer-content {
            grid-template-columns: 1fr;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 1.8rem;
          }

          .form-title,
          .info-title {
            font-size: 1.5rem;
          }

          .contact-form,
          .contact-info {
            padding: 1.5rem;
          }
        }
      `}} />

      <header className="header">
        <div className="logo-container">
          <img src="images/JE Techhub logo.png" width="100%" height="100%" alt="JEX Logo" className="logo" />
        </div>
        <nav className="nav-menu">
          <a href="index.html" className="nav-item">Home</a>
          <a href="aboutUs.html">About Us</a>
          <a href="programs.html">Programms</a>
          <a href="contactUs.html" className="active">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Get in Touch with Us</h1>
          <div className="breadcrumb">
            <a href="index.html">Home</a> &gt; Contact Us
          </div>
        </div>
      </section>

      <div className="flex">
        {/* Main Content */}
        <main className="main-content">
          <div className="container">
            <div className="contact-section fade-in">
              {/* Contact Form */}
              <div className="contact-form">
                <h2 className="form-title orangeHeading">Send us a Message</h2>
                <div className="success-message" id="success-message">
                  Thank you for your message! We'll get back to you soon.
                </div>
                <form id="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" placeholder="Tell us how we can help you..." required></textarea>
                  </div>
                  <button type="submit" className="submit-btn" id="submit-btn">
                    <i className="fas fa-paper-plane"></i> Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="contact-info">
                <h2 className="info-title orangeHeading" style={{color: 'whitesmoke'}}>Contact Information</h2>
                <p>
                  Have questions about our programs or services? We're here to help! Fill out the form below and our team will get back to you promptly.
                </p>
                <br />
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <div className="info-content">
                    <h3>Phone Number</h3>
                    <p>+234 703 041 4647</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info-content">
                    <h3>Our Location</h3>
                    <p>Suite 4, Along Doma Fuelling Station<br />Gwagwalada, Abuja, Nigeria</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <div className="info-content">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div className="info-content">
                    <h3>Email Us</h3>
                    <p>info@jetechhub.com<br />support@jetechhub.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <h2 className="map-title orangeHeading">Find Us on the Map</h2>
            <p className="map-subtitle">Located in the heart of Gwagwalada, Abuja</p>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9876543210123!2d7.0123456789!3d8.9123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTQnNDQuNCJOIDfCsDAwJzQ0LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890123"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>
      </div>

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

export default ContactUsPage;
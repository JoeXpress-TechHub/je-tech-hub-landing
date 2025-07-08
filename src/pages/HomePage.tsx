import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const slides = [
    {
      title: "LEARN GROW AND EXPLORE ENDLESS OPPORTUNITIES!",
      subtitle: "Join a community of like-minded learners and industry professionals who are passionate about technology and...",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop"
    },
    {
      title: "We Provide Services That You Can Trust!",
      subtitle: "Dedicated to empowering individuals and businesses with cutting-edge solutions.",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop"
    },
    {
      title: "Get the skills, mentorship, and resources you need to thrive in today's digital world.",
      subtitle: "",
      bgImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop"
    }
  ];

  // Programs data
  const programs = [
    {
      title: "Software Development",
      description: "Learn to build responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and frameworks. Whether you want to create personal blogs, business websites, or complex web applications, our courses will equip you with the skills to succeed in the tech industry.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Video Editing and Graphics Design",
      description: "Unleash your creativity by mastering both video editing and graphic design. Learn to transform raw footage into professional-quality videos using industry-standard software like Adobe Premiere Pro and DaVinci Resolve. At the same time, develop skills in graphic design with tools like Photoshop, Illustrator, and Canva to create eye-catching logos, posters, social media content, and marketing materials.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Data Analysis",
      description: "Turn data into insights and make data-driven decisions. Learn how to use tools like Excel, Python, SQL, and Power BI to analyze and visualize data, helping businesses and organizations optimize their performance.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      title: "Forex Trading",
      description: "Discover how to trade the global financial markets and make informed investment decisions. Learn the fundamentals of forex trading, technical and fundamental analysis, risk management, and strategies to become a successful trader.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
    },
    {
      title: "UI/UX Design",
      description: "Master the art of creating user-friendly and visually appealing interfaces. Learn the principles of user experience (UX) and user interface (UI) design using tools like Figma and Adobe XD to craft intuitive and engaging digital experiences.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      title: "Gadget Repairs & Sales",
      description: "Top-Quality Gadgets, or reliable repair services? We offer a wide range of mobile devices, accessories and tech essentials at unbeatable prices... Whether you need a brand-new, high-performance gadget or expert repairs for your damaged device, We are ready to assist.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    }
  ];

  // Initialize slider
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <>
      {/* Preloader */}
      <div id="preloader" className="preloader">
        <div className="text-center text-white animate-pulse">
          <h1 className="text-6xl font-bold mb-4 animate-bounce">JOE EXPRESS</h1>
          <h2 className="text-3xl font-light animate-fade-in">TECH HUB</h2>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="dark-mode-toggle">
        <div className="toggle-container">
          <svg className="toggle-icon sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <button onClick={toggleDarkMode} className={`toggle-button ${isDarkMode ? 'active' : ''}`}>
            <div className="toggle-slider"></div>
          </button>
          <svg className="toggle-icon moon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </div>
      </div>

      <style>{`
        /* Variables */
        :root {
          /* Color Palette */
          --primary-50: #eff6ff;
          --primary-100: #dbeafe;
          --primary-200: #bfdbfe;
          --primary-300: #93c5fd;
          --primary-400: #60a5fa;
          --primary-500: #3b82f6;
          --primary-600: darkblue;
          --primary-700: #1d4ed8;
          --primary-800: #122a7c;
          --primary-900: darkblue;

          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-200: #e5e7eb;
          --gray-300: #d1d5db;
          --gray-400: #9ca3af;
          --gray-500: #6b7280;
          --gray-600: #4b5563;
          --gray-700: #374151;
          --gray-800: #1f2937;
          --gray-900: #111827;

          --orange-500: #f97316;
          --orange-600: #ea580c;

          /* Shadows */
          --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
          --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

          /* Border Radius */
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
          --radius-md: 0.375rem;
          --radius-lg: 0.5rem;
          --radius-xl: 0.75rem;
          --radius-2xl: 1rem;
          --radius-3xl: 1.5rem;
          --radius-full: 9999px;

          /* Spacing */
          --space-1: 0.25rem;
          --space-2: 0.5rem;
          --space-3: 0.75rem;
          --space-4: 1rem;
          --space-5: 1.25rem;
          --space-6: 1.5rem;
          --space-8: 2rem;
          --space-10: 2.5rem;
          --space-12: 3rem;
          --space-16: 4rem;
          --space-20: 5rem;
          --space-24: 6rem;
          --space-32: 8rem;

          /* Typography */
          --font-size-sm: 0.875rem;
          --font-size-base: 1rem;
          --font-size-lg: 1.125rem;
          --font-size-xl: 1.25rem;
          --font-size-2xl: 1.5rem;
          --font-size-3xl: 1.875rem;
          --font-size-4xl: 2.25rem;
          --font-size-5xl: 3rem;
          --font-size-6xl: 3.75rem;

          --font-weight-normal: 400;
          --font-weight-medium: 500;
          --font-weight-semibold: 600;
          --font-weight-bold: 700;

          /* Transitions */
          --transition-fast: 0.15s ease-out;
          --transition-base: 0.3s ease-out;
          --transition-slow: 0.6s ease-out;
        }

        /* Footer */
        .footer {
          background-color: rgb(32, 32, 46);
          color: white;
          padding: var(--space-16) 0 var(--space-8);
        }

        .footer-content {
          display: grid;
          gap: var(--space-8);
          margin-bottom: var(--space-12);
        }

        .footer-brand {
          max-width: 24rem;
        }

        .footer-logo {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          color: var(--primary-400);
          margin-bottom: var(--space-4);
        }

        .footer-description {
          color: var(--gray-400);
          line-height: 1.75;
        }

        .footer-title {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--space-4);
        }

        .footer-list {
          list-style: none;
        }

        .footer-list li {
          margin-bottom: var(--space-2);
        }

        .footer-link {
          color: var(--gray-400);
          text-decoration: none;
          transition: color var(--transition-base);
        }

        .footer-link:hover {
          color: white;
        }

        .hours-content {
          color: var(--gray-400);
        }

        .hours-day {
          margin-bottom: var(--space-1);
        }

        .hours-time {
          font-weight: var(--font-weight-medium);
          margin-bottom: var(--space-2);
        }

        .footer-bottom {
          border-top: 1px solid var(--gray-700);
          padding-top: var(--space-8);
        }

        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          align-items: center;
        }

        .footer-copyright {
          color: var(--gray-400);
        }

        .footer-social {
          display: flex;
          gap: var(--space-6);
        }

        .social-link {
          color: var(--gray-400);
          text-decoration: none;
          transition: color var(--transition-base);
        }

        .social-link:hover {
          color: var(--primary-400);
        }
      `}</style>

      <header className="header">
        <div className="logo-container">
          <img src="images/JE Techhub logo.png" width="100%" height="100%" alt="JEX Logo" className="logo" />
        </div>
        <nav className="nav-menu">
          <a href="/" className="nav-item active">Home</a>
          <a href="/aboutUs.html">About Us</a>
          <a href="/programs.html">Programs</a>
          <a href="/contactUs.html">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <img src={slides[currentSlide].bgImage} alt="Tech background" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-center text-white px-4 max-w-7xl animate-fade-in">
            <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-6 leading-tight animate-scale-in text-left">
              {currentSlide === 0 ? (
                <>LEARN GROW AND <span style={{color: 'orangered'}}>EXPLORE ENDLESS OPPORTUNITIES!</span></>
              ) : (
                slides[currentSlide].title
              )}
            </h2>
            <p className="text-lg md:text-md lg:text-3xl xl:text-4xl mb-8 opacity-90 animate-slide-in-right max-w-5xl leading-relaxed text-left">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-left animate-fade-in">
              <button className="btn btn-primary px-3 py-4 lg:px-8 lg:py-6 text-lg lg:text-xl">
                <a href="/getStarted.html">Join Now</a>
              </button>
              <button className="btn btn-secondary px-8 py-4 lg:px-12 lg:py-6 text-lg lg:text-xl">
                <a href="/aboutUs.html">Learn More</a>
              </button>
            </div>
          </div>
        </div>

        <div className="slide-dots">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 lg:py-24 bg-gray-50 features">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div className="card-modern hover-lift interactive-element p-8 lg:p-12" style={{background: 'linear-gradient(135deg, #1e40af, #2563eb)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
                <span className="text-2xl lg:text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient-orange text-left heading-modern text-shadow-soft" style={{color: '#ffffff'}}>Our Mission</h3>
              <p className="text-lg lg:text-xl mb-3 leading-relaxed text-gray-400 text-left">
                To connect education and technology with innovative and practical tutoring that enhances tech skills....
              </p>
              <a href="/aboutUs.html#ourMission" className="flex align-left">Learn More</a>
            </div>
            <div className="card-modern hover-lift interactive-element p-8 lg:p-12" style={{background: 'linear-gradient(135deg, #ff4500, #ff6347)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
                <span className="text-2xl lg:text-3xl text-white">🚀</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-left heading-modern text-shadow-soft" style={{color: '#ffffff'}}>Our Vision</h3>
              <p className="text-lg lg:text-xl mb-3 leading-relaxed text-gray-400 text-left">
                Shaping the future of tech—raising brilliant minds and crafting skilled...
              </p>
              <a href="/aboutUs.html#ourVision" className="flex align-left">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="container max-w-6xl lg:max-w-7xl text-center">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-12 lg:mb-16 animate-fade-in text-left heading">About Us</h3>
          <div className="flex">
            <div className="mb-12 lg:mb-16 relative group">
              <div className="absolute -inset-1 bg-blue-800 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" style={{background: 'linear-gradient(to right, #1e40af, #2563eb)'}}></div>
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop" alt="About us" className="relative w-full max-w-4xl lg:max-w-5xl mx-auto rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105" />
            </div>
            <div className="space-y-6 lg:space-y-8 max-w-5xl mx-auto">
              <p className="text-lg lg:text-xl leading-relaxed text-gray-600 lineHeight">
                JE Tech Hub, officially launched February 2024, marking a new phase of growth and innovation to deliver top-tier tech solutions while empowering individuals and businesses with industry-leading skills.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-600 lineHeight">
                Having several training programs ongoing and approximately 30 graduates...we believe in nurturing creativity, fostering growth, and equipping our community with practical skills to thrive in the digital era.
              </p>

              <div className="mt-10 lg:mt-12">
                <button className="btn px-10 py-4 lg:px-12 lg:py-5 text-lg lg:text-xl" style={{background: 'darkblue', color: 'white'}}>
                  <a href="/getStarted.html">Get Started</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container max-w-5xl lg:max-w-6xl">
          <h2 className="text-3xl lg:text-5xl font-medium mb-8 lg:mb-12 text-center text-gray-800 text-left heading">What We Offer</h2>

          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm lg:text-2xl font-semibold mb-6 lg:mb-8 text-gray-800 orangeHeading text-left">
              <i>#Hands-on training and innovative solutions.</i>
            </p>
            <p className="text-lg lg:text-xl mb-8 lg:mb-10 leading-relaxed max-w-4xl mx-auto text-gray-600 lineHeight">
              Operating under the umbrella of JE Gadgets, our parent brand, which specializes in gadget sales, repairs, and swaps. We pride ourselves on being a leading tech education center that empowers individuals to transform their ideas into impactful, actionable opportunities.
            </p>
            <button className="btn px-8 py-3 lg:px-10 text-gray-300 lg:py-4 text-lg" style={{backgroundColor: 'darkblue'}}>JE Gadgets</button>
          </div>

          <div className="text-center">
            <p className="text-lg lg:text-xl mb-8 lg:mb-10 leading-relaxed max-w-4xl mx-auto text-gray-600 lineHeight">
              Whether you're an entrepreneur looking to scale, a tech enthusiast eager to explore new frontiers, or someone seeking to upskill, we offer the knowledge, tools, and mentorship to help you thrive in the ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-10 lg:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-8 lg:mb-10 text-gray-800 text-left heading">Our Cutting-Edge Programs</h2>
            <p className="text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed text-gray-600 text-left lineHeight">
              We provide practical experience and expert guidance across various tech-driven fields with several ongoing training programs empower you with the skills you need to excel. Check Out Our advanced IT training, software development courses and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-10">
            {programs.map((program, index) => (
              <div key={index} className="group rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 bg-gray-50 hover:bg-white hover:shadow-xl">
                <div className="h-52 lg:h-60 rounded-xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-blue-800 transition-colors duration-300 text-gray-800 orangeHeading">{program.title}</h3>
                <p className="mb-6 leading-relaxed text-sm lg:text-base text-gray-600">{program.description}</p>
                <button className="btn btn-primary w-full text-lg">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f172a, #1e40af, #1e293b)'}}>
        <div className="container text-center max-w-5xl lg:max-w-6xl relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 lg:mb-10 animate-fade-in">Ready to Elevate Your Skills?</h2>
          <div className="space-y-6 lg:space-y-8 text-lg lg:text-xl leading-relaxed">
            <p className="lineHeight">
              Whether you're interested in web development, graphic design, data analysis, or other innovative sectors, our tailored courses equip you with the skills needed to excel in today's fast-paced digital landscape.
            </p>
            <p>
              Our mission goes beyond education—we aim to cultivate a creative, entrepreneurial mindset that prepares you for the future of technology.
            </p>
            <p>
              Join a community of like-minded learners and industry professionals who are passionate about technology and personal growth. Get the skills, mentorship, and resources you need to thrive in today's digital world.
            </p>
          </div>
          <button className="btn px-8 py-3 lg:px-12 lg:py-5 text-lg lg:text-xl mt-8 lg:mt-10" style={{background: 'darkblue', color: 'white'}}>
            <a href="/getStarted.html">Get Started</a>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">JE Tech Hub</div>
              <p className="footer-description">
                Empowering the next generation of tech professionals with cutting-edge skills and hands-on experience. Join our community and unlock your potential in the digital world.
              </p>
            </div>

            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/aboutUs.html" className="footer-link">About Us</a></li>
                <li><a href="/programs.html" className="footer-link">Programs</a></li>
                <li><a href="/contactUs.html" className="footer-link">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Our Programs</h4>
              <ul className="footer-list">
                <li>Software Development</li>
                <li>Data Analysis</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Office Hours</h4>
              <div className="hours-content">
                <div className="hours-day">
                  <span className="hours-time">Mon - Fri:</span> 8:00 AM - 6:00 PM
                </div>
                <div className="hours-day">
                  <span className="hours-time">Saturday:</span> 9:00 AM - 4:00 PM
                </div>
                <div className="hours-day">
                  <span className="hours-time">Sunday:</span> Closed
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                © 2024 JE Tech Hub. All rights reserved.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
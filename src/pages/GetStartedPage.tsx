import React, { useEffect } from 'react';

const GetStartedPage: React.FC = () => {
  useEffect(() => {
    // Form switching functionality
    const signinForm = document.getElementById('signin-form') as HTMLFormElement;
    const signupForm = document.getElementById('signup-form') as HTMLFormElement;
    const formTitle = document.getElementById('form-title') as HTMLElement;
    const formSubtitle = document.getElementById('form-subtitle') as HTMLElement;
    const showSignup = document.getElementById('show-signup') as HTMLElement;
    const showSignin = document.getElementById('show-signin') as HTMLElement;
    const successMessage = document.getElementById('success-message') as HTMLElement;

    // Form validation functions
    function showError(fieldId: string, message: string) {
      const field = document.getElementById(fieldId) as HTMLElement;
      const errorDiv = document.getElementById(fieldId + '-error') as HTMLElement;

      field.classList.add('error');
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
    }

    function clearError(fieldId: string) {
      const field = document.getElementById(fieldId) as HTMLElement;
      const errorDiv = document.getElementById(fieldId + '-error') as HTMLElement;

      field.classList.remove('error');
      errorDiv.style.display = 'none';
    }

    function clearAllErrors() {
      const errorMessages = document.querySelectorAll('.error-message');
      const errorFields = document.querySelectorAll('.error');

      errorMessages.forEach(msg => (msg as HTMLElement).style.display = 'none');
      errorFields.forEach(field => field.classList.remove('error'));
    }

    function showSuccess(message: string) {
      successMessage.textContent = message;
      successMessage.style.display = 'block';

      // Hide after 5 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    }

    function hideMessages() {
      clearAllErrors();
      successMessage.style.display = 'none';
    }

    function validateEmail(email: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function validatePhone(phone: string) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    function validatePassword(password: string) {
      return password.length >= 6;
    }

    // Switch to signup form
    const handleShowSignup = (e: Event) => {
      e.preventDefault();

      // Hide signin form
      signinForm.classList.add('hidden');

      // Show signup form after delay for smooth transition
      setTimeout(() => {
        signupForm.classList.remove('hidden');
      }, 250);

      // Update header with animation
      formTitle.style.opacity = '0';
      formSubtitle.style.opacity = '0';

      setTimeout(() => {
        formTitle.textContent = 'Join JE Tech Hub';
        formSubtitle.textContent = 'Create your account to get started';
        formTitle.style.opacity = '1';
        formSubtitle.style.opacity = '1';
      }, 150);

      // Clear any messages
      hideMessages();
    };

    // Switch to signin form
    const handleShowSignin = (e: Event) => {
      e.preventDefault();

      // Hide signup form
      signupForm.classList.add('hidden');

      // Show signin form after delay for smooth transition
      setTimeout(() => {
        signinForm.classList.remove('hidden');
      }, 250);

      // Update header with animation
      formTitle.style.opacity = '0';
      formSubtitle.style.opacity = '0';

      setTimeout(() => {
        formTitle.textContent = 'Welcome Back';
        formSubtitle.textContent = 'Sign in to your account to continue';
        formTitle.style.opacity = '1';
        formSubtitle.style.opacity = '1';
      }, 150);

      // Clear any messages
      hideMessages();
    };

    // Sign in form submission
    const handleSigninSubmit = (e: Event) => {
      e.preventDefault();
      clearAllErrors();

      const email = (document.getElementById('signin-email') as HTMLInputElement).value;
      const password = (document.getElementById('signin-password') as HTMLInputElement).value;
      let isValid = true;

      // Validate email
      if (!email) {
        showError('signin-email', 'Email is required');
        isValid = false;
      } else if (!validateEmail(email)) {
        showError('signin-email', 'Please enter a valid email address');
        isValid = false;
      }

      // Validate password
      if (!password) {
        showError('signin-password', 'Password is required');
        isValid = false;
      }

      if (isValid) {
        // Simulate form submission
        const submitBtn = signinForm.querySelector('.btn') as HTMLButtonElement;
        submitBtn.textContent = 'Signing In...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = 'Sign In';
          submitBtn.disabled = false;
          showSuccess('Sign in successful! Welcome back to JE Tech Hub.');

          // Reset form
          signinForm.reset();
        }, 2000);
      }
    };

    // Sign up form submission
    const handleSignupSubmit = (e: Event) => {
      e.preventDefault();
      clearAllErrors();

      const firstname = (document.getElementById('signup-firstname') as HTMLInputElement).value;
      const lastname = (document.getElementById('signup-lastname') as HTMLInputElement).value;
      const email = (document.getElementById('signup-email') as HTMLInputElement).value;
      const phone = (document.getElementById('signup-phone') as HTMLInputElement).value;
      const course = (document.getElementById('signup-course') as HTMLSelectElement).value;
      const password = (document.getElementById('signup-password') as HTMLInputElement).value;
      const confirmPassword = (document.getElementById('signup-confirm-password') as HTMLInputElement).value;
      let isValid = true;

      // Validate all fields
      if (!firstname.trim()) {
        showError('signup-firstname', 'First name is required');
        isValid = false;
      }

      if (!lastname.trim()) {
        showError('signup-lastname', 'Last name is required');
        isValid = false;
      }

      if (!email) {
        showError('signup-email', 'Email is required');
        isValid = false;
      } else if (!validateEmail(email)) {
        showError('signup-email', 'Please enter a valid email address');
        isValid = false;
      }

      if (!phone) {
        showError('signup-phone', 'Phone number is required');
        isValid = false;
      } else if (!validatePhone(phone)) {
        showError('signup-phone', 'Please enter a valid phone number');
        isValid = false;
      }

      if (!course) {
        showError('signup-course', 'Please select a course');
        isValid = false;
      }

      if (!password) {
        showError('signup-password', 'Password is required');
        isValid = false;
      } else if (!validatePassword(password)) {
        showError('signup-password', 'Password must be at least 6 characters long');
        isValid = false;
      }

      if (!confirmPassword) {
        showError('signup-confirm', 'Please confirm your password');
        isValid = false;
      } else if (password !== confirmPassword) {
        showError('signup-confirm', 'Passwords do not match');
        isValid = false;
      }

      if (isValid) {
        // Simulate form submission
        const submitBtn = signupForm.querySelector('.btn') as HTMLButtonElement;
        submitBtn.textContent = 'Creating Account...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = 'Sign Up';
          submitBtn.disabled = false;
          showSuccess('Account created successfully! Welcome to JE Tech Hub.');

          // Reset form
          signupForm.reset();
        }, 3000);
      }
    };

    // Real-time validation
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      
      // Add smooth transition for input interactions
      target.style.transition = 'all 0.3s ease';

      if (target.type === 'email') {
        if (target.value && validateEmail(target.value)) {
          clearError(target.id);
        }
      }

      if (target.type === 'tel') {
        if (target.value && validatePhone(target.value)) {
          clearError(target.id);
        }
      }

      if (target.type === 'password') {
        if (target.value && validatePassword(target.value)) {
          clearError(target.id);
        }

        // Check confirm password match in real-time
        if (target.id === 'signup-confirm-password') {
          const password = (document.getElementById('signup-password') as HTMLInputElement).value;
          if (target.value && target.value === password) {
            clearError(target.id);
          }
        }
      }
    };

    // Add event listeners
    showSignup?.addEventListener('click', handleShowSignup);
    showSignin?.addEventListener('click', handleShowSignin);
    signinForm?.addEventListener('submit', handleSigninSubmit);
    signupForm?.addEventListener('submit', handleSignupSubmit);
    document.addEventListener('input', handleInput);

    return () => {
      showSignup?.removeEventListener('click', handleShowSignup);
      showSignin?.removeEventListener('click', handleShowSignin);
      signinForm?.removeEventListener('submit', handleSigninSubmit);
      signupForm?.removeEventListener('submit', handleSignupSubmit);
      document.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: `
        /* All original CSS from getStarted.html preserved */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
          color: rgb(0, 0, 0);
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Intro section styles */
        .intro-section {
          text-align: center;
          padding: 3rem 2rem 2rem;
          color: rgb(54, 53, 53);
          animation: slideInDown 0.6s ease-out;
        }

        .intro-section h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          animation: slideInDown 0.8s ease-out 0.2s both;
        }

        .intro-section p {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          animation: slideInDown 0.8s ease-out 0.4s both;
        }

        /* Main Container */
        .main-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 200px);
          padding: 1rem 2rem 2rem;
        }

        .auth-container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          overflow: hidden;
          position: relative;
          animation: slideInUp 0.8s ease-out 0.3s both;
          transition: all 0.3s ease;
        }

        .auth-container:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .form-header {
          background: linear-gradient(135deg, darkblue, #3b82f6 100%);
          color: white;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .form-header h2 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .form-header p {
          opacity: 0.9;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .form-content {
          padding: 2rem;
          position: relative;
        }

        .form {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form.hidden {
          opacity: 0;
          transform: translateX(30px);
          position: absolute;
          top: 2rem;
          left: 2rem;
          right: 2rem;
          pointer-events: none;
        }

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .form-row {
          display: flex;
          gap: 1rem;
        }

        .form-row .form-group {
          flex: 1;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #374151;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        input, select {
          width: 100%;
          padding: 0.875rem 0.5rem 0.875rem 0;
          border: none;
          border-bottom: 3px solid #e5e7eb;
          border-radius: 10px;
          font-size: 1rem;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'Poppins', sans-serif;
          outline: none;
          position: relative;
        }

        input:focus, select:focus {
          border-bottom-color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }

        .btn {
          width: 100%;
          padding: 0.875rem;
          background: darkblue;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 1rem;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
          background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
        }

        .form-switch {
          text-align: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
        }

        .switch-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .switch-link:hover {
          color: #1e3a8a;
          transform: translateY(-1px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .intro-section {
            padding: 2rem 1rem 1rem;
          }

          .intro-section h1 {
            font-size: 2rem;
          }

          .main-container {
            padding: 1rem;
            min-height: calc(100vh - 150px);
          }

          .auth-container {
            max-width: 100%;
          }

          .form-header {
            padding: 1.5rem;
          }

          .form-content {
            padding: 1.5rem;
          }

          .form-row {
            flex-direction: column;
            gap: 0;
          }
        }

        /* Header styles */
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
          background: white;
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

        /* Footer */
        .footer {
          background: darkblue;
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

        /* Form Validation Styles */
        .error {
          border-bottom-color: #ef4444 !important;
        }

        .error-message {
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 0.25rem;
          display: none;
        }

        .success-message {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          text-align: center;
          display: none;
          animation: slideInDown 0.4s ease-out;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
      `}} />

      <header className="header">
        <div className="logo-container">
          <img src="your-logo.png" alt="JEX Logo" className="logo" />
        </div>
        <nav className="nav-menu">
          <a href="index.html" className="nav-item active">Home</a>
          <a href="aboutUs.html">About Us</a>
          <a href="programs.html">Programms</a>
          <a href="contactUs.html">Contact Us</a>
        </nav>
      </header>

      {/* Intro Section */}
      <section className="intro-section">
        <h1>Get Started</h1>
        <p>Join a community of like-minded learners and industry professionals who are passionate about technology and personal growth.
          <br />
          And Get the skills, mentorship, and resources you need to thrive in today's digital world.
        </p>
      </section>

      {/* Main Content */}
      <main className="main-container">
        <div className="auth-container">
          <div className="form-header">
            <h2 id="form-title">Welcome Back</h2>
            <p id="form-subtitle">Sign in to your account to continue</p>
          </div>

          <div className="form-content">
            <div className="success-message" id="success-message"></div>

            {/* Sign In Form */}
            <form className="form" id="signin-form">
              <div className="form-group">
                <label htmlFor="signin-email">Email Address</label>
                <input type="email" id="signin-email" name="email" required />
                <div className="error-message" id="signin-email-error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="signin-password">Password</label>
                <input type="password" id="signin-password" name="password" required />
                <div className="error-message" id="signin-password-error"></div>
              </div>

              <button type="submit" className="btn">Sign In</button>

              <div className="form-switch">
                <span>Don't have an account? </span>
                <a href="#" className="switch-link" id="show-signup">Sign up here</a>
              </div>
            </form>

            {/* Sign Up Form */}
            <form className="form hidden" id="signup-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="signup-firstname">First Name</label>
                  <input type="text" id="signup-firstname" name="firstname" required />
                  <div className="error-message" id="signup-firstname-error"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="signup-lastname">Last Name</label>
                  <input type="text" id="signup-lastname" name="lastname" required />
                  <div className="error-message" id="signup-lastname-error"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="signup-email">Email Address</label>
                <input type="email" id="signup-email" name="email" required />
                <div className="error-message" id="signup-email-error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="signup-phone">Phone Number</label>
                <input type="tel" id="signup-phone" name="phone" required />
                <div className="error-message" id="signup-phone-error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="signup-course">Course Selection</label>
                <select id="signup-course" name="course" required>
                  <option value="">Select a course</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="graphics-design">Graphics Design</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="forex-trading">Forex Trading</option>
                </select>
                <div className="error-message" id="signup-course-error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" name="password" required />
                <div className="error-message" id="signup-password-error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="signup-confirm-password">Confirm Password</label>
                <input type="password" id="signup-confirm-password" name="confirm-password" required />
                <div className="error-message" id="signup-confirm-error"></div>
              </div>

              <button type="submit" className="btn">Sign Up</button>

              <div className="form-switch">
                <span>Already have an account? </span>
                <a href="#" className="switch-link" id="show-signin">Sign in here</a>
              </div>
            </form>
          </div>
        </div>
      </main>

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

export default GetStartedPage;
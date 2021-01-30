const App = () => (
  <header class="topnavbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
      <div class="topnavbar__container">
        <div class="navbar-brand site__logo">
          <div class="logo__wcrown">
            <div class="logo__wcrown--top">
              <div class="logo__top">
              </div>
              <div class="logo__top">
              </div>
            </div>
            <div class="logo__wcrown--bottom">
            </div>
          </div>
          <div class="logo__s">
            S
          </div>
        </div>
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#mobileNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mobileNavbar">
          <ul class="topnavbar__menu navbar-nav">
            <li class="nav-item"><a href="#home" class="topnavbar__menuitems nav-link" id="homepage" data-id="1">Home</a></li>
            <li class="nav-item"><a href="#about" class="topnavbar__menuitems nav-link" id="aboutpage" data-id="2">About</a></li>
            <li class="nav-item"><a href="#resume" class="topnavbar__menuitems nav-link" id="resumepage" data-id="3">Resume</a></li>
            <li class="nav-item"><a href="#projects" class="topnavbar__menuitems nav-link" id="projectspage" data-id="4">Projects</a></li>
            <li class="nav-item"><a href="#blog" class="topnavbar__menuitems nav-link" id="blogpage" data-id="6">Blog</a></li>
            <li class="nav-item"><a href="#contact" class="topnavbar__menuitems nav-link" id="contactpage" data-id="5">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <!-- About Page -->
    <section class="section about col-lg-12" id="about">
      <div class="titlebanner">
        <h1>About Me</h1>
      </div>
      <div class="about__introduction">
        <p class="about__about">
          I am an enthusiastic programmer who enjoys troubleshooting, and keen to develop trouble-free web applications,
          monitor current web applications and provide stunning websites to support the company vision and objective, where I also build my professional communication skills, teamwork skills and problem-solving and analytical skills..
        </p>
      </div>
    </section>

    <!-- Resume Page -->
    <section class="section resume col-lg-12" id="resume">
      <div class="titlebanner">
        <h1>My Resume</h1>
      </div>
      <div class="resume__content col-lg-12">
        <div class="resume__pastexperience col-lg-6">

          <!-- Education -->
          <div class="resume__education">
            <div class="section__header">
              <h3>Education</h3>
            </div>
            <div class="resume__education--container resume__topitems">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__education--card">
                <div class="resume__education--course">
                  Master of Information Technology (Professional Computing)
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2020.8 - present
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Swinburne University of Technology
                  </div>
                </div>
                <h4>Special Interests:</h4>
                <div class="resume__education--focusedarea">
                  Java, HTML5, CSS3, JavaScript (Vanilla, ES6), PHP
                </div>
              </div>
            </div>

            <div class="resume__education--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__education--card">
                <div class="resume__education--course">
                  Master of Information Technology
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2016.7 - 2018.7
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Monash University
                  </div>
                </div>
                <h4>Special Interests:</h4>
                <div class="resume__education--focusedarea">
                  Java, C#, ASP.NET Framework, Mobile Development
                </div>
              </div>
            </div>

            <div class="resume__education--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__education--card">
                <div class="resume__education--course">
                  Bachelor of Commerce - Professional Accounting
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2014.7 - 2016.7
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Macquarie University
                  </div>
                </div>
                <h4>Special Interests:</h4>
                <div class="resume__education--focusedarea">
                  Financial Accounting, Management Accounting
                </div>
              </div>
            </div>
          </div>

          <!-- Work Experience -->
          <div class="resume__work">
            <div class="section__header">
              <h3>Experience</h3>
            </div>
            <div class="resume__work--container resume__topitems">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__work--card">
                <div class="resume__work--position">
                  Web Developer
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2020.12 - present
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Lotus.Eco Co., Melbourne
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="resume__responsibilities">
                  <li>Designing wireframes of the official website</li>
                  <li>Developing a shopify website LIQUID files using Ruby on Rails</li>
                  <li>Styling the website using CSS3 and JavaScript (Vanilla, ES6)</li>
                </ul>
              </div>
            </div>

            <div class="resume__work--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__work--card">
                <div class="resume__work--position">
                  Web Developer
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2019.2 - 2019.5
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Uber IT Solutions, Melbourne
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="resume__responsibilities">
                  <li>Developing WordPress websites based on clients' requirements</li>
                  <li>Styling the website using CSS3</li>
                  <li>Working on simple functions on the website using PHP</li>
                </ul>
              </div>
            </div>

            <div class="resume__work--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__work--card">
                <div class="resume__work--position">
                  Finance Team Intern
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2016.1 - 2016.2
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Estee Lauder, Shanghai
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="resume__responsibilities">
                  <li>Collecting daily Cash Report</li>
                  <li>Inputing and Analysing data regarding SAP system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="resume__services col-lg-6">
          <!-- Coding Skills -->
          <div class="resume__coding">
            <div class="section__header">
              <h3>Coding <span>Skills</span></h3>
            </div>
            <div class="resume__skill">
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  HTML5
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--html"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  CSS3 / SASS
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--css"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  JavaScript (Vanilla, ES6, jQuery)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--js"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Java
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--java"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  PHP
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--php"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  C# (.NET)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--csharp"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Design Skills -->
          <div class="resume__design">
            <div class="section__header">
              <h3>Design <span>Skills</span></h3>
            </div>
            <div class="resume__skill">
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Web Design (WordPress)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--html"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Web Design (Shopify)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--shopify"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  System Management Design (Moodle)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--js"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Graphic Design (Adobe XD, Photoshop, Illustrator)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--graphic"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Other Skills -->
          <div class="resume__other">
            <div class="section__header">
              <h3>Other <span>Skills</span></h3>
            </div>
            <div class="resume__skill">
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Github / Git (Version Control)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--git"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Troubleshooting
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--troubleshooting"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Teamwork
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--teamwork"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Communication
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--communication"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Page -->
    <section class="section projects col-lg-12" id="projects">
      <div class="titlebanner">
        <h1>My Projects</h1>
      </div>
      <div class="details col-lg-12">
        <div class="details__container col-lg-6">

          <!-- WordPress -->
          <div class="details__section">
            <div class="container__header">
              <h3>WordPress</h3>
            </div>
            <div class="details__sectioncontainer details__topitems">
              <div class="details__bullet">
              </div>
              <div class="details__line">
              </div>
              <div class="details__card">
                <div class="details__title">
                  Master of Information Technology (Professional Computing)
                </div>
                <div class="details__yearandplace">
                  <div class="details__year">
                    2020.8 - present
                  </div>
                  <div class="details__separator">
                    |
                  </div>
                  <div class="details__place">
                    Swinburne University of Technology
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="details__responsibilities">
                  <li>Designing wireframes of the official website</li>
                  <li>Developing a shopify website LIQUID files using Ruby on Rails</li>
                  <li>Styling the website using CSS3 and JavaScript (Vanilla, ES6)</li>
                </ul>
              </div>
            </div>

            <div class="resume__education--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__education--card">
                <div class="resume__education--course">
                  Master of Information Technology
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2016.7 - 2018.7
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Monash University
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="details__responsibilities">
                  <li>Designing wireframes of the official website</li>
                  <li>Developing a shopify website LIQUID files using Ruby on Rails</li>
                  <li>Styling the website using CSS3 and JavaScript (Vanilla, ES6)</li>
                </ul>
              </div>
            </div>

            <div class="resume__education--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__education--card">
                <div class="resume__education--course">
                  Bachelor of Commerce - Professional Accounting
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2014.7 - 2016.7
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Macquarie University
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="details__responsibilities">
                  <li>Designing wireframes of the official website</li>
                  <li>Developing a shopify website LIQUID files using Ruby on Rails</li>
                  <li>Styling the website using CSS3 and JavaScript (Vanilla, ES6)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Shopify Ruby Experience -->
          <div class="details__section">
            <h3>Shopify Ruby</h3>
            <div class="details__sectioncontainer details__topitems">
              <div class="details__bullet">
              </div>
              <div class="details__line">
              </div>
              <div class="details__card">
                <div class="details__title">
                  Web Developer
                </div>
                <div class="details__yearandplace">
                  <div class="details__year">
                    2020.12 - present
                  </div>
                  <div class="details__separator">
                    |
                  </div>
                  <div class="details__place">
                    Lotus.Eco Co., Melbourne
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="details__responsibilities">
                  <li>Designing wireframes of the official website</li>
                  <li>Developing a shopify website LIQUID files using Ruby on Rails</li>
                  <li>Styling the website using CSS3 and JavaScript (Vanilla, ES6)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="resume__services col-lg-6">
          <!-- Coding Skills -->
          <div class="resume__coding">
            <div class="section__header">
              <h3>Coding <span>Skills</span></h3>
            </div>
            <div class="resume__skill">
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  HTML5
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--html"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  CSS3 / SASS
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--css"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  JavaScript (Vanilla, ES6, jQuery)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--js"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Java
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--java"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  PHP
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--php"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  C# (.NET)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--csharp"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Design Skills -->
          <div class="resume__design">
            <div class="section__header">
              <h3>Design <span>Skills</span></h3>
            </div>
            <div class="resume__skill">
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Web Design (WordPress)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--html"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Web Design (Shopify)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--shopify"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  System Management Design (Moodle)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--js"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Graphic Design (Adobe XD, Photoshop, Illustrator)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--graphic"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Other Skills -->
          <div class="resume__other">
            <div class="section__header">
              <h3>Other <span>Skills</span></h3>
            </div>
            <div class="resume__skill">
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Github / Git (Version Control)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--git"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Troubleshooting
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--troubleshooting"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Teamwork
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--teamwork"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Communication
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--communication"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Page -->
    <section class="section blog col-lg-12" id="blog">
      <div class="titlebanner">
        <h1>My Blogs</h1>
      </div>
      <div class="blog__container">
        <div class="blog__card">
          <div class="blog__date">

          </div>
          <div class="blog__banner">
            <p>Travel</p>
            <h4>Bootstrap is the Most Popular Framework</h4>
          </div>
        </div>
        <div class="blog__card">

        </div>
      </div>
    </section>

    <!-- Contact Page -->
    <section class="section contact col-lg-12" id="contact">
      <div class="titlebanner">
        <h1>Contact Me</h1>
      </div>
      <div class="contact__container">
        <div class="contact__getInTouch">
          <h3>Get In <span>Touch</span></h3>
          <div class="contact__map">
            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.6765705030657!2d144.94289281529123!3d-37.821044042232984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d59422626e1%3A0xb54ce0869eb6d64c!2s838%20Collins%20St%2C%20Docklands%20VIC%203008!5e0!3m2!1sen!2sau!4v1609549771978!5m2!1sen!2sau" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->
            <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
              <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
              <a href="https://1map.com/map-embed">1 Map</a>
            </div>
            <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
              <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
              <a href="https://1map.com/map-embed">1 Map</a>
            </div>
          </div>
          <table class="contact__icontable">
            <tr>
              <th>
                <img src="assets/icon/place.svg" alt="place" class="contact__icon">
              </th>
              <td></td>
              <td>Melbourne, Australia</td>
            </tr>
            <tr>
              <th>
                <img src="assets/icon/email.svg" alt="email" class="contact__icon">
              </th>
              <td></td>
              <td>steven93.wang@gmail.com</td>
            </tr>
            <tr>
              <th>
                <img src="assets/icon/phone.svg" alt="phone" class="contact__icon">
              </th>
              <td></td>
              <td>+61 426119788</td>
            </tr>
            <tr>
              <th>
                <img src="assets/icon/check.svg" alt="check" class="contact__icon">
              </th>
              <td></td>
              <td>Freelance Available</td>
            </tr>
          </table>
        </div>
        <div class="contact__contactform">
          <h3>Contact <span>Form</span></h3>
          <form class="contact__form" action="src/php/contact.php" method="post">
            <div class="contact__form--row">
              <label for="Name" class="contact__label">Name: </label>
              <input type="text" id="Name" name="Name" placeholder="Enter your name" class="contact__textinput" required><br>
            </div>
            <div class="contact__form--row">
              <label for="Phone" class="contact__label">Phone: </label>
              <input type="tel" id="Phone" name="Phone" placeholder="Enter your contact number" class="contact__textinput" required><br>
            </div>
            <div class="contact__form--row">
              <label for="Email" class="contact__label">Email: </label>
              <input type="email" id="Email" name="Email" placeholder="Enter your email address" class="contact__textinput" required><br>
            </div>
            <div class="contact__form--column">
              <label for="Message" class="contact__label">Message: </label>
              <textarea name="name" id="Message" name="Message" rows="8" cols="40" class="contact__textarea" required></textarea>
            </div>
            <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
            <input type="submit" name="Submit" value="Send Message" class="contact__submit">
          </form>
        </div>
      </div>
    </section>

    <!-- Main Page -->
    <!-- this page must be placed at last for the css to work -->
    <section class="section main col-lg-12 default" id="home">
      <div class="main__introduction col-lg-12">
        <div class="main__frame col-lg-6">
          <div class="main__photo">
          </div>
        </div>
        <div class="main__info col-lg-6">
          <h1>Shikai Wang</h1>
          <div class="main__name">
            (Steven)
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                Full Stack Developer
              </div>
              <div class="swiper-slide">
                Web Designer
              </div>
            </div>
          </div>
          <ul class="main__social">
            <a href="https://www.linkedin.com/in/shikai-wang-b6a83ab2"><li><img src="assets/icon/linkedin.svg" alt="linkedin" class="main__icon"></li></a>
            <a href="https://github.com/skykk0128"><li><img src="assets/icon/github.svg" alt="github" class="main__icon"></li></a>
            <a href="https://www.facebook.com/liushisky/"><li><img src="assets/icon/facebook.svg" alt="facebook" class="main__icon"></li></a>
            <a href="https://twitter.com/Shikai_Steven"><li><img src="assets/icon/twitter.svg" alt="twitter" class="main__icon"></li></a>
          </ul>
        </div>
      </div>
      <div class="main__details col-lg-12">
        <div class="main__about col-lg-6">
          <h3>About <span>Me</span></h3>
          <p>
            I am a current IT student with experience in HTML5, CSS3, JavaScript (Vanilla, ES6), Java, WordPress and Shopify Ruby on Rails as a full stack web developer.
          </p>
        </div>
        <div class="main__briefing col-lg-6">
          <dl>
            <dt>Age:</dt>
            <dd>27</dd>
            <dt>Residence:</dt>
            <dd>Australia</dd>
            <dt>Address:</dt>
            <dd>Carnegie Melbourne Australia</dd>
            <dt>Email:</dt>
            <dd><a href="mailto:steven93.wang@gmail.com">steven93.wang@gmail.com</a></dd>
            <dt>Phone:</dt>
            <dd>0426119788</dd>
          </dl>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    © 2021 All copy rights reserved. Developed by &nbsp;<span><a href="https://skykk0128.github.io/Project_1/">Steven Wang</a></span>
  </footer>
);

export default App;

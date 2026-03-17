/* ============================================
   Shared Components — Navbar & Footer
   ============================================ */

function getNavbar(activePage) {
  const links = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'mission.html', label: 'Mission', id: 'mission' },
    { href: 'about.html', label: 'About', id: 'about' },
    { href: 'safety.html', label: 'Safety', id: 'safety' },
    { href: 'volunteer.html', label: 'Volunteer', id: 'volunteer' },
    { href: 'team.html', label: 'Team', id: 'team' },
    { href: 'sessions.html', label: 'Sessions', id: 'sessions' },
    { href: 'curriculum.html', label: 'Curriculum', id: 'curriculum' },
  ];

  const navLinksHTML = links.map(link =>
    `<a href="${link.href}" class="nav-link${activePage === link.id ? ' active' : ''}">${link.label}</a>`
  ).join('\n        ');

  return `
  <nav class="navbar" aria-label="Main navigation">
    <div class="container">
      <a href="index.html" class="nav-logo" aria-label="Community Health Bridge Home">
        <img src="images/image_logo.png" alt="Community Health Bridge" class="logo-img">
      </a>

      <div class="nav-overlay" id="nav-overlay"></div>

      <div class="nav-menu" id="nav-menu">
        ${navLinksHTML}
        <a href="signup.html" class="nav-cta${activePage === 'signup' ? ' active' : ''}">Get Started</a>
      </div>

      <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>`;
}


function getFooter() {
  return `
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo" aria-label="Community Health Bridge Home">
            <img src="images/image_logo.png" alt="Community Health Bridge" class="logo-img">
          </a>
          <p>Accessible health education designed to inspire curiosity and promote lifelong wellness in young learners.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Pages</h4>
          <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="mission.html">Mission</a>
            <a href="about.html">About</a>
            <a href="safety.html">Safety &amp; Ethics</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Participate</h4>
          <div class="footer-links">
            <a href="volunteer.html">Volunteer</a>
            <a href="signup.html">Sign Up</a>
            <a href="team.html">Team</a>
            <a href="sessions.html">Sessions</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-contact">
            <div class="footer-contact-item">
              <span>✉</span>
              <span>utkarsh.tewari@hotmail.com</span>
            </div>
            <div class="footer-contact-item">
              <span>◎</span>
              <span>Serving communities nationwide</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        &copy; 2026 Community Health Bridge
      </div>
    </div>
  </footer>`;
}


function loadComponents(activePage) {
  const navEl = document.getElementById('navbar-placeholder');
  const footerEl = document.getElementById('footer-placeholder');

  if (navEl) navEl.innerHTML = getNavbar(activePage);
  if (footerEl) footerEl.innerHTML = getFooter();
}

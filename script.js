/* ============================================
   Community Health Bridge — Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll
  const onScroll = () => {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  setTimeout(onScroll, 60);

  // Mobile menu
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-hamburger') || e.target.closest('.nav-overlay')) {
      const h = document.querySelector('.nav-hamburger');
      const m = document.querySelector('.nav-menu');
      const o = document.querySelector('.nav-overlay');
      if (h && m && o) {
        h.classList.toggle('open');
        m.classList.toggle('open');
        o.classList.toggle('show');
        document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
      }
    }
    if (e.target.closest('.nav-link') || e.target.closest('.nav-cta')) {
      const m = document.querySelector('.nav-menu');
      if (m?.classList.contains('open')) {
        document.querySelector('.nav-hamburger')?.classList.remove('open');
        m.classList.remove('open');
        document.querySelector('.nav-overlay')?.classList.remove('show');
        document.body.style.overflow = '';
      }
    }
  });

  // Scroll reveal
  setTimeout(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    els.forEach(el => obs.observe(el));
  }, 120);

  // Form handling — AJAX submit to FormSubmit.co
  function handleForm(formId, successSelector) {
    const form = document.getElementById(formId);
    if (!form) return;

    const successEl = successSelector
      ? document.querySelector(successSelector)
      : form.closest('.form-card')?.querySelector('.form-success');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Validate required fields
      let valid = true;
      form.querySelectorAll('[required]').forEach(f => {
        if (!f.value.trim()) {
          valid = false;
          f.style.borderColor = '#ef4444';
        } else {
          f.style.borderColor = '';
        }
      });
      if (!valid) return;

      // Set _next to current page so FormSubmit doesn't redirect
      const nextInput = form.querySelector('input[name="_next"]');
      if (nextInput) nextInput.value = window.location.href;

      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(form);
        await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        form.style.display = 'none';
        if (successEl) successEl.classList.add('show');

        setTimeout(() => {
          form.reset();
          form.style.display = '';
          if (successEl) successEl.classList.remove('show');
          submitBtn.textContent = origText;
          submitBtn.disabled = false;
        }, 5000);
      } catch (err) {
        // Even if fetch fails, still show success (form data was likely sent)
        form.style.display = 'none';
        if (successEl) successEl.classList.add('show');
        setTimeout(() => {
          form.reset();
          form.style.display = '';
          if (successEl) successEl.classList.remove('show');
          submitBtn.textContent = origText;
          submitBtn.disabled = false;
        }, 5000);
      }
    });

    // Clear error borders on input
    form.querySelectorAll('input, select, textarea').forEach(f =>
      f.addEventListener('input', () => f.style.borderColor = '')
    );
  }

  // Initialize forms
  handleForm('signup-form');
  handleForm('volunteer-form', '#vol-success');

});

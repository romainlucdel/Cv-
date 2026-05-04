 const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('big'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
    });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visible');
        e.target.querySelectorAll('.sk-fill').forEach(b => { b.style.width = b.dataset.width + '%'; });
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .tl-item, .skills-grid').forEach(el => obs.observe(el));

    function copyEmail(btn) {
      navigator.clipboard.writeText('romain.lucasdelplace@gmail.com');
      btn.textContent = '✓ copié';
      btn.style.color = 'var(--red)';
      btn.style.borderColor = 'var(--red)';
      setTimeout(() => { btn.textContent = 'copier'; btn.style.color=''; btn.style.borderColor=''; }, 2000);
    }

    const navAs = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let cur = '';
      document.querySelectorAll('section[id]').forEach(s => { if (window.scrollY >= s.offsetTop - 160) cur = s.id; });
      navAs.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--red)' : ''; });
    });
 const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        // 桌機下拉：點一下也能開，點外面/ESC 會收
    document.querySelectorAll('.dropBtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wrap = btn.closest('.drop');
        const isOpen = wrap.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });
    
    function closeDrops(){
      document.querySelectorAll('.drop.open').forEach(d => {
        d.classList.remove('open');
        const b = d.querySelector('.dropBtn');
        if(b) b.setAttribute('aria-expanded','false');
      });
    }
    document.addEventListener('click', closeDrops);
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeDrops(); });

document.getElementById('search').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.prefecture-card');
            
            cards.forEach(card => {
                const title = card.querySelector('h2').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        
        // 地區篩選
        const regionBtns = document.querySelectorAll('.region-btn');
        regionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const region = this.dataset.region;
                
                // 更新按鈕狀態
                regionBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // 篩選卡片
                const cards = document.querySelectorAll('.prefecture-card');
                cards.forEach(card => {
                    if (region === 'all' || card.dataset.region === region) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // 返回頂部按鈕
        window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('backToTop');
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        document.getElementById('backToTop').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 表單提交
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的訊息！我們會盡快回覆您。');
            this.reset();
        });

        
        (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96b2efae227a0901',t:'MTc1NDUyOTQ2Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();// 整合所有功能到單一 DOMContentLoaded 監聽器
document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    document.getElementById('search')?.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.prefecture-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h2')?.textContent.toLowerCase();
            const description = card.querySelector('p')?.textContent.toLowerCase();
            
            if (title?.includes(searchTerm) || description?.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
      // 漢堡選單功能 
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('overlay');
    
    if (hamburger && navMenu && overlay) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('show');
            overlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('show') ? 'hidden' : '';
        });
        
        overlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show');
            this.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        const navLinks = document.querySelectorAll('#navMenu li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('show');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }
});

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 滚动效果
    const scrollLinks = document.querySelectorAll('nav a');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // 滚动时的导航高亮效果
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 图片懒加载
    const images = document.querySelectorAll('img');
    
    const imgOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };
    
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    }, imgOptions);
    
    images.forEach(image => {
        imgObserver.observe(image);
    });
    
    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) {
            return;
        }
        img.src = src;
    }

    // 点击图片放大查看
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.classList.add('image-overlay');
            
            const imgClone = this.cloneNode();
            imgClone.classList.add('enlarged-image');
            
            overlay.appendChild(imgClone);
            document.body.appendChild(overlay);
            
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
    });

    // 随机更换主题颜色（仅作为示例）
    /* 
    const colors = [
        {primary: '#8E2DE2', secondary: '#4A00E0'},
        {primary: '#FF416C', secondary: '#FF4B2B'},
        {primary: '#11998e', secondary: '#38ef7d'},
        {primary: '#FC466B', secondary: '#3F5EFB'}
    ];
    
    document.querySelector('.change-theme').addEventListener('click', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--primary-color', randomColor.primary);
        document.documentElement.style.setProperty('--secondary-color', randomColor.secondary);
    });
    */
}); 
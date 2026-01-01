// Navbar Scroll Logic
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
});

// Mobile Menu Toggle Function
function toggleMenu() {
    const menu = document.getElementById('navLinks');
    menu.classList.toggle('active');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Product Modal Logic
const modal = document.getElementById("productModal");
const secondBack = document.querySelector(".second-back");

document.querySelectorAll('.product-card').forEach(card => {
    card.onclick = function() {
        document.getElementById('modalName').innerText = this.querySelector('h3').innerText;
        document.getElementById('modalPrice').innerText = this.querySelector('.price').innerText;
        document.getElementById('modalImg').src = this.querySelector('img').src;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    };
});

secondBack.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

// Color Changer (Contact Section)
document.querySelectorAll('.color-changer').forEach(box => {
    box.addEventListener('click', function() {
        const colors = ['#ff4757', '#2f3542', '#2ecc71', '#3498db', '#e67e22', '#9b59b6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.backgroundColor = randomColor;
        this.style.color = 'white';
        this.style.borderColor = randomColor;
    });
});

// Menangani toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Memeriksa mode yang disimpan di localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun'); // Mengubah ikon menjadi Matahari
}

// Menambahkan event listener pada tombol toggle
themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon'); // Mengubah ikon menjadi Bulan
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // Mengubah ikon menjadi Matahari
        localStorage.setItem('dark-mode', 'enabled');
    }
});

// Particles.js Initialization
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80, // Jumlah partikel
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff" // Warna partikel
        },
        shape: {
            type: "circle", // Bentuk partikel
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5, // Opasitas partikel
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1
            }
        },
        size: {
            value: 3, // Ukuran partikel
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.1
            }
        },
        line_linked: {
            enable: true, // Menghubungkan partikel
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse" // Partikel akan menjauh saat kursor melayang
            },
            onclick: {
                enable: true,
                mode: "push" // Menambahkan partikel saat klik
            }
        }
    }
});

function scrollDown() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

function openImage(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

window.onload = function () {
    const cards = document.querySelectorAll(".blog-card");

    cards.forEach((card, index) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "0.8s";
            card.style.opacity = 1;
        }, index * 200);
    });
};

function kirimPesan() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Harap isi semua data!");
    } else {
        alert("Pesan berhasil dikirim 😊");
    }
}

function openWA() {
    window.open("https://wa.me/6285344119767", "_blank");
}

function openIG() {
    window.open("https://instagram.com/riskanaaaaaa_", "_blank");
}

function openEmail() {
    window.location.href = "mailto:riskhaannamarianarua21@gmail.com";
}

function scrollDown() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

// ANIMASI SCROLL
function revealOnScroll() {
    let elements = document.querySelectorAll('.fade-up');

    elements.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

/* biar langsung muncul yang di atas */
revealOnScroll();

function copyEmail() {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email);
    alert("Email berhasil disalin!");
}

const toggleBtn = document.getElementById("theme-toggle");

// CEK MODE DARI LOCAL STORAGE
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.innerHTML = "☀️";
}

const toggle = document.getElementById("theme-toggle");

// SET MODE SAAT HALAMAN DIBUKA
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        if (toggle) toggle.textContent = "☀️";
    }
});

// SAAT DIKLIK → LANGSUNG BERUBAH
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // simpan ke localStorage
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            toggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "🌙";
        }
    });
}

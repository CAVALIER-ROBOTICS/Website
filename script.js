document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("HOME").addEventListener("click", function() {
        window.location.href = "Cavbots website.html";
    });

        document.getElementById("ROBOTS").addEventListener("click", function() {
            window.location.href = "Robots.html";
        });

        document.getElementById("SPONSORS").addEventListener("click", function() {
            window.location.href = "Sponsors.html";
        });

        document.getElementById("MEDIA").addEventListener("click", function() {
            window.location.href = "Media.html";
        });

        document.getElementById("RESOURCES").addEventListener("click", function() {
            window.location.href = "Resources.html";
        });

    document.getElementById("ABOUT").addEventListener("click", function() {
        window.location.href = "About.html";
    });

        document.getElementById("CALENDAR").addEventListener("click", function() {
            window.location.href = "Calendar.html";
        });

        document.getElementById("COMMITMENT").addEventListener("click", function() {
            window.location.href = "Commitment.html";
        });

        document.getElementById("PRIDE").addEventListener("click", function() {
            window.location.href = "Pride.html";
        });

        document.getElementById("HONOR").addEventListener("click", function() {
            window.location.href = "Honor.html";
        });

        document.getElementById("SUCCESS").addEventListener("click", function() {
            window.location.href = "Success.html";
        });

        window.addEventListener('DOMContentLoaded', (event) => {
            const boxes = document.querySelectorAll('.code');
            boxes.forEach(box => {
              box.style.left = '0'; // Trigger the transition
            });
          });

        const robotSections = document.querySelectorAll('#robots article');
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: Stop observing once visible
            }
        });
    });

    robotSections.forEach(section => {
        observer.observe(section);
    });

});

function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  }


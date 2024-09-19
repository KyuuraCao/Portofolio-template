const projects = [
    {
        title: "Project 1",
        description: "A stunning web application showcasing modern design principles.",
        image: "/api/placeholder/600/400"
    },
    {
        title: "Project 2",
        description: "An innovative mobile app revolutionizing user experience.",
        image: "/api/placeholder/600/400"
    },
    {
        title: "Project 3",
        description: "A responsive website with cutting-edge features and smooth animations.",
        image: "/api/placeholder/600/400"
    }
];

function createProjectCards() {
    const container = document.getElementById('projectContainer');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Web Designer & Developer";
    const typingText = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                typingText.innerHTML = '';
                i = 0;
                typeWriter();
            }, 2000);
        }
    }

    typeWriter();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onload = () => {
    createProjectCards();
    typeText();
};
document.getElementById('languageToggle').addEventListener('click', function () {
    const translations = {
        en: {
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            heroHeading: "Hi, I'm Youb Nader",
            heroSubheading: "Aspiring developer and a part-time dreamer",
            explore: "Explore My Work",
            aboutTitle: "About Me",
            aboutText: "I'm a Computer Science student who's totally vibing with web development and cybersecurity. Coding websites is my jam as well as diving into ethical hacking, I'm all in. When I'm not coding up something epic, I'm leveling up my skills and chasing the latest tech trends.",
            skillsTitle: "Skills",
            webDev: "Web Development",
            programming: "Programming",
            projectsTitle: "Projects",
            project1Title: "IfagVault",
            project1Desc: "A dynamic web platform designed for university students to access various resources and services. The site features a sleek, modern design with a focus on user authentication, responsive design, and intuitive navigation.",
            project2Title: "C Programs",
            project2Desc1: "Restaurant Management System: A C program for managing table reservations in a restaurant.",
            project2Desc2: "Bank Transaction System: A secure and interactive C-based application for managing bank transactions.",
            project2Desc3: "School Management System: A comprehensive C program designed for managing school operations.",
            project3Title: "Pascal Program",
            project3Desc: "This program changes the background color of the terminal to black. It uses the TextBackground function from the Wincrt unit to set the color and then clears the screen to apply the change. The text color is set to white for better readability against the black background.",
            contactTitle: "Contact",
            contactText: "Ready to slay the tech game? Hit me up if you wanna collaborate or chat about tech trends.",
            footerText: "&copy; 2024 Youb Nader. All rights reserved.",
            viewCode: "View Code",
            viewProject: "View Project",
            getInTouch: "Get In Touch"
        },
        fr: {
            about: 'À propos',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact',
            heroHeading: "Salut, je suis Youb Nader",
            heroSubheading: "Développeur en herbe et rêveur à temps partiel",
            explore: "Explorez Mon Travail",
            aboutTitle: "À propos de moi",
            aboutText: "Je suis un étudiant en informatique qui adore le développement web et la cybersécurité. Créer des sites web est ma passion, tout comme plonger dans le hacking. Quand je ne code pas quelque chose d'épique, j'améliore mes compétences et je suis les dernières tendances technologiques.",
            skillsTitle: "Compétences",
            webDev: "Développement Web",
            programming: "Programmation",
            projectsTitle: "Projets",
            project1Title: "IfagVault",
            project1Desc: "Une plateforme web dynamique conçue pour les étudiants universitaires afin d'accéder à diverses ressources et services. Le site propose un design moderne et épuré avec une attention particulière à l'authentification des utilisateurs, au design réactif et à la navigation intuitive.",
            project2Title: "Programmes en C",
            project2Desc1: "Système de Gestion de Restaurant : Un programme en C pour gérer les réservations de tables dans un restaurant.",
            project2Desc2: "Système de Transactions Bancaires : Une application interactive et sécurisée basée sur le langage C pour gérer les transactions bancaires.",
            project2Desc3: "Système de Gestion Scolaire : Un programme complet en C conçu pour gérer les opérations scolaires.",
            project3Title: "Programme Pascal",
            project3Desc: "Ce programme change la couleur de fond du terminal en noir. Il utilise la fonction TextBackground de l'unité Wincrt pour définir la couleur, puis il efface l'écran pour appliquer le changement. La couleur du texte est réglée sur blanc pour une meilleure lisibilité contre le fond noir.",
            contactTitle: "Contact",
            contactText: "Prêt à dominer le monde de la tech ? Contactez-moi si vous voulez collaborer ou discuter des dernières tendances technologiques.",
            footerText: "&copy; 2024 Youb Nader. Tous droits réservés.",
            viewCode: "Voir le Code",
            viewProject: "Voir le Projet",
            getInTouch: "Contactez-moi"
        }
    };

    //determine the new language
    let currentLanguage = document.documentElement.lang === 'en' ? 'fr' : 'en';
    document.documentElement.lang = currentLanguage;

    //translate elements
    document.querySelector('[data-translate="about"]').textContent = translations[currentLanguage].about;
    document.querySelector('[data-translate="skills"]').textContent = translations[currentLanguage].skills;
    document.querySelector('[data-translate="projects"]').textContent = translations[currentLanguage].projects;
    document.querySelector('[data-translate="contact"]').textContent = translations[currentLanguage].contact;

    document.querySelector('.hero-content h1').textContent = translations[currentLanguage].heroHeading;
    document.querySelector('.hero-content p').textContent = translations[currentLanguage].heroSubheading;
    document.querySelector('.btnn').textContent = translations[currentLanguage].explore;

    document.querySelector('#about h2').textContent = translations[currentLanguage].aboutTitle;
    document.querySelector('#about p').textContent = translations[currentLanguage].aboutText;

    document.querySelector('#skills h2').textContent = translations[currentLanguage].skillsTitle;
    document.querySelector('.skill-item:nth-child(1) h3').textContent = translations[currentLanguage].webDev;
    document.querySelector('.skill-item:nth-child(2) h3').textContent = translations[currentLanguage].programming;

    document.querySelector('#projects h2').textContent = translations[currentLanguage].projectsTitle;
    document.querySelector('.project-item:nth-child(1) h3').textContent = translations[currentLanguage].project1Title;
    document.querySelector('.project-item:nth-child(1) p').textContent = translations[currentLanguage].project1Desc;
    document.querySelector('.project-item:nth-child(2) h3').textContent = translations[currentLanguage].project2Title;

    document.querySelector('.project-item:nth-child(1) a').textContent = translations[currentLanguage].viewProject;
    document.querySelector('.project-item:nth-child(2) a').textContent = translations[currentLanguage].viewProject;
    document.querySelector('.project-item:nth-child(3) a').textContent = translations[currentLanguage].viewProject;

    const project2Items = document.querySelectorAll('.project-item:nth-child(2) ul li');
    project2Items[0].innerHTML = `${translations[currentLanguage].project2Desc1}  <br> <a href="https://github.com/naderyb/projects/blob/main/restaurant.c" target="_blank">${translations[currentLanguage].viewCode}</a>`;
    project2Items[1].innerHTML = `${translations[currentLanguage].project2Desc2} <a href="https://github.com/naderyb/projects/blob/main/gestionnaire_de_transaction_fr.c" target="_blank">${translations[currentLanguage].viewCode}</a>`;
    project2Items[2].innerHTML = `${translations[currentLanguage].project2Desc3} <a href="https://github.com/naderyb/projects/blob/main/school_management_system.c" target="_blank">${translations[currentLanguage].viewCode}</a>`;

    document.querySelector('.project-item:nth-child(3) h3').textContent = translations[currentLanguage].project3Title;
    document.querySelector('.project-item:nth-child(3) p').innerHTML = `${translations[currentLanguage].project3Desc} <br> <a href="https://github.com/naderyb/projects/blob/main/couleur_terminal.pas" target="_blank">${translations[currentLanguage].viewCode}</a>`;

    document.querySelector('#contact h2').textContent = translations[currentLanguage].contactTitle;
    document.querySelector('#contact p').textContent = translations[currentLanguage].contactText;

    document.querySelector('footer p').innerHTML = translations[currentLanguage].footerText;
});
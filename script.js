document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const aboutBtn = document.getElementById('about-btn');
    const servicesBtn = document.getElementById('services-btn');
    const contactBtn = document.getElementById('contact-btn');
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');
    const servicesSection = document.getElementById('services-section');
    const contactSection = document.getElementById('contact-section');

    const sections = [homeSection, aboutSection, servicesSection, contactSection];

    homeBtn.addEventListener('click', () => showSection(homeSection));
    aboutBtn.addEventListener('click', () => showSection(aboutSection));
    servicesBtn.addEventListener('click', () => showSection(servicesSection));
    contactBtn.addEventListener('click', () => showSection(contactSection));

    function showSection(sectionToShow) {
        sections.forEach(section => section.classList.add('hidden'));
        sectionToShow.classList.remove('hidden');
    }
});

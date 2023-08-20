
function sendEmail(){
    console.log("sendEmail() function called");
    event.preventDefault()
    var params = {
        name: document.getElementById('inputName').value,
        email: document.getElementById('inputEmail').value,
        message : document.getElementById('inputMessage').value,
    };

    const serviceID = 'service_ar9b6gd';
    const templateID = 'template_si1spim';

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById('inputName').value = "";
            document.getElementById('inputEmail').value = "";
            document.getElementById('inputMessage').value = "";
            console.log(res);
            alert("Your message sent successfully.");
        })
        .catch((err) => console.log(err));
}

window.addEventListener('DOMContentLoaded', () => {

    const headerSection = document.getElementById('header');
    const aboutLink = document.querySelector('a[href="#about-me"]');
    const educationLink = document.querySelector('a[href="#education"]');
    const projectsLink = document.querySelector('a[href="#projects"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');

    function updateNavLinks() {
        const headerRect = headerSection.getBoundingClientRect();
        const isHeaderVisible = headerRect.bottom > 0 && headerRect.top < window.innerHeight;

        if (isHeaderVisible) {
            headerSection.classList.add('black');
            aboutLink.classList.add('active-link-purple');
            educationLink.classList.add('active-link-green');
            projectsLink.classList.add('active-link-blue');
            contactLink.classList.add('active-link-orange');
        } else {

            const currentScroll = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 50; // Adjust this offset as needed
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id');
                
    
                if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
    
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            if (link.getAttribute('href') === '#about-me') {
                                link.classList.add('active-link-purple');
                            }
    
                            if (link.getAttribute('href') === '#education') {
                                link.classList.add('active-link-green');
                            }
    
                            if (link.getAttribute('href') === '#projects') {
                                link.classList.add('active-link-blue');
                            }
    
                            if (link.getAttribute('href') === '#contact') {
                                link.classList.add('active-link-orange');
                            }
                        } else {
                                link.classList.remove('active-link-purple');
                                link.classList.remove('active-link-green');
                                link.classList.remove('active-link-blue');
                                link.classList.remove('active-link-orange');
                            
                            }
                        
                    });
                }
            });

            
        }
    }

    const spanElement = document.querySelector('.green-purple');

    // Function to change the font color
    const colors = ['#5e72c1', '#ffa500', '#4287f5', '#3ba870'];
    let colorIndex = 0;

    function changeFontColor() {
        spanElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Call the changeFontColor function every 2 seconds
    setInterval(changeFontColor, 1500);

    window.addEventListener('scroll', updateNavLinks);
});

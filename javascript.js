const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.2
    });
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
// end of scriptt1

// script 2
     let sections = document.querySelectorAll('section');
     let navLinks = document.querySelectorAll('.navbar ul li a');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => link.parentElement.classList.remove('active'));
            const activeLink = document.querySelector(`.navbar ul li a[href*="${id}"]`);
            if (activeLink) {
                activeLink.parentElement.classList.add('active');
            }
        }
    });
}, { 
    threshold: 0.5 
});
sections.forEach(sec => navObserver.observe(sec));
// end of script 2

//script 3
    const aboutCards = document.querySelectorAll('.about-grid div');
    aboutCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            aboutCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('active');
                }
            });
            card.classList.toggle('active');
        });
    });
//end of script 3

//script 4
    const cards = document.querySelectorAll('.tech-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(otherCard => {
                if(otherCard !== card) {
                    otherCard.classList.remove('clicked');
                }
            });
            card.classList.toggle('clicked');
        });
    });
//end of script 4

//script 5
    const eduCards = document.querySelectorAll('.timeline-content');
    eduCards.forEach(card => {
        card.addEventListener('click', () => {
            eduCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });
            card.classList.toggle('active');
        });
    });

//end of script 5

//script 6
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.timeline-content')) {
            eduCards.forEach(card => card.classList.remove('active'));
        }

        if (!e.target.closest('.tech-card')) {
            cards.forEach(card => card.classList.remove('clicked'));
        }

        if (!e.target.closest('.about-grid div')) {
            aboutCards.forEach(card => card.classList.remove('active'));
        }
    });
    //end of script 6
    
    //contact-form script
    const contactForm = document.querySelector('#contact-form');
    const submitBtn =document.querySelector('.submit');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;
        const formData = new FormData(e.target);
        const templateParams = {
         name: formData.get('name'),
         email: formData.get('email'),
         mobile: formData.get('mobile'),
         subject: formData.get('subject'),
         message: formData.get('message')
        };
        emailjs.send("service_r3h3nhe","template_asjob2r", templateParams)
        .then(()=> {
            e.target.reset();
        })
        .catch((error) => {
            alert('Failed to send. Check the console for the error.');
            console.log('EmailJS Error',error);
        })
        .finally(() => {
            submitBtn.value = 'Send Message';
            submitBtn.disabled =false;
        });
    });

    (function() {
        emailjs.init ({
            publicKey: "mRW99nwb1zsehJbof",
        });
    })();
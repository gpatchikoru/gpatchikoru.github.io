


    // Certificate modal functionality
    function openCertificateModal(activityId) {
      const modal = document.getElementById('certificate-modal');
      const modalContent = document.getElementById('modal-certificate-content');
      
      const certificates = {
        'NSLS': {
          title: 'Student Mentor',
          image: 'public/img/badge.png',
          description: 'Service as Student Mentor for The National Society of Leadership and Success',
          company: 'The National Society of Leadership and Success',
          duration: 'Oct 2024 - Present'
        },
        'Cybersociety': {
          title: 'Student Member',
          image: 'public/img/islandercybersociety.jpeg',
          description: 'Service as Student Member for The Islander Cyber Society',
          company: 'Islander Cyber Society',
          duration: 'Aug 2023 - May 2025'
        },
        'acm': {
          title: 'ACM Certificate',
          image: 'public/img/acm.png',
          description: 'Service as Student Secretary for the Association for Computing Machinery from June 2018 to July 2021.',
          company: 'ACM (Association for Computing Machinery)',
          duration: 'June 2018 - July 2021'
        },
        'progate': {
          title: 'Progate Certificate',
          image: 'public/img/progate.png',
          description: 'This certificate acknowledges contribution as a Student Volunteer for Progate in July 2020.',
          company: 'Progate',
          duration: 'July 2020'
        },
        'regex': {
          title: 'REGex Software Services Certificate',
          image: 'public/img/Regex.jpeg',
          description: 'This certificate is awarded for serving as Campus Ambassador for REGex Software Services from May 2020 to June 2020.',
          company: 'REGex Software Services',
          duration: 'May 2020 - June 2020'
        },
        'indian-servers': {
          title: 'Indian Servers Certificate',
          image: 'public/img/IndianServers.png',
          description: 'This certificate is for successfully completing the Machine Learning Internship at Indian Servers from April 2020 to June 2020.',
          company: 'Indian Servers',
          duration: 'April 2020 - June 2020'
        }
      };
      
      const cert = certificates[activityId];
      if (cert) {
        modalContent.innerHTML = `
          <h3>${cert.title}</h3>
          <img src="${cert.image}" alt="${cert.title}">
          <div class="certificate-details">
            <p><strong style="color: #667eea;">Company:</strong> ${cert.company}</p>
            <p><strong style="color: #667eea;">Duration:</strong> ${cert.duration}</p>
            <p><strong style="color: #667eea;">Description:</strong> ${cert.description}</p>
          </div>
        `;
        modal.classList.add('show');
      }
    }
    
    function closeCertificateModal() {
      const modal = document.getElementById('certificate-modal');
      modal.classList.remove('show');
    }
    
    // Add click event listeners to activity items
    document.addEventListener('DOMContentLoaded', function() {
      const activityItems = document.querySelectorAll('.activity-card');
      
      activityItems.forEach(item => {
        item.addEventListener('click', function() {
          const activityId = this.getAttribute('data-activity');
          openCertificateModal(activityId);
        });
      });
    });
    
    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('certificate-modal');
      if (event.target === modal) {
        closeCertificateModal();
      }
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeCertificateModal();
      }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('mainNav');
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      }
    });

    // Add smooth animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.addEventListener('DOMContentLoaded', function() {
      const elements = document.querySelectorAll('.experience-card, .project-card, .activity-card, .certification-card, .research-card');
      elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });
    });
  
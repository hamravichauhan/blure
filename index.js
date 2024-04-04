function redirectToWhatsApp(carName = '') {
    const whatsappNumber = "+919423489036";
    let message = "I'm interested in renting a vehicle.";
    if (carName) {
      message += ` Specifically, I'm interested in the ${carName}.`;
    }
    message += " Please provide more details.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }
  
  function adjustFontSize() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const elements = document.querySelectorAll('h1, p, button');
    if (viewportWidth <= 480) {
      elements.forEach(element => element.style.fontSize = '4vw');
    } else if (viewportWidth <= 768) {
      elements.forEach(element => element.style.fontSize = '3vw');
    } else {
      elements.forEach(element => element.style.fontSize = '2vw');
    }
  }
  
  function toggleHeader() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 768) {
      header.classList.toggle('fixed', scrollTop > 0);
    } else {
      header.classList.remove('fixed');
    }
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const elements = document.querySelectorAll('.dark-mode-toggle');
    elements.forEach(element => {
      element.classList.toggle("dark-mode");
    });
    // Update the mode toggle button icon
    const modeToggleBtn = document.getElementById("mode-toggle-btn");
    const icon = modeToggleBtn.querySelector("i");
    icon.classList.toggle("fa-adjust");
    icon.classList.toggle("fa-sun");
  }
  
  const images = [
    "yamaha-fascino-125-vivid-red.png",
    "yamaha-fascino-125-cool-blue-removebg-preview.png",
    "swife.png.png",
    // "download__1_-removebg-preview.png",
    // "download-removebg-preview (3).png",
    // "kindpng_1938987.png",
    // "logos/pngwing.com.png",
  ];
  
  let currentIndex = 0;
  
  function changeBackgroundImage() {
    const imageUrl = images[currentIndex];
    document.querySelector(".rent-now").style.backgroundImage = `url('${imageUrl}')`;
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  let intervalId;
  
  function startSlideshow() {
    intervalId = setInterval(changeBackgroundImage, 3000);
  }
  
  function stopSlideshow() {
    clearInterval(intervalId);
  }
  
  window.addEventListener('scroll', toggleHeader);
  window.addEventListener('resize', adjustFontSize);
  document.getElementById("mode-toggle-btn").addEventListener("click", toggleDarkMode);
  
  adjustFontSize();
  startSlideshow();


  // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

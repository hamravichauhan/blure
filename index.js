function redirectToWhatsApp(carName) {
    var whatsappNumber = "+918805208407";
    var message = "I'm interested in renting the " + carName + ". Please provide more details.";
    var encodedMessage = encodeURIComponent(message);
    var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodedMessage;
    window.location.href = whatsappUrl;
}



function adjustFontSize() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth <= 480) {
        document.querySelectorAll('h1, p, button').forEach(function(element) {
            element.style.fontSize = '4vw';
        });
    } else if (viewportWidth <= 768) {
        document.querySelectorAll('h1, p, button').forEach(function(element) {
            element.style.fontSize = '3vw';
        });
    } else {
        document.querySelectorAll('h1, p, button').forEach(function(element) {
            element.style.fontSize = '2vw';
        });
    }
}

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});



window.addEventListener('resize', adjustFontSize);
adjustFontSize();

// Toggle dark mode for body element
document.body.classList.toggle("dark-mode");

// Event listener for mode toggle button
document.getElementById("mode-toggle-btn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Toggle dark mode for specific elements
    var elements = document.querySelectorAll('.dark-mode-toggle');
    elements.forEach(function(element) {
        element.classList.toggle("dark-mode");
    });
});

// Array of image URLs for slideshow
var images = [
    "yamaha-fascino-125-vivid-red.png",
    "yamaha-fascino-125-cool-blue-removebg-preview.png",
    "swife.png.png",
    // "download__1_-removebg-preview.png",
    // "download-removebg-preview (3).png",
    // "kindpng_1938987.png",
    // "logos/pngwing.com.png",
    
];

// Index to track the current image
var currentIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    var imageUrl = images[currentIndex];
    document.querySelector(".rent-now").style.backgroundImage = "url('" + imageUrl + "')";
    
    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;
}

// Call the function initially
changeBackgroundImage();

// Interval for the slideshow animation
var intervalId;

// Start the slideshow animation
function startSlideshow() {
    intervalId = setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds
}

// Stop the slideshow animation
function stopSlideshow() {
    clearInterval(intervalId);
}

// Start the slideshow initially
startSlideshow();

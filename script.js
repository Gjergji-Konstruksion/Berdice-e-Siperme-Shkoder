
    // Smooth scrolling when clicking on navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 60 // Adjust offset for fixed header
            }, 1000);

            // Highlight the clicked link
            $('nav ul li a').removeClass("active");
            $(this).addClass("active");
        }
        
        // Close the menu on click (for mobile)
        $('.nav-links').removeClass('active');
        $('.menu-toggle i').toggleClass('fa-bars fa-times'); // Optional: change icon when menu is open/close
    });
    
    $(document).ready(function() {
    // Toggle navigation menu visibility
    $('.menu-toggle').click(function() {
        $('.nav-links').toggleClass('active');

        // Toggle body margin-top to create space for the menu
        $('body').toggleClass('menu-opened');
        if ($('body').hasClass('menu-opened')) {
            $('body').animate({ marginTop: '+=50px' }, 0); // Adjust the animation duration as needed
        } else {
            $('body').animate({ marginTop: '-=50px' }, 0); // Adjust the animation duration as needed
        }

        $(this).find('i').toggleClass('fa-bars fa-times'); // Optional: change icon when menu is open/close
    });
});


   $(document).ready(function() {
    const video = document.querySelector('.hero-video');
    const sources = Array.from(video.querySelectorAll('source'));
    let currentVideoIndex = 0;

    // Event listeners for previous and next buttons
    $('.button-left button').click(function() {
        switchToPreviousVideo();
        slideVideo('left'); // Slide left animation
    });

    $('.button-right button').click(function() {
        switchToNextVideo();
        slideVideo('right'); // Slide right animation
    });

    // Event listener for video ended
    video.addEventListener('ended', function() {
        switchToNextVideo();
        slideVideo('right'); // Slide right animation
    });

    function switchToPreviousVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + sources.length) % sources.length;
        switchVideoSource();
    }

    function switchToNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % sources.length;
        switchVideoSource();
    }

    function switchVideoSource() {
        video.pause();
        video.currentTime = 0;
        video.src = sources[currentVideoIndex].src;
        
        // Load and play the video
        video.load();
        video.play().catch(error => {
            console.error('Video play error:', error);
        });
    }

    switchVideoSource(); // Load initial video
});


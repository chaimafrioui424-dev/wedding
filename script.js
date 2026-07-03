document.getElementById('envelope').addEventListener('click', function() {
    var envelope = this;
    
    // 1. Nzido la classe 'open' bach sra l'animation CSS
    envelope.classList.add('open');

    // 2. T-déclonchi la musique direct f le premier clic
    var music = document.getElementById('weddingMusic');
    music.play().catch(function(error) {
        console.log("Autoplay bloqué par le navigateur:", error);
    });

    // 3. Khali la lettre tatla3 (600ms) w n-affichiw les détails ta3 la page
    setTimeout(function() {
        var detailsSection = document.getElementById('details');
        var gallerySection = document.getElementById('gallery');

        detailsSection.classList.add('section-visible');
        gallerySection.classList.add('section-visible');

        // Scroller b chwya vers les détails bch ychoufou l'invitation kamel
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    }, 1200); // Ntsenno l'enveloppe tathel qbel ma n-scrolliw
});
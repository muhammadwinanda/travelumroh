$(document).ready(()=>{
    var currentIndex = 0;
    var slides = $('.newSlider');
    var totalSlides = slides.length;

    function btnLeft(){
        slides.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.eq(currentIndex).addClass('active');
    }

    function btnRight(){
        slides.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides.eq(currentIndex).addClass('active');
    }

    slides.eq(currentIndex).addClass('active');

    $('#prevBtn').on('click', ()=>{
        btnLeft();
    });

    $('#nextBtn').on('click', ()=>{
        btnRight();
    });

    // Otomatis geser ke slide berikutnya setiap 6 detik
    setInterval(function() {
        btnLeft();
    }, 7500);

// Testimonial
    var indexTesti = 0;
    var grupTestiItems = $('.grupTesti');
    var totalItems = grupTestiItems.length;

    function showTesti(index) {
      grupTestiItems.removeClass('active');
      grupTestiItems.eq(index).addClass('active');
    }

    function nextTesti() {
      indexTesti = (indexTesti + 1) % totalItems;
      console.log('dari function nextTesti', indexTesti);
      showTesti(indexTesti);
    }

    function prevTesti() {
      indexTesti = (indexTesti - 1 + totalItems) % totalItems;
      showTesti(indexTesti);
    }

    // Tampilkan testimoni pertama saat halaman dimuat
    showTesti(indexTesti);

    // Atur interval untuk menampilkan testimoni selanjutnya setiap 5 detik
    setInterval(nextTesti, 10000);
});
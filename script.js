// Web Share API (start)
const buttonShare = document.querySelector('#buttonShare');
buttonShare.onclick = function () {
    if(!navigator.share) return
    navigator.share({
        title: 'BAKRI DESIGN',
        text: 'Thanks for sharing this website',
        url: 'https://abubakartarsum.github.io/Bakri-Blog',
    })
    .then(() => console.log('Successful Sharing Website'))
    .catch((error) => console.log('Error sharing', 
    error));
}
const shareButton = document.querySelector('.shareButton');
shareButton.onclick = function () {
    if(!navigator.share) return
    navigator.share({
        title: 'BAKRI DESIGN',
        text: 'Thanks for sharing this website',
        url: 'https://abubakartarsum.github.io/Bakri-Blog',
    })
    .then(() => console.log('Successful Sharing Website'))
    .catch((error) => console.log('Error sharing', 
    error));
}
// Web Share API (end)

// GSAP3 Script start
gsap.registerPlugin(TextPlugin);
gsap.to('.teks-judul', {duration: 2.8, delay:1.2,  text: '"On Preparing the New Normal with Technology"'});
gsap.from('.navbar', { duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce' });
//  GSAP3 Script end

// AOS Script start
AOS.init({
    duration: 900
});
// AOS Script end

// Script for contact form start
const scriptURL = 'https://script.google.com/macros/s/AKfycbxC2m34jQdQB9XqTNAcJdR_y91Aq5y6mkUdCj1zEFbNaH9T-ArQyjBSRrGss1fcNn5i/exec';
const form = document.forms['project-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit di kirim
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // tampilkan alert
      // myAlert.classList.toggle('d-none');
      swal({
        title: "Successfully!",
        text: "Terimakasih telah subscribe blog saya",
        icon: "success",
        button: "Close",
      });
      // reset formnya
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
// Script for contact form end

// Script jQuery for active link navbar
$('.navbar-nav').on('click', '.nav-link', function() {
  $('.navbar-nav .nav-link.actived').removeClass('actived');
  $(this).addClass('actived');
})
// Script jQuery akhir

// Script untuk lightbox gallery
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('gallery-item')) {
    const src = e.target.getAttribute('src');
    document.querySelector('.modal-img').src = src;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
    myModal.show();
  }
});
// Script untuk lightbox gallery akhir
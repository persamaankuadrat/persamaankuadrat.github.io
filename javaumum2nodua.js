var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active2";
  }
  
  
  
      function cek1var(){
      form.variabel1.value= "A";
      }
      function cek2var(){
      form.variabel1.value= "B";
      }
      function cek3var(){
      form.variabel1.value= "C";
      }
  
      function cekjawabanvar(){
      if(form.variabel1.value=='A'){
    document.getElementById("tampilvar").innerHTML="Selamat! jawabanmu benar";
    document.getElementById("tampilvar").style.color = "green";
      }else{
    document.getElementById("tampilvar").innerHTML="Jawabanmu salah!! Variabel adalah lambang pengganti suatu bilangan yang belum diketahui nilainya";
    document.getElementById("tampilvar").style.color = "red";
      }
  }
  
    function cek1koef(){
      form.koefisien1.value= "A";
      }
      function cek2koef(){
      form.koefisien1.value= "B";
      }
      function cek3koef(){
      form.koefisien1.value= "C";
      }
      function cekjawabankoef(){
      if(form.koefisien1.value=='B'){
      document.getElementById("tampilkoef").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilkoef").style.color = "green";
      }else{
      document.getElementById("tampilkoef").innerHTML="Jawabanmu salah!! koefisien yakni bilangan yang mengandung variabel";
      document.getElementById("tampilkoef").style.color = "red";
      }
    }
  
    function cek1kon(){
      form.konstanta1.value= "A";
      }
      function cek2kon(){
      form.konstanta1.value= "B";
      }
      function cek3kon(){
      form.konstanta1.value= "C";
      }
      function cekjawabankon(){
      if(form.konstanta1.value=='C'){
      document.getElementById("tampilkon").innerHTML="Selamat! jawabanmu benar";
      document.getElementById("tampilkon").style.color = "green";
      }else{
      document.getElementById("tampilkon").innerHTML="Jawabanmu salah!! Konstanta berupa bilangan yang tidak memuat variabel";
      document.getElementById("tampilkon").style.color = "red";
      }
    }
  
  }
}
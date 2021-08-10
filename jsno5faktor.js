let input1 = document.getElementById("texta");
let input1a = document.getElementById("textb");
let btn1 = document.getElementById("ceka");
let btn1a = document.getElementById("cekb");
let aksi1 = document.getElementById("ketx1");
let aksi1a = document.getElementById("ketx2");

btn1.addEventListener("click",function(){
    if(input1.value == "0" ){
        aksi1.innerHTML = `<img src="benar.png" >`
    }
    else{
        aksi1.innerHTML = `<img src="salah.png" >`
    }
    MathJax.typeset();
  })
  btn1a.addEventListener("click",function(){
    if(input1a.value == "-2" ){
        aksi1a.innerHTML = `<img src="benar.png" >`
    }
    else{
        aksi1a.innerHTML = `<img src="salah.png" >`
    }
    MathJax.typeset();
  })
  input1.addEventListener("keyup",function(){
    input1.value = input1.value.split(' ').join('');
  })
  input1a.addEventListener("keyup",function(){
    input1a.value = input1a.value.split(' ').join('');
  })



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
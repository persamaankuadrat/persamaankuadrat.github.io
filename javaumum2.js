function cekkonstanta() {
      var x = document.getElementById("textkonstanta").value;
       var jawaban;
       if (x == "2") {
         jawaban = "Berhasil, jawabanmu benar";
       } else {
         jawaban = "Jawabanmu salah, coba ingat lagi mana yang merupakan konstanta dari <var>x<sup>2</sup>";
       }
       document.getElementById("ketkonstanta").innerHTML = jawaban;
     }

function cekvariabel() {
      var x = document.getElementById("textvariabel").value;
       var jawaban;
       if (x == "-3") {
         jawaban = "Berhasil, jawabanmu benar";
       } else {
         jawaban = "Jawabanmu salah, coba ingat lagi mana yang merupakan konstanta dari <var>x<sup>2</sup>";
       }
       document.getElementById("ketvariabel").innerHTML = jawaban;
     }

     function cekkoefisien() {
      var x = document.getElementById("textkoefisien").value;
       var jawaban;
       if (x == "1") {
         jawaban = "Berhasil, jawabanmu benar";
       } else {
         jawaban = "Jawabanmu salah, coba ingat lagi mana yang merupakan konstanta dari <var>x<sup>2</sup>";
       }
       document.getElementById("ketkoefisien").innerHTML = jawaban;
     }
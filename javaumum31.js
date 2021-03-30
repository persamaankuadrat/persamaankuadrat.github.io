function ceka3(){
    var jwb1 = document.getElementById("texta3");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "-1"){
    document.getElementById("keta3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("keta3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}

function cekb3(){
    var jwb1 = document.getElementById("textb3");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "-2"){
    document.getElementById("ketb3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("ketb3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}

function cekc3(){
    var jwb1 = document.getElementById("textc3");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "1"){
    document.getElementById("ketc3").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("ketc3").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}


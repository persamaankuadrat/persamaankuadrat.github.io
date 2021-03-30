function ceka4(){
    var jwb1 = document.getElementById("texta4");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "4"){
    document.getElementById("keta4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("keta4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}


function cekc4(){
    var jwb1 = document.getElementById("textc4");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "16"){
    document.getElementById("ketc4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("ketc4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}


function ceka4(){
    var jwb1 = document.getElementById("texta4");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "3"){
    document.getElementById("keta4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;margin-left:7px;margin-top:7px;'>";
  } else{
    document.getElementById("keta4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;margin-left:7px;margin-top:7px;'>";
  }

}



function cekc4(){
    var jwb1 = document.getElementById("textc4");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "-7"){
    document.getElementById("ketc4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;margin-left:45px;margin-top:-30px;'>";
  } else{
    document.getElementById("ketc4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;margin-left:45px;margin-top:-30px;'>";
  }

}


function cekb4(){
    var jwb1 = document.getElementById("textb4");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "1"){
    document.getElementById("ketb4").innerHTML = "<img src='benar.png' style='width:30px; height:30px;margin-left:84px;margin-top:-30px;'>";
  } else{
    document.getElementById("ketb4").innerHTML = "<img src='salah.png' style='width:30px; height:30px;margin-left:84px;margin-top:-30px;'>";
  }

}


function ceka(){
    var jwb1 = document.getElementById("texta");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "2"){
    document.getElementById("keta").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("keta").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}

function cekb(){
    var jwb1 = document.getElementById("textb");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "3"){
    document.getElementById("ketb").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("ketb").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}

function cekc(){
    var jwb1 = document.getElementById("textc");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "-2"){
    document.getElementById("ketc").innerHTML = "<img src='benar.png' style='width:30px; height:30px;'>";
  } else{
    document.getElementById("ketc").innerHTML = "<img src='salah.png' style='width:30px; height:30px;'>";
  }

}

//batas slide 2


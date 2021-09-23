



function ceka5(){
    var jwb1 = document.getElementById("texta5");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "-1"){
    document.getElementById("keta5").innerHTML = "<img src='benar.png' style='width:30px; height:30px;margin-left:5px;margin-top:7px;'>";
  } else{
    document.getElementById("keta5").innerHTML = "<img src='salah.png' style='width:30px; height:30px;margin-left:5px;margin-top:7px;'>";
    
  }

}


function cekc5(){
    var jwb1 = document.getElementById("textc5");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "-9"){
    document.getElementById("ketc5").innerHTML = "<img src='benar.png' style='width:30px; height:30px;margin-left:44px;margin-top:-30px;'>";
  } else{
    document.getElementById("ketc5").innerHTML = "<img src='salah.png' style='width:30px; height:30px;margin-left:44px;margin-top:-30px;'>";
  }

}


function cekb5(){
    var jwb1 = document.getElementById("textb5");
   
    var y = jwb1.value.toLowerCase();
    y=y.replace(/\s+/g, '');


if(y == "-1"){
    document.getElementById("ketb5").innerHTML = "<img src='benar.png' style='width:30px; height:30px;margin-left:84px;margin-top:-30px;'>";
  } else{
    document.getElementById("ketb5").innerHTML = "<img src='salah.png' style='width:30px; height:30px;margin-left:84px;margin-top:-30px;'>";
  }

}


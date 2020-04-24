//definisi class
class eMoneyAccount {
    //definisi constructor
    //asumsi: user mendaftar dengan nama & telp, dan saldo awal 0
    constructor(nameInit, phoneInit) {
      this.name = nameInit;
      this.phone = phoneInit;
      this.amount = 0;
    }
  
    //ketika topup, saldo akan bertambah sesuai jumlah yang di topup
    topUp(value) {
      this.amount += value;
    }
  
    //membelanjakan sejumlah value
    spend(value) {
      this.amount -= value;
    }
  
    //recipient adalah object eMoney Account lain
    //value adalah jumlah transfer
    transfer(recipient, value) {
      recipient.amount += value;
      this.amount -= value;
    }
  
    //setter atribut nama dan no hp
    setname(newName) {
      this.name = newName;
    }
  
    setPhone(newPhone) {
      this.phone = newPhone;
    }
  }
  
  //instansiasi: membentuk objek riil dari class
  var Dwi = new eMoneyAccount("Dwi","0808080");
  console.log("saldo Dwi: "+Dwi.amount);
  var Abrar = new eMoneyAccount("Abrar","12345");
  console.log("saldo Abrar: "+Abrar.amount);
  console.log("==========");
  console.log("Dwi top up Rp300.000");
  Dwi.topUp(300000);
  console.log("saldo Dwi: "+Dwi.amount);
  console.log("==========");
  console.log("Dwi transfer Rp80.000 ke Abrar");
  Dwi.transfer(Abrar, 80000);
  console.log("saldo Dwi: "+Dwi.amount);
  console.log("saldo Abrar: "+Abrar.amount);
  
  //tampilkan informasi akun emoney Dwi & Abrar
    var area1 = document.getElementById ('dwi');
    var area2 = document.getElementById ('abrar');
    var content = document.createElement ('p');
  
    area1.innerHTML='Name :' +Dwi.name+ '<br>Phone : ' +Dwi.phone+ '<br>Amount : ' +Dwi.amount;
  
    //transaksi atau pengeluaran dwi 
    function myFunction () {
      var text ="";
      if (document.getElementById("id1").validity.rangeOverflow){
          txt = "Maaf ! Transfer Gagal";
      } else {
          txt = "Transfer Berhasil";
      }
      document.getElementById("info").innerHTML= txt;
  }
    
    area2.innerHTML='Name :' +Abrar.name+ '<br>Phone :' +Abrar.phone+ '<br>Amount :' +Abrar.amount;
  
    //transaksi atau pengeluaran abrar
    function myFunction1 () {
      var text ="";
      if (document.getElementById("id2").validity.rangeOverflow){
          txt = "Maaf ! Transfer Gagal";
      } else {
          txt = "Transfer Berhasil";
      }
      document.getElementById("info1").innerHTML= txt;
  }
  
    content.appendChild.area;
  
    
  
  // var topUp = 300000 ;
  
  //  if(typeof topUp == 'number'){
  // 	document.write(topUp + " is a number of top-up from Dwi<br/>");
  //  }else{
  // 	document.write(topUp + " is not a number <br/>");
  //  }
  
  //handling error in JS
   try {
    throw topUp();
  } catch (e) {
    console.log(e.topUp);     // 'MyError'
    console.log(e.number);  // 'Default Message'
  }
  
  try {
    throw recipient();
  } catch (e) {
    console.log(e.recipient);     // 'MyError'
    console.log(e.anotheraccount);  // 'Default Message'
  }
  
  try {
    throw spend();
  } catch (e) {
    console.log(e.spend);     // 'MyError'
    console.log(e.number);  // 'Default Message'
  }
  
  try {
    throw transfer();
  } catch (e) {
    console.log(e.transfer);     // 'MyError'
    console.log(e.number);  // 'Default Message'
  }
  
  
  
    //menampilkan lirik lagu
  
//     function fetchLyrics(artist, title) {
//       const Http = new XMLHttpRequest();
//       var url = 'https://api.lyrics.ovh/v1/'+artist+'/'+title;
//       var output = document.getElementById("lyricoutput");
//       Http.open("GET", url); //kirim HTTP request dengan metode GET
//       Http.send();
  
//       //ketika balasan dari server sudah ada
//       Http.onreadystatechange = function() {
//           if(this.readyState==4) {
//           var result = JSON.parse(Http.responseText);
//           output.innerHTML = result.lyrics;
//           }
//       }
//   }
  
  
  
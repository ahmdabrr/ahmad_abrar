function jumlah()
{
var bil1 = parseFloat(document.fform.bilangan1.value);
if (isNaN (bil1))
bil1=0.0;
var bil2 = parseFloat(document.fform.bilangan2.value);
if (isNaN (bil2))
bil2=0.0;
var hasil = bil1 + bil2;
alert ("Hasil Penjumlahan = " + hasil);
}


function addition(){
    a=Number(document.my_cal.first.value);
    b=Number(document.my_cal.second.value);
    c=a+b;
    document.my_cal.total.value=c;
    }
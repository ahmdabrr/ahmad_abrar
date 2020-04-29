function jumlah()
{
var bil1 = parseFloat(document.fform.bilangan1.value);
if (isNaN (bil1))
bil1=0.0;
var bil2 = parseFloat(document.fform.bilangan2.value);
if (isNaN (bil2))
bil2=0.0;
var hasil = bil1 / bil2;
alert ("Hasil Pembagian = " + hasil);
}


function addition(){
    a=Number(document.my_cal.first.value);
    b=Number(document.my_cal.second.value);
    c=a/b;
    document.my_cal.total.value=c;
    }


//angka ke kalimat
var NUMBER2TEXT = {
    ones: ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepeuluh', 'Sebelas', 'Duabelas', 'Tigabelas', 'Empatbelas', 'Limabelas', 'Enambelas', 'Tujuhbelas', 'Delapanbelas', 'Sembilanbelas'],
    tens: ['', '', 'Dua puluh', 'Tiga puluh', 'Empat puluh', 'Lima puluh', 'Enam puluh', 'Tujuh puluh', 'Delapan puluh', 'Sembilan puluh'],
    sep: ['', ' Ribu ', ' Juta ', ' Miilyar ', ' Triliun ', ' quadrillion ', ' quintillion ', ' sextillion ']
};

(function( ones, tens, sep ) {

    var input = document.getElementById( 'input' ),
        output = document.getElementById( 'output' );
    
    input.onkeyup = function() {
        var val = this.value,
            arr = [],
            str = '',
            i = 0;
        
        if ( val.length === 0 ) {
            output.textContent = 'Please type a number into the text-box.';
            return;  
        }
        
        val = parseInt( val, 10 );
        if ( isNaN( val ) ) {
            output.textContent = 'Invalid input.';
            return;   
        }
        
        while ( val ) {
            arr.push( val % 1000 );
            val = parseInt( val / 1000, 10 );   
        }
        
        while ( arr.length ) {
            str = (function( a ) {
                var x = Math.floor( a / 100 ),
                    y = Math.floor( a / 10 ) % 10,
                    z = a % 10;
                
                return ( x > 0 ? ones[x] + ' Ratus ' : '' ) +                 
                       ( y >= 2 ? tens[y] + ' ' + ones[z] : ones[10*y + z] ); 
            })( arr.shift() ) + sep[i++] + str;                     
        }
        
        output.textContent = str;        
    };
    
})( NUMBER2TEXT.ones, NUMBER2TEXT.tens, NUMBER2TEXT.sep );
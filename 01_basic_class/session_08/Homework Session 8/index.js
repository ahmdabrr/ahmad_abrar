var DataMurid = [
    {
        Nama: "Andi",
        Nilai: 70
    },
    {
        Nama: "Ani",
        Nilai: 78
    },
    {
        Nama: "Andrew",
        Nilai: 89
    },
    {
        Nama: "Sam",
        Nilai: 80
    },
    {
        Nama: "Witwicky",
        Nilai: 75,
    },
    {
        Nama: "Peter",
        Nilai: 65
    },
    {
        Nama: "Parker",
        Nilai: 70
    }
];

DataMurid.forEach(items => {
    console.log(items.Nama,items.Nilai)
})

function pesan() {
    var DataMurid = prompt('Ketik Nilai Ujian Anda:','')
    if (DataMurid >= 70) {
     document.write("<h1>Selamat, anda lulus</h1>")
    } else if (DataMurid < 70) {
     document.write("<h1>Maaf, anda belum lulus</h1>")
    } 
   }

   var numbers = [70, 78, 89, 80, 75, 65,70];
   var maximal = Math.max.apply(Math, numbers);
   var minimal = Math.min.apply(Math, numbers);
   document.write("Berdasarkan nilai ujian : " + numbers +"<br/>");
   document.write("Nilai ujian tertinggi : " + maximal +"<br/>");
   document.write("Nilai ujian terendah : " + minimal);

   
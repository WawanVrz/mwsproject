// =========== TUGAS 1 =============
let lokasi = [-8.6736314, 115.1476175];
let markertitle = "<p align='center'><b>Batu Belig Beach</b><br>Lat:-8.6736314 Long:115.1476175 <br><br> Jl. Batu Belig, Kerobokan Kelod, Kuta Utara, Kabupaten Badung, Bali 80361</p>";
let marker= L.marker(lokasi).addTo(mymap).bindPopup(markertitle);


// ========== TUGAS 2 ==============
let places= [
        {"lokasi": [-8.670973, 115.233879], "sponsor" : "<p align='center'><b>Nitimandala Renon</b><br>Lat:-8.670973 Long:115.233879 <br><br> Jl. Raya Puputan I No.110, Sumerta Kelod, Denpasar Tim., Kota Denpasar, Bali 80234</p>"},
        {"lokasi": [-8.799609, 115.228264], "sponsor" : "<p align='center'><b>Nusa Dua</b><br>Lat:-8.799609 Long:115.228264 <br><br> Benoa, Kuta Selatan, Kabupaten Badung, Bali</p>"},
        {"lokasi": [-8.681178, 115.458249], "sponsor" : "<p align='center'><b>Nusa Lembongan</b><br>Lat:-8.681178 Long:115.458249 <br><br> Jl. Raya Jungut Batu, Jungutbatu, Nusa Lembongan, Klungkung Regency, Bali 80036</p>"},
        {"lokasi": [-8.678066, 115.266058], "sponsor" : "<p align='center'><b>Sanur Beach</b><br>Lat:-8.678066 Long:115.266058 <br><br> Jl. Sanur Beach Hotel, Sanur Kauh, Kota Denpasar, Bali</p>"},
        {"lokasi": [-8.832929, 115.090551], "sponsor" : "<p align='center'><b>Uluwatu</b><br>Lat:-8.832929 Long:115.090551 <br><br> Pecatu, Kuta Sel., Kabupaten Badung, Bali 80361</p>"},
        {"lokasi": [-8.696194, 115.1617737], "sponsor" : "<p align='center'><b>Kesato & Co Digital Agency</b><br>Lat:-8.696194 Long:115.1617737 <br><br> Jl. Plawa No.8A, Seminyak, Bali 80361</p>"}
    ];

for (var p of places) {
    var markerlist = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}


// ============ TUGAS 3 =============
function findLocation(x,y) 
{
    console.log(x,y);
    for (var i=0; i < places.length;i++) 
    {
        if (places[i].lokasi[0]==x && places[i].lokasi[1]==y) 
        {
            return i; 
        }
    }
    return -1; 
}

function showLocation(e) {
    // console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
    let ix = findLocation(e.latlng.lat,e.latlng.lng);
    console.log(ix);
    if (ix >=0) 
    {
        img.src= placesreview[ix].gambar;
        par.textContent=placesreview[ix].review;
    }
}

// Persiapkan tempat untuk gambar dan review
let gmb= document.getElementById("gmb");
let rev= document.getElementById("review");
let img= document.createElement('img');
let par= document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

let r0="Over the years, this field has been the best place for me to jog, heart healthy gymnastics, light exercise, family recreation, playground, also a favorite place for salat ied, parking is ok too, and I support order traders to be orderly";
let r1="This place is one of the beaches that must be visited when you are in Bali. The scenery is very beautiful and perfect if you like with photography.";
let r2="This island is fantastic! Especially if you’ve got a great guide to help you navigate Bali and the surrounding islands this island is great! The water is so clean and beautiful.";
let r3="You can see sunrice and sunside in this place. And i hope you feel happy if you going in this place. Let's go to sanur guys";
let r4="A beautiful beach. Also called as Suluban Beach. Been twice here. The beach is under a cliff so it's quite difficult to get here. But that makes the beach unique with a cave-like entrance.";
let r5="Really happy to work with this team. Kesato has professional digital marketing strategy, website and graphic designer who help my business run very well.";

let placesreview = [
    {"lokasi": [-8.670973, 115.233879], "sponsor" : "<p align='center'><b>Nitimandala Renon</b><br>Lat:-8.670973 Long:115.233879 <br><br> Jl. Raya Puputan I No.110, Sumerta Kelod, Denpasar Tim., Kota Denpasar, Bali 80234</p>", "gambar":"../images/img4.jpg","review": r0},
    {"lokasi": [-8.799609, 115.228264], "sponsor" : "<p align='center'><b>Nusa Dua</b><br>Lat:-8.799609 Long:115.228264 <br><br> Benoa, Kuta Selatan, Kabupaten Badung, Bali</p>", "gambar":"../images/img2.jpg","review": r1},
    {"lokasi": [-8.681178, 115.458249], "sponsor" : "<p align='center'><b>Nusa Lembongan</b><br>Lat:-8.681178 Long:115.458249 <br><br> Jl. Raya Jungut Batu, Jungutbatu, Nusa Lembongan, Klungkung Regency, Bali 80036</p>", "gambar":"../images/img5.jpg","review": r2},
    {"lokasi": [-8.678066, 115.266058], "sponsor" : "<p align='center'><b>Sanur Beach</b><br>Lat:-8.678066 Long:115.266058 <br><br> Jl. Sanur Beach Hotel, Sanur Kauh, Kota Denpasar, Bali</p>", "gambar":"../images/img3.jpg","review": r3},
    {"lokasi": [-8.832929, 115.090551], "sponsor" : "<p align='center'><b>Uluwatu</b><br>Lat:-8.832929 Long:115.090551 <br><br> Pecatu, Kuta Sel., Kabupaten Badung, Bali 80361</p>", "gambar":"../images/img1.jpg","review": r4},
    {"lokasi": [-8.696194, 115.1617737], "sponsor" : "<p align='center'><b>Kesato & Co Digital Agency</b><br>Lat:-8.696194 Long:115.1617737 <br><br> Jl. Plawa No.8A, Seminyak, Bali 80361</p>", "gambar":"../images/Kesato_Co-Banner.jpg","review": r5}
];

for (var p of placesreview) {
    var markerreview = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    markerreview.on('click', showLocation);
}
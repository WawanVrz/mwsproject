var mymap = L.map('mapid').setView([-8.670973, 115.233879], 11);

                // PLACE 1
                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', maxZoom: 18, id: 'mapbox.streets', accessToken: 'sk.eyJ1Ijoid2F3YW5yYWhtYXdhbiIsImEiOiJjam0wYmkwb2IyNHExM3FsZGY0aWlzamd1In0.2NxWKwk1V15gi7qS9Ykg8Q' }).addTo(mymap);
                var marker1 = L.marker([-8.670973, 115.233879]).addTo(mymap);
                var circle1 = L.circle([-8.670973, 115.233879], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(mymap);
                marker1.bindPopup("<p align='center'><img src='../images/img4.jpg' width='100%'><br><br><b>Favourite Place 1 : Nitimandala Renon</b><br>Lat:-8.670973 Long:115.233879 <br><br> Jl. Raya Puputan I No.110, Sumerta Kelod, Denpasar Tim., Kota Denpasar, Bali 80234</p>").openPopup();
                
                // PLACE 2
                var marker2 = L.marker([-8.799609, 115.228264]).addTo(mymap);
                var circle2 = L.circle([-8.799609, 115.228264], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(mymap);
                marker2.bindPopup("<p align='center'><img src='../images/img2.jpg' width='100%'><br><br><b>Favourite Place 2 : Nusa Dua</b><br>Lat:-8.799609 Long:115.228264 <br><br> Benoa, Kuta Selatan, Kabupaten Badung, Bali</p>").openPopup();
                
                // PLACE 3
                var marker3 = L.marker([-8.681178, 115.458249]).addTo(mymap);
                var circle3 = L.circle([-8.681178, 115.458249], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(mymap);
                marker3.bindPopup("<p align='center'><img src='../images/img5.jpg' width='100%'><br><br><b>Favourite Place 3 : Nusa Lembongan</b><br>Lat:-8.681178 Long:115.458249 <br><br> Jl. Raya Julgut Batu, Jungutbatu, Nusa Lembongan, Klungkung Regency, Bali 80036</p>").openPopup();

                // PLACE 4
                var marker4 = L.marker([-8.678066, 115.266058]).addTo(mymap);
                var circle4 = L.circle([-8.678066, 115.266058], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(mymap);
                marker4.bindPopup("<p align='center'><img src='../images/img3.jpg' width='100%'><br><br><b>Favourite Place 4 : Sanur Beach</b><br>Lat:-8.678066 Long:115.266058 <br><br> Jl. Sanur Beach Hotel, Sanur Kauh, Kota Denpasar, Bali</p>").openPopup();

                // PLACE 5
                var marker5 = L.marker([-8.832929, 115.090551]).addTo(mymap);
                var circle5 = L.circle([-8.832929, 115.090551], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(mymap);
                marker5.bindPopup("<p align='center'><img src='../images/img1.jpg' width='100%'><br><br><b>Favourite Place 5 : Uluwatu</b><br>Lat:-8.832929 Long:115.090551 <br><br> Pecatu, Kuta Sel., Kabupaten Badung, Bali 80361</p>").openPopup();

                // PLACE 6
                var marker6 = L.marker([-8.451901, 115.278325]).addTo(mymap);
                var circle6 = L.circle([-8.451901, 115.278325], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(mymap);
                marker6.bindPopup("<p align='center'><img src='../images/img6.jpg' width='100%'><br><br><b>Favourite Place 6 : Cafe Pomegranate Ubud</b><br>Lat:-8.451901 Long:115.278325 <br><br> Jl. Subak Sok Wayah, Ubud, Kab. Gianyar, Bali 80571</p>").openOn(mymap);


                function onMapClick(e) {
                    console.log("Peta diklik pada posisi " + e.latlng);
                }
                mymap.on('click', onMapClick);

                var popup = L.popup();
                function onMapClick(e) {
                    popup
                        .setLatLng(e.latlng)
                        .setContent("Lokasi yang dipilih: " + e.latlng.toString())
                        .openOn(mymap);
                }
                mymap.on('click', onMapClick);
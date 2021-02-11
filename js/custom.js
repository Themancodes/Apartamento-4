// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/
function myMap() {
    const myPlace = new google.maps.LatLng(25.682813304361225, -100.35004035557535)
    var mapProp = {
        center: myPlace,
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    new google.maps.Marker({
        position: myPlace,
        map,
        title: "Apartamento 4",
    });
}


function addWhatsappUrl(){
    const elements = document.getElementsByClassName("img-box")

    for (let index = 0; index < elements.length; index++) {
        let element = elements[index];
        element.href = "https://api.whatsapp.com/send?phone=528180547423&text=Hola%20Me%20interesa%20este%20art%C3%ADculo."
        element.target = "_blank"
    }
}

addWhatsappUrl()


/** Instagram Photos puller **/

var token = '1362124742.7b33a8d.6613a3567f0a425f9852055b8ef743b7',
    num_photos = 10,
    container = document.getElementById( 'rudr_instafeed' ),
    scrElement = document.createElement( 'script' );
    console.log(token)
window.mishaProcessResult = function( data ) {
    console.log(data)
	for( x in data.data ){
		container.innerHTML += '<li><img src="' + data.data[x].images.low_resolution.url + '"></li>';
	}
}
 
scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );
// set global variables
var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});




// Function to init map


function initialize() {
    var center = new google.maps.LatLng(41.299496, 69.240074);
    var mapOptions = {
        zoom: 11,
        center: center,
        mapTypeID: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}


// Function to add markers to map


function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map
    });

    gmarkers1.push(marker1);

// Marker click listener (zoom in and open info window)
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(13);
        }
    })(marker1, content));
}


// Function to filter markers by category


filterMarkers = function (category) {
    for (i = 0; i <= markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
            
        }
        
        // if Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}

// Add markers (you can add as many as you like)
// Note, marker #5 has a lot of styling and an image in the info window. Just showing an example of what you can do with an info window.
markers1 = [
    ['0', 'Lee Blvd Branch', 41.399250, 69.263871, 'Branch'],
    ['1', 'Lee Blvd ATM', 41.313839, 69.269974, 'ATM'],
    ['2', 'Annex Branch', 41.301314, 69.424476, 'Branch'],
    ['3', 'West Branch', 41.333425, 69.288883, 'Drive-Thru'],
    ['4', 'East ATM', 41.343839, 69.299974, 'ATM'],
    
    ['5', '<div style=\"font-size:12px; color:#000; \"><img id=\'popimg\' src=\'https://s3-us-west-2.amazonaws.com/s.cdpn.io/44720/paris.jpg\'  <br/><br/><strong>Address:</strong><br/>123 Happy Place<br/><br/><strong>City-State-Zip:</strong><br/>Lawton, OK. 73509<br/><br/><strong>Phone:</strong><br/>580-555-1234<br/><br/> <strong>Type:</strong><br/>(ATM)<br/><br/><strong>Monday - Friday</strong><br/>9:00 AM - 5:00 PM &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</div>"', 34.713839, -98.409974, 'ATM'],
    ['6', 'East ATM', 41.329246, 69.245748, 'trade'],
    ['7', 'East ATM', 41.320415, 69.220525, 'trade'],
    ['8', 'East ATM', 41.280702, 69.284173, 'trade'],
    ['9', 'Annex Branch', 41.329590, 69.212909, 'Branch'],
    ['10', 'Annex Branch', 41.301483, 69.203644, 'Branch'],
    ['11', 'Annex Branch', 41.284974, 69.199526, 'Branch'],
    ['11', 'Annex Branch', 41.271815, 69.253747, 'Branch'],
    ['12', 'Annex Branch', 41.212529, 69.249838, 'Branch'],
    ['13', 'Annex Branch', 41.328132, 69.389853, 'Branch'],
    ['14', 'Annex Branch', 41.364216, 69.345927, 'Branch'],
];

// Init map
initialize();
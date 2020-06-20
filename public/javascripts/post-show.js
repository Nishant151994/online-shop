mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGFudDE1MTk5NCIsImEiOiJja2JrdTY4cWoxMmpnMnJwdjZuanY5aGIxIn0.3Gs3gy7a_KViOo42TnOrmw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: post.coordinates,
  zoom: 5
});

// create a HTML element for our post location/marker
var el = document.createElement('div');
el.className = 'marker';

// make a marker for our location and add to the map
new mapboxgl.Marker(el)
  .setLngLat(post.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
  .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
  .addTo(map);

  // Toggle edit review form
	$('.toggle-edit-form').on('click', function() {
		// toggle the edit button text on click
		$(this).text() === 'Edit' ? $(this).text('Cancel') : $(this).text('Edit');
		//toggle visibility of the edit review form
		$(this).siblings('.edit-review-form').toggle();
	});

  // Add click listener for clearing of rating from edit/new form
  $('.clear-rating').click(function() {
    $(this).siblings('.input-no-rate').click();
  });
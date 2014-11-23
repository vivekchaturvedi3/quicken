var serviceURL = "http://quickentech.in/";
//var serviceURL = "http://localhost/quickenweb/";

var events;
$(document).on('pageshow', '#eventListPage', function() {
//$('#eventListPage').bind('pageinit', function(event) {
	getEventsList();
});

function getEventsList() {
	$.getJSON(serviceURL + 'events/listing/', function(data) {
		$('#eventList li').remove();
		events = data.items;
		$.each(events, function(index, eventinfo) {
		var event = eventinfo.Event;
		var ticketAmt = 0;
		var imgURL = serviceURL + "image.php?image=uploads/events/" + event.image +  "&width=100&height=75";
		//ticketAmt = eventinfo.Ticket[0].amount;
		//alert(event.id);
			$('#eventList').append('<li>' +
					'<a href="eventdetails.html?id=' + event.id + '&type=0"><img src="' + imgURL + '"/></a>' +
					'<h2>' + event.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Seller : ' + event.seller_or_theater_name + 'rs </h3>' +
					'</li>');
		});
		$('#eventList').listview('refresh');
	});
}

$(document).on('pageshow', '#movieListPage', function() {
//$('#movieListPage').bind('pageinit', function(event) {
	getMovieList();
});

function getMovieList() {
	$.getJSON(serviceURL + 'movies/listing/', function(data) {
		$('#movieList li').remove();
		movies = data.items;
		$.each(movies, function(index, movieinfo) {
		//alert(movieinfo);
		var movie = movieinfo.Event;
		var ticketAmt = 0;
		var imgURL = serviceURL + "image.php?image=uploads/movies/" + movie.image +  "&width=100&height=75";
		//ticketAmt = eventinfo.Ticket[0].amount;
			$('#movieList').append('<li>' +
					'<a href="moviedetails.html?id=' + movie.id + '&type=1"><img src="' + imgURL + '"/></a>' +
					'<h2>' + movie.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Theater : ' + movie.seller_or_theater_name + 'rs </h3>' +
					'</li>');
		});
		$('#movieList').listview('refresh');
	});
}

$(document).on('pageshow', '#restListPage', function() {
//$('#restListPage').bind('pageinit', function(event) {
	getRestList();
});

function getRestList() {
	$.getJSON(serviceURL + 'restaurants/listing/', function(data) {
		$('#restaurantList li').remove();
		restaurants = data.items;
		$.each(restaurants, function(index, restaurantinfo) {
		var restaurant = restaurantinfo.Restaurant;
		var ticketAmt = 0;
		var imgURL = serviceURL + "image.php?image=uploads/restaurants/" + restaurant.image +  "&width=100&height=75";
			$('#restaurantList').append('<li>' +
					'<a href="restaurantdetails.html?id=' + restaurant.id + '"><img src="' + imgURL + '"/></a>' +
					'<h2>' + restaurant.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Owner : ' + restaurant.owner_name + 'rs </h3>' +
					'</li>');
		});
		$('#restaurantList').listview('refresh');
	});
}

$(document).on('pageshow', '#cakeListPage', function() {
//$('#cakeListPage').bind('pageinit', function(event) {
	getCakeList();
});

function getCakeList() {
	$.getJSON(serviceURL + 'restaurants/listing/1', function(data) {
		$('#cakeList li').remove();
		bakeries = data.items;
		$.each(bakeries, function(index, bakeryinfo) {
		var bakery = bakeryinfo.Restaurant;
		var ticketAmt = 0;
		var imgURL = serviceURL + "image.php?image=uploads/bakeries/" + bakery.image +  "&width=100&height=75";
			$('#cakeList').append('<li>' +
					'<a href="restaurantdetails.html?id=' + bakery.id + '&type=1"><img src="' + imgURL + '"/></a>' +
					'<h2>' + bakery.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Owner : ' + bakery.owner_name + 'rs </h3>' +
					'</li>');
		});
		$('#cakeList').listview('refresh');
	});
}

$(document).on('pageshow', '#ffListPage', function() {
//$('#ffListPage').bind('pageinit', function(event) {
	getFFList();
});

function getFFList() {
	$.getJSON(serviceURL + 'restaurants/listing/2', function(data) {
		$('#ffList li').remove();
		foods = data.items;
		$.each(foods, function(index, foodinfo) {
		var food = foodinfo.Restaurant;
		var ticketAmt = 0;
		var imgURL = serviceURL + "image.php?image=uploads/foods/" + food.image +  "&width=100&height=75";
			$('#ffList').append('<li>' +
					'<a href="restaurantdetails.html?id=' + food.id + '&type=2"><img src="' + imgURL + '"/></a>' +
					'<h2>' + food.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Owner : ' + food.owner_name + 'rs </h3>' +
					'</li>');
		});
		$('#ffList').listview('refresh');
	});
}
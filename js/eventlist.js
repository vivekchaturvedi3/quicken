var serviceURL = "http://quickentech.in/";
//var serviceURL = "http://localhost/quickenweb/";

var events;

$('#eventListPage').bind('pageinit', function(event) {
	getEventsList();
});

function getEventsList() {
	$.getJSON(serviceURL + 'events/listing/', function(data) {
		$('#eventList li').remove();
		events = data.items;
		$.each(events, function(index, eventinfo) {
		var event = eventinfo.Event;
		var ticketAmt = 0;
		//if(eventinfo.Ticket[0].amount != undefined && eventinfo.Ticket[0].amount != 'null'){
			//ticketAmt = eventinfo.Ticket[0].amount;
		//}
			$('#eventList').append('<li>' +
					'<a href="eventdetails.html?id=' + event.id + '&type=0"><img src="' +  serviceURL + 'uploads/events/' + event.image + '"/></a>' +
					'<h2>' + event.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Seller : ' + event.seller_or_theater_name + 'rs </h3>' +
					'</li>');
		});
		$('#eventList').listview('refresh');
	});
}

$('#movieListPage').bind('pageinit', function(event) {
	getMovieList();
});

function getMovieList() {
	$.getJSON(serviceURL + 'movies/listing/', function(data) {
		$('#movieList li').remove();
		movies = data.items;
		$.each(movies, function(index, movieinfo) {
		var movie = movieinfo.Event;
		var ticketAmt = 0;
		//if(eventinfo.Ticket[0].amount != undefined && eventinfo.Ticket[0].amount != 'null'){
			//ticketAmt = eventinfo.Ticket[0].amount;
		//}
			$('#movieList').append('<li>' +
					'<a href="moviedetails.html?id=' + movie.id + '&type=1"><img src="' +  serviceURL + 'uploads/movies/' + movie.image + '"/></a>' +
					'<h2>' + movie.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Theater : ' + movie.seller_or_theater_name + 'rs </h3>' +
					'</li>');
		});
		$('#movieList').listview('refresh');
	});
}

$('#restListPage').bind('pageinit', function(event) {
	getRestList();
});

function getRestList() {
	$.getJSON(serviceURL + 'events/listing/', function(data) {
		$('#eventList li').remove();
		events = data.items;
		$.each(events, function(index, eventinfo) {
		var event = eventinfo.Event;
		var ticketAmt = 0;
		//if(eventinfo.Ticket[0].amount != undefined && eventinfo.Ticket[0].amount != 'null'){
			//ticketAmt = eventinfo.Ticket[0].amount;
		//}
			$('#eventList').append('<li>' +
					'<a href="eventdetails.html?id=' + event.id + '"><img src="' +  serviceURL + 'uploads/events/' + event.image + '"/></a>' +
					'<h2>' + event.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Seller : ' + event.seller_or_theater_name + 'rs </h3>' +
					'</li>');
		});
		$('#eventList').listview('refresh');
	});
}

$('#cakeListPage').bind('pageinit', function(event) {
	getCakeList();
});

function getCakeList() {
	$.getJSON(serviceURL + 'events/listing/', function(data) {
		$('#eventList li').remove();
		events = data.items;
		$.each(events, function(index, eventinfo) {
		var event = eventinfo.Event;
		var ticketAmt = 0;
		//if(eventinfo.Ticket[0].amount != undefined && eventinfo.Ticket[0].amount != 'null'){
			//ticketAmt = eventinfo.Ticket[0].amount;
		//}
			$('#eventList').append('<li>' +
					'<a href="eventdetails.html?id=' + event.id + '"><img src="' +  serviceURL + 'uploads/events/' + event.image + '"/></a>' +
					'<h2>' + event.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Seller : ' + event.seller_or_theater_name + 'rs </h3>' +
					'</li>');
		});
		$('#eventList').listview('refresh');
	});
}

$('#ffListPage').bind('pageinit', function(event) {
	getFFList();
});

function getFFList() {
	$.getJSON(serviceURL + 'events/listing/', function(data) {
		$('#eventList li').remove();
		events = data.items;
		$.each(events, function(index, eventinfo) {
		var event = eventinfo.Event;
		var ticketAmt = 0;
		//if(eventinfo.Ticket[0].amount != undefined && eventinfo.Ticket[0].amount != 'null'){
			//ticketAmt = eventinfo.Ticket[0].amount;
		//}
			$('#eventList').append('<li>' +
					'<a href="eventdetails.html?id=' + event.id + '"><img src="' +  serviceURL + 'uploads/events/' + event.image + '"/></a>' +
					'<h2>' + event.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					'<h3>Seller : ' + event.seller_or_theater_name + 'rs </h3>' +
					'</li>');
		});
		$('#eventList').listview('refresh');
	});
}
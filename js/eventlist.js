var serviceURL = "http://quickentech.in/";
//var serviceURL = "http://localhost/quickenweb/";

var events;
$(document).on('pageshow', '#eventListPage', function() {
//$('#eventListPage').bind('pageinit', function(event) {
	getEventsList();
});


$(document).on('pageshow', '#movieListPage', function() {
//$('#movieListPage').bind('pageinit', function(event) {
	getMovieList();
});


$(document).on('pageshow', '#restListPage', function() {
//$('#restListPage').bind('pageinit', function(event) {
	getRestList();
});


$(document).on('pageshow', '#cakeListPage', function() {
//$('#cakeListPage').bind('pageinit', function(event) {
	getCakeList();
});


$(document).on('pageshow', '#ffListPage', function() {
//$('#ffListPage').bind('pageinit', function(event) {
	getFFList();
});

$('#signup').submit(function(){
	var postData = $(this).serialize();
	
	$.ajax({
		type: 'POST',
		data: postData,
		url: serviceURL + 'users/register',
		success: function(data){
		objReg = JSON.parse(data)
			console.log(data);
			replyMessage = objReg.replyMsg;
			if(objReg.replyCode=='error'){
				alert(objReg.replyMsg);
			}else{
				sid = objReg.sid;
				localStorage.setItem('sid', sid);
				alert(objReg.replyMsg);
				window.location="info.html";
			}
		},
		error: function(){
			console.log(data);
			alert('There was an error adding this user. Please try again.');
		}
	});
	
	return false;
});

$('#signin').submit(function(){
	var postData = $(this).serialize();
	
	$.ajax({
		type: 'POST',
		data: postData,
		url: serviceURL + 'users/login',
		success: function(data){
		objReg = JSON.parse(data)
			console.log(data);
			replyMessage = objReg.replyMsg;
			if(objReg.replyCode=='error'){
				alert(objReg.replyMsg);
			}else{
				sid = objReg.sid;
				localStorage.setItem('sid', sid);
				alert(objReg.replyMsg);
				window.location="info.html";
			}
		},
		error: function(){
			console.log(data);
			alert('There was an error adding this user. Please try again.');
		}
	});
	
	return false;
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

function getMovieList() {
	$.getJSON(serviceURL + 'movies/listing/', function(data) {
		$('#movieList li').remove();
		movies = data.items;
		$.each(movies, function(index, movieinfo) {
		alert(movieinfo);
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

function getRestList() {
	$.getJSON(serviceURL + 'restaurants/listing/', function(data) {
		$('#restaurantList li').remove();
		restaurants = data.items;
		$.each(restaurants, function(index, restaurantinfo) {
		var restaurant = restaurantinfo.Restaurant;
		var ticketAmt = 0;
		var imgURL = serviceURL + "image.php?image=uploads/restaurants/" + restaurant.image +  "&width=100&height=75";
			$('#restaurantList').append('<li>' +
					'<a href="restaurantdetails.html?id=' + restaurant.id + '&type=0"><img src="' +  imgURL + '"/></a>' +
					'<h2>' + restaurant.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					//'<h3>Owner : ' + restaurant.owner_name + 'rs </h3>' +
					'</li>');
		});
		$('#restaurantList').listview('refresh');
	});
}


function getCakeList() {
	$.getJSON(serviceURL + 'restaurants/listing/1', function(data) {
		$('#cakeList li').remove();
		events = data.items;
		$.each(events, function(index, eventinfo) {
		var event = eventinfo.Event;
		var ticketAmt = 0;
		//if(eventinfo.Ticket[0].amount != undefined && eventinfo.Ticket[0].amount != 'null'){
			//ticketAmt = eventinfo.Ticket[0].amount;
		//}
		var imgURL = serviceURL + "image.php?image=uploads/bakeries/" + event.image +  "&width=100&height=75";
			$('#cakeList').append('<li>' +
					'<a href="restaurantdetails.html?id=' + event.id + '&type=1"><img src="' +  imgURL + '"/></a>' +
					'<h2>' + event.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					//'<h3>Seller : ' + event.seller_or_theater_name + 'rs </h3>' +
					'</li>');
		});
		$('#cakeList').listview('refresh');
	});
}

function getFFList() {
	$.getJSON(serviceURL + 'restaurants/listing/2', function(data) {
		$('#ffList li').remove();
		events = data.items;
		$.each(events, function(index, eventinfo) {
		var event = eventinfo.Event;
		var ticketAmt = 0;
		//if(eventinfo.Ticket[0].amount != undefined && eventinfo.Ticket[0].amount != 'null'){
			//ticketAmt = eventinfo.Ticket[0].amount;
		//}
		var imgURL = serviceURL + "image.php?image=uploads/foods/" + event.image +  "&width=100&height=75";
			$('#ffList').append('<li>' +
					'<a href="restaurantdetails.html?id=' + event.id + '&type=2"><img src="' + imgURL + '"/></a>' +
					'<h2>' + event.title + '</h2>' +
					'<h3>Price : ' + ticketAmt + 'rs </h3>' +
					//'<h3>Seller : ' + event.seller_or_theater_name + 'rs </h3>' +
					'</li>');
		});
		$('#ffList').listview('refresh');
	});
}
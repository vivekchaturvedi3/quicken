//$('#detailsPage').live('pageshow', function(event) {
$(document).on('pageshow', '#detailsPage', function() {
	var id = getUrlVars()["id"];	
	$.getJSON(serviceURL + 'events/detail/'+id, displayEvent);
});

function displayEvent(data) {
	var event = data.item.Event;
	var type = getUrlVars()["type"];
	foldername = 'events';
	if(type=='1')
		foldername = 'movies'
	//console.log(event);
	var imgURL = serviceURL + "image.php?image=uploads/" + foldername + "/" + event.image +  "&width=225&height=169";
	$('#eventPic').attr('src', imgURL);
	$('#sellerName').text(event.seller_or_theater_name);
	$('#eventTitle').text(event.title);
	$('#city').text(event.city);
	//console.log(data.item.Ticket);
	tickets = data.item.Ticket;
	//alert(tickets);
	var optionsTicket = '<Select>';
	$.each(tickets, function(index, ticketInfo) {
		optionsTicket += '<option value="' + ticketInfo.id + '">' + ticketInfo.amount + '</option>';
		
	});
	optionsTicket += '</Select>';
	$('#tickets').html(optionsTicket);
	//$('#actionList').listview('refresh');
	
}
$(document).on('pageshow', '#detailsPageRest', function() {
	var id = getUrlVars()["id"];	
	$.getJSON(serviceURL + 'restaurants/detail/'+id, displayRest);
});

function displayRest(data) {
	var restaurant = data.item.Restaurant;
	var type = getUrlVars()["type"];
	foldername = 'restaurants';
	
	if(type=='1'){
		foldername = 'bakeries'
		$('#pageTitle').html("Cake Order");
	}else if(type=='2'){
		foldername = 'foods';
		$('#pageTitle').html("Order Fast Food");
	}
	//console.log(event);
	var imgURL = serviceURL + "image.php?image=uploads/" + foldername + "/" + restaurant.image +  "&width=225&height=169";
	$('#eventPic').attr('src', imgURL);
	$('#sellerName').text(restaurant.owner_name);
	$('#eventTitle').text(restaurant.title);
	$('#city').text(restaurant.city);
	//console.log(data.item.Ticket);
	menues = data.item.Menu;
	//alert(tickets);
	var optionsMenu = '<Select>';
	$.each(menues, function(index, menueInfo) {
		optionsMenu += '<option value="' + menueInfo.id + '">' + menueInfo.amount + '</option>';
		
	});
	optionsMenu += '</Select>';
	$('#menues').html(optionsMenu);
	//$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

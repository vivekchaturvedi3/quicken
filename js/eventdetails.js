//$('#detailsPage').live('pageshow', function(event) {
$(document).on('pageshow', '#detailsPage', function() {
	var id = getUrlVars()["id"];
	
	$.getJSON(serviceURL + 'events/detail/'+id, displayEvent);
});

$(document).on('pageshow', '#detailsPageRest', function() {
	var id = getUrlVars()["id"];
	
	$.getJSON(serviceURL + 'restaurants/detail/'+id, displayRest);
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
	var ticketStr = '';
	
	$.each(tickets, function(index, ticketInfo) {
	ticketStr += '<h3>' + ticketInfo.title + '<span class="ticketPrice">Rs. ' + ticketInfo.amount + '</span><div class="clear"></div>';
	ticketStr += '<span class="tickets">'
	var tquan = ticketInfo.quantity;
	var optionsTicket = '<Select id="selectTicket_' + ticketInfo.id + '" name="selectTicket[' + ticketInfo.id + ']" class="selectTicket">';
		for(i=0;i<=tquan;i++){			
			optionsTicket += '<option value="' + i + '">' + i + '</option>';
		}
		optionsTicket += '</Select>';
	ticketStr += optionsTicket + '</span></h3>';
		
	});
	
	$('#tickets').html(ticketStr);
	$(".selectTicket").selectmenu("refresh");
	
}


function displayRest(data) {
	var event = data.item.Restaurant;
	var type = getUrlVars()["type"];
	foldername = 'restaurants';
	if(type=='1')
		foldername = 'bakeries'
	if(type=='2')
		foldername = 'bakeries'
	//console.log(event);
	var imgURL = serviceURL + "image.php?image=uploads/" + foldername + "/" + event.image +  "&width=225&height=169";
	$('#eventPic').attr('src', imgURL);
	
	$('#eventTitle').text(event.title);
	$('#city').text(event.city);
	//console.log(data.item.Ticket);
	tickets = data.item.Menu;
	//alert(tickets);
	var ticketStr = '';
	
	$.each(tickets, function(index, ticketInfo) {
		ticketStr += '<h3>' + ticketInfo.title + '<span class="ticketPrice">Rs. ' + ticketInfo.amount + '</span><div class="clear"></div>';
		ticketStr += '<span class="tickets">'
		//var tquan = ticketInfo.quantity;
		var optionsTicket = '<Select id="selectTicket_' + ticketInfo.id + '" name="selectTicket[' + ticketInfo.id + ']" class="selectTicket">';
			for(i=0;i<=10;i++){			
				optionsTicket += '<option value="' + i + '">' + i + '</option>';
			}
			optionsTicket += '</Select>';
		ticketStr += optionsTicket + '</span></h3>';
		//$('#tickets').append(ticketStr);
	});
	
	$('#tickets').html(ticketStr);
	//$(".selectTicket").selectmenu("refresh");
	
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

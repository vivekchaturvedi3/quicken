var serviceURL = "http://quickentech.in/";
//var serviceURL = "http://localhost/quickenweb/";

var events;

$('#eventListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
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
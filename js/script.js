$('#search-form').submit(function(e){
	e.preventDefault();
});

search();

function search() {
	$('#results').html('');
	q = $('#query').val();
	if (q == "") {q = "pics"};
	$.get("https://www.reddit.com/r/pics/search.json",{
		q: q}, function(data) {
			var nextLoad = data.data.after;
			$.each(data.data.children, function(i, item) {
				// check url first
				var output = render(item);
				$('#results').append(output);
			});
		}
	);
	// show if empty
}


function nextLoad() {
	var next_token = $('#next-button').data('token');
	var q = $('#next-button').data('query');
	q = $('#query').val();
	$.get("https://www.reddit.com/r/pics/search.json",{
		q: q,
		after: next_token,
		count: 25},
		function(data) {
			var nextLoad = data.data.after;
			$.each(data.data.children, function(i, item){
				var output = render(item);
				$('#results').append(output);
			});
		}
	);
}

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function render(item) {
	var url = item.data.url;
	var title = item.data.title;
	var output = '<li>' +
	'<div class="list">' +
	'<a href="'+ url +'" target="_blank"><img src="'+url+'"></a>' +
	'</div>' + '</li>' +
	'<div class="clearfix"></div>' +'';
	if (checkURL(url) == true) {
		return output;
	}
}

$(window).scroll(function() {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 300){
              nextLoad();
        }
}); 

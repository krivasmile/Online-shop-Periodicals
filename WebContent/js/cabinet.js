var products = null;

$.get("products", function(data) {
	if (data !== '') {
		products = data;
	}
}).done(function() {

	var cardsContent = "";
	var productId="";
	
	jQuery.each(products, function(i, value) {
		
		cardsContent += "<div class='col-4' style='display: block'>" +
			"<div class='card'>" +
			"<div class='card-body d-flex justify-content-between' name='" + value.id + "' + style='cursor: pointer'>" +
			"<div class='col-6'>" +
			"<label for='card-title' class='form-label mb-0'>Product name</label>" +
			"<h5 class='card-title'>" + value.name + "</h5>" +
			"<label for='card-subtitle' class='form-label mb-3'>Price</label>" +
			"<h6 class='card-subtitle mb-2 text-muted'>$" + value.price + "</h6>" +
			"<label for='card-text' class='form-label mb-3'>Description</label>" +
			"<p class='card-text'>" + value.description + "</p>" +
			"</div>" +
			"<div class='col-6'>" +
			"<img src='https://i.imgur.com/U80Uf70.jpg' width='180'>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>"
			
	});

	$('#productCards').html(cardsContent);
	
	$('.card-body').on('click', function() {
    		window.location = 'product?id=' + $(this).attr('name');  
			});

});


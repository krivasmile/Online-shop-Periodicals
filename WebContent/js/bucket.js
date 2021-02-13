function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

var buckets = null;

$.get("buckets", function(data) {
	if (data !== '') {
		buckets = data;
	}
}).done(function() {
	
	var tableContent = "<tr class='header'>"+
					"<th style='width: 20%;'>Name</th>"+
					"<th style='width: 20%;'>Description</th>"+
					"<th style='width: 20%;'>Price</th>"+
					"<th style='width: 20%;'>PurchaseDate</th>"+
					"<th style='width: 20%;'>Options</th>"+
					"</tr>";
	
	jQuery.each(buckets, function(i, value) {
	
		tableContent+="<tr>"+
					  "<td>" + value.name + "</td>"+
					  "<td>" + value.description + "</td>"+
					  "<td>$" + value.price + "</td>"+
					  "<td>" + value.purchaseDate + "</td>"+
					  "<td><a onclick='deleteOrderFromBucket(" + value.bucketId + ")' href='#'><img src='https://img.icons8.com/metro/26/000000/trash.png'/></a></td>"+
					  "</tr>"
					   
	});
	
	  $('#myTable').html(tableContent);
	
});

function deleteOrderFromBucket(bucketId) {	
	var customUrl = '';
	var urlContent = window.location.href.split('/');
	for (var i = 0; i < urlContent.length-1; i++) {
		customUrl+=urlContent[i]+'/'
	}
	customUrl+='bucket?bucketId='+bucketId;
	
	$.ajax({
	    url: customUrl,
	    type: 'DELETE',
	    success: function(data) {
	    	if (data == 'Success') {
	    		location.reload();
			}
	    }
	});
}
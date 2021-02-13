<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title>Cabinet</title>
<link rel="stylesheet" href="css/cabinet.css">
	<link href="css/bucket.css">
</head>
<body>

	<jsp:include page="header.jsp"></jsp:include>

	<div class="container-fluid">
			<div id="productCards" class="row"></div>
	</div>

	<jsp:include page="footer.jsp"></jsp:include>

	<script src="js/cabinet.js"></script>

</body>
</html>
package ua.kyiv.app.servlets;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import ua.kyiv.app.domain.Bucket;
import ua.kyiv.app.domain.Product;
import ua.kyiv.app.dto.BucketDto;
import ua.kyiv.app.service.BucketService;
import ua.kyiv.app.service.ProductService;
import ua.kyiv.app.service.impl.BucketServiceImpl;
import ua.kyiv.app.service.impl.ProductServiceImpl;

@SuppressWarnings("serial")
public class BucketsController extends HttpServlet {
	private	BucketService bucketService = BucketServiceImpl.getBucketServiceImpl();
	private ProductService productService = ProductServiceImpl.getProductServiceImpl();
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		Integer userId = (Integer)session.getAttribute("userId");
		List<Bucket> buckets = bucketService.readAllByUser(userId);
		Map<Integer, Product> idToProduct = productService.readAllMap();
		List<BucketDto> listOfBucketDtos = map(buckets, idToProduct);
		
		String json = new Gson().toJson(listOfBucketDtos);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json);
	}
	
	
	public List<BucketDto> map(List<Bucket> buckets, Map<Integer, Product> idToProduct){

		return	buckets.stream().map(bucket->{
			BucketDto bucketDto = new BucketDto();
			bucketDto.bucketId = bucket.getId();
			bucketDto.purchaseDate = bucket.getPurchaseDate();
		   
			Product product = idToProduct.get(bucket.getProductId());
		    bucketDto.name = product.getName();
		    bucketDto.description = product.getDescription();
		    bucketDto.price = product.getPrice();
			
			return bucketDto;
		}).collect(Collectors.toList());
		
	} 

}

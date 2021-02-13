package ua.kyiv.app.service;

import java.util.Map;

import ua.kyiv.app.domain.Product;
import ua.kyiv.app.shared.AbstractCRUD;

public interface ProductService extends AbstractCRUD<Product> {
	public Map<Integer, Product> readAllMap();
}

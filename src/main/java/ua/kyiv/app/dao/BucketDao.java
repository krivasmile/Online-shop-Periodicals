package ua.kyiv.app.dao;

import java.util.List;

import ua.kyiv.app.domain.Bucket;
import ua.kyiv.app.shared.AbstractCRUD;


public interface BucketDao extends AbstractCRUD<Bucket>{
	List<Bucket> readAllbyUser(Integer id);
}

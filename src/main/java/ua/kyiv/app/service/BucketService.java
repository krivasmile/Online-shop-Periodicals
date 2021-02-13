package ua.kyiv.app.service;

import java.util.List;

import ua.kyiv.app.domain.Bucket;
import ua.kyiv.app.shared.AbstractCRUD;

public interface BucketService extends AbstractCRUD<Bucket> {
	List<Bucket> readAllByUser(Integer id);
}

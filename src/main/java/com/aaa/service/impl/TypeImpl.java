package com.aaa.service.impl;

import com.aaa.dao.TypeDao;
import com.aaa.entity.Type;
import com.aaa.service.TypeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TypeImpl implements TypeService {
    @Resource
    TypeDao typeDao;

    @Override
    public Integer add(Type type) {
        return typeDao.insert(type);
    }

    @Override
    public Integer del(Integer tid) {
        return typeDao.deleteByPrimaryKey(tid);
    }

    @Override
    public Integer update(Type type) {
        return typeDao.updateByPrimaryKey(type);
    }

    @Override
    public List<Type> findAll() {
        return typeDao.selectAll();
    }
}

package com.aaa.service;

import com.aaa.dao.TypeDao;
import com.aaa.entity.Type;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TypeService {
    @Resource
    TypeDao typeDao;

    public Integer add(Type type) {
        return typeDao.insert(type);
    }

    public Integer del(Integer tid) {
        return typeDao.deleteByPrimaryKey(tid);
    }

    public Integer update(Type type) {
        return typeDao.updateByPrimaryKey(type);
    }

    public List<Type> findAll() {
        return typeDao.selectAll();
    }
}
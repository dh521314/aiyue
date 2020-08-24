package com.aaa.service;

import com.aaa.entity.Type;

import java.util.List;

public interface TypeService {
    public Integer add(Type type);

    public Integer del(Integer tid);

    public Integer update(Type type);

    public List<Type> findAll();

}

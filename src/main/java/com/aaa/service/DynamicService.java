package com.aaa.service;

import com.aaa.dao.DynamicDao;
import com.aaa.entity.Dynamic;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class DynamicService {

    @Resource
    DynamicDao dynamicDao;

    public List<Dynamic> queryDynamicByReaderid(Integer readerid){
        return dynamicDao.queryDynamicByReaderid(readerid);
    }

    public Integer addDynamic(Integer readerid,Integer messageid){
        return dynamicDao.addDynamic(readerid,messageid);
    }
}

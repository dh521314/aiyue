package com.aaa.service;

import com.aaa.dao.TypeDao;
import com.aaa.entity.Type;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
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

    public PageInfo<Type> pageFindAll(Integer pageNum,Integer pageSize){
        if(pageNum != null && pageSize != null){
            PageHelper.startPage(pageNum,pageSize);
        }else{
            PageHelper.startPage(1,10);
        }
        List<Type> rs = typeDao.selectAll();
        PageInfo<Type> p = new PageInfo<Type>(rs);
        return p;
    }

    public List<Type> queryManChannel(){
        return typeDao.queryManChannel();
    }

    public List<Type> queryWomanChannel(){
        return typeDao.queryWomanChannel();
    }

    public List<Type> queryOtherChannel(){
        return typeDao.queryOtherChannel();
    }
}
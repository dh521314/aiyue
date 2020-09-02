package com.aaa.service;

import com.aaa.dao.ReaderDao;
import com.aaa.entity.Reader;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class ReaderService {

    @Resource
    private ReaderDao dao;

    public Reader login(String rname,String rpwd){
        return dao.login(rname,rpwd);
    }

    public Reader findByPhone(String rphone){
        return dao.findByPhone(rphone);
    }

    public void register(Reader reader){
        dao.insert(reader);
    }

}

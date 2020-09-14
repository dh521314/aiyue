package com.aaa.service;

import com.aaa.dao.ReaderDao;
import com.aaa.entity.Reader;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

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

    public Reader getReaderByRid(Integer rid){
        return dao.getReaderByRid(rid);
    }

    //修改用户信息
    public  Integer readerUp(Integer rid,String rname,String rphone){
        return dao.readerUp(rid,rname,rphone);
    }

    public List<Reader> queryYpwd(Integer rid){
        return dao.queryYpwd(rid);
    }

    public Integer updateRpwd(String rpwd,Integer rid){
        return dao.updateRpwd(rpwd,rid);
    }
}

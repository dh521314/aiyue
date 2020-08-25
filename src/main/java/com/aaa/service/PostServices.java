package com.aaa.service;

import com.aaa.dao.PostDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class PostServices {
    @Resource
    PostDao postDao;

    public String findByPid(Integer pid){
        return postDao.findByPid(pid);
    }

}

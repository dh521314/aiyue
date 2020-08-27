package com.aaa.service;

import com.aaa.dao.PostDao;
import com.aaa.entity.Post;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class PostServices {
    @Resource
    PostDao postDao;

    public String findByPid(Integer pid){
        return postDao.findByPid(pid);
    }

    public List<Post> findPost(){
        return postDao.findPost();
    }

}

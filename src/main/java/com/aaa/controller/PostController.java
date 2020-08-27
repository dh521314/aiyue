package com.aaa.controller;

import com.aaa.entity.Post;
import com.aaa.service.PostServices;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("Post")
public class PostController {
    @Resource
    PostServices postServices;
    
    @RequestMapping("/findByPid")
    public String findByPid(Integer pid){
        return postServices.findByPid(pid);
    }

    @RequestMapping("/findPost")
    public List<Post> findPost(){
        return postServices.findPost();
    }


}

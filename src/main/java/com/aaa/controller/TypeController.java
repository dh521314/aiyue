package com.aaa.controller;

import com.aaa.entity.Type;
import com.aaa.service.TypeService;
import com.github.pagehelper.PageInfo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("Type")
public class TypeController {
    @Resource
    TypeService typeService;

    @RequestMapping("add")
    public Integer add(Type type) {
        return typeService.add(type);
    }

    @RequestMapping("del")
    public Integer del(Integer tid) {
        return typeService.del(tid);
    }

    @RequestMapping("update")
    public Integer update(Type type) {
        return typeService.update(type);
    }

    @RequestMapping("findAll")
    public List<Type> findAll() {
        return typeService.findAll();
    }

    @RequestMapping("pageFind")
    public PageInfo<Type> pageFindAll(Integer num, Integer size){
        return typeService.pageFindAll(num,size);
    }


}

package com.aaa.controller;

import com.aaa.entity.Menu;
import com.aaa.service.MenuService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("Menu")
public class MenuController {
    @Resource
    MenuService menuService;

    @RequestMapping("findByPid")
    public List<Menu> findByPid(Integer pid){
        return menuService.findByPid(pid);
    }


}

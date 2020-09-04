package com.aaa.controller;

import com.aaa.entity.Dynamic;
import com.aaa.service.DynamicService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/Dynamic")
public class DynamicController {

    @Resource
    DynamicService dynamicService;

    //根据读者查询小说（我的阅读记录）
    @RequestMapping("/queryDynamicByReaderid")
    public String queryDynamicByReaderid(Integer readerid, Model model){
        List<Dynamic> dynamics = dynamicService.queryDynamicByReaderid(readerid);
        model.addAttribute("dynamics",dynamics);
        return "ceshi";
    }
}

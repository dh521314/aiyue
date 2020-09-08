package com.aaa.controller;

import com.aaa.entity.Dynamic;
import com.aaa.entity.Reader;
import com.aaa.service.DynamicService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/Dynamic")
public class DynamicController {

    @Resource
    DynamicService dynamicService;

    //根据读者查询小说（我的阅读记录）
    @RequestMapping("/queryDynamicByReaderid")
    public String queryDynamicByReaderid(HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        Reader reader = (Reader) session.getAttribute("reader");
        System.out.println(reader);
        List<Dynamic> dynamics = dynamicService.queryDynamicByReaderid(reader.getRid());
        model.addAttribute("dynamics",dynamics);
        return "zuijinyuedu";
    }

    //记录阅读记录
    @RequestMapping("/addDynamic")
    @ResponseBody
    public Integer addDynamic(Integer readerid,Integer messageid){
        return dynamicService.addDynamic(readerid,messageid);
    }
}

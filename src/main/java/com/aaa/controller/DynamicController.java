package com.aaa.controller;

import com.aaa.entity.Dynamic;
import com.aaa.entity.Reader;
import com.aaa.entity.Section;
import com.aaa.service.DynamicService;
import com.aaa.service.MessageQService;
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

    @Resource
    MessageQService messageQService;

    //根据读者查询小说（我的阅读记录）
    @RequestMapping("/queryDynamicByReaderid")
    public String queryDynamicByReaderid(HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        Reader reader = (Reader) session.getAttribute("reader");
        System.out.println(reader.getRid());
        System.out.println(dynamicService.queryDynamicByReaderid(reader.getRid()));
        List<Dynamic> dynamics = dynamicService.queryDynamicByReaderid(reader.getRid());
        model.addAttribute("dynamics",dynamics);
        return "zuijinyuedu";
    }

    //记录阅读记录(第一章)
    @RequestMapping("/addDynamicOneSection")
    public String addDynamicOneSection(HttpSession httpSession,Integer messageid,Integer sectionid){
        Reader reader = (Reader) httpSession.getAttribute("reader");
        if (reader != null){
            Integer readerid = reader.getRid();
            Integer integer = dynamicService.addDynamic(readerid,messageid,sectionid);
            return "redirect:/MessageQ/queryOneSectionByMessageid?messageid="+messageid;
        }else{
            return "redirect:/MessageQ/queryOneSectionByMessageid?messageid="+messageid;
        }
    }

    //记录阅读记录(最后一章)
    @RequestMapping("/addDynamicEndSection")
    public String addDynamicEndSection(HttpSession httpSession,Integer messageid,Integer sectionid){
        Reader reader = (Reader) httpSession.getAttribute("reader");
        if (reader != null){
            Integer readerid = reader.getRid();
            Integer integer = dynamicService.addDynamic(readerid,messageid,sectionid);
            return "redirect:/MessageQ/queryEndSectionByMessageid?messageid="+messageid;
        }else{
            return "redirect:/MessageQ/queryEndSectionByMessageid?messageid="+messageid;
        }
    }

    //记录阅读记录(根据对应章节添加)
    @RequestMapping("/addDynamicSection")
    public String addDynamicSection(HttpSession httpSession,Integer messageid,Integer sid,Integer sectionid){
        Reader reader = (Reader) httpSession.getAttribute("reader");
        Integer readerid = reader.getRid();
        if (readerid != null && readerid != 0 && readerid != ' ' ){
            Integer integer = dynamicService.addDynamic(readerid,messageid,sectionid);
            return "redirect:/MessageQ/querySectionBySidAndMessageid?sid="+sid+"&messageid="+messageid;
        }else{
            return "redirect:/MessageQ/querySectionBySidAndMessageid?sid="+sid+"&messageid="+messageid;
        }
    }

    //记录阅读记录(上一章节添加)
    @RequestMapping("/addDynamicLastSection")
    public String addDynamicLastSection(HttpSession httpSession,Integer messageid,Integer sid){
        Reader reader = (Reader) httpSession.getAttribute("reader");
        Integer readerid = reader.getRid();
        if (readerid != null && readerid != 0 && readerid != ' ' ){
            Integer integer = dynamicService.addDynamic(readerid,messageid,sid);
            return "redirect:/MessageQ/queryLastSection?sid="+sid+"&messageid="+messageid;
        }else{
            return null;
        }
    }

    //记录阅读记录(下一章节添加)
    @RequestMapping("/addDynamicNextSection")
    public String addDynamicNextSection(HttpSession httpSession,Integer messageid,Integer sid){
        Reader reader = (Reader) httpSession.getAttribute("reader");
        Integer readerid = reader.getRid();
        if (readerid != null && readerid != 0 && readerid != ' ' ){
            Integer integer = dynamicService.addDynamic(readerid,messageid,sid);
            return "redirect:/MessageQ/queryNextSection?sid="+sid+"&messageid="+messageid;
        }else{
            return null;
        }
    }
}

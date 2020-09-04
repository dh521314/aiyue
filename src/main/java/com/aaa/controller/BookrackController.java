package com.aaa.controller;

import com.aaa.entity.Bookrack;
import com.aaa.service.BookrackService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/Bookrack")
public class BookrackController {
    @Resource
    BookrackService bookrackService;

    //根据读者查询小说，（我的书架）
    @RequestMapping("/queryBookrackByReaderid")
    public String queryBookrackByReaderid(Integer readerid, Model model){
        List<Bookrack> bookracks = bookrackService.queryBookrackByReaderid(readerid);
        model.addAttribute("bookracks",bookracks);
        return "ceshi";
    }
}

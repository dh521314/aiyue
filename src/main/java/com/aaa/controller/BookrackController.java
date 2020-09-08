package com.aaa.controller;

import com.aaa.entity.Bookrack;
import com.aaa.entity.Reader;
import com.aaa.service.BookrackService;
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
@RequestMapping("/Bookrack")
public class BookrackController {
    @Resource
    BookrackService bookrackService;

    //根据读者查询小说，（我的书架）
    @RequestMapping("/queryBookrackByReaderid")
    public String queryBookrackByReaderid(HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        Reader reader = (Reader) session.getAttribute("reader");
        List<Bookrack> bookracks = bookrackService.queryBookrackByReaderid(reader.getRid());
        model.addAttribute("bookracks",bookracks);
        return "geren";
    }

    @RequestMapping("delAll")
    @ResponseBody
    public Integer del(Integer[] list){
        bookrackService.del(list);
        return 1;
    }
}

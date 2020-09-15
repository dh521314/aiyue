package com.aaa.controller;

import com.aaa.entity.Bookrack;
import com.aaa.entity.Reader;
import com.aaa.entity.Section;
import com.aaa.service.BookrackService;
import com.aaa.service.MessageQService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/Bookrack")
public class BookrackController {
    @Resource
    BookrackService bookrackService;

    @Resource
    MessageQService messageQService;

    //根据读者查询小说，（我的书架）
    @RequestMapping("/queryBookrackByReaderid")
    public String queryBookrackByReaderid(HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        Reader reader = (Reader) session.getAttribute("reader");
        List<Bookrack> bookracks = bookrackService.queryBookrackByReaderid(reader.getRid());
        model.addAttribute("bookracks",bookracks);
        //我的书架小说的编号
        List<Integer> bookrackMeid = bookrackService.queryMessageByReaderid(reader.getRid());
        model.addAttribute("bookrackMeid",bookrackMeid);
        //我的书架页面之最新章节
        StringBuffer stringBuffer = new StringBuffer();
        int total = bookrackMeid.size() - 1;
        for(int i = 0;i < bookrackMeid.size();i++){
            if(i == total){
                stringBuffer.append(bookrackMeid.get(i));
            }else{
                stringBuffer.append(bookrackMeid.get(i)+",");
            }
        }
        System.out.println(stringBuffer.toString());
        List<Section> bookrackNewSection = new ArrayList<Section>();
        if(stringBuffer.length() > 0){
            bookrackNewSection = messageQService.bookrackNewSectionByMessage(stringBuffer.toString());
        }
        model.addAttribute("bookrackNewSection",bookrackNewSection);
        return "geren";
    }

    @RequestMapping("delAll")
    @ResponseBody
    public Integer del(Integer[] list){
        bookrackService.del(list);
        return 1;
    }

    //加入书架
    @RequestMapping("/addBookRack")
    @ResponseBody
    public Integer addBookRack(Integer readerid,Integer messageid){
        return bookrackService.addBookRack(readerid,messageid);
    }

    //判断读者将小说是否加入书架
    @RequestMapping("/ifAddBookrack")
    @ResponseBody
    public List<Bookrack> ifAddBookrack(Integer readerid,Integer messageid){
        return bookrackService.ifAddBookrack(readerid,messageid);
    }
}

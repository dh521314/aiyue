package com.aaa.controller;

import com.aaa.entity.Comments;
import com.aaa.entity.Reader;
import com.aaa.service.CommentsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/Comments")
public class CommentsController {

    @Resource
    CommentsService commentsService;

    //查询热评小说，按照小说评论量从高到低排序
    @RequestMapping("/queryMessageByComment")
    public String queryMessageByComments(Model model){
        List<Comments> commentsList = commentsService.queryMessageByComments();
        model.addAttribute("commentsList",commentsList);
        return "ceshi";
    }

    //根据读者查询小说，（我的评论）
    @RequestMapping("/queryCommentsByReader")
    public String queryCommentsByReader(HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        Reader reader = (Reader) session.getAttribute("reader");
        List<Comments> byReader = commentsService.queryCommentsByReader(reader.getRid());
        model.addAttribute("byReader",byReader);
        return "pinglun";
    }

    //小说评论区（根据小说查询评论）
    @RequestMapping("/queryCommentsByMessage")
    public String queryCommentsByMessage(Integer messageid,Model model){
        List<Comments> byMessage = commentsService.queryCommentsByMessage(messageid);
        model.addAttribute("byMessage",byMessage);
        return "ceshi";
    }
}

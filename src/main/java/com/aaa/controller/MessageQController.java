package com.aaa.controller;

import com.aaa.entity.Comments;
import com.aaa.entity.Dynamic;
import com.aaa.entity.Message;
import com.aaa.entity.Section;
import com.aaa.service.CommentsService;
import com.aaa.service.MessageQService;
import com.aaa.service.MessageService;
import com.aaa.service.SectionService;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/MessageQ")
public class MessageQController {

    @Resource
    MessageQService messageQService;

    @Resource
    SectionService sectionService;

    @Resource
    CommentsService commentsService;

    //根据小说名称查询小说，模糊查询
    @RequestMapping("/queryLikeMename")
    public String queryLikeMename(Model model, String mename){
        List<Message> list = messageQService.queryLikeMename(mename);
        model.addAttribute("list",list);
        return "ceshi";
    }

    //查询最近更新的小说（按时间倒序）
    @RequestMapping("/queryUpdateTime")
    public String queryUpdateTime(Model model){
        List<Section> sections = sectionService.queryUpdateTime();
        model.addAttribute("sections",sections);
        return "ceshi";
    }

    //根据小说类型查询小说
    @RequestMapping("/queryMessageByTypeid")
    public String queryMessageByTypeid(Integer typeid,Model model){
        List<Message> byTypeid = messageQService.queryMessageByTypeid(typeid);
        model.addAttribute("byTypeid",byTypeid);
        return "ceshi";
    }

    //根据小说状态查询，0未完结，1已完结
    @RequestMapping("/queryMessageByMestate")
    public String queryMessageByMestate(Integer mestate,Model model){
        List<Message> byMestate = messageQService.queryMessageByMestate(mestate);
        model.addAttribute("byMestate",byMestate);
        return "ceshi";
    }

    //根据点击量查询小说，是一个范围如点击量在1000，2000
    @RequestMapping("/queryMessageByDynamic")
    public String queryMessageByDynamic(Model model,Integer param1,Integer param2){
        List<Dynamic> byDynamic = messageQService.queryMessageByDynamic(param1,param2);
        model.addAttribute("byDynamic",byDynamic);
        return "ceshi";
    }

    //小说检索页面(小说类型，小说状态，小说点击量)
    @RequestMapping("/queryMode")
    public String queryMode(Integer typeid, Integer mestate, Integer clickRate1, Integer clickRate2,Model model){
        List<Message> queryMode = messageQService.queryMode(typeid,mestate,clickRate1,clickRate2);
        model.addAttribute("queryMode",queryMode);
        return "ceshi";
    }

    //根据作者查询小说（显示本作品外最近的六个作品），（作者其他作品）
    @RequestMapping("/queryMessageByWriter")
    public String queryMessageByWriter(Integer writerid,Integer meid,Model model){
        List<Message> byWriter = messageQService.queryMessageByWriter(writerid,meid);
        model.addAttribute("byWriter",byWriter);
        return "ceshi";
    }

    //相关小说精彩推荐（显示本作品外同类型小说的最近六个作品）
    @RequestMapping("/queryMessageByType")
    public String queryMessageByType(Integer typeid,Integer meid,Model model){
        List<Message> byType = messageQService.queryMessageByType(typeid,meid);
        model.addAttribute("byType",byType);
        return "ceshi";
    }

    //小说页面作家信息之作品总量
   @RequestMapping("/queryMessageCountByWriter")
    public String queryMessageCountByWriter(Integer writerid,Model model){
        List<Message> messageCount = messageQService.queryMessageCountByWriter(writerid);
        model.addAttribute("messageCount",messageCount);
        return "ceshi";
    }
    //小说页面作家信息之累计字数
    @RequestMapping("/queryNumberByWriter")
    public String queryNumberByWriter(Integer writerid,Model model){
        List<Section> Number = messageQService.queryNumberByWriter(writerid);
        model.addAttribute("Number",Number);
        return "ceshi";
    }

    //小说页面作家信息之累计阅读数
    @RequestMapping("/queryReadNumberByWriter")
    public String queryReadNumberByWriter(Integer writerid,Model model){
        List<Dynamic> readerNumber = messageQService.queryReadNumberByWriter(writerid);
        model.addAttribute("readerNumber",readerNumber);
        return "ceshi";
    }

    //小说页面之全部目录（正序）
    @RequestMapping("/querySectionAscByMessage")
    public String querySectionAscByMessage(Integer messageid,Model model){
        List<Section> sectionAsc = messageQService.querySectionAscByMessage(messageid);
        model.addAttribute("sectionAsc",sectionAsc);
        return "ceshi";
    }

    //小说页面之全部目录（倒序）
    @RequestMapping("/querySectionDescByMessage")
    public String querySectionDescByMessage(Integer messageid,Model model){
        List<Section> sectionDesc = messageQService.querySectionDescByMessage(messageid);
        model.addAttribute("sectionDesc",sectionDesc);
        return "ceshi";
    }

    //小说页面之最新章节
    @RequestMapping("/queryNewSectionByMessage")
    public String queryNewSectionByMessage(Integer messageid,Model model){
        List<Section> newSection = messageQService.queryNewSectionByMessage(messageid);
        model.addAttribute("newSection",newSection);
        return "ceshi";
    }

    //小说目录页面之已更新章节数量
    @RequestMapping("/queryCountByMessage")
    public String queryCountByMessage(Integer messageid,Model model){
        List<Section> queryCount = messageQService.queryCountByMessage(messageid);
        model.addAttribute("queryCount",queryCount);
        return "ceshi";
    }

    //小说简介阅读页面之开始阅读（直接跳到第一章节）
    @RequestMapping("/queryOneSectionByMessageid")
    public String queryOneSectionByMessageid(Integer messageid,Model model){
        List<Section> queryOneSection = messageQService.queryOneSectionByMessageid(messageid);
        model.addAttribute("queryOneSection",queryOneSection);
        return "ceshi";
    }

    //小说简介页面之最新章节阅读（直接跳到最后一章）
    @RequestMapping("/queryEndSectionByMessageid")
    public String queryEndSectionByMessageid(Integer messageid,Model model){
        List<Section> queryEndSection = messageQService.queryEndSectionByMessageid(messageid);
        model.addAttribute("queryEndSection",queryEndSection);
        return "ceshi";
    }

    //小说目录页面（点击对应的章节，进入小说阅读页面）
    @RequestMapping("/querySectionBySidAndMessageid")
    public String querySectionBySidAndMessageid(Integer sid,Integer messageid,Model model){
        List<Section> BySidAndMessageid = messageQService.querySectionBySidAndMessageid(sid,messageid);
        model.addAttribute("BySidAndMessageid",BySidAndMessageid);
        return "ceshi";
    }

    //小说阅读页面之上一章
    @RequestMapping("/queryLastSection")
    public String queryLastSection(Integer sid,Integer messageid,Model model){
        List<Section> LastSection = messageQService.queryLastSection(sid,messageid);
        model.addAttribute("LastSection",LastSection);
        return "ceshi";
    }

    //小说阅读页面之下一章
    @RequestMapping("/queryNextSection")
    public String queryNextSection(Integer sid,Integer messageid,Model model){
        List<Section> NextSection = messageQService.queryNextSection(sid,messageid);
        model.addAttribute("NextSection",NextSection);
        return "ceshi";
    }

    //首页查询
    @RequestMapping("/queryIndex")
    public String queryIndex(Model model){
        //查询热评小说，按照小说评论量从高到低排序
        List<Comments> commentsList = commentsService.queryMessageByComments();
        model.addAttribute("commentsList",commentsList);
        //查询最近更新的小说（按时间倒序）
        List<Section> sections = sectionService.queryUpdateTime();
        model.addAttribute("sections",sections);
        return "index";
    }
}

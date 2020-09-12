package com.aaa.controller;

import com.aaa.entity.*;
import com.aaa.service.CommentsService;
import com.aaa.service.MessageQService;
import com.aaa.service.SectionService;
import com.aaa.service.TypeService;
import com.github.pagehelper.PageInfo;
import org.springframework.data.relational.core.sql.In;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
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

    @Resource
    TypeService typeService;

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
    public String queryMode(Integer typeid, Integer mestate, Integer clickRate1, Integer clickRate2,Model model,Integer pageNum,Integer pageSize){
        PageInfo<Message> Mode = messageQService.queryMode(typeid,mestate,clickRate1,clickRate2,pageNum,pageSize);
        model.addAttribute("Mode",Mode);
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
        model.addAttribute("sectionAscOrDesc",sectionAsc);
        //小说页面之小说信息，作家头像，作家名，作家语录
        List<Message> queryWriter = messageQService.queryWriterByMessage(messageid);
        model.addAttribute("queryWriter",queryWriter);
        //小说目录页面之已更新章节数量
        List<Section> queryCount = messageQService.queryCountByMessage(messageid);
        model.addAttribute("queryCount",queryCount);
        //小说简介页面之小说字数
        List<Section> queryNumber = messageQService.queryNumberByMessage(messageid);
        model.addAttribute("queryNumber",queryNumber);
        return "zhangjieAsc";
    }

    //小说页面之全部目录（倒序）
    @RequestMapping("/querySectionDescByMessage")
    public String querySectionDescByMessage(Integer messageid,Model model){
        List<Section> sectionDesc = messageQService.querySectionDescByMessage(messageid);
        model.addAttribute("sectionAscOrDesc",sectionDesc);
        //小说页面之小说信息，作家头像，作家名，作家语录
        List<Message> queryWriter = messageQService.queryWriterByMessage(messageid);
        model.addAttribute("queryWriter",queryWriter);
        //小说目录页面之已更新章节数量
        List<Section> queryCount = messageQService.queryCountByMessage(messageid);
        model.addAttribute("queryCount",queryCount);
        //小说简介页面之小说字数
        List<Section> queryNumber = messageQService.queryNumberByMessage(messageid);
        model.addAttribute("queryNumber",queryNumber);
        return "zhangjieDesc";
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
        List<Section> Section = messageQService.queryOneSectionByMessageid(messageid);
        model.addAttribute("Section",Section);
        return "yuedu";
    }

    //小说简介页面之最新章节阅读（直接跳到最后一章）
    @RequestMapping("/queryEndSectionByMessageid")
    public String queryEndSectionByMessageid(Integer messageid,Model model){
        List<Section> Section = messageQService.queryEndSectionByMessageid(messageid);
        model.addAttribute("Section",Section);
        return "yuedu";
    }

    //小说目录页面（点击对应的章节，进入小说阅读页面）
    @RequestMapping("/querySectionBySidAndMessageid")
    public String querySectionBySidAndMessageid(Integer sid,Integer messageid,Model model){
        List<Section> BySidAndMessageid = messageQService.querySectionBySidAndMessageid(sid,messageid);
        model.addAttribute("Section",BySidAndMessageid);
        return "yuedu";
    }

    //小说阅读页面之上一章
    @RequestMapping("/queryLastSection")
    public String queryLastSection(Integer sid,Integer messageid,Model model){
        List<Section> Section = messageQService.queryLastSection(sid,messageid);
        model.addAttribute("Section",Section);
        return "yuedu";
    }

    //小说阅读页面之下一章
    @RequestMapping("/queryNextSection")
    public String queryNextSection(Integer sid,Integer messageid,Model model){
        List<Section> Section = messageQService.queryNextSection(sid,messageid);
        model.addAttribute("Section",Section);
        return "yuedu";
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
        //男频类型
        List<Type> manChannel = typeService.queryManChannel();
        model.addAttribute("manChannel",manChannel);
        //女频类型
        List<Type> womanChannel = typeService.queryWomanChannel();
        model.addAttribute("womanChannel",womanChannel);
        //男频强力推荐小说
        List<Message> man = messageQService.queryMessByMan();
        model.addAttribute("man",man);
        //女频强力推荐小说
        List<Message> woman = messageQService.queryMessByWoman();
        model.addAttribute("woman",woman);
        //小说简介页面之小说字数
        List<Section> queryNumber = messageQService.queryNumberByMessage(man.get(0).getMeid());
        model.addAttribute("queryNumber",queryNumber);
        //男频小说
        List<Message> manChannelM = messageQService.queryManMessByType();
        model.addAttribute("manChannelM",manChannelM);
        //女频小说
        List<Message> womanChannelM = messageQService.queryWomanMessByType();
        model.addAttribute("womanChannelM",womanChannelM);
        return "index";
    }

    //小说页面之小说信息，作家头像，作家名，作家语录
    @RequestMapping("/queryWriterByMessage")
    public String queryWriterByMessage(Integer meid,Model model){
        List<Message> queryWriter = messageQService.queryWriterByMessage(meid);
        model.addAttribute("queryWriter",queryWriter);
        return "ceshi";
    }

    //小说简介页面之小说字数
    @RequestMapping("/queryNumberByMessage")
    public String queryNumberByMessage(Integer messageid,Model model){
        List<Section> queryNumber = messageQService.queryNumberByMessage(messageid);
        model.addAttribute("queryNumber",queryNumber);
        return "ceshi";
    }

    //小说页面小说累计阅读数
    @RequestMapping("/queryReadNumberByMessage")
    public String queryReadNumberByMessage(Integer messageid,Model model){
        List<Dynamic> queryReadNumber = messageQService.queryReadNumberByMessage(messageid);
        model.addAttribute("queryReadNumber",queryReadNumber);
        return "ceshi";
    }

    //小说详情页面之累计粉丝数（把该小说加入书架的人数）
    @RequestMapping("/queryFansByMessage")
    public String queryFansByMessage(Integer messageid,Model model){
        List<Bookrack> queryFans = messageQService.queryFansByMessage(messageid);
        model.addAttribute("queryFans",queryFans);
        return "ceshi";
    }

    //小说评论区帖子数量
    @RequestMapping("/queryCountByManager")
    public String queryCountByManager(Integer messageid,Model model){
        List<Comments> commentsCount = commentsService.queryCountByManager(messageid);
        model.addAttribute("commentsCount",commentsCount);
        return "ceshi";
    }

    //小说评论区发表评论
    @RequestMapping("/publicComments")
    @ResponseBody
    public Integer publicComments(Integer readerid, Integer messageid, String content){
        return commentsService.publicComments(readerid,messageid,content,new Date());
    }

    //小说评论区（根据小说查询评论）
    @RequestMapping("/queryCommentsByMessage")
    public String queryCommentsByMessage(Integer messageid,Model model){
        List<Comments> queryComments = commentsService.queryCommentsByMessage(messageid);
        model.addAttribute("queryComments",queryComments);
        return "ceshi";
    }

    //小说详情页面
    @RequestMapping("/queryDetail")
    public String queryDetail(Integer messageid,Model model,Integer meid,Integer writerid,Integer typeid){
        //小说页面之小说信息，作家头像，作家名，作家语录
        List<Message> queryWriter = messageQService.queryWriterByMessage(meid);
        model.addAttribute("queryWriter",queryWriter);
        //小说简介页面之小说字数
        List<Section> queryNumber = messageQService.queryNumberByMessage(messageid);
        model.addAttribute("queryNumber",queryNumber);
        //小说页面小说累计阅读数
        List<Dynamic> queryReadNumber = messageQService.queryReadNumberByMessage(messageid);
        model.addAttribute("queryReadNumber",queryReadNumber);
        //小说详情页面之累计粉丝数（把该小说加入书架的人数）
        List<Bookrack> queryFans = messageQService.queryFansByMessage(messageid);
        model.addAttribute("queryFans",queryFans);
        //小说页面作家信息之作品总量
        List<Message> messageCount = messageQService.queryMessageCountByWriter(writerid);
        model.addAttribute("messageCount",messageCount);
        //小说页面作家信息之累计字数
        List<Section> Number = messageQService.queryNumberByWriter(writerid);
        model.addAttribute("Number",Number);
        //小说页面作家信息之累计阅读数
        List<Dynamic> readerNumber = messageQService.queryReadNumberByWriter(writerid);
        model.addAttribute("readerNumber",readerNumber);
        //第一章节
        List<Section> oneSection = messageQService.queryOneSectionByMessageid(messageid);
        model.addAttribute("oneSection",oneSection);
        //小说页面之最新章节
        List<Section> newSection = messageQService.queryNewSectionByMessage(messageid);
        model.addAttribute("newSection",newSection);
        //根据作者查询小说（显示本作品外最近的六个作品），（作者其他作品）
        List<Message> byWriter = messageQService.queryMessageByWriter(writerid,meid);
        model.addAttribute("byWriter",byWriter);
        //相关小说精彩推荐（显示本作品外同类型小说的最近六个作品）
        List<Message> byType = messageQService.queryMessageByType(typeid,meid);
        model.addAttribute("byType",byType);
        //小说评论区（根据小说查询评论）
        List<Comments> byMessage = commentsService.queryCommentsByMessage(messageid);
        model.addAttribute("byMessage",byMessage);
        //小说评论区帖子数量
        List<Comments> commentsCount = commentsService.queryCountByManager(messageid);
        model.addAttribute("commentsCount",commentsCount);
        //小说评论区（根据小说查询评论）
        List<Comments> queryComments = commentsService.queryCommentsByMessage(messageid);
        model.addAttribute("queryComments",queryComments);
        return "detial";
    }

    //小说检索页面(符合条件的小说数量)
    @RequestMapping("/queryModeCount")
    public String queryModeCount(Integer typeid, Integer mestate, Integer clickRate1, Integer clickRate2,Model model){
        List<Message> Mode = messageQService.queryModeCount(typeid,mestate,clickRate1,clickRate2);
        model.addAttribute("Mode",Mode);
        return "search";
    }

    //小说检索页面(小说总数量)
    @RequestMapping("/queryModeNumber")
    @ResponseBody
    public Integer queryModeNumber(){
        List<Message> Mode = messageQService.queryModeNumber();
        return Mode.get(0).getCount();
    }

    //小说检索页面(小说类型)
    @RequestMapping("/queryModeType")
    public String queryModeType(Model model){
        List<Message> Mode = messageQService.queryModeType();
        model.addAttribute("Mode",Mode);
        return "search";
    }

    //小说检索页面
    @RequestMapping("/querySearch")
    public String querySearch(Model model,Integer typeid, Integer mestate, Integer clickRate1, Integer clickRate2,Integer pageNum,Integer pageSize){
        //小说检索页面(小说类型，小说状态，小说点击量)
        PageInfo<Message> Mode = messageQService.queryMode(typeid,mestate,clickRate1,clickRate2,pageNum,pageSize);
        model.addAttribute("Mode",Mode);
        //小说检索页面(符合条件的小说数量)
        List<Message> ModeCount = messageQService.queryModeCount(typeid,mestate,clickRate1,clickRate2);
        model.addAttribute("ModeCount",ModeCount);
        //小说检索页面(小说总数量)
        List<Message> ModeNumber = messageQService.queryModeNumber();
        model.addAttribute("ModeNumber",ModeNumber);
        //小说检索页面(小说类型)
        List<Message> ModeType = messageQService.queryModeType();
        model.addAttribute("ModeType",ModeType);
        return "search";
    }

}
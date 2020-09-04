package com.aaa.controller;

import com.aaa.entity.Message;
import com.aaa.entity.Section;
import com.aaa.service.MessageService;
import com.aaa.service.SectionService;
import com.alibaba.fastjson.JSONArray;
import com.github.pagehelper.PageInfo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/Section")
public class SectionController {
    @Resource
    SectionService sectionService;

    @Resource
    MessageService messageService;

    @RequestMapping("/sectionList")
    public List<Section> SectionList(){
        return sectionService.SectionList();
    }

    @RequestMapping("/addSection")
    public Integer addSection(Integer messageid,String sname, String content, Integer number){
        return sectionService.addSection(sname,messageid,content,number,new Date());
    }

    @RequestMapping("/delSection")
    public Integer delSection(Integer sid){
        return sectionService.delSection(sid);
    }

    @RequestMapping("/updSection")
    public Integer updSection(Integer sid, String sname, String content, Integer number){
        Section section = new Section(sid,sname,content,number,new Date());
        return sectionService.updSection(section);
    }

    @RequestMapping("pageFind")
    public PageInfo<Section> pageFindAll(Integer num, Integer size){
        System.out.println(num+size);
        System.out.println(sectionService.pageFindAll(num,size));
        return sectionService.pageFindAll(num,size);
    }

    @RequestMapping("findMessage")
    public List<Message> findMessage(){
        return sectionService.findMessage();
    }

    @RequestMapping("findMeidByMename")
    public String findMeidByMename(String mename){
        System.out.println(mename);
        System.out.println(sectionService.findMeidByMename(mename));
        JSONArray jsonArray = new JSONArray();
        if(mename == null || mename.equals(' ')){
            List<Message> list = sectionService.findMessage();
            jsonArray.add(list);
            return jsonArray.toJSONString();
        }else{
            Integer meidByMename = sectionService.findMeidByMename(mename);
            jsonArray.add(meidByMename);
            return jsonArray.toJSONString();
        }
    }

    @RequestMapping("findMenameByMeid")
    public String findMenameByMeid(Integer meid){
        System.out.println(sectionService.findMenameByMeid(meid));
        return sectionService.findMenameByMeid(meid);
    }

}

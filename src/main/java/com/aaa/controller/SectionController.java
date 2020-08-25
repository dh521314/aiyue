package com.aaa.controller;

import com.aaa.entity.Section;
import com.aaa.service.SectionService;
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

    @RequestMapping("/sectionList")
    public List<Section> SectionList(){
        return sectionService.SectionList();
    }

    @RequestMapping("/addSection")
    public Integer addSection(String sname, Integer messageid, String content, Integer number, Date updatetiem){
        Section section = new Section(sname,messageid,content,number,updatetiem);
        return sectionService.addSection(section);
    }

    @RequestMapping("/delSection")
    public Integer delSection(Integer sid){
        return sectionService.delSection(sid);
    }

    @RequestMapping("/updSection")
    public Integer updSection(Integer sid, String sname, Integer messageid, String content, Integer number, Date updatetiem){
        Section section = new Section(sid,sname,messageid,content,number,updatetiem);
        return sectionService.updSection(section);
    }
}

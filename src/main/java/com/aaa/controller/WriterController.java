package com.aaa.controller;

import com.aaa.entity.Type;
import com.aaa.entity.Writer;
import com.aaa.service.WriterService;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/writer")
public class WriterController {
    @Resource
    WriterService writerService;


    @RequestMapping("writerQuery")
    public List<Writer> queryWriter(){
        return writerService.writerQuery();
    }

    //添加作家信息（校验是否已存在该作家）
    @RequestMapping("addWriter")
    public int addWriter(String wname,String wphoto,String ana,Integer readerid){
        Writer w = writerService.QueryByWriterName(wname);
        if (w != null){
            return 2;
        }else {
            Writer writer = new Writer(wname,wphoto,ana,readerid);
            return writerService.addWriter(writer);
        }

    }
    @RequestMapping("QueryByWriterName")
    public Writer QueryByWriterName(String wname){
        System.out.println(writerService.QueryByWriterName(wname));
        return writerService.QueryByWriterName(wname);
    }

    //修改作家信息（不能修改作家笔名）
    @RequestMapping("updateWriter")
    public Integer editWriter(Integer wid,String wphoto,String ana){
        return writerService.editWriter(wid,wphoto,ana);
    }
    @RequestMapping("updateWriters")
    public int editWriters(Integer wid,String wname,String wphoto,String ana,Integer readerid){
        Writer writer = new Writer(wid,wname,wphoto,ana,readerid);
        return writerService.editWriters(writer);
    }

    @RequestMapping("pageFind")
    public PageInfo<Writer> pageFindAll(Integer num, Integer size){
        return writerService.pageFindAll(num,size);
    }
}

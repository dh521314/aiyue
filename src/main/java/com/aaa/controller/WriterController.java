package com.aaa.controller;

import com.aaa.entity.Writer;
import com.aaa.service.WriterService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;
@CrossOrigin
@Controller
public class WriterController {
    @Resource
    WriterService writerService;


    @RequestMapping("/writerQuery")
    public List<Writer> queryWriter(){
        return writerService.writerQuery();
    }

    //添加作家信息（校验是否已存在该作家）
    @RequestMapping("addWriter")
    public int addWriter(String wname,String wphoto,String ana){

        if (writerService.QueryByWriterName(wname) != null){
            return 1;
        }else {
            Writer writer = new Writer(wname,wphoto,ana);
            return writerService.addWriter(writer);
        }

    }

    //修改作家信息（不能修改作家笔名）
    @RequestMapping("updateWriter")
    public int editWriter(Writer writer){
        return writerService.editWriter(writer);
    }
}

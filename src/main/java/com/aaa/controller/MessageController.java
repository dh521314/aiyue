package com.aaa.controller;

import com.aaa.entity.Message;
import com.aaa.entity.Writer;
import com.aaa.service.MessageService;
import com.aaa.service.WriterService;
import com.aaa.util.UploadUtil;
import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/Message")
public class MessageController {
    @Resource
    MessageService messageService;
    @Resource
    WriterService writerService;


    @RequestMapping("/messageList")
    public List<Message> MessageList(){
        return messageService.MessageList();
    }

    @RequestMapping("/addMessage")
    public Integer addMessage(Integer typeid, String mename,MultipartFile surface, String synopsis, Integer writerid) throws IOException {
        if(surface.isEmpty()){
            return 0;
        }
        //保存文件
        String filepath = UploadUtil.upload(surface);
        Message message = new Message(typeid,mename,filepath,synopsis,writerid);
        return messageService.addMessage(message);
    }

    @RequestMapping("/delMessage")
    public Integer delMessage(Integer meid){
        return messageService.delMessage(meid);
    }

    @RequestMapping("/updMessage")
    public Integer updMessage(Integer meid,Integer typeid,String mename,MultipartFile surface,String synopsis,Integer writerid) throws IOException {
        //文件为空时 不更新surface
        if(null == surface){
            Message message = new Message(meid,typeid,mename,null,synopsis,writerid);
            return messageService.updateByMeidNoSurface(message);
        }
        String filepath = UploadUtil.upload(surface);

        Message message = new Message(meid,typeid,mename,filepath,synopsis,writerid);
        return messageService.updMessage(message);
    }

    @RequestMapping("/findAll")
    public String findAll(String mename,Integer typeid,Integer num, Integer size){
        //检索 分页
        return JSONObject.toJSON(messageService.findAll(mename,typeid,num,size)).toString();
    }

}

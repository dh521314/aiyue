package com.aaa.controller;

import com.aaa.entity.Message;
import com.aaa.service.MessageService;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/Message")
public class MessageController {
    @Resource
    MessageService messageService;

    @RequestMapping("/messageList")
    public List<Message> MessageList(){
        return messageService.MessageList();
    }

    @RequestMapping("/addMessage")
    public Integer addMessage(Integer typeid,String mename,String surface,String synopsis,Integer writerid){
        Message message = new Message(typeid,mename,surface,synopsis,writerid);
        return messageService.addMessage(message);
    }

    @RequestMapping("/delMessage")
    public Integer delMessage(Integer meid){
        return messageService.delMessage(meid);
    }

    @RequestMapping("/updMessage")
    public Integer updMessage(Integer meid,Integer typeid,String mename,String surface,String synopsis,Integer writerid){
        Message message = new Message(meid,typeid,mename,surface,synopsis,writerid);
        return messageService.updMessage(message);
    }

    @RequestMapping("/findAll")
    public String findAll(Integer num, Integer size){
        return JSONObject.toJSON(messageService.findAll(num,size)).toString();
    }

}

package com.aaa.controller;

import com.aaa.entity.Message;
import com.aaa.service.MessageService;
import com.aaa.util.UploadUtil;
import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
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

    @RequestMapping("/messageList")
    public List<Message> MessageList(){
        return messageService.MessageList();
    }

    @RequestMapping("/addMessage")
    public Integer addMessage(Integer typeid, String mename, MultipartFile surface, String synopsis, Integer writerid) throws IOException {
        if(surface.isEmpty()){
            return 0;
        }
        String filepath = UploadUtil.upload(surface);

        Message message = new Message(typeid,mename,filepath,synopsis,writerid);
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

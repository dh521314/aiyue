package com.aaa.controller;

import com.aaa.entity.Message;
import com.aaa.entity.Type;
import com.aaa.entity.Writer;
import com.aaa.service.MessageService;
import com.aaa.service.TypeService;
import com.aaa.service.WriterService;
import com.aaa.util.UploadUtil;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/Message")
public class MessageController {
    @Resource
    MessageService messageService;
    @Resource
    WriterService writerService;

    @Resource
    TypeService typeService;


    @RequestMapping("/messageList")
    @ResponseBody
    public List<Message> MessageList(){
        return messageService.MessageList();
    }

    @RequestMapping("/addMessage")
    @ResponseBody
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
    @ResponseBody
    public Integer delMessage(Integer meid){
        return messageService.delMessage(meid);
    }

    @RequestMapping("/updMessage")
    @ResponseBody
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
    @ResponseBody
    public String findAll(String mename,Integer typeid,Integer num, Integer size){
        //检索 分页
        return JSONObject.toJSON(messageService.findAll(mename,typeid,num,size)).toString();
    }

    //前台排行榜
    @RequestMapping("/findAll1")
    public String findAll1(Integer num, Integer size, String search, Integer type, Integer update, Integer order, Model model){
        List<Type> types = typeService.findAll();
        PageInfo<Message> pageInfo = messageService.findBySearch1(num, size, search, type, update, order);
        model.addAttribute("types",types);
        model.addAttribute("pageinfo",pageInfo);
        model.addAttribute("search",search);
        model.addAttribute("type",type);
        model.addAttribute("update",update);
        model.addAttribute("order",order);

       return "search1";
        //return JSONObject.toJSON(pageInfo).toString();
    }

}

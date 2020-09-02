package com.aaa.controller;

import com.aaa.entity.Reader;
import com.aaa.service.ReaderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("Reader")
public class ReaderController {

    @Resource
    private ReaderService readerService;

    @RequestMapping("login")
    @ResponseBody
    public Reader login(String rname, String rpwd){
        return readerService.login(rname,rpwd);
    }

    @RequestMapping("phonelogin")
    @ResponseBody
    public Reader phonelogin(String rphone, Integer model, HttpServletRequest request){

        HttpSession session = request.getSession();
        Integer attribute = (Integer) session.getAttribute(rphone);

        if(attribute.equals(model)){
            //把指定用户返回
            return readerService.findByPhone(rphone);
        }else{
            //验证码错误
            return null;
        }

    }
    //查找phone
    @RequestMapping("findByPhone")
    @ResponseBody
    public Reader findByPhone(String rphone){
        return readerService.findByPhone(rphone);
    }
    //注册
    @RequestMapping("register")
    @ResponseBody
    public Reader register(String rphone, Integer model, HttpServletRequest request){
        HttpSession session = request.getSession();
        Integer attribute = (Integer) session.getAttribute(rphone);
        System.out.println(attribute);
        System.out.println(model);
        if(attribute.equals(model)){
            //注册
            Reader reader = new Reader(null,"","",rphone,"");
            Integer str = (int)(Math.random()*999);
            reader.setRname("abc"+str);
            readerService.register(reader);

            return reader;
        }else{
            //验证码错误
            return null;
        }

    }


}

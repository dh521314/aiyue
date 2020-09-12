package com.aaa.controller;

import com.aaa.entity.Reader;
import com.aaa.service.ReaderService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    public Reader login(String rname, String rpwd,HttpSession session){
        Reader reader = readerService.login(rname, rpwd);
        session.setAttribute("reader",reader);
        return reader;
    }

    @RequestMapping("phonelogin")
    @ResponseBody
    public Reader phonelogin(String rphone, Integer model, HttpServletRequest request){

        HttpSession session = request.getSession();
        Integer attribute = (Integer) session.getAttribute(rphone);

        if(attribute.equals(model)){
            //把指定用户返回
            Reader reader = readerService.findByPhone(rphone);
            session.setAttribute("reader",reader);
            return reader;
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
            Reader reader = new Reader(null,null,null,rphone,"");
            Integer str = (int)(Math.random()*999);
            reader.setRname("abc"+str);
            readerService.register(reader);
            session.setAttribute("reader",reader);


            return reader;
        }else{
            //验证码错误
            return null;
        }

    }

    @RequestMapping("getUser")
    @ResponseBody
    public Reader getReader(HttpServletRequest request){
        Reader reader = (Reader) request.getSession().getAttribute("reader");
        return reader;
    }

    @RequestMapping("loginOut")
    public String loginOut(HttpServletRequest request){
        request.getSession().setAttribute("reader",null);
        return "redirect:../MessageQ/queryIndex";
    }

    @RequestMapping("getReaderByRid")
    public String getReaderByRid(Model model,HttpSession httpSession){
        Reader reader = ( Reader ) httpSession.getAttribute("reader");
        Integer rid = reader.getRid();
        //根据用户名传参
        Reader readers = readerService.getReaderByRid(rid);
        model.addAttribute("readers", readers);
        return "ReaderManager1";
    }

    @RequestMapping("ReaderByRid")
    public String ReaderByRid(Model model,HttpSession httpSession){
        Reader reader = ( Reader ) httpSession.getAttribute("reader");
        Integer rid = reader.getRid();
        //根据用户名传参
        Reader readers = readerService.getReaderByRid(rid);
        model.addAttribute("readers", readers);
        return "ReaderManager2";
    }


    //修改用户信息
    @RequestMapping("readerUp")
    public String readerUp(Integer rid, String rname, String rphone){
        int i = readerService.readerUp(rid,rname,rphone);
        return "redirect:../login.html";
    }

}

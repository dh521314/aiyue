package com.aaa.controller;

import com.aaa.util.SMS;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@CrossOrigin
@RestController
public class SMSController {
    @Autowired
    SMS sms;

    @RequestMapping("SMS")
    public String sms(String tel, HttpServletRequest request){
        //随机验证码
        int mobile_code = (int)((Math.random()*9+1)*100000);

        JSONObject jsonObject = new JSONObject();

        String rs = sms.SendCode(tel,mobile_code);

        jsonObject.fluentPut("data",rs);
        //手机号  验证码存入session
        HttpSession session = request.getSession();
        session.setAttribute(tel,mobile_code);

        return jsonObject.toJSONString();
    }

}

package com.aaa.util;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SMS {
    //对应你阿里云账户的 accessKeyId
    @Value("${sms.accessKeyId}")
    public String accessKeyId;
    //对应你阿里云账户的 accessKeySecret
    @Value("${sms.accessKeySecret}")
    public String accessKeySecret;
    //对应签名名称
    public String signName = "爱阅小说";
    //对应模板代码
    @Value("${sms.templateCode}")
    public String templateCode;

    /**
     * 短信发送
     * @param telphone 发送的手机号
     * @parpm mobile_code 验证码
     */
    public String SendCode(String telphone,int mobile_code) {
        System.out.println(accessKeyId+","+accessKeySecret+","+signName+","+templateCode);
        String result = "";

        DefaultProfile profile = DefaultProfile.getProfile("default",
                accessKeyId, accessKeySecret);
        IAcsClient client = new DefaultAcsClient(profile);

        CommonRequest request = new CommonRequest();
        //request.setProtocol(ProtocolType.HTTPS);
        request.setMethod(MethodType.POST);
        //阿里云对应发送短信的服务器地址
        request.setDomain("dysmsapi.aliyuncs.com");
        //对应的版本号
        request.setVersion("2017-05-25");

        request.setAction("SendSms");
        request.putQueryParameter("PhoneNumbers", telphone);
        request.putQueryParameter("SignName", signName);
        request.putQueryParameter("TemplateCode", templateCode);
        request.putQueryParameter("TemplateParam", "{\"code\":"+mobile_code+"}");
        try {
            CommonResponse response = client.getCommonResponse(request);
            result = response.getData();
            System.out.println(result);
        } catch (ClientException e) {
            e.printStackTrace();
        }
        return result;
    }




}

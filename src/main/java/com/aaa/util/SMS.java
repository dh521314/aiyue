package com.aaa.util;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;

import java.rmi.ServerException;

public class SMS {
    //对应你阿里云账户的 accessKeyId
    private static final String accessKeyId = "LTAI4FnmUstJP8VwonNktxx6";
    //对应你阿里云账户的 accessKeySecret
    private static final String accessKeySecret = "TZrGUFFi6TFGIigZw3D4hzKFZr1MXm";
    //对应签名名称
    private static final String signName="爱阅小说";
    //对应模板代码
    private static final String templateCode="SMS_179290529";

    /**
     * 短信发送
     * @param telphone 发送的手机号
     * @parpm mobile_code 验证码
     */
    public static String SendCode(String telphone,int mobile_code) {
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

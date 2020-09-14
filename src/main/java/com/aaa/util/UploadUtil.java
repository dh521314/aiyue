package com.aaa.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;

public class UploadUtil {
    /**
     *  文件上传
     * @param pic  文件
     * @return  返回存储时的文件名
     * @throws IOException
     */
    public static String upload(MultipartFile pic) {
        Date date = new Date();
        long time = date.getTime();
        //文件全名
        String fileName = pic.getOriginalFilename();
        //当前时间 + 文件名字  作为文件名
        String filename = time+fileName.substring(fileName.lastIndexOf("."));

        File file = new File("D:/aiyue/img/" + filename);

        file.mkdirs();
        //另存入
        try {
            pic.transferTo(file);
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
        //返回访问路径
        return "/img/"+filename;
    }

}

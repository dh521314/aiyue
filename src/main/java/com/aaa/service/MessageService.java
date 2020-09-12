package com.aaa.service;

import com.aaa.dao.MessageDao;
import com.aaa.entity.Message;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class MessageService {
    @Resource
    MessageDao messageDao;
    public List<Message> MessageList(){
        return messageDao.MessageList();
    }

    public Integer addMessage(Integer typeid, String mename, String surface, String synopsis,Integer writerid,Integer mestate){
        return messageDao.addMessage(typeid,mename,surface,synopsis,writerid,mestate);
    }

    public Integer delMessage(Integer meid){
        return messageDao.deleteByPrimaryKey(meid);
    }

    public Integer updMessage(Message message){
        return messageDao.updateByPrimaryKey(message);
    }

    public Integer updateByMeidNoSurface(Message message){
        return messageDao.updateByMeidNoSurface(message);
    }

    public PageInfo<Message> findAll(String mename,Integer typeid,Integer num, Integer size){
        if(num != null && size != null){
            PageHelper.startPage(num,size);
        }else{
            PageHelper.startPage(1,10);
        }
        List<Message> rs = messageDao.findBySearch(mename,typeid);

        PageInfo<Message> pageInfo = new PageInfo<Message>(rs);

        return pageInfo;
    }


    //前台查询 按照小说名称 类型  写作进度查找
    public PageInfo<Message> findBySearch1(Integer num,Integer size,String search,Integer type,Integer update,Integer order) {
        if(num == null || num < 0){
            num = 1;
        }
        if(size == null || size < 0){
            size = 20;
        }

        PageHelper.startPage(num,size);

        List<Message> bySearch = messageDao.findBySearch1(search, type, update, order);

        PageInfo<Message> pageInfo = new PageInfo<>(bySearch);

        return pageInfo;
    }

    public Integer updateMessage(Integer meid,Integer typeid, String mename, String surface, String synopsis,Integer writerid,Integer mestate){
        return messageDao.updateMessage(meid,typeid,mename,surface,synopsis,writerid,mestate);
    }

}

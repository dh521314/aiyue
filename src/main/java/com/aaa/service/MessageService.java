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

    public Integer addMessage(Message message){
        return messageDao.insert(message);
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

}

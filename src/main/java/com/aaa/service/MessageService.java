package com.aaa.service;

import com.aaa.dao.MessageDao;
import com.aaa.entity.Message;
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
}

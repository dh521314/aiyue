package com.aaa.service;

import com.aaa.dao.BookrackDao;
import com.aaa.dao.DynamicDao;
import com.aaa.dao.MessageQDao;
import com.aaa.dao.SectionDao;
import com.aaa.entity.*;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class MessageQService {

    @Resource
    MessageQDao messageQDao;

    @Resource
    DynamicDao dynamicDao;

    @Resource
    SectionDao sectionDao;

    @Resource
    BookrackDao bookrackDao;

    public List<Message> queryLikeMename(String mename){
        return messageQDao.queryLikeMename(mename);
    }

    public List<Message> queryMessageByTypeid(Integer typeid){
        return messageQDao.queryMessageByTypeid(typeid);
    }

    public List<Message> queryMessageByMestate(Integer mestate){
        return messageQDao.queryMessageByMestate(mestate);
    }

    public List<Dynamic> queryMessageByDynamic(Integer param1,Integer param2){
        return dynamicDao.queryMessageByDynamic(param1,param2);
    }

    public List<Message> queryMessageByWriter(Integer writerid,Integer meid){
        return messageQDao.queryMessageByWriter(writerid,meid);
    }

    public List<Message> queryMessageByType(Integer typeid,Integer meid){
        return messageQDao.queryMessageByType(typeid,meid);
    }

    public List<Message> queryMessageCountByWriter(Integer writerid){
        return messageQDao.queryMessageCountByWriter(writerid);
    }

    public List<Section> queryNumberByWriter(Integer writerid){
        return sectionDao.queryNumberByWriter(writerid);
    }

    public List<Dynamic> queryReadNumberByWriter(Integer writerid){
        return dynamicDao.queryReadNumberByWriter(writerid);
    }

    public List<Section> querySectionAscByMessage(Integer messageid){
        return sectionDao.querySectionAscByMessage(messageid);
    }

    public List<Section> querySectionDescByMessage(Integer messageid){
        return sectionDao.querySectionDescByMessage(messageid);
    }

    public List<Section> queryNewSectionByMessage(Integer messageid){
        return sectionDao.queryNewSectionByMessage(messageid);
    }

    public List<Section> queryCountByMessage(Integer messageid){
        return sectionDao.queryCountByMessage(messageid);
    }

    public List<Section> queryOneSectionByMessageid(Integer messageid){
        return sectionDao.queryOneSectionByMessageid(messageid);
    }

    public List<Section> queryEndSectionByMessageid(Integer messageid){
        return sectionDao.queryEndSectionByMessageid(messageid);
    }

    public List<Section> querySectionBySidAndMessageid(Integer sid,Integer messageid){
        return sectionDao.querySectionBySidAndMessageid(sid,messageid);
    }

    public List<Section> queryLastSection(Integer sid,Integer messageid){
        return sectionDao.queryLastSection(sid,messageid);
    }
    public List<Section> queryNextSection(Integer sid,Integer messageid){
        return sectionDao.queryNextSection(sid,messageid);
    }

    public PageInfo<Message> queryMode(Integer pageNum, Integer pageSize,Integer typeid, Integer mestate, Integer clickRate1, Integer clickRate2){
        if(pageNum != null && pageSize != null){
            PageHelper.startPage(pageNum,pageSize);
        }else{
            PageHelper.startPage(1,20);
        }
        List<Message> rs = messageQDao.queryMode(typeid,mestate,clickRate1,clickRate2);
        PageInfo<Message> p = new PageInfo<Message>(rs);
        return p;
    }

    public List<Message> queryWriterByMessage(Integer meid){
        return messageQDao.queryWriterByMessage(meid);
    }

    public List<Section> queryNumberByMessage(Integer messageid){
        return sectionDao.queryNumberByMessage(messageid);
    }

    public List<Dynamic> queryReadNumberByMessage(Integer messageid){
        return dynamicDao.queryReadNumberByMessage(messageid);
    }

    public List<Bookrack> queryFansByMessage(Integer messageid){
        return bookrackDao.queryFansByMessage(messageid);
    }

    public List<Message> queryModeCount(Integer typeid, Integer mestate, Integer clickRate1, Integer clickRate2){
        return messageQDao.queryModeCount(typeid,mestate,clickRate1,clickRate2);
    }

    public List<Message> queryModeNumber(){
        return messageQDao.queryModeNumber();
    }

    public List<Message> queryModeType(){
        return messageQDao.queryModeType();
    }

    public List<Message> queryManMessByType(){
        return messageQDao.queryManMessByType();
    }

    public List<Message> queryWomanMessByType(){
        return messageQDao.queryWomanMessByType();
    }

    public List<Message> queryMessByMan(){
        return messageQDao.queryMessByMan();
    }

    public List<Message> queryMessByWoman(){
        return messageQDao.queryMessByWoman();
    }
}

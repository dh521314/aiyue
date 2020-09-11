package com.aaa.service;

import com.aaa.dao.MessageDao;
import com.aaa.dao.SectionDao;
import com.aaa.entity.Message;
import com.aaa.entity.Section;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

@Service
public class SectionService {

    @Resource
    SectionDao sectionDao;

    @Resource
    MessageDao messageDao;

    public List<Section> SectionList(){
        return sectionDao.sectionList();
    }

    public Integer addSection(String sname, Integer messageid, String content, Integer number, Date updatetiem){
        return sectionDao.addSection(sname,messageid,content,number,updatetiem);
    }

    public Integer delSection(Integer sid){
        return sectionDao.deleteByPrimaryKey(sid);
    }

    public Integer updSection(Section section){
        return sectionDao.updateByPrimaryKey(section);
    }

    public PageInfo<Section> pageFindAll(Integer pageNum, Integer pageSize){
        if(pageNum != null && pageSize != null){
            PageHelper.startPage(pageNum,pageSize);
        }else{
            PageHelper.startPage(1,10);
        }
        List<Section> rs = sectionDao.sectionList();
        PageInfo<Section> p = new PageInfo<Section>(rs);
        return p;
    }

    public List<Message> findMessage(){
        return messageDao.selectAll();
    }

    public Integer findMeidByMename(String mename){
        return messageDao.findMeidByMename(mename);
    }

    public String findMenameByMeid(Integer meid){
        return messageDao.findMenameByMeid(meid);
    }

    public List<Section> queryUpdateTime(){
        return sectionDao.queryUpdateTime();
    }

    public List<Section> queryNewSectionByWriterMessage(Integer writerid){
        return sectionDao.queryNewSectionByWriterMessage(writerid);
    }
}

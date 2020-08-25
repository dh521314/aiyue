package com.aaa.service;

import com.aaa.dao.SectionDao;
import com.aaa.entity.Section;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class SectionService {

    @Resource
    SectionDao sectionDao;

    public List<Section> SectionList(){
        return sectionDao.SectionList();
    }

    public Integer addSection(Section section){
        return sectionDao.insert(section);
    }

    public Integer delSection(Integer sid){
        return sectionDao.deleteByPrimaryKey(sid);
    }

    public Integer updSection(Section section){
        return sectionDao.updateByPrimaryKey(section);
    }
}

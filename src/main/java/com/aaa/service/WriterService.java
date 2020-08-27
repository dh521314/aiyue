package com.aaa.service;

import com.aaa.dao.WriterDao;
import com.aaa.entity.Writer;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class WriterService {
    @Resource
    WriterDao writerDao;

    //查询作家信息
    public List<Writer> writerQuery(){
        return writerDao.selectAll();
    }
    //根据姓名查询作家信息
    public Writer QueryByWriterName(String wname){
        return writerDao.QueryByWriterName(wname);
    }
    //添加作家信息（校验是否已存在该作家）
    public int addWriter(Writer writer){
       return writerDao.insert(writer);
    }
    //修改作家信息（不能修改作家笔名）
    public int editWriters(Writer writer){
        return writerDao.updateByPrimaryKeySelective(writer);
    }
    public Integer editWriter(Integer wid,String wphoto,String ana){
        return writerDao.editWriter(wid,wphoto,ana);
    }

    public PageInfo<Writer> pageFindAll(Integer pageNum, Integer pageSize){
        if(pageNum != null && pageSize != null){
            PageHelper.startPage(pageNum,pageSize);
        }else{
            PageHelper.startPage(1,10);
        }
        List<Writer> rs = writerDao.selectAll();
        PageInfo<Writer> p = new PageInfo<Writer>(rs);
        return p;
    }
}

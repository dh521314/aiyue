package com.aaa.dao;

import com.aaa.entity.Section;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.cache.decorators.LruCache;
import tk.mybatis.mapper.common.Mapper;

import java.util.Date;
import java.util.List;

//@CacheNamespace(eviction = LruCache.class,size = 512,readWrite = true,flushInterval = 60000)
@org.apache.ibatis.annotations.Mapper
public interface SectionDao extends Mapper<Section> {
    @Select("select * from section")
    @Results({
            @Result(property = "message", column = "messageid", one = @One(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
    })
    public List<Section> selectAll();

    @Insert("insert into section(sname,messageid,content,number,updatetiem) values(#{param1},#{param2},#{param3},#{param4},#{param5})")
    public Integer addSection(String sname, Integer messageid, String content, Integer number, Date updatetiem);

}

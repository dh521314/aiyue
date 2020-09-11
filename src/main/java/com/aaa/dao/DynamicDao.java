package com.aaa.dao;

import com.aaa.entity.Dynamic;
import com.aaa.entity.Message;
import com.aaa.entity.Type;
import org.apache.ibatis.annotations.*;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface DynamicDao extends Mapper<Dynamic> {

    @Select("SELECT * FROM dynamic WHERE did = #{did}")
    @Results({
            @Result(property = "readerid",  column = "readerid"),
            @Result(property = "messageid",  column = "messageid"),
            @Result(property = "sectionid",  column = "sectionid")
    })
    public Type getDynamicByDid(Integer did);

    //根据读者查询小说（我的阅读记录）
    @Select("select * from dynamic where did in (select max(did) from dynamic group by messageid) and readerid = #{readerid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "reader", column = "readerid", many = @Many(select = "com.aaa.dao.ReaderDao.getReaderByRid")),
            @Result(property = "section", column = "sectionid", many = @Many(select = "com.aaa.dao.SectionDao.getSectionBySid"))
    })
    public List<Dynamic> queryDynamicByReaderid(Integer readerid);

    //根据读者查询小说id（我的阅读记录）
    @Select("select messageid from dynamic where readerid=#{readerid} group by messageid")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "reader", column = "readerid", many = @Many(select = "com.aaa.dao.ReaderDao.getReaderByRid")),
            @Result(property = "section", column = "sectionid", many = @Many(select = "com.aaa.dao.SectionDao.getSectionBySid"))
    })
    public List<Integer> queryMessageByReaderid(Integer readerid);


    //根据点击量查询小说，是一个范围如点击量在1000，2000
    @Select("select dynamic.messageid,dynamic.count from (select messageid,count(*) as count from dynamic group by messageid) dynamic where count between #{clickRate1} and #{clickRate2}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "reader", column = "readerid", many = @Many(select = "com.aaa.dao.ReaderDao.getReaderByRid")),
            @Result(property = "section", column = "sectionid", many = @Many(select = "com.aaa.dao.SectionDao.getSectionBySid"))
    })
    public List<Dynamic> queryMessageByDynamic(Integer clickRate1, Integer clickRate2);

    //小说页面作家信息之累计阅读数
    @Select("select count(messageid) as count from dynamic where messageid in (select meid from message where writerid = #{writer})")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid"))
    })
    public List<Dynamic> queryReadNumberByWriter(Integer writerid);

    //小说页面小说累计阅读数
    @Select("select *,count(messageid) as count from dynamic where messageid = #{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "reader", column = "readerid", many = @Many(select = "com.aaa.dao.ReaderDao.getReaderByRid")),
            @Result(property = "section", column = "sectionid", many = @Many(select = "com.aaa.dao.SectionDao.getSectionBySid"))
    })
    public List<Dynamic> queryReadNumberByMessage(Integer messageid);

    //记录用户阅读记录
    @Insert("insert into dynamic(readerid,messageid,sectionid) values(#{readerid},#{messageid},#{sectionid})")
    public Integer addDynamic(Integer readerid,Integer messageid,Integer sectionid);
}

package com.aaa.dao;

import com.aaa.entity.Message;
import com.aaa.entity.Section;
import com.aaa.entity.Type;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.cache.decorators.LruCache;
import tk.mybatis.mapper.common.Mapper;

import java.util.Date;
import java.util.List;

//@CacheNamespace(eviction = LruCache.class,size = 512,readWrite = true,flushInterval = 60000)
@org.apache.ibatis.annotations.Mapper
public interface SectionDao extends Mapper<Section> {

    @Select("SELECT * FROM section WHERE sid = #{sid}")
    @Results({
            @Result(property = "sname",  column = "sname")
    })
    public Type getSectionBySid(Integer sid);

    @Select("select * from section")
    @Results({
            @Result(property = "message", column = "messageid", one = @One(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> sectionList();

    @Insert("insert into section(sname,messageid,content,number,updatetiem) values(#{param1},#{param2},#{param3},#{param4},#{param5})")
    public Integer addSection(String sname, Integer messageid, String content, Integer number, Date updatetiem);

    //查询最近更新的小说（按时间倒序）
    @Select("select * from section where sid in (select max(sid) from section group by messageid)")
    @Results({
            @Result(property = "message", column = "messageid", one = @One(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> queryUpdateTime();

    //小说小说简介页面作家信息之累计字数
    @Select("select *,SUM(number) as sum from section where messageid in (select meid from message where writerid = #{writer})")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> queryNumberByWriter(Integer writerid);

    //小说目录页面之全部目录(正序)
    @Select("select * from section where messageid = #{messageid} order by sid asc")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> querySectionAscByMessage(Integer messageid);

    //小说目录页面之全部目录(倒序)
    @Select("select * from section where messageid = #{messageid} order by sid desc")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> querySectionDescByMessage(Integer messageid);

    //小说目录页面之已更新章节数量
    @Select("select *,count(*) as count from section where messageid=#{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> queryCountByMessage(Integer messageid);

    //小说简介阅读页面之开始阅读（直接跳到第一章节）
    @Select("select *,min(sid) from section where messageid=#{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> queryOneSectionByMessageid(Integer messageid);

    //小说简介页面之最新章节
    @Select("select * from section where sid in (select max(sid) from section group by messageid) and messageid = #{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> queryNewSectionByMessage(Integer messageid);

    //小说简介页面之最新章节阅读（直接跳到最后一章）
    @Select("select *,max(sid) from section where messageid=#{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> queryEndSectionByMessageid(Integer messageid);

    //小说目录页面（点击对应的章节，进入小说阅读页面）
    @Select("select *,min(sid) from section where sid=#{sid} and messageid=#{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> querySectionBySidAndMessageid(Integer sid,Integer messageid);

    //小说阅读页面之上一章
    @Select("select * from section where sid = (select sid from section where sid < #{sid}  order by sid desc limit 1) and messageid=#{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> queryLastSection(Integer sid,Integer messageid);

    //小说阅读页面之下一章
    @Select("select * from section where sid = (select sid from section where sid > #{sid} order by sid asc limit 1) and messageid=#{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> queryNextSection(Integer sid,Integer messageid);

    //小说简介页面之小说字数
    @Select("select *,SUM(number) as sum from section where messageid = #{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Section> queryNumberByMessage(Integer messageid);

}

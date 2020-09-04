package com.aaa.dao;

import com.aaa.entity.Dynamic;
import com.aaa.entity.Message;
import com.aaa.entity.Writer;
import org.apache.ibatis.annotations.*;
import org.springframework.ui.Model;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface MessageQDao extends Mapper<Message> {

    //根据小说名称查询小说，模糊查询
    @Select("select * from message where mename like '%${mename}%'")
    @Results({
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Message> queryLikeMename(String mename);

    //根据小说类型查询小说
    @Select("select * from message where typeid=#{typeid}")
    @Results({
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Message> queryMessageByTypeid(Integer typeid);

    //根据小说状态查询，0未完结，1已完结
    @Select("select * from message where mestate=#{mestate}")
    @Results({
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Message> queryMessageByMestate(Integer mestate);

    //小说检索页面(小说类型，小说状态，小说点击量)
    @Select("<script> select * from message <where>" +
            "<if test=\"mestate != null and mestate != ''\"> mestate = #{mestate}'</if>" +
            "<if test=\"typeid != null and typeid != ''\"> and typeid = #{typeid}</if>" +
            "<if test=\"clickRate1 != null and clickRate1 != 0\"> and meid in (select dynamic.messageid from (select messageid,count(*) as count from dynamic group by messageid) dynamic where count between #{clickRate1} and #{clickRate2})</if>" +
            "</where></script>")
    @Results({
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid")),
            @Result(property = "dynamic", column = "did", one = @One(select = "com.aaa.dao.DynamicDao.getDynamicByDid"))
    })
    public List<Message> queryMode(Integer typeid, Integer mestate, Integer clickRate1, Integer clickRate2);

    //根据作者查询小说（显示本作品外最近的六个作品），（作者其他作品）
    @Select("select * from message where writerid = #{writerid} and meid not in(#{meid}) order by meid desc limit 0,6")
    @Results({
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Message> queryMessageByWriter(Integer writerid,Integer meid);

    //相关小说精彩推荐（显示本作品外同类型小说的最近六个作品）
    @Select("select * from message where typeid = #{typeid} and meid not in(#{meid}) order by meid desc limit 0,6")
    @Results({
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Message> queryMessageByType(Integer typeid,Integer meid);

    //小说页面作家信息之头像，作家名，作家语录
    @Select("select * from message where meid=#{meid}")
    @Results({
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Message> queryWriterByMessage(Integer meid);

    //小说页面作家信息之作品总量
    @Select("select writerid,count(*) as count from  message where writerid=#{writerid} group by writerid")
    @Results({
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Message> queryMessageCountByWriter(Integer writerid);




}

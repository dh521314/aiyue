package com.aaa.dao;

import com.aaa.entity.Message;
import org.apache.ibatis.annotations.*;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface MessageDao extends Mapper<Message> {
    @Select("select * from message")
    @Results(id="messagesMap",value= {
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Message> MessageList();

    @Select("SELECT * FROM message WHERE meid = #{meid}")
    @Results({
            @Result(property = "mename",  column = "mename"),
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public Message getMessageByMeid(Integer meid);

    @Update("update message set typeid = #{typeid},mename = #{mename},synopsis = #{synopsis},writerid = #{writerid} where meid = #{meid}")
    public Integer updateByMeidNoSurface(Message message);

    @Select("<script> select * from message <where>" +
            "<if test=\"mename != null and mename != ''\">mename like '%${mename}%'</if>" +
            "<if test=\"typeid != null and typeid != ''\">and typeid = ${typeid}</if>" +
            "</where></script>")
    @ResultMap("messagesMap")
    public List<Message> findBySearch(String mename, Integer typeid);

    @Select("select mename from message where meid")
    public String findMenameByMeid(Integer meid);

    @Select("select meid from message where mename=#{param1}")
    public Integer findMeidByMename(String mename);


    //查询小说 按照名称查找 类型 写作进度
    @Select("<script> select m.*,count(d.did) as count from message m left join dynamic d on d.messageid = m.meid <where>" +
            "<if test=\"search != null and search != ''\">mename like '%${search}%'</if>" +
            "<if test=\"type != null and type != ''\">and typeid = ${type}</if>" +
            "<if test=\"update != null and update != ''\">and mestate = ${update}</if>" +
            "</where>  group by m.meid " +
            "<if test=\"order != null and order == 1\"> order by count desc</if>" +
            "</script>")
    @Results({
            @Result(property = "type", column = "typeid", one = @One(select = "com.aaa.dao.TypeDao.getTypeByTid")),
            @Result(property = "writer", column = "writerid", one = @One(select = "com.aaa.dao.WriterDao.getWriterByWid"))
    })
    public List<Message> findBySearch1(String search,Integer type,Integer update,Integer order);


}

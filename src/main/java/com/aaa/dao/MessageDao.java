package com.aaa.dao;

import com.aaa.entity.Message;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface MessageDao extends Mapper<Message> {
    @Select("select * from message m left join type t on m.typeid=t.tid left join writer w on m.writer=w.wid")
    public List<Message> MessageList();

    @Update("update message set typeid = #{typeid},mename = #{mename},synopsis = #{synopsis},writerid = #{writerid} where meid = #{meid}")
    public Integer updateByMeidNoSurface(Message message);
}

package com.aaa.dao;

import com.aaa.entity.Writer;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface WriterDao extends Mapper<Writer> {
    @Select("select * from writer where wname = #{param1}")
    Writer QueryByWriterName(String wname);

    @Update("update writer set wphoto=#{wphoto},ana=#{ana} where wid=#{wid}")
    Integer editWriter(Integer wid, String wphoto, String ana);

    @Select("SELECT * FROM writer WHERE wid = #{wid}")
    @Results({
            @Result(property = "wname",  column = "wname")
    })
    public Writer getWriterByWid(Integer wid);
}

package com.aaa.dao;

import com.aaa.entity.Writer;
import org.apache.ibatis.annotations.*;
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

    //查询作家信息（根据readerid）
    @Select("select * from writer where readerid = #{readerid}")
    @Results({
            @Result(property = "reader", column = "readerid", one = @One(select = "com.aaa.dao.ReaderDao.getReaderByRid"))
    })
    public List<Writer> queryWriterByReader(Integer readerid);

    @Update("update writer set wname=#{wname},ana=#{ana} where wid=#{wid}")
    public Integer updateWriter(Integer wid, String wname, String ana);
}

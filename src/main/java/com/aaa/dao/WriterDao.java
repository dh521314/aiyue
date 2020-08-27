package com.aaa.dao;

import com.aaa.entity.Writer;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface WriterDao extends Mapper<Writer> {
    @Select("select * from writer where wname = #{param1}")
    Writer QueryByWriterName(String wname);
}

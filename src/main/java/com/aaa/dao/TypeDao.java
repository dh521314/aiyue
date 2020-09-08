package com.aaa.dao;

import com.aaa.entity.Type;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface TypeDao extends Mapper<Type> {
    @Select("SELECT * FROM type WHERE tid = #{tid}")
    @Results({
            @Result(property = "tname",  column = "tname")
    })
    public Type getTypeByTid(Integer tid);

    @Select("select * from type where channel = 0")
    public List<Type> queryManChannel();

    @Select("select * from type where channel = 1")
    public List<Type> queryWomanChannel();
}

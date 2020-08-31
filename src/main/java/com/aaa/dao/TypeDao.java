package com.aaa.dao;

import com.aaa.entity.Type;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

@org.apache.ibatis.annotations.Mapper
public interface TypeDao extends Mapper<Type> {
    @Select("SELECT * FROM type WHERE tid = #{tid}")
    @Results({
            @Result(property = "tname",  column = "tname")
    })
    public Type getTypeByTid(Integer tid);
}

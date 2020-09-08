package com.aaa.dao;

import com.aaa.entity.Reader;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

@org.apache.ibatis.annotations.Mapper
public interface ReaderDao extends Mapper<Reader> {

    @Select("SELECT * FROM reader WHERE rid = #{rid}")
    @Results({
            @Result(property = "rname",  column = "rname")
    })
    public Reader getReaderByRid(Integer rid);

    @Select("select * from reader where rname = #{param1} and rpwd = #{param2}")
    public Reader login(String rname, String rpwd);

    @Select("select * from reader where rphone = #{param1}")
    public Reader findByPhone(String rphone);
}

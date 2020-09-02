package com.aaa.dao;

import com.aaa.entity.Reader;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

@org.apache.ibatis.annotations.Mapper
public interface ReaderDao extends Mapper<Reader> {

    @Select("select * from reader where rname = #{param1} and rpwd = #{param2}")
    public Reader login(String rname,String rpwd);

    @Select("select * from reader where rphone = #{param1}")
    public Reader findByPhone(String rphone);


}

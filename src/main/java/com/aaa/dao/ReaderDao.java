package com.aaa.dao;

import com.aaa.entity.Reader;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

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

    //修改用户信息
    @Update("update reader set rname=#{rname},rphone=#{rphone} where rid=#{rid}")
    public  Integer readerUp(Integer rid,String rname,String rphone);

    //查询密码
    @Select("select * from reader where rid=#{rid}")
    public List<Reader> queryYpwd(Integer rid);

    //修改密码
    @Update("update reader set rpwd=#{rpwd} where rid=#{rid}")
    public Integer updateRpwd(String rpwd,Integer rid);

}

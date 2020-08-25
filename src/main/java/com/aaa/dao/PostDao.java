package com.aaa.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface PostDao {
    @Select("select pname from post where pid = #{param1}")
    public String findByPid(Integer pid);

}

package com.aaa.dao;

import com.aaa.entity.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PostDao {
    @Select("select pname from post where pid = #{param1}")
    public String findByPid(Integer pid);

    @Select("select * from post")
    public List<Post> findPost();

}

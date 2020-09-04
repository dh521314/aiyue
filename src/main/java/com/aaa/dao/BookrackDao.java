package com.aaa.dao;


import com.aaa.entity.Bookrack;
import org.apache.ibatis.annotations.*;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface BookrackDao extends Mapper<Bookrack> {
    //根据读者查询小说，（我的书架）
    @Select("select * from bookrack where readerid=#{readerid}")
    @Results({
            @Result(property = "message", column = "messageid", many = @Many(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "reader", column = "readerid", many = @Many(select = "com.aaa.dao.ReaderDao.getReaderByRid"))
    })
    public List<Bookrack> queryBookrackByReaderid(Integer readerid);


}

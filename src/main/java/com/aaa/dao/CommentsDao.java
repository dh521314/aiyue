package com.aaa.dao;

import com.aaa.entity.Comments;
import org.apache.ibatis.annotations.*;
import tk.mybatis.mapper.common.Mapper;

import java.util.Date;
import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface CommentsDao extends Mapper<Comments> {
    //查询热评小说，按照小说评论量从高到低排序
    @Select("select messageid,count(*) as count from comments group by messageid order by count desc")
    @Results({
            @Result(property = "message", column = "messageid", one = @One(select = "com.aaa.dao.MessageDao.getMessageByMeid"))
    })
    public List<Comments> queryMessageByComments();

    //根据读者查询小说，（我的评论）
    @Select("select * from comments where readerid = #{readerid}")
    @Results({
            @Result(property = "message", column = "messageid", one = @One(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "reader", column = "readerid", many = @Many(select = "com.aaa.dao.ReaderDao.getReaderByRid"))
    })
    public List<Comments> queryCommentsByReader(Integer readerid);

    //小说评论区（根据小说查询评论）
    @Select("select * from comments where messageid=#{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", one = @One(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "reader", column = "readerid", many = @Many(select = "com.aaa.dao.ReaderDao.getReaderByRid"))
    })
    public List<Comments> queryCommentsByMessage(Integer messageid);

    //小说评论区帖子数量
    @Select("select *,count(*) as count from comments where messageid=#{messageid}")
    @Results({
            @Result(property = "message", column = "messageid", one = @One(select = "com.aaa.dao.MessageDao.getMessageByMeid")),
            @Result(property = "reader", column = "readerid", many = @Many(select = "com.aaa.dao.ReaderDao.getReaderByRid"))
    })
    public List<Comments> queryCountByManager(Integer messageid);
    //小说评论区发表评论
    @Insert("insert into comments(readerid,messageid,content,commenttime) values(#{readerid},#{messageid},#{content},#{commenttime})")
    public Integer publicComments(Integer readerid, Integer messageid, String content, Date commenttime);
}

package com.aaa.service;

import com.aaa.dao.CommentsDao;
import com.aaa.entity.Comments;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

@Service
public class CommentsService {
    @Resource
    CommentsDao commentsDao;

    public List<Comments> queryMessageByComments(){
        return commentsDao.queryMessageByComments();
    }

    public List<Comments> queryCommentsByReader(Integer readerid){
        return commentsDao.queryCommentsByReader(readerid);
    }

    public List<Comments> queryCommentsByMessage(Integer messageid){
        return commentsDao.queryCommentsByMessage(messageid);
    }

    public List<Comments> queryCountByManager(Integer messageid){
        return commentsDao.queryCountByManager(messageid);
    }

    public Integer publicComments(Integer readerid, Integer messageid, String content, Date commenttime){
        return commentsDao.publicComments(readerid,messageid,content,commenttime);
    }
}

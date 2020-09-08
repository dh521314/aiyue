package com.aaa.service;

import com.aaa.dao.BookrackDao;
import com.aaa.entity.Bookrack;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class BookrackService {
    @Resource
    BookrackDao bookrackDao;

    public List<Bookrack> queryBookrackByReaderid(Integer readerid) {
        return bookrackDao.queryBookrackByReaderid(readerid);
    }

    public Integer del(Integer[] list) {
        for (int i = 0; i < list.length; i++) {
            bookrackDao.deleteByPrimaryKey(list[i]);
        }
        return 1;
    }
}

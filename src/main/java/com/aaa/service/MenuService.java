package com.aaa.service;

import com.aaa.dao.MenuDao;
import com.aaa.entity.Menu;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class MenuService {
    @Resource
    MenuDao menuDao;

    public List<Menu> findByPid(Integer pid){
        return menuDao.findByPid(pid);
    }


}

package com.aaa.dao;

import com.aaa.entity.Menu;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface MenuDao {

    @Select("select m.* from menu m inner join menu_post mp on m.mid = mp.menuid inner join post p on p.pid = mp.postid where pid = #{param1}")
    public List<Menu> findByPid(Integer pid);

}

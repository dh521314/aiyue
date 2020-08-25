package com.aaa.dao;

import com.aaa.entity.Section;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface SectionDao extends Mapper<Section> {
    @Select("select * from section s left join message m on s.messageid=m.meid")
    public List<Section> SectionList();
}

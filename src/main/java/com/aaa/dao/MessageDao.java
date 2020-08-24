package com.aaa.dao;

import com.aaa.entity.Message;
import tk.mybatis.mapper.common.Mapper;

@org.apache.ibatis.annotations.Mapper
public interface MessageDao extends Mapper<Message> {
}

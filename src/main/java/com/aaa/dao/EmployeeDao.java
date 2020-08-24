package com.aaa.dao;

import com.aaa.entity.Employee;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface EmployeeDao extends Mapper<Employee> {
    public List<Employee> login(String ename,String epwd);

}

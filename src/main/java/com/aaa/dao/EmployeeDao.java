package com.aaa.dao;

import com.aaa.entity.Employee;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface EmployeeDao extends Mapper<Employee> {
    @Select("select * from employee where ename = #{param1} and epwd = #{param2}")
    public List<Employee> login(String ename,String epwd);

}

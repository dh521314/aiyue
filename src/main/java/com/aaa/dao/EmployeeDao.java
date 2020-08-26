package com.aaa.dao;

import com.aaa.entity.Employee;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface EmployeeDao extends Mapper<Employee> {
    @Select("select * from employee where ename = #{param1} and epwd = #{param2}")
    public List<Employee> login(String ename,String epwd);

    @Select("select * from employee where ename=#{ename} and epwd=#{epwd}")
    public Employee findByEname(String ename,String epwd);

    @Update("update employee set ephoto=#{ephoto} where ename=#{ename} and epwd=#{epwd}")
    public Integer updateEmpPhoto(String ename,String epwd,String ephoto);

    @Select("select epwd from employee where eid=#{eid}")
    public Employee selectEpwd(Integer eid);

    @Update("update employee set epwd=#{epwd} where eid=#{eid}")
    public Integer updateEmpPwd(Integer eid,String epwd);

    @Update("update employee set ename=#{ename},realname=#{realname},idcard=#{idcard},ephone=#{ephone},email=#{email} where eid=#{eid}")
    public Integer updateEmpManager(Integer eid,String ename,String realname,String idcard,String ephone,String email);
}

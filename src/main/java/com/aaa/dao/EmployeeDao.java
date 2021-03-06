package com.aaa.dao;

import com.aaa.entity.Employee;
import org.apache.ibatis.annotations.*;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@org.apache.ibatis.annotations.Mapper
public interface EmployeeDao extends Mapper<Employee> {
    @Select("select * from employee where ename = #{param1} and epwd = #{param2}")
    public List<Employee> login(String ename, String epwd);

    @Select("select * from employee where ename=#{ename} and epwd=#{epwd}")
    public Employee findByEname(String ename, String epwd);

    @Update("update employee set ephoto=#{ephoto} where ename=#{ename} and epwd=#{epwd}")
    public Integer updateEmpPhoto(String ename, String epwd, String ephoto);

    @Select("select epwd from employee where eid=#{eid}")
    public Employee selectEpwd(Integer eid);

    @Update("update employee set epwd=#{epwd} where eid=#{eid}")
    public Integer updateEmpPwd(Integer eid, String epwd);

    @Update("update employee set ename=#{ename},realname=#{realname},idcard=#{idcard},ephone=#{ephone},email=#{email} where eid=#{eid}")
    public Integer updateEmpManager(Integer eid, String ename, String realname, String idcard, String ephone, String email);

    @Update("update employee set state=#{state} where eid=#{eid}")
    public Integer updateEmp(Integer eid, Integer state);

    //根据用户名查询
    @Select("select * from employee where ename = #{param1}")
    public Employee queryEmpName(String ename);

    //根据姓名查询
    /*@Select("select e.eid,e.ename,e.epwd,e.realname,e.idcard,e.ephoto,e.ephone,e.email,p.pname,e.state from employee e left join post p on e.postid=p.pid where e.realname like '%${realname}%'")*/
    @Select("select * from employee where realname like '%${realname}%'")
    @Results({
            @Result(property = "post",column = "postid",one = @One(select = "com.aaa.dao.PostDao.findPid"))
    })
    public List<Employee> findByName(String realname);

    //查询员工信息
    @Select("select * from employee")
    @Results({
            @Result(property = "post",column = "postid",one = @One(select = "com.aaa.dao.PostDao.findPid"))
    })
    public List<Employee> employeeList();

}

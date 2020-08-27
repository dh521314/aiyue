package com.aaa.service;

import com.aaa.dao.EmployeeDao;
import com.aaa.entity.Employee;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeService {
    @Resource
    EmployeeDao employeeDao;

    public List<Employee> login(String ename, String epwd) {
        return employeeDao.login(ename,epwd);
    }

    public Integer add(Employee employee) {
        return employeeDao.insert(employee);
    }

    public Integer del(Integer eid) {
        return employeeDao.deleteByPrimaryKey(eid);
    }

    public Integer update(Employee employee) {
        return employeeDao.updateByPrimaryKey(employee);
    }

    public List<Employee> findAll() {
        return employeeDao.selectAll();
    }

    public Employee findByEname(String ename,String epwd){
        return employeeDao.findByEname(ename,epwd);
    }

    public Integer updateEmpPhoto(String ename,String epwd,String ephoto){
        return employeeDao.updateEmpPhoto(ename, epwd, ephoto);
    }

    public Integer updateEmpManager(Integer eid,String ename,String realname,String idcard,String ephone,String email){
        return employeeDao.updateEmpManager(eid,ename,realname,idcard,ephone,email);
    }

    public Employee selectEpwd(Integer eid){
        return employeeDao.selectEpwd(eid);
    }

    public Integer updateEmpPwd(Integer eid,String epwd){
        return employeeDao.updateEmpPwd(eid,epwd);
    }

    public Integer addEmp(String ename,String epwd,Integer postid){
        return employeeDao.addEmp(ename,epwd,postid);
    }

    public Integer updateEmp(Integer eid,Integer state){
        return employeeDao.updateEmp(eid,state);
    }

    public List<Map<String,Object>> findByName(String realname){
        return employeeDao.findByName(realname);
    }

    public List<Map<String,Object>> showAll(){
        return employeeDao.showAll();
    }
}

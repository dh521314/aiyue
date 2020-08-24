package com.aaa.service;

import com.aaa.dao.EmployeeDao;
import com.aaa.entity.Employee;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

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

    public Integer updateEmpManager(Employee employee){
        return employeeDao.updateByPrimaryKey(employee);
    }

    public Employee selectEpwd(Integer eid){
        return employeeDao.selectEpwd(eid);
    }

    public Integer updateEmpPwd(Integer eid,String epwd){
        return employeeDao.updateEmpPwd(eid,epwd);
    }
}

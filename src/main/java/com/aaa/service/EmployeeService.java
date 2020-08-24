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
}

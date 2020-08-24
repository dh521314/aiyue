package com.aaa.service.impl;

import com.aaa.dao.EmployeeDao;
import com.aaa.entity.Employee;
import com.aaa.service.EmployeeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class EmployeeImpl implements EmployeeService {
    @Resource
    EmployeeDao employeeDao;

    @Override
    public List<Employee> login(String ename, String epwd) {
        return employeeDao.login(ename,epwd);
    }

    @Override
    public Integer add(Employee employee) {
        return employeeDao.insert(employee);
    }

    @Override
    public Integer del(Integer eid) {
        return employeeDao.deleteByPrimaryKey(eid);
    }

    @Override
    public Integer update(Employee employee) {
        return employeeDao.updateByPrimaryKey(employee);
    }

    @Override
    public List<Employee> findAll() {
        return employeeDao.selectAll();
    }
}

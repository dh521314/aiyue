package com.aaa.service;

import com.aaa.entity.Employee;

import java.util.List;

public interface EmployeeService {
    
    public List<Employee> login(String ename,String epwd);

    public Integer add(Employee Employee);

    public Integer del(Integer tid);

    public Integer update(Employee Employee);

    public List<Employee> findAll();
    
    
}

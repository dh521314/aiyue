package com.aaa.controller;

import com.aaa.entity.Employee;
import com.aaa.service.EmployeeService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("Emp")
public class EmployeeController {
    @Resource
    EmployeeService employeeService;
    @RequestMapping("/login")
    public List<Employee> login(String ename, String epwd) {
        return employeeService.login(ename,epwd);
    }

    @RequestMapping("/findByEname")
    public Employee findByEname(String ename, String epwd){
        return employeeService.findByEname(ename,epwd);
    }

    @RequestMapping("/updateEmpPhoto")
    public Integer updateEmpPhoto(String ename,String epwd,String ephoto){
        return employeeService.updateEmpPhoto(ename,epwd,ephoto);
    }

    @RequestMapping("/updateEmpManager")
    public Integer updateEmpManager(Integer eid,String ename,String realname,String idcard,String ephone,String email){
        Employee employee = new Employee(eid,ename,realname,idcard,ephone,email);
        return employeeService.updateEmpManager(employee);
    }

    @RequestMapping("/selectPwd")
    public Employee selectPwd(Integer epwd){
        return employeeService.selectEpwd(epwd);
    }

    @RequestMapping("/updateEmpPwd")
    public Integer updateEmpPwd(Integer eid,String epwd){
        return employeeService.updateEmpPwd(eid,epwd);
    }

}

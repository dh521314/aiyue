package com.aaa.controller;

import com.aaa.service.EmployeeService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@CrossOrigin
@RestController
@RequestMapping("Emp")
public class EmployeeController {
    @Resource
    EmployeeService employeeService;




}

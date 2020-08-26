package com.aaa.controller;

import com.aaa.entity.Employee;
import com.aaa.service.EmployeeService;
import com.aaa.service.PostServices;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
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
    @Resource
    PostServices postServices;

    @RequestMapping("/login")
    public String login(String ename, String epwd) {
        List<Employee> rs = employeeService.login(ename, epwd);
        JSONArray jsonArray = new JSONArray();
        if(rs.size() > 0){
            jsonArray.add(JSONObject.toJSON(rs.get(0)));
            String post = postServices.findByPid(rs.get(0).getPostid());
            jsonArray.add(post);
            return jsonArray.toJSONString();
        }else{
            return "[]";
        }
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
        System.out.println("updateEmpManager");
        return employeeService.updateEmpManager(eid,ename,realname,idcard,ephone,email);
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

package com.aaa.controller;

import com.aaa.entity.Employee;
import com.aaa.service.EmployeeService;
import com.aaa.service.PostServices;
import com.aaa.util.UploadUtil;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.List;
import java.util.Map;


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
    public Integer updateEmpPhoto(String ename, String epwd, MultipartFile ephoto) throws IOException {
        //保存文件
        String filepath = UploadUtil.upload(ephoto);
        return employeeService.updateEmpPhoto(ename,epwd,filepath);
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

    @RequestMapping("/updateEmp")
    public Integer update(Integer eid,Integer state){
        return employeeService.updateEmp(eid,state);
    }

    @RequestMapping("/findName")
    public List<Map<String,Object>> findByName(String realname){
        return employeeService.findByName(realname);
    }

    @RequestMapping("/addEmp")
    public Integer addEmp(String ename,String epwd,Integer postid,Integer state){
        Employee emp = employeeService.queryEmpName(ename);
        if (emp != null){
            return 2;
        }else {
            Employee employee = new Employee(ename,epwd,postid,state);
            return employeeService.add(employee);
        }

    }

    @RequestMapping("/findAll")
    public String findAll(Integer num,Integer size){
        return JSONObject.toJSON(employeeService.showAll(num,size)).toString();
    }

}

package com.aaa.controller;

import com.aaa.service.TypeService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("Type")
public class TypeController {
    @Resource
    TypeService typeService;




}

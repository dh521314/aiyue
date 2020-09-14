package com.aaa.cfg;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
public class WebMvcConfig implements WebMvcConfigurer {
    /**
     * 配置文件路径映射
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 对外暴露的访问路径    内部文件放置的目录
        registry.addResourceHandler("/img/**").addResourceLocations("file:/D:/aiyue/img/");
        WebMvcConfigurer.super.addResourceHandlers(registry);

    }
}

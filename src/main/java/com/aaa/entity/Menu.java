package com.aaa.entity;

import lombok.Data;

import javax.persistence.Id;
import java.io.Serializable;

@Data
public class Menu implements Serializable {
    @Id
    private Integer mid;

    private String mname;

    private String path;

}

package com.aaa.entity;

import lombok.Data;

import javax.persistence.Id;
import java.io.Serializable;

@Data
public class Reader implements Serializable {

    @Id
    private Integer rid;

    private String rname;

    private String rpwd;

    private String rphone;

    private String rphoto;

}

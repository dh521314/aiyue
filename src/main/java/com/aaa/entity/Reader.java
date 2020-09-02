package com.aaa.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@AllArgsConstructor
public class Reader implements Serializable {

    @Id
    @Column
    @GeneratedValue(generator = "JDBC")
    private Integer rid;
    @Column
    private String rname;
    @Column
    private String rpwd;
    @Column
    private String rphone;
    @Column
    private String rphoto;

    public Reader() {
    }

}

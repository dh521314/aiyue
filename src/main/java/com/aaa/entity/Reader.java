package com.aaa.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
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

    public Reader(String rname, String rpwd, String rphone, String rphoto) {
        this.rname = rname;
        this.rpwd = rpwd;
        this.rphone = rphone;
        this.rphoto = rphoto;
    }

    public Reader(Integer rid, String rname, String rpwd, String rphone, String rphoto) {
        this.rid = rid;
        this.rname = rname;
        this.rpwd = rpwd;
        this.rphone = rphone;
        this.rphoto = rphoto;
    }

    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }

    public String getRname() {
        return rname;
    }

    public void setRname(String rname) {
        this.rname = rname;
    }

    public String getRpwd() {
        return rpwd;
    }

    public void setRpwd(String rpwd) {
        this.rpwd = rpwd;
    }

    public String getRphone() {
        return rphone;
    }

    public void setRphone(String rphone) {
        this.rphone = rphone;
    }

    public String getRphoto() {
        return rphoto;
    }

    public void setRphoto(String rphoto) {
        this.rphoto = rphoto;
    }

    @Override
    public String toString() {
        return "Reader{" +
                "rid=" + rid +
                ", rname='" + rname + '\'' +
                ", rpwd='" + rpwd + '\'' +
                ", rphone='" + rphone + '\'' +
                ", rphoto='" + rphoto + '\'' +
                '}';
    }
}

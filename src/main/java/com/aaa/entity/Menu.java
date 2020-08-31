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

    public Menu() {
    }

    public Menu(Integer mid, String mname, String path) {
        this.mid = mid;
        this.mname = mname;
        this.path = path;
    }

    public Integer getMid() {
        return mid;
    }

    public void setMid(Integer mid) {
        this.mid = mid;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "mid=" + mid +
                ", mname='" + mname + '\'' +
                ", path='" + path + '\'' +
                '}';
    }
}

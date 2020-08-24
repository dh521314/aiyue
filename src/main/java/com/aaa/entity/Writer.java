package com.aaa.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import javax.persistence.Id;

@Data
public class Writer implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	private Integer wid;
	/**
	 * 
	 */
	private String wname;
	/**
	 * 
	 */
	private String wphoto;
	/**
	 * 
	 */
	private String ana;

	public Writer() {
	}

	public Writer(String wname, String wphoto, String ana) {
		this.wname = wname;
		this.wphoto = wphoto;
		this.ana = ana;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Integer getWid() {
		return wid;
	}

	public void setWid(Integer wid) {
		this.wid = wid;
	}

	public String getWname() {
		return wname;
	}

	public void setWname(String wname) {
		this.wname = wname;
	}

	public String getWphoto() {
		return wphoto;
	}

	public void setWphoto(String wphoto) {
		this.wphoto = wphoto;
	}

	public String getAna() {
		return ana;
	}

	public void setAna(String ana) {
		this.ana = ana;
	}

	@Override
	public String toString() {
		return "Writer{" +
				"wid=" + wid +
				", wname='" + wname + '\'' +
				", wphoto='" + wphoto + '\'' +
				", ana='" + ana + '\'' +
				'}';
	}
}

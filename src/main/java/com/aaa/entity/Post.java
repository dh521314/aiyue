package com.aaa.entity;


import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import javax.persistence.Id;

@Data
public class Post implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	private Integer pid;
	/**
	 * 
	 */
	private String pname;

	public Post() {
	}

	public Post(Integer pid, String pname) {
		this.pid = pid;
		this.pname = pname;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	@Override
	public String toString() {
		return "Post{" +
				"pid=" + pid +
				", pname='" + pname + '\'' +
				'}';
	}
}

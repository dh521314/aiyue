package com.aaa.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
public class Employee implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	@Column
	@GeneratedValue(generator = "JDBC")
	private Integer eid;
	/**
	 * 
	 */
	@Column
	private String ename;
	/**
	 * 
	 */
	@Column
	private String epwd;

	@Column
	private String realname;

	@Column
	private String idcard;
	/**
	 * 
	 */
	@Column
	private String ephoto;
	/**
	 * 
	 */
	@Column
	private String ephone;
	/**
	 * 
	 */
	@Column
	private String email;
	/**
	 * 
	 */
	@Column
	private Integer postid;
	/**
	 * 
	 */
	@Column
	private Integer state;

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Integer getEid() {
		return eid;
	}

	public void setEid(Integer eid) {
		this.eid = eid;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getEpwd() {
		return epwd;
	}

	public void setEpwd(String epwd) {
		this.epwd = epwd;
	}

	public String getRealname() {
		return realname;
	}

	public void setRealname(String realname) {
		this.realname = realname;
	}

	public String getIdcard() {
		return idcard;
	}

	public void setIdcard(String idcard) {
		this.idcard = idcard;
	}

	public String getEphoto() {
		return ephoto;
	}

	public void setEphoto(String ephoto) {
		this.ephoto = ephoto;
	}

	public String getEphone() {
		return ephone;
	}

	public void setEphone(String ephone) {
		this.ephone = ephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getPostid() {
		return postid;
	}

	public void setPostid(Integer postid) {
		this.postid = postid;
	}

	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
		this.state = state;
	}

	public Employee() {
	}

	public Employee(Integer eid, String ename, String realname, String idcard, String ephone, String email) {
		this.eid = eid;
		this.ename = ename;
		this.realname = realname;
		this.idcard = idcard;
		this.ephone = ephone;
		this.email = email;
	}

	public Employee(Integer eid, String ename, String realname, String idcard, String ephoto, String ephone, String email, Integer postid, Integer state) {
		this.eid = eid;
		this.ename = ename;
		this.realname = realname;
		this.idcard = idcard;
		this.ephoto = ephoto;
		this.ephone = ephone;
		this.email = email;
		this.postid = postid;
		this.state = state;
	}

	@Override
	public String toString() {
		return "Employee{" +
				"eid=" + eid +
				", ename='" + ename + '\'' +
				", epwd='" + epwd + '\'' +
				", realname='" + realname + '\'' +
				", idcard='" + idcard + '\'' +
				", ephoto='" + ephoto + '\'' +
				", ephone='" + ephone + '\'' +
				", email='" + email + '\'' +
				", postid=" + postid +
				", state=" + state +
				'}';
	}
}

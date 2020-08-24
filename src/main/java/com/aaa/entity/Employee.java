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

}

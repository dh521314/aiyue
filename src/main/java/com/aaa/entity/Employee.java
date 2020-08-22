package com.aaa.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import javax.persistence.Id;

@Data
public class Employee implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	private Integer eid;
	/**
	 * 
	 */
	private String ename;
	/**
	 * 
	 */
	private String epwd;
	/**
	 * 
	 */
	private String realname;
	/**
	 * 
	 */
	private String idcard;
	/**
	 * 
	 */
	private String ephoto;
	/**
	 * 
	 */
	private String ephone;
	/**
	 * 
	 */
	private String email;
	/**
	 * 
	 */
	private Integer postid;
	/**
	 * 
	 */
	private Integer state;

}

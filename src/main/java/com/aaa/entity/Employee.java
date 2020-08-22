package com.aaa.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import javax.persistence.Id;
/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2020-08-22 10:07:26
 */
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

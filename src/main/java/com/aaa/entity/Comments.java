package com.aaa.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import javax.persistence.Id;

@Data
public class Comments implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	private Integer cid;
	/**
	 * 
	 */
	private Integer writerid;
	/**
	 * 
	 */
	private Integer messageid;
	/**
	 * 
	 */
	private String content;
	/**
	 * 
	 */
	private Date commenttime;

}

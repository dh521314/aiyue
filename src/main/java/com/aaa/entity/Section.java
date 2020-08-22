package com.aaa.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import javax.persistence.Id;

@Data
public class Section implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	private Integer sid;
	/**
	 * 
	 */
	private String sname;
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
	private Integer number;
	/**
	 * 
	 */
	private Date updatetiem;

}

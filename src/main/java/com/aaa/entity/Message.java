package com.aaa.entity;


import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import javax.persistence.Id;

@Data
public class Message implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	private Integer meid;
	/**
	 * 
	 */
	private Integer typeid;
	/**
	 * 
	 */
	private String mename;
	/**
	 * 
	 */
	private String surface;
	/**
	 * 
	 */
	private String synopsis;
	/**
	 * 
	 */
	private Integer writerid;

}

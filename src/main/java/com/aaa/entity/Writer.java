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

}

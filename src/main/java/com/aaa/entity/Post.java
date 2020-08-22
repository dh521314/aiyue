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

}

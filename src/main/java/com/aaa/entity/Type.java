package com.aaa.entity;


import java.io.Serializable;
import java.util.Date;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
public class Type implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	@Column
	@GeneratedValue(generator = "JDBC")
	private Integer tid;
	/**
	 * 
	 */
	@Column
	private String tname;
	/**
	 * 
	 */
	@Column
	private Integer channel;

}

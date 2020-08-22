package com.aaa.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Table;


@Data
@Table(name = "menu_post")
public class MenuPost implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	private Integer menuid;
	/**
	 * 
	 */
	private Integer postid;

}

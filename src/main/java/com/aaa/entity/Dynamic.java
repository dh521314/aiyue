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
public class Dynamic implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	private Integer did;
	/**
	 * 
	 */
	private Integer writerid;
	/**
	 * 
	 */
	private Integer messageid;

}

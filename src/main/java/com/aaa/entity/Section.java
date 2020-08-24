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

	public Section() {
	}

	public Integer getSid() {
		return sid;
	}

	public void setSid(Integer sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public Integer getMessageid() {
		return messageid;
	}

	public void setMessageid(Integer messageid) {
		this.messageid = messageid;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public Date getUpdatetiem() {
		return updatetiem;
	}

	public void setUpdatetiem(Date updatetiem) {
		this.updatetiem = updatetiem;
	}
}

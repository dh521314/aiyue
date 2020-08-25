package com.aaa.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
public class Section implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	@Column
	@GeneratedValue(generator = "JDBC")
	private Integer sid;
	/**
	 * 
	 */
	@Column
	private String sname;
	/**
	 * 
	 */
	@Column
	private Integer messageid;
	/**
	 * 
	 */
	@Column
	private String content;
	/**
	 * 
	 */
	@Column
	private Integer number;
	/**
	 * 
	 */
	@Column
	private Date updatetiem;

	public Section() {
	}

	public Section(String sname, Integer messageid, String content, Integer number, Date updatetiem) {
		this.sname = sname;
		this.messageid = messageid;
		this.content = content;
		this.number = number;
		this.updatetiem = updatetiem;
	}

	public Section(Integer sid, String sname, Integer messageid, String content, Integer number, Date updatetiem) {
		this.sid = sid;
		this.sname = sname;
		this.messageid = messageid;
		this.content = content;
		this.number = number;
		this.updatetiem = updatetiem;
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

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

	private Message message;

	private Writer writer;

	private Integer sum;

	private Integer count;

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

	public Section(Integer sid, String sname, String content, Integer number, Date updatetiem) {
		this.sid = sid;
		this.sname = sname;
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

	public Message getMessage() {
		return message;
	}

	public void setMessage(Message message) {
		this.message = message;
	}

	public Writer getWriter() {
		return writer;
	}

	public void setWriter(Writer writer) {
		this.writer = writer;
	}

	public Integer getSum() {
		return sum;
	}

	public void setSum(Integer sum) {
		this.sum = sum;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "Section{" +
				"sid=" + sid +
				", sname='" + sname + '\'' +
				", messageid=" + messageid +
				", content='" + content + '\'' +
				", number=" + number +
				", updatetiem=" + updatetiem +
				", message=" + message +
				", writer=" + writer +
				", sum=" + sum +
				", count=" + count +
				'}';
	}
}

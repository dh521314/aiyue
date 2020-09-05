package com.aaa.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
public class Comments implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	@Column
	@GeneratedValue(generator = "JDBC")
	private Integer cid;
	/**
	 * 
	 */
	@Column
	private Integer readerid;
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
	private Date commenttime;

	private Message message;

	private Reader reader;

	private Integer count;

	public Comments() {
	}

	public Comments(Integer readerid, Integer messageid, String content, Date commenttime) {
		this.readerid = readerid;
		this.messageid = messageid;
		this.content = content;
		this.commenttime = commenttime;
	}

	public Comments(Integer cid, Integer readerid, Integer messageid, String content, Date commenttime) {
		this.cid = cid;
		this.readerid = readerid;
		this.messageid = messageid;
		this.content = content;
		this.commenttime = commenttime;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Integer getCid() {
		return cid;
	}

	public void setCid(Integer cid) {
		this.cid = cid;
	}

	public Integer getReaderid() {
		return readerid;
	}

	public void setReaderid(Integer readerid) {
		this.readerid = readerid;
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

	public Date getCommenttime() {
		return commenttime;
	}

	public void setCommenttime(Date commenttime) {
		this.commenttime = commenttime;
	}

	public Message getMessage() {
		return message;
	}

	public void setMessage(Message message) {
		this.message = message;
	}

	public Reader getReader() {
		return reader;
	}

	public void setReader(Reader reader) {
		this.reader = reader;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "Comments{" +
				"cid=" + cid +
				", readerid=" + readerid +
				", messageid=" + messageid +
				", content='" + content + '\'' +
				", commenttime=" + commenttime +
				", message=" + message +
				", reader=" + reader +
				", count=" + count +
				'}';
	}
}

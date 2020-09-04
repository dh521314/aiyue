package com.aaa.entity;


import java.io.Serializable;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Data
public class Bookrack implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	@Column
	@GeneratedValue(generator = "JDBC")
	private Integer bid;
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

	private Reader reader;

	private Message message;

	public Bookrack() {
	}

	public Bookrack(Integer bid, Integer readerid, Integer messageid) {
		this.bid = bid;
		this.readerid = readerid;
		this.messageid = messageid;
	}

	public Bookrack(Integer readerid, Integer messageid) {
		this.readerid = readerid;
		this.messageid = messageid;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Integer getBid() {
		return bid;
	}

	public void setBid(Integer bid) {
		this.bid = bid;
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

	public Reader getReader() {
		return reader;
	}

	public void setReader(Reader reader) {
		this.reader = reader;
	}

	public Message getMessage() {
		return message;
	}

	public void setMessage(Message message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Bookrack{" +
				"bid=" + bid +
				", readerid=" + readerid +
				", messageid=" + messageid +
				", reader=" + reader +
				", message=" + message +
				'}';
	}
}

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

	private Message message;

	public Type() {
	}

	public Type(Integer tid, String tname, Integer channel) {
		this.tid = tid;
		this.tname = tname;
		this.channel = channel;
	}

	public Type(String tname, Integer channel) {
		this.tname = tname;
		this.channel = channel;
	}

	public Integer getTid() {
		return tid;
	}

	public void setTid(Integer tid) {
		this.tid = tid;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public Integer getChannel() {
		return channel;
	}

	public void setChannel(Integer channel) {
		this.channel = channel;
	}

}

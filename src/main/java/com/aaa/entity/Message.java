package com.aaa.entity;


import java.io.Serializable;
import java.util.Date;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
public class Message implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column
	@GeneratedValue(generator = "JDBC")
	private Integer meid;

	@Column
	private Integer typeid;

	@Column
	private String mename;

	@Column
	private String surface;

	@Column
	private String synopsis;

	@Column
	private Integer writerid;

	private Writer writer;

	private Type type;


	public Message() {
	}

	public Message(Integer typeid, String mename, String surface, String synopsis, Integer writerid) {
		this.typeid = typeid;
		this.mename = mename;
		this.surface = surface;
		this.synopsis = synopsis;
		this.writerid = writerid;
	}

	public Message(Integer meid, Integer typeid, String mename, String surface, String synopsis, Integer writerid) {
		this.meid = meid;
		this.typeid = typeid;
		this.mename = mename;
		this.surface = surface;
		this.synopsis = synopsis;
		this.writerid = writerid;
	}

	public Writer getWriter() {
		return writer;
	}

	public void setWriter(Writer writer) {
		this.writer = writer;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public Integer getMeid() {
		return meid;
	}

	public void setMeid(Integer meid) {
		this.meid = meid;
	}

	public Integer getTypeid() {
		return typeid;
	}

	public void setTypeid(Integer typeid) {
		this.typeid = typeid;
	}

	public String getMename() {
		return mename;
	}

	public void setMename(String mename) {
		this.mename = mename;
	}

	public String getSurface() {
		return surface;
	}

	public void setSurface(String surface) {
		this.surface = surface;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public Integer getWriterid() {
		return writerid;
	}

	public void setWriterid(Integer writerid) {
		this.writerid = writerid;
	}
}

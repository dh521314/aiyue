package com.aaa.entity;


import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import javax.persistence.Id;

@Data
public class Message implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	private Integer meid;
	/**
	 * 
	 */
	private Integer typeid;
	/**
	 * 
	 */
	private String mename;
	/**
	 * 
	 */
	private String surface;
	/**
	 * 
	 */
	private String synopsis;
	/**
	 * 
	 */
	private Integer writerid;

	public Message() {
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

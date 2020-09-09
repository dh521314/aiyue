package com.aaa.entity;

import java.io.Serializable;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
public class Dynamic implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Id
	@Column
	@GeneratedValue(generator = "JDBC")
	private Integer did;
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

	@Column
	private Integer sectionid;

	private Reader reader;

	private Message message;

	private Integer count;

	private Section section;

	public Dynamic() {
	}

	public Dynamic(Integer did, Integer readerid, Integer messageid,Integer sectionid) {
		this.did = did;
		this.readerid = readerid;
		this.messageid = messageid;
		this.sectionid = sectionid;
	}

	public Dynamic(Integer writerid, Integer messageid,Integer sectionid) {
		this.readerid = writerid;
		this.messageid = messageid;
		this.sectionid = sectionid;
	}

	public Integer getDid() {
		return did;
	}

	public void setDid(Integer did) {
		this.did = did;
	}

	public Integer getReaderid() {
		return readerid;
	}

	public void setReaderid(Integer readerid) {
		this.readerid = readerid;
	}

	public Reader getReader() {
		return reader;
	}

	public void setReader(Reader reader) {
		this.reader = reader;
	}

	public Integer getMessageid() {
		return messageid;
	}

	public void setMessageid(Integer messageid) {
		this.messageid = messageid;
	}

	public Message getMessage() {
		return message;
	}

	public void setMessage(Message message) {
		this.message = message;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public Integer getSectionid() {
		return sectionid;
	}

	public void setSectionid(Integer sectionid) {
		this.sectionid = sectionid;
	}


	public Section getSection() {
		return section;
	}

	public void setSection(Section section) {
		this.section = section;
	}

	@Override
	public String toString() {
		return "Dynamic{" +
				"did=" + did +
				", readerid=" + readerid +
				", messageid=" + messageid +
				", sectionid=" + sectionid +
				", reader=" + reader +
				", message=" + message +
				", count=" + count +
				", section=" + section +
				'}';
	}
}

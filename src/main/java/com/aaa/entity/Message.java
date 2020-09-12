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

	@Column
	private Integer mestate;

	private Type type;

	private Writer writer;

	private Dynamic dynamic;

	private Integer count;

	private Integer clickRate1;

	private Integer clickRate2;

	//最新章节
	private Section section;

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

	public Integer getMestate() {
		return mestate;
	}

	public void setMestate(Integer mestate) {
		this.mestate = mestate;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public Integer getClickRate1() {
		return clickRate1;
	}

	public void setClickRate1(Integer clickRate1) {
		this.clickRate1 = clickRate1;
	}

	public Integer getClickRate2() {
		return clickRate2;
	}

	public void setClickRate2(Integer clickRate2) {
		this.clickRate2 = clickRate2;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public Writer getWriter() {
		return writer;
	}

	public void setWriter(Writer writer) {
		this.writer = writer;
	}

	public Dynamic getDynamic() {
		return dynamic;
	}

	public void setDynamic(Dynamic dynamic) {
		this.dynamic = dynamic;
	}

	public Section getSection() {
		return section;
	}

	public void setSection(Section section) {
		this.section = section;
	}

	@Override
	public String toString() {
		return "Message{" +
				"meid=" + meid +
				", typeid=" + typeid +
				", mename='" + mename + '\'' +
				", surface='" + surface + '\'' +
				", synopsis='" + synopsis + '\'' +
				", writerid=" + writerid +
				", mestate=" + mestate +
				", type=" + type +
				", writer=" + writer +
				", dynamic=" + dynamic +
				", count=" + count +
				", clickRate1=" + clickRate1 +
				", clickRate2=" + clickRate2 +
				", section=" + section +
				'}';
	}
}

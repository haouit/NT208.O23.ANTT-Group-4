CREATE DATABASE QLDT
USE QLDT

CREATE TABLE USR(
	ID char(10) PRIMARY KEY,
	TeamID char(10),
	Name varchar(40),
	Avatar varchar(40),
	Password varchar(50),
	Email varchar(20),
	Coin int
)

CREATE TABLE PET(
	PetID char(10) PRIMARY KEY,
	Name varchar(40),
	Size int,
	Color varchar(20),
	Exp int,
	Age int,
	Status varchar(50),
	Description varchar(150),
	Image varchar(20),
	Type varchar(20),
	ID char(10)
)

CREATE TABLE TEAM(
	TeamID char(10) PRIMARY KEY ,
	Name varchar(20)
)

CREATE TABLE MISSION(
	MissionID char(10) PRIMARY KEY ,
	Coin int,
    Description varchar(150)
)

CREATE TABLE ITEM(
	ItemID char(10) PRIMARY KEY,
	Type varchar(20) ,
	Coin int,
	Description varchar(150)
)

CREATE TABLE HISTORY(
	ID char(10) ,
	PetID char(10) ,
	Description varchar(150)
)

CREATE TABLE ACHIEVEMENT(
	AchievID char(10) PRIMARY KEY,
	Description varchar(150)
)

CREATE TABLE THANHTUU(
	AchievID char(10),
	ID char(10),
	CONSTRAINT B PRIMARY KEY(AchievID, ID)
)

CREATE TABLE NHIEMVU(
	MissionID char(10),
	ID char(10),
	CONSTRAINT B_NV PRIMARY KEY(MissionID, ID)
)

CREATE TABLE BILL(
	SoBill char(10) PRIMARY KEY,
	ID char(10) ,
	Coin int
)

CREATE TABLE CTHD(
	SoBill char(10),
	ItemID char(10),
	CONSTRAINT B PRIMARY KEY(SoBill, ItemID)
)

CREATE TABLE BAG(
	BagID char(10) ,
	ID char(10)
)

CREATE TABLE SOHUU(
	ItemID char(10),
	BagID char(10),
	SL int, 
	CONSTRAINT SH_IT_B PRIMARY KEY(ItemID, BagID)
)

ALTER TABLE PET ADD
	CONSTRAINT PET_ID_FK FOREIGN KEY (ID)
		REFERENCES USR(ID)

ALTER TABLE CTHD ADD
	CONSTRAINT CTHD_SOHD_FK FOREIGN KEY (SOHD)
		REFERENCES HOADON(SOHD),
	CONSTRAINT CTHD_MASP_FK FOREIGN KEY (MASP)
		REFERENCES SANPHAM(MASP)
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



CREATE TABLE ITEM(
	ItemID char(10) PRIMARY KEY,
	Type varchar(20) ,
	Coin int,
	Description varchar(150)
)


CREATE TABLE ACHIEVEMENT(
	AchievID char(10) PRIMARY KEY,
	Description varchar(150)
)
 
--Bảng liên kết giữa USER và ACHIEVEMENT
CREATE TABLE THANHTUU(
	AchievID char(10),
	ID char(10),
	CONSTRAINT B PRIMARY KEY(AchievID, ID)
)

CREATE TABLE MISSION(
	MissionID char(10) PRIMARY KEY ,
	Coin int,
    Description varchar(150)
)

--Bảng liên kết giữa USER và MISSION
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

--Bảng liên kết giữa BILL và ITEM
CREATE TABLE CTHD(
	SoBill char(10),
	ItemID char(10),
	CONSTRAINT B_Items PRIMARY KEY(SoBill, ItemID)
)

CREATE TABLE BAG(
	BagID char(10) PRIMARY KEY ,
	ID char(10)
)

--Bảng liên kết giữa BAG và ITEM
CREATE TABLE SOHUU(
	ItemID char(10),
	BagID char(10),
	SL int, 
	CONSTRAINT SH_IT_B PRIMARY KEY(ItemID, BagID)
)

ALTER TABLE PET ADD
	CONSTRAINT PET_ID_FK FOREIGN KEY (ID)
		REFERENCES USR(ID)

ALTER TABLE USR ADD
	CONSTRAINT FK_U_TEAM FOREIGN KEY (TeamID)
		REFERENCES TEAM(TeamID)

ALTER TABLE BAG ADD
	CONSTRAINT FK_B_U FOREIGN KEY (ID)
		REFERENCES USR (ID)

ALTER TABLE BILL ADD
	CONSTRAINT FK_BILL_U FOREIGN KEY (ID)
		REFERENCES USR(ID)

ALTER TABLE NHIEMVU ADD
	CONSTRAINT FK_NV_U FOREIGN KEY (ID)
		REFERENCES USR(ID),
	CONSTRAINT FK_NV_MISS FOREIGN KEY (MissionID)
		REFERENCES MISSION (MissionID)

ALTER TABLE THANHTUU ADD
	CONSTRAINT FK_TT_U FOREIGN KEY (ID)
		REFERENCES USR(ID),
	CONSTRAINT FK_TT_ACHI FOREIGN KEY (AchievID)
		REFERENCES ACHIEVEMENT (AchievID)

ALTER TABLE CTHD ADD
	CONSTRAINT FK_BILL_CTHD FOREIGN KEY (SoBill)
		REFERENCES BILL(SoBill),
	CONSTRAINT FK_CTHD_ITEM FOREIGN KEY (ItemID)
		REFERENCES ITEM (ItemID)

ALTER TABLE SOHUU ADD
	CONSTRAINT FK_ITEM_SH FOREIGN KEY (ItemID)
		REFERENCES ITEM (ItemID),
	CONSTRAINT FK_BAG_SH FOREIGN KEY (BagID)
		REFERENCES BAG (BagID)


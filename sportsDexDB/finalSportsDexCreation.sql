-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema SportsDex
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema SportsDex
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SportsDex` DEFAULT CHARACTER SET utf8 ;
USE `SportsDex` ;

-- -----------------------------------------------------
-- Table `SportsDex`.`achievements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SportsDex`.`achievements` (
  `idachievements` INT NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `points` INT NOT NULL,
  `team` VARCHAR(45) NOT NULL,
  `imagePath` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`idachievements`),
  UNIQUE INDEX `idachievements_UNIQUE` (`idachievements` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `SportsDex`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SportsDex`.`user` (
  `iduser` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `iduser_UNIQUE` (`iduser` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `SportsDex`.`userAchievement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SportsDex`.`userAchievement` (
  `userID` INT NOT NULL,
  `achievementID` INT NOT NULL,
  UNIQUE INDEX `userID_UNIQUE` (`userID` ASC) VISIBLE,
  UNIQUE INDEX `cardID_UNIQUE` (`achievementID` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

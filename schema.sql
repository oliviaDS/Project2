-- Drops the healthpledge if it exists currently --
DROP DATABASE IF EXISTS healthpledge_db;
-- Creates the "healthpledge" database --
CREATE DATABASE healthpledge_db;

-- Notes --
-- **User Table** --
-- 1st column: User ID --
-- 2nd column: Name --

-- **Answer Table* --
-- Primary id --
-- 1st -7th column: Weekdays --
-- 8th column: Year --
-- 9th column:  Week numbers -- 
-- 10th column: User ID as foreign keys --


-- Creating prospect table 
CREATE TABLE user
(
  -- Identifier
  "id" uuid PRIMARY KEY,
  -- Base Entity
  "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
  "lastModifiedOn" TIMESTAMP,
  -- Entity Specific
  "username" VARCHAR(320),
  "password" VARCHAR(320),

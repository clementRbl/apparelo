-- Creating prospect table 
CREATE TABLE prospect
(
  -- Identifier
  "id" uuid PRIMARY KEY,
  -- Base Entity
  "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
  "lastModifiedOn" TIMESTAMP,
  -- Entity Specific
  "firstName" VARCHAR(320),
  "lastName" VARCHAR(320),
  "email" VARCHAR(320),
  "tel" VARCHAR(15),
  "organisation_name" VARCHAR(255),
  "organisation_type" VARCHAR(60),

);

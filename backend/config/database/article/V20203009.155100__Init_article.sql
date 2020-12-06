CREATE TABLE article
(
  -- Identifier
  "id" uuid PRIMARY KEY,
  -- Base Entity
  "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
  "lastModifiedOn" TIMESTAMP,
  -- Entity Specific
  "denomination" VARCHAR(60),
  "family" VARCHAR(320),
  "type" VARCHAR(320),
  "color" VARCHAR(320),
  "description" VARCHAR(1000),
  
);

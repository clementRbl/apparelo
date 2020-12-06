CREATE TABLE devis
(
  -- Identifier
  "id" uuid PRIMARY KEY,
  -- Base Entity
  "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
  "lastModifiedOn" TIMESTAMP,
  -- Entity Specific
  "prospectId" uuid NOT NULL REFERENCES prospect(id),
  "message" VARCHAR(1000),
  "type" VARCHAR(10) NOT NULL,
  "logo" VARCHAR(1000),
);

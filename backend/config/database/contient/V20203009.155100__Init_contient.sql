CREATE TABLE contient
(
  -- Identifier
  "id" uuid PRIMARY KEY,
  -- Base Entity
  "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
  "lastModifiedOn" TIMESTAMP,
  -- Entity Specific
  "devisId" uuid NOT NULL REFERENCES devis(id),
  "articleId" uuid NOT NULL REFERENCES article(id),
  "quantity" INT,
);

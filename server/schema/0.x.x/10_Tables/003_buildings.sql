/*
 Zentrale Tabelle für alle verfügbaren Gebäude
 */
CREATE TABLE buildings (
    id SERIAL NOT NULL,
    id_text text,
    max_level int,

    PRIMARY KEY (id)
);

/* Security Rules */
ALTER TABLE
  buildings enable ROW LEVEL SECURITY;

CREATE policy "Building general data visible" ON buildings FOR
SELECT
  USING (TRUE);
/*
 Zentrale Tabelle für alle Gebäude Stufen der Basen.
 */
CREATE TABLE buildings (
    base_id int4 REFERENCES bases(id) NOT NULL,
    -- TODO Random Base Name
    townhouse int DEFAULT 0,
    woodcutter int DEFAULT 0,
    stonequarry int DEFAULT 0,
    ironmine int DEFAULT 0,
    goldmine int DEFAULT 0,

    PRIMARY KEY (base_id)
);

/* Security Rules */
ALTER TABLE
  bases enable ROW LEVEL SECURITY;

CREATE policy "Building data only visible to holding player" ON buildings FOR
SELECT
  USING (
    auth.uid() in (
      select player_id from bases
      where id = base_id
    )
  );

-- TODO Weitere Regeln
/*
 Zentrale Tabelle für alle Basen der Spieler.
 */
CREATE TABLE bases (
    player_id uuid REFERENCES players(id) NOT NULL,
    -- TODO Random Base Name
    name text NOT NULL DEFAULT md5(random() :: text),
    score int DEFAULT 0 NOT NULL,
    PRIMARY KEY (player_id, name)
);

/* Security Rules */
ALTER TABLE
  bases enable ROW LEVEL SECURITY;

CREATE policy "Player bases are viewable by everyone." ON bases FOR
SELECT
  USING (TRUE);

-- TODO Create/Update Regeln
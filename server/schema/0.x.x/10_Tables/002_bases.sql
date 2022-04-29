/*
 Zentrale Tabelle für alle Basen der Spieler.
 */
CREATE TABLE bases (
    id serial NOT NULL,
    x int,
    y int,
    player_id uuid REFERENCES players(id) ON DELETE SET NULL, --Wenn ein Spieler Acc gelöscht wird -> "Geister/KI Base"
    -- TODO Random Base Name
    name text NOT NULL DEFAULT md5(random() :: text),

    PRIMARY KEY (id)
);

/* Security Rules */
ALTER TABLE
  bases enable ROW LEVEL SECURITY;

CREATE policy "Player bases are viewable by everyone." ON bases FOR
SELECT
  USING (TRUE);
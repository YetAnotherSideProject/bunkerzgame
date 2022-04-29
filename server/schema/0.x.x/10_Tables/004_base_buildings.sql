/*
    Aktuelle Gebäude in einer Base
 */
CREATE TABLE base_buildings (
    base_id int REFERENCES bases(id) NOT NULL,
    building_id int REFERENCES buildings(id) NOT NULL,
    level int,

    PRIMARY KEY (base_id, building_id)
);

/* Security Rules */
ALTER TABLE
  base_buildings enable ROW LEVEL SECURITY;

CREATE policy "Base Building Data visible to holding player" ON base_buildings FOR
SELECT
  USING (
      auth.uid() in (
        select player_id from bases
        where id = base_id)
      );
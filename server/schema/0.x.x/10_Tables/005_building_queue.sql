/*
    Gebäude welche sich in Bau befinden
 */
CREATE TABLE building_queue (
    base_id int REFERENCES bases(id) NOT NULL,
    building_id int REFERENCES buildings(id) NOT NULL,
    target_level int NOT NULL,
    finished_at timestamp NOT NULL,

    PRIMARY KEY (base_id, building_id, target_level)
);

/* Security Rules */
ALTER TABLE
  building_queue enable ROW LEVEL SECURITY;

CREATE policy "Queue Building Data visible to holding player" ON building_queue FOR
SELECT
  USING (
      auth.uid() in (
        select player_id from bases
        where id = base_id)
      );
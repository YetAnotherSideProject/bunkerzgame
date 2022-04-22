/*
 Zentrale Player Profil Tabelle, linkt direkt zu Usern von SupaBase Auth, wird initial beim Regisrtieren durch Trigger gefüllt.
 */
CREATE TABLE players (
  id uuid REFERENCES auth.users NOT NULL,
  username text,
  score int DEFAULT 0 NOT NULL,
  created_at timestamp WITH time zone DEFAULT timezone('utc' :: text, NOW()) NOT NULL,
  PRIMARY KEY (id)
);

/* Security Rules */
ALTER TABLE
  players enable ROW LEVEL SECURITY;

CREATE policy "Player profiles are viewable by everyone." ON players FOR
SELECT
  USING (TRUE);

CREATE policy "Players can insert their own profile." ON players FOR
INSERT
  WITH CHECK (auth.uid() = id);

CREATE policy "Players can update own profile." ON players FOR
UPDATE
  USING (auth.uid() = id);
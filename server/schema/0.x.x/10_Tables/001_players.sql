/*
 Zentrale Player Profil Tabelle, linkt direkt zu Usern von SupaBase Auth, wird initial beim Regisrtieren durch Trigger gefüllt.
 */
CREATE TABLE players (
  id uuid REFERENCES auth.users ON DELETE CASCADE,
  username text,
  created_at timestamp WITH time zone DEFAULT timezone('utc' :: text, NOW()) NOT NULL,

  PRIMARY KEY (id)
);

/* Security Rules */
ALTER TABLE
  players enable ROW LEVEL SECURITY;

CREATE policy "Player profiles are viewable by everyone." ON players FOR
SELECT
  USING (TRUE);
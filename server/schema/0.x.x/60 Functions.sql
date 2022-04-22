/* 
 Functions called by Triggers (Return Type Trigger) 
 */
-- inserts a row into players
CREATE
OR REPLACE FUNCTION create_new_player() RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER --security definer statt default invoker notwendig, kp wieso
SET search_path = PUBLIC AS $ $ 
BEGIN
  INSERT INTO
    players (id)
  VALUES
    (NEW .id);
  RETURN NEW;
END;
$ $;
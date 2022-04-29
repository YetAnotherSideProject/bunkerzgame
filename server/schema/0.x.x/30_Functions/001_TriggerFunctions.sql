/* 
 Functions called by Triggers (Return Type Trigger) 
 */
-- inserts a row into players
CREATE
OR REPLACE FUNCTION create_new_player() RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER --security definer statt default invoker notwendig, kp wieso
SET search_path = PUBLIC 
AS $$ 
BEGIN
  INSERT INTO
    players (id)
  VALUES
    (NEW .id);
  RETURN NEW;
END;
$$;

-- inserts a row into buildings
CREATE
OR REPLACE FUNCTION handle_new_base() RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER --security definer statt default invoker notwendig, kp wieso
SET search_path = PUBLIC 
AS $$ 
BEGIN
  INSERT INTO
    base_buildings (base_id, building_id, level)
  SELECT 
    NEW.id AS base_id,
    id AS building_id,
    1 AS level
  from
    buildings;
  RETURN NEW;
END;
$$;
-- trigger the function every time a user is created
CREATE TRIGGER on_auth_user_created 
AFTER INSERT
ON auth.users FOR each ROW EXECUTE PROCEDURE create_new_player();
-- trigger the function every time a new base row is inserted
CREATE TRIGGER on_new_base
AFTER INSERT
ON public.bases FOR each ROW EXECUTE PROCEDURE handle_new_base();
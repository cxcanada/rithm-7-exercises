# Migrations

For this assignment, you'll be getting lots of practice working with migrations. We're going to build a small application and gradually develop our data model over time.

Please follow the steps below when you're building the app. Don't skip around! By the end of the assignment, you should have at least **six** migrations for the project.

### Sunset App!

You'll be building a simple app that allows users to display images of sunsets, along with add a new sunset image to the collection.

The app should only have a single `index.html` page, containing both the form to add a sunset image, and a collection of all of the sunset images. The Flask app should have two endpoints: one to render the `index` page, and one to handle the form submission when a user adds a sunset.

1.  Scaffold out the Flask app, and build a `Sunset` model. Every sunset should have an `image_url` (text) and a `caption` (text). _Perform a migration to make these changes to the database._ Then add a couple of sunsets from within the app to make sure everything works.
1.  Oh no! We forgot to add a `location` field for sunsets, and make it text. Update the model and run a new migration. Then update the HTML and add a new sunset to make sure things are still working.
1.  Oh no! We forgot to add a field that allows users to rate how pretty the sunsets are. Add a `prettiness` column for the sunsets, and make it text. Run a new migration, update the HTML, and confirm that things still work.
1.  Oh no! We forgot to add a not null constraint to our `image_url`. Users shouldn't be able to add a sunset if there's no image! Add the constraint to the model and run a new migration.
1.  Oh no! `prettiness` is kind of an awkward column name. Change it to `beauty` in the model, and run a new migration to update the database. Update the HTML and confirm that things still work (also take a look at the bonus below).
1.  Oh no! `beauty` is a text column, but that doesn't really make sense. Change the column type to an integer. Get a new migration going, and update the HTML one last time. (If you have trouble here, check out the second bonus.)

**Bonuses**

1.  In step 5, take a look at the migration file that's generated. Alembic generates a migration that deletes a column of `prettiness` and adds a column of `beauty`, but this isn't exactly what we want. It's sufficient to just change the column name, rather than deleting the entire column and adding a new one. Figure out how to edit the migration file to rename the column instead of deleting it.
1.  You might find it difficult to generate a migration for the last step. You should try to Google your way to a solution, but if you really get stuck, [here's](https://github.com/miguelgrinberg/Flask-Migrate/issues/24) a (big) hint.
1. Write some tests!

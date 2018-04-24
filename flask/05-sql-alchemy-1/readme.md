# Flask-SQLAlchemy, Part I

## Part 1

It's time for more refactoring! This time, refactor your `snack` app to use Flask SQLAlchemy. You should have a `Snack` model to serve as an interface between instances in Python and rows in your `snacks` table.

Research how to handle 404 errors using Flask-SQLAlchemy, and add a 404 page to your app that will get sent if someone tries to find a snack with an invalid id.

## Part 2

Let's build another CRUD app! This time here's what we want:

- Full CRUD on `bootcamps`
- Each bootcamp should have an id, name and location
- It should be styled!
- It should handle 404 errors

*BONUS*

- Add a column called `votes`, which is an integer to your `bootcamps` table
- In your `index.html` page, have two buttons next to each bootcamp, one to upvote and one to downvote
- Have a route on your server for `POST /bootcamps/<int:id>/vote` which either adds one or subtracts one to the votes property for that bootcamp

*SUPER BONUS*

- Using AJAX, do not refresh the page when a bootcamp is deleted or when an upvote or downvote occurs. Use `jsonify` (a function from flask) to return JSON instead of rendering or redirect (so that the page does not refresh)
- Using jQuery or vanilla JavaScript, sort most upvoted bootcamps to the top

*SUPER DUPER BONUS*

- Deploy this to Heroku! (Watch the screencast in a future section to do that)
- Use the Google maps API to show a map of all the bootcamps you create on the `index.html` page

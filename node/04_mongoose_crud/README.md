# Mongoose CRUD

## Part 1

Let's once again rebuild our previous example using a shopping list, but this time we will not be using an array to store our data. Instead, we will be using a MongoDB database! The resource we will be working with once again is `item`.

The application should have one model for `Item` and each item should have:

- a unique id
- a name which should be a string
- a quantity which should be a number

The application should have the following routes:

- `GET /items` to show all items in the shopping list
- `GET /items/:id` to show a single item
- `POST /items` to create an item when a form is submitted
- `PATCH /items/:id` to edit an item when a form is submitted
- `DELETE /items/:id` to delete an item when a form is submitted

### Bonus

1.  Create a route for `GET /items/search` which allows a user to search for items in the shopping list based on name or quantity.
2.  Create a route for `DELETE /items` which allows a user to remove all the items in the shopping list.

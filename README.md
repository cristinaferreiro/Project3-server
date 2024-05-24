# ARTDEALER

The API provides the following endpoints:

---------USERS---------
| HTTP Verb | URL               | Action                              |
| ------    | ------------------| ----------------------------------- |
| `POST`    | `/users`          |  Create a new artist                |
| `GET`     | `/user/search`    |  Return all the matching artists    |
| `GET`     | `/users`          |  Return all the artists             |
| `GET`     | `/users/:userId`  |  Return the specific artist         |
| `PUT`     | `/users/:userId`  |  Edits the specific artist          |
| `DELETE`  | `/users/:userId`  |  Deletes the specific artist        |
|           |                   |                                     |


---------ARTWOKRS---------
| HTTP Verb | URL               | Action                                            |
| ------    | ------------------------------| ------------------------------------- |
| `POST`    | `/artworks`                   |  Create a new artwork                 |
| `GET`     | `/artworks/search`            |  Return all the matching artworks     |
| `GET`     | `/artworks`                   |  Return all the artworks              |
| `GET`     | `/artworks/:artworkId`        |  Return the specific artwork          |
| `PUT`     | `/artworks/:artworkId`        |  Edits the specific artwork           |
| `DELETE`  | `/artworks/:artworkId`        |  Deletes the specific artwork         |
|           |                               |                                       |


---------EXHIBITIONS---------
| HTTP Verb | URL                              | Action                                   |
| ------    | -------------------------------- | -------------------------------------    |
| `POST`    | `/exhibitions`                   |  Create a new exhibitions                |
| `GET`     | `/exhibitions/search`            |  Return all the matching exhibitions     |
| `GET`     | `/exhibitions`                   |  Return all the exhibitions              |
| `GET`     | `/exhibitions/:artworkId`        |  Return the specific exhibition          |
| `PUT`     | `/exhibitions/:artworkId`        |  Edits the specific exhibition           |
| `DELETE`  | `/exhibitions/:artworkId`        |  Deletes the specific exhibition         |
|           |                                  |                                          |


---------AUTH ROUTES--------

| HTTP Verb | URL      | Action               |
|-----------|----------|----------------------|
| `POST`    | `/signup`| Signup User          |
| `POST`    | `/login` |  Login User          |
| `GET`    | `/verify `| Verify Auth Token    |


ROUTES - CLIENT

|   DESCRIPTION     |           URL                     | 
| ----------------  | -----------------------           |
| HomePage          | `/`                               | 

| Login             | `/login`                          | 
| Sign Up           | `/signin`                         | 


| All Artworks      |` /artworks`                       | 
| Artworks Details  | `/artworks/:artworkId`            | 
| Add New Artwork   | `/new-artwork`                    | 
| Edit Artwork      | `/edit-artwork`                   | 


| All Users         | `/users`                           | 
| User Details      | `/users/:userId`                   | 
| Add New User      | `/new-user`                        | (REVISAR)


| All Exhibitions        |` /exhibitions`                | 
| Exhibitions Details    | `/exhibitions/:exhibitionId`  | 
| Add New Exhibitions    | `/new-exhibition`             | 
| Edit Exhibitions       | `/edit-exhibition`            | 


| about us          | `/sobre-nosotros`       | 
| 404 Page           | `*`                              | 
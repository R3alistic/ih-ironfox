# 

<br>



## Description

Anime platform where you can track different anime, comment on new anime / new seasons and find new ones to enjoy.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter anime by date/rating/etc , log in and sign up. 
- **sign up** - As a user I want to sign up on the web page so that I can add favorite anime to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite anime and delete them.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the list of anime filtered by my preferences.
- **anime details** - As a user I want to see more details of a specific anime, be able to call them and visit their website and save it as favorites.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName],[imageUrl] } |
| `GET`      | `/private/favorites`               | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/private/favorites/`              | Private route. Adds a new favorite for the current user.     | { name, rating, medias, }                                 |
| `DELETE`   | `/private/favorites/:animeID`      | Private route. Deletes the existing favorite from the current user. |                                                   |
| `GET`      | `/anime`                           | Renders `anime-list` view.                              |                                                          |
| `GET`      | `/anime/details/:id`               | Renders `anime-details` view for the particular restaurant. |                                                          |







## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  favorites: [FavoriteId],
}

```



Favorites model

```javascript
{
  placeId: String,
}

```



<br>

## API's

We will be using kitsu API

<br>


## Packages



<br>



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



<br>



## Links

https://kitsu.docs.apiary.io/#reference

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/R3alistic/ih-kitsu)

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors
Alexandre Cunha - [`R3alistic`](https://github.com/person1-username) - [`https://www.linkedin.com/in/aecunha/`]

Rian Yan - [`rianyan9723`](https://github.com/person2-username) - [`https://www.linkedin.com/in/rian-yan-%EF%BC%88%E6%99%8F%E6%97%A5%E5%AE%89%EF%BC%89-096644196/`]
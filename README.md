# Motion React App Version 0.2

The goal of this project was to build a social network app where users can publish posts (text and images), comment, like and share other posts.
Users can also follow others people and send friend requests. It is then possible for them to sort posts based on the people they follow or by friends.

The frontend is developped with React.js, Redux, React Router, Styled Components, Axios and other packages. Most components are functional component using React Hooks.
The backend is built with Django, Django REST and the database in the Docker deployment is using PostgreSQL.

## Features of the frontend app

Registration form using JWT token

-   Landing page with signin form
-   Signup form with validation code sent by email.

Feed page

-   Feed page listing posts from all users with masonry layout.
-   Search bar to filter posts based on keywords.
-   Popup page to publish new posts, including text and multiple images.
-   Filters to only display posts published by friends, by the people followed or only the posts liked.
-   Notifications to inform the user when a new post is published by a friend or a followee.

Find friends page

-   List all users from the social network and display their names, locations, description and interests.
-   Send friend requests to other users or follow them.

Profile page

-   Public profile page of the user with avatar, public information, statistics of posts and likes and list of the last posts published.
-   Private user profile where it is possible to modify private information such as avatar, address, interests, etc.

# List of endpoints

## Registration

-   api/auth/registration/ POST: Register a new user by asking for an email (send email validation code)

-   api/auth/registration/validation/ POST: Validate a new registered user with a validation code sent by email

## Auth

-   api/auth/token/ POST: Get a new JWT by passing username and password

-   api/auth/token/refresh/ POST: Get a new JWT by passing an old still valid refresh token.

-   api/auth/token/verify/ POST: Verify a token by passing the access token

-   api/auth/password-reset/ POST: User should pass his email address and receive a validation code

-   api/auth/password-reset/validation/ POST: Reset the user password - use the validation code to check that it’s the correct user

## Me

-   api/users/me/ GET: Get logged in user’s profile (as well as private information like email, etc.)

-   api/users/me/ PATCH: Update the logged in user’s profile public info)

## Posts

-   api/social/posts/ POST: user can create a new post by sending post data. He should also be able to share another post. (Check out the frontend design to see how a shared post looks like frontend design)

-   api/social/posts/ GET: lists all the posts of all users in chronological order

-   api/social/posts/?search=<str:search_string> GET: Search posts of all users and list result in chronological order

-   api/social/posts/<int:post_id>/ GET: get a specific post by ID and display all the information about that post

-   api/social/posts/<int:post_id>/ PATCH: update a specific post (only allow owner of post or admin)

-   api/social/posts/<int:post_id>/ DELETE: delete a post by ID (only allow owner of post or admin)

-   api/social/posts/user/<int:user_id>/ GET: lists all the posts of a specific user in chronological order

-   api/social/posts/following/ GET: lists all the posts of followed users in chronological order

-   api/social/posts/friends/ GET: lists all the posts of the logged in user’s friends in chronological order

-   api/social/posts/toggle-like/int:post_id>/ POST: Toggle like a post

-   api/social/posts/likes/ GET: the list of the posts the user likes

## Comments

-   api/social/comments/<int:post_id>/ POST: Create a new comment on a post.

-   api/social/comments/<int:post_id>/ GET: List all comments of a post

## Users

-   api/social/followers/toggle-follow/<int:user_id>/ POST: Toggle follow/unfollow a user

-   api/social/followers/followers/ GET: List of all the logged in user’s followers

-   api/social/followers/following/ GET: List of all the people the current logged in user is following

-   api/social/friends/request/<int:user_id>/ POST: Send friend request to another user

-   api/social/friends/requests/<int:friend_request_id>/ GET: Get details of a friend request

-   api/social/friends/requests/<int:friend_request_id>/ PATCH: Accept or Reject an open friend request

-   api/social/friends/requests/<int:friend_request_id>/ DELETE: Delete a friend request

-   api/social/friends/ GET: List all accepted friends

-   api/users/ GET: Get all the users

-   api/users/?search=<str:search_string> GET: Search users

-   api/users/<int:user_id>/ GET: Get specific user profile

## Emails

-   Send an email to the user if they get followed by someone

-   Send an email to the user if they get a friend request

-   Send an email if a friend request gets accepted

-   Send an email to the user if a friend makes a post

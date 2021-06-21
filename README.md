# Motion React App Version 0.1

This app is a group project developped in one week during the Full-Stack Bootcamp at Propulsion Academy Zürich.

The goal was to build a social network app where users can publish posts (text and images), comment, like and share other posts.
Users can also follow others people and send friend requests. It is then possible for them to sort posts based on the people they follow or by friends.

This app is developped with React.js, Redux, React Router, Styled Components, Axios and other packages.
Most components are functional component using React Hooks.

# Disclaimer

The current version is not complete and uploaded only to show the code developped and is not meant to run as it is now.
Missing features will be added in the coming weeks, until all is tested and working in combination with the backend API.
The backend API development is in progress and is not uploaded to Github yet.

## Features of the frontend app

Registration form using JWT token

- Landing page with signin form
- Signup form with validation code sent by email.

Feed page

- Feed page listing posts from all users with masonry layout.
- Search bar to filter posts based on keywords.
- Popup page to publish new posts, including text and multiple images.
- Filters to only display posts published by friends, by the people followed or only the posts liked.
- Notifications to inform the user when a new post is published by a friend or a followee.

Find friends page

- List all users from the social network and display their names, locations, description and interests.
- Send friend requests to other users or follow them.

Profile page

- Public profile page of the user with avatar, public information, statistics of posts and likes and list of the last posts published.
- Private user profile where it is possible to modify private information such as avatar, address, interests, etc.

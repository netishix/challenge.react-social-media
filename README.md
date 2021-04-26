# Coding Exercise - React Social Media

This repository holds a simple web application written with ```React``` and ```Typescript```. The goal is to list a collection of posts fetched from a ```JSONPlaceholder``` API and when the user clicks on a post, list the related comments.
The user can also add new comments that will be saved locally using a Redux store.

## Installation

1. Install dependencies with npm. ```npm install```
3. Start the app by running ```npm start```

## App Routes

The app contains the following routes:
* ```/``` - Feed of the app where the posts are listed.
* ```/**``` - 404 not found error page.


## External dependencies

The following dependencies were used to build the project:

```Typescript```: Used to add typing support to javascript.

```Redux```: Used to save new comments locally.

```Axios```: Used to perform HTTP requests in order to fetch data from the API.

```React Router```: Used to add routing support to React.

```Bootstrap``` & ```React Bootstrap```: Used to provide CSS styles and components out of the box.

```Fontawesome```: Used for rendering icons.


## React components

ES6 components were used for route pages, and functional components were used for the remaining components of the app.

Here is a list of relevant components that were used to build the app.

* FeedPage
    * PostThumbnail
    * Post 
       * CommentsSection
         * Comment
* NotFoundErrorPage

## Services

Two services were created to fetch data from the JSONPlaceholder API.

* PostService
* CommentService

## Linting

Linting for this project is provided by [ESLint](https://www.npmjs.com/package/eslint/) and [ESLint Typescript parser](https://www.npmjs.com/package/@typescript-eslint/parser). To lint the project run ```npm run lint```

## Versioning

This repository is versioned using [SemVer (Semantic Versioning)](https://semver.org/) and commits are formatted by using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Testing

Tests are written with ```Jest``` and ```React Testing Library```. ```Enzyme``` can't be used at the moment since there is no Typescript support for ```enzyme-adapter-react-17```.

To run all the available tests run ```npm run test```

## Author

Nahuel Vazquez [(@netishix)](https://www.github.com/netishix)

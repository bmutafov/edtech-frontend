# EdTech front-end repository

Welcome to the EdTech front-end repository. This is the codebase of the front end, of the EdTech project. EdTech's concept is to connect student, teachers and other people from the educational industry, to share reviews and thoughts on different developments and technologies within many categories. Think of something like Tripadvisor but for technology. 

## Contents of the repository

As mentioned this repository contains only the front-end part of the project. In other words, the react app. The architecture of the project looks like this:
**![](https://lh4.googleusercontent.com/qBtjnClJwD8S774i4JgVyjGaD13-W0_N3tEhdRx_dEDZuXpErCKETV-1Y0PynQYqCP-hxRI6s4fVA6mYRvAhSyua3kfRCLBFIN2s2ufqIFV2W3sC4kWo7lkvxzgq2_en5rYJzEZ-)**
We Have a separate repository for the Strapi part, that you can find here [GitHub - ddyakov/edtech-api](https://github.com/ddyakov/edtech-api). The repository has 3 consistent and important branches:

 - **[main]** - the main branch of the repository *(master)*. It contains the latest approved functionality.
 - **[gh-pages]** - with every push to the [main] branch, we have an action setup to automatically build and deploy the react application. That means, every time a pull request is approved and merged, an action runs the command `yarn build`, exports the code to the [gh-pages] branch which then is hosted on  
[mutafow.github.io/edtech-frontend](https://mutafow.github.io/edtech-frontend/) and available for everybody to see and track progress.
- **[release]** - with every stable release which we are going to have, we will push the contents of the [main] branch to the [release] branch which then will be used for the production hosting.

## Repository folder structure
**![](https://lh3.googleusercontent.com/PKM1JKwKd5LphjtiSRkGHaikBAgMcuvXJwHugt60cHk0illLkFdLiGUTeMlPliNSbUUnMRWQQdc_OIZx1t1YhFUpFWUYWw2rWwKagdqi6B0deg_8nkcBR8GnXN7EV9iI89mb9h6P)**
There are some guidelines which if followed will help us keep a clean repo.

1.  Components always go into their own respective folder in `/src/components`
2.  if a component is furtherly split into smaller child components that are only used in the parent component, child components should go into parent’s component directory (example: <List> component furtherly splits into <ListItem> that is only used in List component, then folder structure should be as the image bellow.![](https://lh6.googleusercontent.com/kPHDgrFfUzaJlhv0Nw9nkIzunAE5fzLASTJX9HiUr8dIG4MAj4BPEtri2lL7L4JJdZ0jbL5xhAzZXMm_7MytthPqyVOeCczkkoKLrofZl1yrSetw6_Jxc8WIu3lJ__TuYJz1-Q-A)
    

3.  Each reusable bit of code should be extracted either to a hook or a helper function - each in their respective folder.
4.  Exceptions are component specific hooks. - component specific hook is a hook that is used in only one component and is extracted from the logic of the component with the idea of simplifying the component (e.g `useItemFilter(“filterString”)`- instead of having 100 lines of code for filtering in the component itself). Component specific hooks should be implemented in the folder of the component.
5.  Try to have the layout be defined in the pages files and each component should be as much independable as possible so it can be reused in different scenarios.

## Starting the project
To start the project make sure you have `yarn` installed, then use:
```
yarn install
```
After that:

### To start the development server
```
yarn dev
```

### To start the staging server
```
yarn start
```
\* difference between the servers is the optional `PUBLIC_URL` environment variable, which should be different for GitHub pages in order for the router to work properly.

### To build the app
```
yarn build
```

### To check for linting errors
```
yarn lint-ci
```

# Current known issues, technical debt and other
- Strapi currently don't provide a refresh token for the JWT, and therefore to combat this issue we have set the JWT token lifetime to be >1year. This however, should be addressed at some point, maybe when strapi has implemented a refresh token
- If the user is logged in on page load, there is no check whether that auth token is still valid (token can become invalid if the lifespan has passed or if the server has crashed down and has been restarted).
- There is no registration endpoint for companies, so companies currently can not register on the backend. There is a form on the front-end but it has not been linked to Strapi.

# Short-term priorities
- Company login & register (both Strapi and front-end)
- Add product page more fields
- Add product page on success and on error UI feedback
- Fetch all neccessary data for a single product (currently only the few present fields are fetched, the other is dummy data)
- Single product page - view all reviews
- Add review to a product
- Edit user/company information
- Finish about / for company pages
- Add all defaultText entries to strapi's /cms-texts endpoint

## Tech stack and dependencies
The project is built on

- **ReactJS**
- **TypeScript**

Notable dependencies:

- **material-ui** - UI framework
- **axios** - HTTP Requests

## Working on the project
Since we have ESLint and Prettier installed on the project, so we can enforce stricter code style, you need to have both extensions installed on your editor. Be sure to turn on `automatic format on save` so VSCode can format the code automatically and you don't have to worry about indentation and other things.

Also, make sure to avoid pushing code containing warnings or errors. 

# Documentation
## Generating data types from Strapi
Since, we use TypeScript it would be great to know the return type for each endpoint. There's a npm module that is developed to that: [strapi-to-typescript - npm (npmjs.com)](https://www.npmjs.com/package/strapi-to-typescript). We can use it to achieve that for most endpoints by running the command `yarn sts`. To get this command to work however, you will need the following prerequsites:
- have installed strapi-to-typescript: `npm install -g strapi-to-typescript`
- have the Strapi repository and frontend repository in sibling directories with the following names, eg:
	- **/parent-directory**
		- edtech-api/
		- edtech-frontend/

## Preserving state
To preserve state, we chose to use contexts instead of additional dependencies and frameworks like Redux. Contexts provide ideal way to manage and preserve state throughout your whole app. Combined with hooks, it makes the development really easy. 

### Providers
All providers that wrap the whole app can be seen in `App.tsx`.  Each provider is a component that wraps the remainder of the app.

### Consumers
To consume a context, you can use the general react way, using hooks. For contexts that are used in almost all components however, we have implemented *(and is advised to continue the same practice)* hooks which consume the context and export the needed info (e.g. `useTexts()` hook). By doing this we can be sure that if somewhere down the road, a change is needed to some of the more important and widely used contexts, we can just edit the hook, instead of going through each component.

## Auth

**Since auth is a more complex logic and needed more files and hooks, all contexts, hooks and tyes are in its own folder in the app - `/Auth`**

We are using Strapi's integrated auth system - with JWT tokens. Therefore, we have implemented a context - to save the authenticated user information (+ save them to browser's local storage). Additionally, we have split the context's actions and state into separate hooks - `useAuthActions()` and `useAuthState()`. That means that whenever we need state or logged user info, we can just simply call `useAuthState()` and use the returned value. The same goes with the actions, where there is additional benefit, that we can add more logic in there, before altering the state. The authContext itself has only one reducer to manage the state and nothing else. The logic happens in `useAuthActions` where we make requests to the backend, validate response and then alter the state in the context. 

## Texts
Since we need to have texts and heading to be able to be changed easily from the admin panel, we have established the following setup:

- `useTexts()` hook which makes a request to the backend and fetches the latests text changes
  - Relies on `TextsContext` which saves the state of the currently downloaded words
 - `defaultTexts.ts` - the default texts which the page uses when there are missing entries of the fetched data from the backend. **This file also provides the type definition for the return value of `useTexts()`**
 - Each editable text in the website, should be added as an entry to the `defaulTexts.ts` file, then in the component itself used by importing the `const texts = useTexts()` hook and then, where the text is needed use `{texts.myTextKey}`, where myTextKey is the name of your entry in the defaultTexts file.
 - For naming the keys, try having them start with the name of the component, for instance NavBar's component title's entry in the file is `navBarTitleText`. 
 - The hook makes request to the **/cms-texts** endpoint, which overwrites the received values on top of defaultTexts and then renders the website. Each of the defaultTexts.ts entries must be manually added to the Strapi /cms-texts endpoint as well, so administrators can configure the texts.

## /product filtering
To filter products, we use Strapi's recommendation use of parameters, described in this guide: [Parameters | Strapi Developer Documentation](https://strapi.io/documentation/developer-docs/latest/content-api/parameters.html#available-operators). We save the active filters into the component state, and then when the "Apply" button is clicked, the filter query to the db is updated via the `useFilters()` hook  in **/ProductBrowser** directory. Then the data is populated via the component.

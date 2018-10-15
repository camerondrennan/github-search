# github-search
Node.js website allowing users to search Github repositories using the Github Search API. The application was built
using Next.js which is a lightweight framework for React.js applications and it runs on the Node.js runtime environment
with an express server to serve the application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* node.js
* npm (comes with node.js)
* yarn

### Installing

Create a new directory and switch into it
```
mkdir development
cd development
```

Clone repo
```
git clone git@github.com:camerondrennan/github-search.git
```

## How to use

### Running App locally

```bash
cd <github-search_BASE_DIR>
yarn install
yarn run dev
```

Open [`http://localhost:3000`](http://localhost:3000)

### Build App

```bash
cd <github-search_BASE_DIR>
yarn install
yarn run build
```

### Running Production App

If running on windows please change the following in package.json

```
"scripts": {
    "start": "SET NODE_ENV=production & node server.js"
}
```

```bash
cd <github-search_BASE_DIR>
yarn install
yarn run start
```

## Deployment

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/camerondrennan/github-search)

Install [now](https://zeit.co/now#get-started) and run command from base repository

```bash
cd <github-search_BASE_DIR>
now
```

## Running the tests

I chose jest as my testing framework but I could not get the tests running. This is a new technology to me which I am
keen to learn more about. I hope to get the opportunity to receive some guidance on this.

```bash
cd <github-search_BASE_DIR>
yarn install
yarn run test
```

## Built With

* [Next.js](https://nextjs.org/) - The React.js framework used
* [React.js](https://reactjs.org/) - Front end javascript framework
* [Node.js](https://nodejs.org/en/) - Back end runtime environment
* [Express.js](https://expressjs.com/) - Used to serve application
* [Material UI](https://material-ui.com/) - The React.js UI framework used
* [Yarn](https://yarnpkg.com/en/) - Used for dependency management
* [Jest](https://jestjs.io/) - Testing framework used

## Authors

* **Cameron Drennan**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
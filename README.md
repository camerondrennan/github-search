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

## Given more time I would have like too...

Firstly I loved working on this project as I got to learn so many new technologies (so it was quite addictive). Every single piece of the project
was new to me and it did come with many teething problems. I loved the challenge of implementing the solution in a new
tech stack which in itself is a risk but I hope that my ambition and willingness to learn and take on new things has
shone through. I would however have liked to have done some testing
around my implementation. I also would have liked to add a sort by option such as sort by number of stars. It would have
been nice to also add a Travis CI to build my code and deploy it to now on every commit. I would like to learn how to
apply redux to my React project for managing state across components as this was something I was stuck on for a
considerable length of time.

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
# github-search
Node.js website allowing users to search Github repositories using the Github Search API. The application was built
using Next.js which is a lightweight framework for React.js applications and it runs on the Node.js runtime environement
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
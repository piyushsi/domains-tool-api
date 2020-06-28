
# DoTo (Domains-Tool-api)
![alt text](https://domains-tools.herokuapp.com/images/logo.jpg?raw=true "Title")

**An API to handle all the metadata and DNS txt Record of your websites from one place.**


## To use it:

- Install [nodejs](https://nodejs.org/) if you haven't already done so. I recommend the LTS version.
- Download/Clone this repository
``` 
$ git clone git@github.com:piyushsi/domains-tool-api.git
```
- Install the dependencies

```
npm install
```

- Run the program:

```
npm start
```

## EndPoints for both metaData and DNStxt.

Endpoints are as follows:

1. Get all metaData.
```
https://domains-tools.herokuapp.com/api/meta/url
e.g. https://domains-tools.herokuapp.com/api/meta/altcampus.io
```
2. Get all DNStxt.
```
https://domains-tools.herokuapp.com/api/dnstxt/url
e.g. https://domains-tools.herokuapp.com/api/dnstxt/altcampus.io
```
3. Validate by meta name.
```
https://domains-tools.herokuapp.com/api/meta/url/name
e.g. https://domains-tools.herokuapp.com/api/meta/altcampus.io/description
```

4. Validate by DNStxt data.
```
https://domains-tools.herokuapp.com/api/dnstxt/url/data
e.g. https://domains-tools.herokuapp.com/api/dnstxt/altcampus.io/google-site-verification
```

## Stack/Library/Module Used
```
Express
```

```
"metagetall": "1.1.4" 

```


## metagetall

A Node.js module to fetch HTML meta tags and custom meta tags from a remote URL.
Increase my stars for metagetall module here:

[![Github stars](https://img.shields.io/github/stars/piyushsi/metagetall.svg?style=social&label=Star)](https://github.com/piyushsi/metagetall)


# domain-tools-api

**An API to handle all the metadata and DNS txt Record of your websites from one place.**


## To use it:

- Install [nodejs](https://nodejs.org/) if you haven't already done so. I recommend the LTS version.
- Download this repository.
- Install the dependencies

```
npm install
```

- Run the program:

```
npm start
```

## EndPoints for both metaData and DNStxt.

Endpoints as as follows

1.To get all metaData.
```
https://domains-tools.herokuapp.com/api/meta/url
e.g. https://domains-tools.herokuapp.com/api/meta/altcampus.io
```
2.To get all DNStxt.
```
https://domains-tools.herokuapp.com/api/dnstxt/url
e.g. https://domains-tools.herokuapp.com/api/dnstxt/altcampus.io
```
3.To validate by meta name.
```
https://domains-tools.herokuapp.com/api/meta/url/name
e.g. https://domains-tools.herokuapp.com/api/meta/altcampus.io/description
```

4.To validate by DNStxt data.
```
https://domains-tools.herokuapp.com/api/dnstxt/url/data
e.g. https://domains-tools.herokuapp.com/api/dnstxt/altcampus.io/google-site-verification=OAURofBkdHU86nkfS9V5O0uYKtgP4p2d1jzRmpaIYQE
```

## Stack/Library/Module Used
```
Express
```

```
"node-fetch": "^2.6.0"
```




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
```
https://domains-tools.herokuapp.com/api/meta/url
e.g. https://domains-tools.herokuapp.com/api/meta/altcampus.io
```
output:
```
{
"charset": "utf-8",
"http-equiv": "IE=edge",
"viewport": "width=device-width, initial-scale=1",
"description": "AltCampus is a 6 month intensive program that helps you learn full-stack web development. A Programming bootcamp in India. No upfront payment.",
"robots": "index, follow",
"og:title": "AltCampus",
"og:description": "AltCampus is a 6 month intensive program that helps you learn full-stack web development. A Programming bootcamp in India. No upfront payment.",
"og:type": "website",
"og:url": "https://altcampus.io",
"og:image": "https://altcampus.io/images/altcampus-screen.png",
"og:image:type": "image/png",
"og:image:width": "900",
"og:image:height": "485",
"twitter:card": "summary_large_image",
"twitter:description": "AltCampus is a 6 month intensive program that helps you learn full-stack web development. A Programming bootcamp in India. No upfront payment.",
"csrf-token": "IwAjCgICIhNfAzV6axp0f3p5HB4MEAAAYKzfqsUjkMB3Zt3475tUDg==",
"title": "AltCampus - The Alternative to College That You Wish Existed"
}
```
2. Get all DNStxt.
```
https://domains-tools.herokuapp.com/api/dnstxt/url
e.g. https://domains-tools.herokuapp.com/api/dnstxt/altcampus.io
```
output:
```
{
"txt": [
"v=spf1 include:zoho.com include:_spf.elasticemail.com ~all",
"google-site-verification=OAURofBkdHU86nkfS9V5O0uYKtgP4p2d1jzRmpaIYQE"
]
}
```
3. Validate by meta name.
```
https://domains-tools.herokuapp.com/api/meta/url/name
e.g. https://domains-tools.herokuapp.com/api/meta/altcampus.io/description
``` 
output : 
```
{
"validate": true,
"description": "AltCampus is a 6 month intensive program that helps you learn full-stack web development. A Programming bootcamp in India. No upfront payment."
}
```
Validate by custom meta name.
```
https://domains-tools.herokuapp.com/api/meta/url/name
e.g. https://domains-tools.herokuapp.com/api/meta/altcampus.io/og:title
```
output:
```
{
"validate": true,
"og:title": "AltCampus"
}
```

4. Validate by DNStxt data.
```
https://domains-tools.herokuapp.com/api/dnstxt/url/data
e.g. https://domains-tools.herokuapp.com/api/dnstxt/altcampus.io/google-site-verification
```
output:
```
{
"validate": true,
"txt": [
"google-site-verification=OAURofBkdHU86nkfS9V5O0uYKtgP4p2d1jzRmpaIYQE",
"v=spf1 include:zoho.com include:_spf.elasticemail.com ~all"
]
}
```

## Stack/Library/Module Used
```
Express
```

```
"metagetall": "1.1.4"  (My own Module:Description below)
```


## metagetall

A Node.js module to fetch HTML meta tags and custom meta tags from a remote URL.
Increase my stars for metagetall module here:

[![Github stars](https://img.shields.io/github/stars/piyushsi/metagetall.svg?style=social&label=Star)](https://github.com/piyushsi/metagetall)

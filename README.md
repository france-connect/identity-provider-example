# identity-provider-example

An implementation example of a FranceConnect Identity Provider.

- [General documentation](https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-identite)
- the code on this repo is automatically deployed as the ["Exemple" identity provider](https://identity-provider-example.herokuapp.com/)

## Prerequisites

This server use [nodejs version 8.12](https://nodejs.org/en/download/).

## Install

```bash
git clone git@github.com:france-connect/identity-provider-example.git
cd identity-provider-example
npm install
```

## Run the app

```bash
npm start
```

Optional: run it in debug mode:
```bash
DEBUG=oidc-provider:* npm start
```

## Use the app

When you start the app, the server is available at : http://localhost:5000.

To emulate a click on an identity provider on /api/v1/authorize page of franceconnect website click on the button below:

[![identity-provider-button](/src/public/identity-provider-button.jpg)](http://localhost:5000/user/authorize?state=c27742978ca0a599b9b0c8aac6075acd741f7885815e4b3b101298930d3ca690&nonce=71e1dc73cd58414cfe889c33e0862a1da1cf7faf2e236d8d4f6ec4ae8310703f&response_type=code&client_id=09a1a257648c1742c74d6a3d84b31943&redirect_uri=https%3A%2F%2Ffcp.integ01.dev-franceconnect.fr%2Foidc_callback&scope=openid%20profile%20email%20address%20phone%20birth)

You should be redirected to your local server.

You can use the following test credentials : 3_melaine | 123

More credentials are available [here](/database.csv).

As your local server is not registered in FranceConnect, you will be redirected to a FranceConnect error page after successful login.

## Run the Tests

```bash
npm test
```

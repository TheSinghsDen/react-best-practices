[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# React-Best-Practices

> React-Best-Practices is a set of useful functional components and javascript utilities to help you write quick and clean production-ready react projects

## Install

Via package managers:

```bash
# With npm
npm i react-best-practices

# With Yarn
yarn add react-best-practices
```

## Table of contents

- [Functional Components](#functional-components)
  - [IF](#if)
  - [IFTTT](#ifttt)
- [API](#api)
  - [get_request](#get_request)
  - [post_request](#post_request)
  - [delete_request](#delete_request)
  - [put_request](#put_request)
  - [patch_request](#patch_request)
- [Array](#array)
  - [average](#average)
  - [median](#median)
- [Email](#email)
  - [isEmail](#isemail)
- [Object](#object)
  - [areObjectsEqual](#areobjectsequal)
  - [isObjectEmpty](#isobjectempty)
- [String](#objects)
  - [capitalizeFirstLetter](#capitalizefirstletter)
  - [toString](#tostring)
- [Time](#time)
  - [delay](#delay)
  - [useInterval](#useinterval)
- [URL](#url)
  - [isURL](#isurl)

## Functional Components

A set of useful react components to replace and rewrite everyday monotonous code

## API

## Array

### average

<i>Returns the average of an array of numbers<i>

```js
average([2, 5, 30, 60]);
//returns 24.25
```

### median

<i>Returns the median of an array of numbers<i>

```js
median([2, 5, 30, 60]);
```

## Email

### isEmail

<i>Checks if the given string is an email<i>

```js
isEmail("johndoe@gmail.com");
//returns true

isEmail("i_love_react_best_practices");
//returns false
```

## Object

### areObjectsEqual

<i>Checks to see two given objects are identical<i>

```js
obj1 = {
  name: "John Doe",
  age: 35,
};
obj2 = {
  name: "John Doe",
  age: 27,
};
obj3 = {
  name: "John Doe",
  age: 35,
};

areObjectsEqual(obj1, obj2);
//returns False

areObjectsEqual(obj1, obj3);
//returns True
```

### isObjectEmpty

<i>Checks if the given object is empty<i>

```js
obj1 = {
  "name": "John Doe",
  "age": 35
}
obj2 = {}

isObjectEmpty(obj1);
//returns False

isObjectEmpty(obj2;
//returns True
```

## String

### capitalizeFirstLetter

<i>Capitalize the first letter in a sentence<i>

```js
capitalizeFirstLetter("hello there");
//returns Hello there
```

### toString

<i>Convert a number to string.<i>

```js
toString(2);
//returns "2"
```

## Time

### delay

<i>Supends the execution of the following code for the given time interval<i>

```js
//Enter interval in milliseconds

delay(3000);
//wait 3 seconds, then alert "Hello"
alert("Hello");
```

### useInterval

<i>Returns the median of an array of numbers<i>

```js
median([2, 5, 30, 60]);
```

## URL

### isURL

<i>Checks if the given input is a standard URL<i>

```js
isURL(
  "https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url"
);
//returns True

isURL("Am I a URL ?");
//returns False
```

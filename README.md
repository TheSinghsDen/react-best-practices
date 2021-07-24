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
- [time](#time)
  - [delay](#delay)
  - [useInterval](#useinterval)
- [URL](#url)
  - [isURL](#isurl)

## Functional Components

A set of useful react components to replace and rewrite everyday monotonous code

### Serving the app

```sh
$ npm start
```

## API

### useBasicFetch

```js
useBasicFetch((url: string = ""), (delay: number = 0));
```

Supported options and result fields for the `useBasicFetch` hook are listed below.

#### Options

`url`

| Type   | Default value |
| ------ | ------------- |
| string | ''            |

If present, the request will be performed as soon as the component is mounted

Example:

```tsx
const MyComponent: React.FC = () => {
  const { data, error, loading } = useBasicFetch(
    "https://api.icndb.com/jokes/random"
  );

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {data && data.value && <p>{data.value.joke}</p>}
    </div>
  );
};
```

`delay`

| Type   | Default value | Description          |
| ------ | ------------- | -------------------- |
| number | 0             | Time in milliseconds |

If present, the request will be delayed by the given amount of time

Example:

```tsx
type Joke = {
  value: {
    id: number;
    joke: string;
  };
};

const MyComponent: React.FC = () => {
  const { data, error, loading } = useBasicFetch<Joke>(
    "https://api.icndb.com/jokes/random",
    2000
  );

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {data && data.value && <p>{data.value.joke}</p>}
    </div>
  );
};
```

### fetchData

```js
fetchData(url: string)
```

Perform an asynchronous http request against a given url

```tsx
type Joke = {
  value: {
    id: number;
    joke: string;
  };
};

const ChuckNorrisJokes: React.FC = () => {
  const { data, fetchData, error, loading } = useBasicFetch<Joke>();
  const [jokeId, setJokeId] = useState(1);

  useEffect(() => {
    fetchData(`https://api.icndb.com/jokes/${jokeId}`);
  }, [jokeId, fetchData]);

  const handleNext = () => setJokeId(jokeId + 1);

  if (error) {
    return <p>Error</p>;
  }

  const jokeData = data && data.value;

  return (
    <div className="Comments">
      {loading && <p>Loading...</p>}
      {!loading && jokeData && (
        <div>
          <p>Joke ID: {jokeData.id}</p>
          <p>{jokeData.joke}</p>
        </div>
      )}
      {!loading && jokeData && !jokeData.joke && <p>{jokeData}</p>}
      <button disabled={loading} onClick={handleNext}>
        Next Joke
      </button>
    </div>
  );
};
```

## Array

### average

```js
average([2, 5, 30, 60]);
```

Returns the average of an array of numbers

### median

```js
median([2, 5, 30, 60]);
```

Returns the median of an array of numbers

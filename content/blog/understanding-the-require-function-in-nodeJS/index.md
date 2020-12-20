---
title: Understanding the require function in nodeJS
date: '2020-12-20'
description: We investigate the inner workings of the require function by taking a look at some code snippets from the core nodeJS source code
--- 

I remember the first time I was learning nodeJS, the first thing that really got my attention was the *kinda unintuitive* way you can import your code. Looking back, I believe it felt this way because we expect interpreter/compiler "magic" when dealing with imports and exports in programming. I think this expectation is set by many popular languages. In Java for example, this is how you import something:

```java
import java.util.List; // Meh .. I'm sure the compiler does something behind the scenes
```

In nodeJS, this is how you would import an `add` function defined in the file `add.js` :

```jsx
var add = require('./add'); // huh 😪 ????
```

It took me quite a lot of time to wrap my head around this statement and get an idea about what was going on under the hood. I knew how to use it of course, but I felt like an important piece of information was missing: **I did not know how it worked**.

So in this article, I want to provide an explanation with a bit more substance than "that's just how it works".

## Our example

For the sake of clarity, let us see the code I will be investigating:

```jsx
// ./index.js
var add = require('./add');
console.log(add(1,2)) // prints 3

============================

// In the ./add.js file
const add = (a, b) => {
	return a + b;
};

module.exports = add;
```

A couple of things we can ponder over when reading the code: 

1. `require` is a function
2. `require` takes a string representing the filename as an argument
3. `require` *somehow* returns the add function defined in the `add.js` file
4. `module` must be an object with a property `exports`
5. `require` and `module` are both variables that we have not defined ourselves

In order to answer these questions, we will take a look at some **nodeJS source code**. So that we don't get lost in details, I will only show lines/snippets that will help us get an idea about what is happening. 

Through the use of a debugger, we can set a breakpoint in line 1 and step into the require function to explore what is happening behind the scenes.

## The require function

First thing we come across is the require function definition

```js
require = function require(path) {
	return mod.require(path);
}
```

Just like we said before, the require function is indeed a .. **function**. It is simply a wrapper on the `mod.require` method. The mod object is an instance of `Module`, a class defined internally in the nodeJS source code to represent every module we create. This instance of `Module` contains a set of properties such as `require` and `exports` which is just an empty object. 

Let's step into this function once again and investigate some more:

```js
Module.prototype.require = function(id) {
  // Make sure the argument is a string
  validateString(id, 'id');
  // Throw an error if the string is empty
  if (id === '') {
    throw new ERR_INVALID_ARG_VALUE('id', id,
                                    'must be a non-empty string');
  }
  ...
  try {
	// Module._load will call another method called load (without the underscore)
	// that also exists in the Module object.
    return Module._load(id, this, /* isMain */ false);
  } finally {
    ...
  }
};
```

This confirms what we said before. The `Module` constructor function defines a require function and attachs it to its prototype property. If you are not familiar with prototypal inheritence and the `new` keyword in JS, what you need to know is that whenever you will create a module object in the following way: `var mod = new Module()`, you will have access to the require function through the `mod` object like this: `mod.require(...)`

Now upon closer investigation of what the require method does, we can see that it will call **another** function called `_load` . This method is pretty long and it also serves as a wrapper to another function called `load` (**without** the **underscore**). Very briefly, this is one of the things the `_load` (**with** the **underscore**) method does:

1. It creates an object of type `Module` to represent our module.
2. It resolves the filename of the module we are trying to import given the string we passed to the `require` function. In our example, given a relative path like `"./add.js"` , it will return the following: `/home/your-username/path/to/add.js` .
3. It checks whether the module we are trying to import already exists in the cache. If it is, then it returns its exports object. If it is not, then it saves it in the cache. 
4. It loads the module using the `load` method.
5. It returns the `module.exports` object. 

As mentioned before, `_load` will now call the `load` method, which also exists in the `Module.prototype` object, and passes to it the filename.

```jsx
Module.prototype.load = function(filename) {
	...
  // Remember how we can pass the name of the file that contains our module without explicitely specifying the .js extenstion?
  // This piece of code is responsable for inferring the extension and returning a key such as `.js` or `.json`
  const extension = findLongestRegisteredExtension(filename);
	...
  // Module._extensions is an object with the following keys:
  // { .js: function(...){...}, .json: function(...){...}, .node: function(...){...} }
  // This line will call the function corresponding to the extension.
  Module._extensions[extension](this, filename);
}
```

In brief, based on the extension of the file we are trying to require, nodeJS has a predefined function that knows how to handle that type of files (.js files in our case, but it can also be .json files).

Next, let us investigate the `Module._extensions` function that corresponds to the `.js` property. In other words, we want to take a closer look at the `Module._extensions[".js"]` function.

```jsx
Module._extensions['.js'] = function(module, filename) {
  ...
  // Read the contents of the file, i.e the contents of the add.js file.
  const content = fs.readFileSync(filename, 'utf8');
  // This _compile method seems to do some interesting work
  module._compile(content, filename);
};
```

We are now getting to the most interesting bit. From the code below, we note that the `_compile` method calls another function called `wrapSafe` and passes to it the content of our file. What this function does will be the key to our understanding. 

```jsx
Module.prototype._compile = function(content, filename) {
  ...
  const compiledWrapper = wrapSafe(filename, content, this);
	...
}
```

Before we see what `wrapSafe` does, let's see what is actually **returned** by `wrapSafe` . When we take a look at the value of `compiledWrapper` in our debugger, this is what we get.

```jsx
function(exports, require, module, __filename, __dirname) {
	// The code we defined in the add.js file!
	const add = (a,b) => {
		return a + b;
	}
	module.exports = add;
}
```

`compiledWrapper` is set to a function that wraps every single JS line we wrote in the `add.js` file!


This means that everything we write in a JS file is taken by nodeJS, wrapped into a function that takes a couple of arguments. This is exactly why we have access to the `module` , `require` , etc variables in all of our nodeJS code 🤯! Later, we'll see what the actual value corresponding to each parameter is.

If you're curious about how this wrapping magic works, take a look at the following code:

```jsx
const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});'
];
// script holds the contents of our file
let wrap = function(script) {
  return Module.wrapper[0] + script + Module.wrapper[1];
};
```

The `wrap` variable is a simple string representation of our wrapped code. To transform it into a function that nodeJS can call, it runs this string in the v8 engine, hence the name `compiledWrapper` . Note that at this step, the code we wrote in our add.js file is not yet executed. **ONLY** the function **DECLARATION** is ran, it is **NOT** called.

All what is left now is for nodeJS to actually execute the code we wrote in our module by calling the `compiledWrapper` function with a set of arguments:

```jsx
Module.prototype._compile = function(content, filename) {
  ...
  const compiledWrapper = wrapSafe(filename, content, this);
  ...
  // The wrapper function is called with the below arguments
  const exports = this.exports;
  // Did you ever try printing the value of `this` in nodeJS and wondered why you get an empty object? 
  // Well .. here is your answer! It's because the exports property defined in the `module` object is set to empty object {}.
  // So technically, whenever you refer to `this` in nodeJS, you are referring to an empty object.
  const thisValue = exports;
  // `this` in this (😠) function refers to the module instance.
  const module = this;
  // This is where the wrapper function is called and our code defined in add.js executed
  result = compiledWrapper.call(thisValue, exports, require, module,
                                 filename, dirname);
  ...
  return result;
}
```

THAT'S IT. As you can see, this answers **why** we have access to all those variables `exports`, `require`, `module` , `__filename`, and `__dirname` in code we write and run in nodeJS.

If you want to use a debugger just like I did, you can step into the `compiledWrapper` function call and see your code being executed! The code we wrote in the `add.js` file does not throw any errors because as we've seen, under the hood, it actually has a reference to the module object. 

In case you don't already know this, `module.exports === exports` . The `exports` parameter only holds a reference to the `module.exports` object, it is not the object itself.

Just to reiterate and close the loop, `module.exports` is what will finally be returned by the require function. 

I hope you have enjoyed reading this piece as much as I did writing it. Nothing beats the feeling when you finally understand how things work under the hood. 

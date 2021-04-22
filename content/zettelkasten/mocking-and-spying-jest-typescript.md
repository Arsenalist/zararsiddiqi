---
date: '2021-04-22T09:00:00.000Z'
title: Mocking and Spying with Jest and TypeScript
description: Awkward but clean.
categories: ["testing", "jest", "mocking"]
---
I have found that the easiest way to mock TypeScript objects using Jest is by simply doing this:

```
const obj = {
   prop1: "some string prop",
   prop2: 50
} as any as MyType
```

Now we can use `obj` anywhere `MyType`  was expected and can use `jest.spyOn(obj, ...)` to the heart's content.

Frameworks like [jest-mock-extended](https://www.npmjs.com/package/jest-mock-extended) do similar work but I find that they're an unnecessary abstraction that prevent the test from being expressive and obvious. I like that there's nothing between the mocked object and then test code, and you're able to see the lack of magic explicitly.

For me a  good test framework should allow you to mock out dependencies easily and the combination of this trick and Jest's `spyOn` do the trick well enough. 

Yes,  the `as any as` trick is a bit awkward and you shouldn't need the `as any` detour, but I will invoke [Kent Beck's second rule of simple design](https://www.martinfowler.com/bliki/BeckDesignRules.html), i.e., reveals intention, and go with it.

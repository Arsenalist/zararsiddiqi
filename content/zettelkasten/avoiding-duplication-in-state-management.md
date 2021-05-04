---
title: Avoiding Duplication in State Management
description: State management is creepy and creeps up on you.
date: '2021-05-04T09:00:00.000Z'
categories: ["testing", "state management", "DRY"]
---
State management is where small bugs grow up to become evil villains, rendering applications a nightmare to maintain. This is especially true when writing JavaScript to maintain UI state. It is tempting to create instance variables which maintain state which are then queried in template logic. For example:

_my-component.ts_
```
class MyComponent {
    language: string

    constructor(private myStore: MyStore) {}

    changeLanguage(lang: string) {
        // set this.language based on myStore
    }
}
```
_my-component.html_
```
Language being used is {language}
```

This type of code is common and should be avoided as it violates the Don't Repeat Yourself (DRY) principle. It's subtle but the violation comes from having to maintain the value of the language in two places: the store and the component.

The above makes for wonky tests as well, because we end up doing something like this:

```
const component = new MyComponent(store)
expect(component.language).toBeNull()
component.changeLanguage("en")
expect(component.language).toBe("en")
```

To test the effect of `changeLanguage()` we are checking a completely different object (`language`). That's because the function has side effects of updating component state.

A better test would be:

```
const component = new MyComponent(mockedStore)
component.changeLanguage("en")
expect(component.store.changeLanguage).toHaveBeenCalledOnce("en")
```

And after introducing a `getLanguage()` which would just query the store, another test might be:

```
let component = new MyComponent(mockedStore)
component.getLanguage("en")
expect(component.store.getLanguage).toHaveBeenCalledOnceWith("en")
```

The store would have its own unit test. This is of course the ["London style"](https://blog.devgenius.io/detroit-and-london-schools-of-test-driven-development-3d2f8dca71e5) of TDD. If you are of the Detroit mindset, the test might be:

```
let component = new MyComponent(realStore)
component.changeLanguage("en")
expect(component.getLanguage()).toBe("en")
```

With this approach we no longer need to maintain component state and our template becomes:

_my-component.html_
```
Language being used is {getLanguage()}
```

The side effect of interacting with the store still exists in  `changeLanguage()` and `getLanguage()` but that is easier to test (thus easier to maintain) than duplicating the value. Having a single source of truth for your state is critical.

There are cases where we may need to "duplicate". Maybe we want to preview the language before saving it which would require two values to be tracked. Even in this situation component level state is not needed. We can store `currentLanguage` and `previewLanguage` in a store rather than in the component, with the responsibility of the component mainly being event handling and delegation.

In the [Philosophy of Software Design](https://www.goodreads.com/en/book/show/39996759) text, John Ousterhout talks about having smaller interfaces but deep modules, and this approach takes that into account. The interface consisting of `getLanguage()` and `changeLanguage()` is "smaller" than dealing with `component.language` and `component.changeLanguage()` as the latter isn't even an interface and exposes implementation details.

Yes, dealing with the store does add more complexity but it is well-hidden behind a clean interface.
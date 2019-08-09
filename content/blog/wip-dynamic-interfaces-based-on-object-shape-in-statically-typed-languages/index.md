---
title: "Impactful Refactorings: Replace Conditional with Polymorphism"
description: The 'Replace Conditional with Polymorphism' refactoring remains one of the most teachable moments in OOP.
date: '2019-07-23T09:00:00.997Z'
categories: []
---

Dynamically typed languages such as JavaScript allow for implicit interface definitions based on object shape. If you have a `Country` object and a `State` object which both have a `capital` attribute, you don't need to explicitly declare the classes using `implements PlaceWithCapital`. You may define the following interface and treat any object containing a `capital` as a `PlaceWithCapital`.

```typescript
interface PlaceWithCapital {
    capital: string;
}
```

This is very convenient when dealing with data and object definitions that are not under your control. 
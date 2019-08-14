---
title: "Inferring interfaces in statically typed languages based on object shape"
description: Statically typed languages are designed for safety. In doing so a desirable feature is lost - the ability to define interfaces based on object shape instead of up-front. This is a workaround.
date: '2019-08-14T09:00:00.997Z'
categories: []
---

Dynamically typed languages such as JavaScript allow for implicit interface definitions based on object shape. If you have a `Country` object and a `State` object which both have a `capital` attribute, you don't need to explicitly declare the classes using `implements PlaceWithCapital`. You may define the following interface and treat any object containing a `capital` as a `PlaceWithCapital`.

```typescript
interface PlaceWithCapital {
    capital: string;
}
```

This is very convenient when dealing with data and object definitions that are not under your control. This is not possible in statically typed languages like Java which enforce checks at compile time. Normally this is not a problem but in cases where you are dealing with similar class definitions which are not under your control, it hinders design. The best example is when dealing with SOAP clients which are generated and we usually don't want to be mucking around with generated code. In our example you'd end up writing custom code for `Country` and `State` despite their similarities.

One approach of dealing with this is through inheritance but as with all software development it comes with trade-offs. Here's one way around this issue. 

Suppose we want to write a function which prints a capital's name:

```java
    public void printCapitalName(PlaceWithCapital placeWithCapital) {
        System.out.println("Capital is " + placeWithCapital.getCapital());
    }
```

We'd like to pass in a `Country` or `State` to this method but currently can't as they don't implement `PlaceWithCapital` (since they may be generated or packaged as part of a library and not under our control). One way around this:

```java
public class CountryWithCapital extends Country implements PlaceWithCapital { }

public class StateWithCapital extends State implements PlaceWithCapital { }
```

Using the extended classes instead of the original allows us to write code such as the following:

```java
    StateWithCapital state = new StateWithCapital();
    state.setCapital("Jefferson");
    CountryWithCapital country = new CountryWithCapital();
    country.setCapital("D.C");
    printCapitalName(state);
    printCapitalName(country);
```

It's debatable whether this is a better approach than just post-processing your SOAP clients to `implements PlaceWithCapital`. The benefits of this approach are easy to call out - you can now use various design patterns to process data, the code is more testable and we also reduce duplication. There are trade-offs:

- Must use the extended classes instead of the original ones
- If the original classes have constructors they need to be duplicated in the faux classes
- A secondary point of failure is introduced if original object definitions/naming changes
- As we can't write `PlaceWithCapital p = new Country()`, it results in nonintuitive code - we must always use the sub-classes but there's nothing preventing us from using the original which can cause consistency issues

Other approaches to deal with this can be using [MapStruct](http://mapstruct.org/) or a similar library to copy the values from original object to your own POJO. 

At the end of the day this is a design decision and the main driver that informs whether this pattern is suitable is how much change the domain model has to undergo. If it's just a matter of displaying the data then you can possibly get away with the redundancy. If you're maninpulating the objects or performing algorithms on them then it may be worthwhile to increase the complexity of the software to reduce duplication.
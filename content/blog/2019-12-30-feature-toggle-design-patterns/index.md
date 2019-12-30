---
title: "Feature Toggle Design Patterns for Front-End Development in Typescript"
description: Design patterns for implementing front-end feature toggles/flags in Angular.
date: '2019-12-30T09:00:00.997Z'
categories: []
---

![Image: Unsplash.com](https://images.unsplash.com/photo-1556217994-22de7face210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1236&q=80)

[Feature toggles](https://www.martinfowler.com/articles/feature-toggles.html) can have many uses including hiding unfinished work, performing A/B testing and more. One of the most valuable benefits of feature toggles is that it enabled [Continuous Delivery](https://aws.amazon.com/devops/continuous-delivery/) and [Trunk-Based Development](https://trunkbaseddevelopment.com/), where code is merged into trunk without the use of long-lived feature branches and then shipped safely to production. Feature toggles allow us to differentiate between a deployment and release, the former shipping hidden code to production with no impact to end users, and the latter making those features available to users.

The techniques to implement feature toggles on the server side are fairly well-known with good library support out there. On the front-end side I've observed a tendency to splash if/else statements across the codebase to implement them, resulting in high technical debt and hard to maintain code. The same principles and design patterns that apply in a language like Java also apply in Typescript. 

I've compiled five design patterns which can be used to implement feature toggles in Angular.  [The complete source code is here](https://github.com/Arsenalist/feature-toggles)  - the [README.md](https://github.com/Arsenalist/feature-toggles/blob/master/README.md) also includes uses cases when one may want to use a particular pattern.  A brief summary is below:

1. An attribute directive which hides content in a template based on a feature flag.
2. A route guard which implements the `CanActivate' interface to turn a route on/off based on a feature flag.
3. A dynamic component loader which loads a particular component based on a feature flag.
4. Selecting the right class to use inside a component when executing business logic (based on a feature flag).
5. Select the right method to invoke by delegating feature decision query logic to a separate class.
---
title: Architectural Tension
description: Autonomy without maturity is chaos.
date: '2020-11-17T09:00:00.000Z'
categories: ["agile", "autonomy"]
---

I was trying to understand how an app that I intend to contribute to was structured and was scanning through its many Git repositories. I could tell that the path of least resistance was well worn. Some were forks of other with a few classes changed, others were more or less duplications with deployment parameters modified. In general, the preference to create a new repo to avoid the baggage that any code brings with it was preferred. 

When thinking about when to separate code into its own repository I think back to Robert Martin's Clean Architecture where in Chapter 13, titled Component Cohesion, there is a gem of an idea which has always been helpful. It's a real keeper for the swiss army knife. Some of Martin's ideas seem a little extreme (e.g., strong preference for unary methods), but this one relating to organizing components has more universal appeal.

I will paraphrase the three principles in a way that helped me understand them, and then talk about the tension that architects must struggle with when staying true to all three.

### 1. The Reuse/Release Equivalence Principle (REP)

_If you intend on making something re-usable it must also be independently releasable._

This is intuitive enough but we can quickly run into situations where this breaks our world view of how things should be. Take for example `ServiceA` which depends on `ServiceB` and is consumed by `ClientA`. We can make `ServiceA` reusable with the right version management, but if `ServiceB` does not adhere to this principle, `ClientA` has no visibility into the stability of `ServiceA`.  

If `ServiceB` does not maintain versions or is connected to assets (e.g., databases, queues) where the change in their behaviour changes the behaviour of the APIs that `ServiceB` exposes, then it doesn't really matter how well you're organizing `ServiceA` because that's not where the unpredictability is.

For this principle to have full effect a considerable portion of the stack must follow it, not just the top-most layers. If you're developing greenfield apps this is fairly easy to adhere to, but if you're neck-deep in legacy systems this becomes challenging.

The larger point remains powerful - we have to put the effort in to make things reusable and that involves more than just writing the feature. The cost of reusability that we often don't pay and are surprised when it's low includes:

- Well-designed APIs that abstract the solution neatly
- Documentation of the APIs
- Communication of change via the proper versioning
- Communication of change via meaningful release notes
- Before/after examples of API changes

Making things reusable is not just about an up-front cost. Doing all the above is an ongoing investment and fall under the umbrella of releasability. The latter supports the former.

### 2. The Common Closure Principle (CCP)

_Group together things that change at the same time for the same reason. If either is not true, keep them apart._

At the class level this is probably easy enough to follow: just design smaller classes and have them do one thing (SRP).  Elevating this idea at the component level becomes difficult because components are higher order functions and intentionally encompass more concern. The language in the business domain doesn't neatly fit into our technical architectures, producing greys in our designs.

Microservices architectures "simplify" this by erring on the side of keeping things apart. Proponents would rather deal with their proliferation rather than worry about bundling things that may change for different reasons into components. After all, what is the cost we pay for just keeping things apart?

An answer could be that since most of the time we're maintaining software, the preference would be for the change to be easier, rather than the component to be reusable. This ties to the first principle which builds the tension in these principles.


### 3. The Common Reuse Principle (CRP)

_Don't depend on things you don't need._

If you're writing `ServiceA` and it depends on `ServiceB` which has `bMethod1()` an `bMethod2()`, and you're only using `bMethod1()` from `ServiceA`, then perhaps you're better off doing one of:

- moving `bMethod1()` into `ServiceA`
- creating `ServiceC` which holds `bMethod1()` and have `ServiceA` and `ServiceB` depend on it

Yikes! Why can't I just not use `dbMethod2()` and move on with my life? The argument is that there is an additional cost of compiling, validating and deploying `dbMethod2()` which we should minimize. Your mileage may vary with this principle but it's fair to say that this is very context-dependent - what isn't but this more so.

If the methods above are cloud-based functions (like Lambdas) then this principle applies based simply on cost. If it's just a function in a class then less so. This principle pushes you to think about the costs of depending on things whether they be big or small. Nothing kills speed like dependencies and sometimes we don't even know we're dependent on something until it's too late. 

### The Tension Diagram

!["Tension Diagram - Component Cohesion"](/images/architecture-component-tension-diagram-uncle-bob.png)
_The edges of the diagram describe the cost of abandoning the principle on the opposite vertex._

Designing good software is difficult because it requires us to have an opinion on how the future will play out. Nobody is good at that so we arm ourselves with tools that help us hedge our decisions in the face of uncertainty and risk.

The Tension Diagram is a valuable thinking tool that forces one to ask themselves whether the trade-offs they're making are acceptable. It can be applied at any "level" of software - from designing an Angular component to a Machine Learning model.

There are a few takeaways for me and I'll piggy back on the repository proliferation complaint from earlier to ground this in reality:

1. If we don't split our app into the right amount of repositories, we end up needing too many releases to deploy simple features
2. If we don't bound the repository's concerns correctly, we reduce the chance of re-use
3. If our app depends on a repo that does more than what our app needs it to do, we introduce unpredictability in cost

We can use the converse and inverse of these statements to uncover more.





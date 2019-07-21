---
title: Improving architecture decision velocity
description: Building software is not like building a house.
date: '2017-11-18T18:37:50.997Z'
categories: []
keywords: []
---

![](https://cdn-images-1.medium.com/max/800/1*2I5OqDxOy6DwWtUMjsECRQ.png)

We’re in a lot better place than 15 years ago when I recall reputable people talking about how software architecture was similar to building a house. That never quite sat right with me because the cost of iterating in construction is insanely higher than the cost of iterating in software development, where agile architectures must iterate.

Thankfully, we have generally accepted that good architectures emerge over time and the severely underrated _Refactor=Design_ movement has helped people release their strenuous grip on UML diagrams in favor of having real life dictate what software architectures should resemble.

There’s been “upward pressure” on architecture groups at the enterprise level as well, with teams looking to deliver being held back by architecture review boards and the like, forcing the enterprise to reexamine what value architecture is providing. There’s been progress made on this front as well because if not completely agile, the processes governing enterprise architectures have become leaner, and the development team isn’t found left wanting for a decision from the ivory tower before work can begin.

The one “metric” teams do care about is decision velocity. Agile principles espouse how decisions should be deferred to the latest responsible moment, and agile coaches preach that mantra in order to avoid blockades. However, there are times when the team does need a decision from a higher authority on how to proceed: IBM Websphere or JBoss, Angular or React, etc. The time between when this decision point comes up and when a decision is made is what teams care about, and what architects should also care about. This decision velocity should be considered a productivity metric and a reflection of how well the architecture group is functioning.

The architect’s value is not necessarily technical proficiency, but a broader view of how these decisions affect the wider enterprise. They need to be equipped with the domain and technical knowledge to make these decisions quickly since the cost of indecision increases with time.

The big change over time has been that the cost of indecision has surpassed the cost of a wrong decision, and this is where the mental shift needs to take place. For example, when deciding between a security framework like Spring Security or Apache Shiro, the decision to go with either one only to realize later that the other one is more suited may sound like a lot of throwaway work. However, once you weigh the cost of the throwaway work with what would have happened if no decision was made and instead an analysis phase would’ve started while teams waited, it is almost always lower. This is a line of thinking that is yet to permeate fully in most organizations.

Of course, these decisions can’t be made arbitrarily, and require something like a [spike](http://A%20story%20or%20task%20aimed%20at%20answering%20a%20question%20or%20gathering%20information,%20rather%20than%20at%20producing%20shippable%20product.) or another form of PoC. Teams execute on such work when implications of the decisions are local, but when they are wider, it‘s when the broader thinking architect is needed, and this is where the major skills gap between old and new school architects lies. Instead of analyzing the product based on documentation, it is far more valuable to test the capability before rendering decisions.

How do we support architects in making such decisions? My view is that the architecture group needs development capabilities embedded in them, and architecture should be seen as as research group more than anything. Mostly, there is a need to innovate “downwards” so that the architecture is ahead of the curve instead of lagging behind and playing catch-up to what the team has already moved ahead with.

Instead of relying on disparate development teams to stream knowledge upward into architecture, the capability of developing new products and processes should be part of the group. For example, as new innovations happen in the continuous deployment space, the architecture group must be ahead of the curve and continuously testing new products to deem fit for the organization.

Having these development capabilities present increases the centralized knowledge which can be shared in meaningful ways to teams. One of the best examples I’ve seen of this kind of knowledge-sharing is where the architecture group of an organization, instead of just sharing best practices and guidelines had [Docker containers](https://www.docker.com/what-docker) made available to teams who wanted to follow particular design patterns for their application. This sort of practical, centralized knowledge-sharing is rare, and if this level of support is provided to teams, we’ll find that the question of decision velocity goes away, as there is already a framework to make independent but aligned decisions.
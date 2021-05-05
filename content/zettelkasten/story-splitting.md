---
title: The Backend and Frontend Story Divide
description: Beware the perils of what for a second looks like a good idea.
date: '2021-03-26T09:00:00.000Z'
categories: ["agile", "user stories", "collaboration"]
---

In this post I will tackle the idea of splitting user stories based on role, i.e., back-end user story, front-end user story.

## What is and isn't a user story?

To start this discussion we first have to agree on what a user story is. At the highest level, it is an _invitation to a conversation_. That conversation is where people (i.e., developers, business people) can examine the value proposition, discuss implementation complexity, evaluate cost/value trade-offs, identify dependencies and come up with a general approach to a solution. Based on this discussion a shared understanding of the requirement is developed which is then written down in some form. These forms could be acceptance criteria, Gherkin, decision tables or if it's simple enough, nothing else is needed.

User stories are mistakenly associated with the work that is required, not with the capability they enable. One of the benefits of using stories is that it aligns different people towards a shared goal. Instead of breaking up the work in separate, independent streams, the requirement is kept together in  hopes that people collaborate, share knowledge and most importantly, learn about how best to execute together. The user story is not about the creators of the software, it's about the people using the software and that lens should not be compromised.

## Specialization and the dangers of local optimization

It is not unreasonable for people to split up and tackle the work independently as well, in which case we usually create tasks, e.g., setup Kafka queue, create schema, generate auth token. Creation of these tasks helps identify the work needed to complete the story and deliver value to the customer. As not everyone can pair or mob on everything together all the time, and given that flow and independence are important, these tasks could be tackled independently. However, that can only after a shared understanding of the solution is developed, and integration is kept front and center, which implies that the work for the layers stays together. Divergence to optimize individual work over the larger goal does not help us.

The urge to create back-end and front-end stories arises because the level of specialization in the industry has reached a point where there is an implicit mapping between skill-set and architectural layer. Instead of breaking down the work of a simple read operation in small tasks like develop API, authorize token, create table to display, we instead split them apart based on role: front-end and back-end.

We don't do this because it helps us collaborate better or because it's a meaningful distinction. We do it solely because we are wired for local optimization, not system optimization. _You do your part, I do my part. We'll worry about whether the whole thing works later._ More cynically, we don't want to talk to each other.

## Small is good but only if it's valuable

The positive side effect of the story becoming small comes at a huge price of lack of collaboration, lack of knowledge sharing, delayed integration (integration stories anyone?) and most of all, a completed story which doesn't deliver value to the customer (e.g., only the UI is done).

It affects how we approach our work by creating an entirely artificial and continually reinforcing boundary. Instead of a list of tasks needed to finish the work, we first segment it by skill, and then within that skill identify the tasks. And very likely have to later worry about integration of the two layers much later than we should.

Perhaps we got here by trying to split stories and make them smaller because smaller is generally better. However, at some point we hit a tipping point where smaller no longer meant valuable. As soon as that happens, it's time to hit the reset button and talk about how better to work together.

This split also discourages pairing and mobbing because right off the bat we have eliminated the core idea behind such techniques: people sitting together knowledge sharing, reviewing code on-the-go, keeping WIP low and collective code ownership. We have intentionally split people apart with no benefit to gain.

The principle of locality is well described in [The Unicorn Project](https://www.goodreads.com/book/show/44333183-the-unicorn-project) and can mistakenly lend credence to the idea of splitting up work in this manner. The idea behind locality is that people need to be able to develop and get feedback on software without depending on other entities. The more non-localized dependencies (e.g., something you can't stub out), the more integration risk. However, it is a mistake to view other people on your team as a dependency and "stub" them out by splitting work this way. That only increases and delays the integration effort while putting a ceiling on collaboration.

## Different teams, same goal

You can argue that kind of splits can be valuable at a higher level when a requirement must done by teams of orthogonal skill sets. For example, a machine learning layer where data scientists want to work on a recommendation engine, while a web developer is responsible for laying out the products on the website. Those are two different teams working on a larger problem, not a split within a team. It is the in-team split that is especially harmful. Even in these situations it is valuable for a story to tie in both pieces of work as stories are about getting a customer perspective, not a vehicle for organizing work within a team - we can use tasks for that and make those tasks small and independently deployable.

## Some actionable advice

Some things to try if you're struggling organizing the work:

- Take a user story written and [mob on it](https://medium.com/comparethemarket/i-did-mob-programming-every-day-for-5-months-heres-what-i-learnt-b586fb8b67c).
- Reflect the work related to create the story as tasks within a story - make those tasks deployable/releasable
- Institute team norms which value learning so instead of avoiding to work on different layers, we strive to learn and become more "full stack"
- Iterate over a user story with each story adding to the fidelity of the solution, not components of the solution (see image below)
- Use the [Hamburger Method of story splitting](https://gojko.net/2012/01/23/splitting-user-stories-the-hamburger-method/) to create slices, not chunking out work into "stories" that don't enable customer feedback

Thank you to Gino Marckx and Stacey Vetzal for their review of this post.
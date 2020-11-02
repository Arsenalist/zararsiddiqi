---
title: Dissonance of Using Functional Concepts in Non-functional Stacks
description: It doesn't have to be a natural fit to be considered progression.
date: '2020-11-02T09:00:00.007Z'
categories: []
---

Side-effect free functions (i.e., pure functions) lend themselves to easy unit testing. If the ability to test software is key to creating quality then it stands to reason that the more pure functions a piece of software has, all other things being equal, the higher its quality. Taking this idea a step further we may posit that to achieve high quality we must maximize the amount of pure functions in our codebase. Or at least maximize the amount of code that lives in pure functions.

It’s not only proponents of functional programming who would agree with this sentiment. Even procedural or object-oriented programmers would welcome large swathes of the codebase being easy to formally verify. No matter which language or school of programming one grew up with, certain universal rules have always applied. For example, we strive to keep our functions and modules small, independent and where possible, re-usable.

A similar comment can be made about state. The best way to manage state is to not manage it at all. Functional programming’s concept of referential transparency is its opinion statement on state management. Its implementations involve passing state around as parameters just so we never end up in a situation where we have to think about whether the state is what we expect it to be. Procedural and OOP programmers hate state management too but someone has to do it. So you end up either managing it “locally” or shove it deep into the layers hoping that the deeper the level, the less code we have to write. Both approaches strive to make state management straightforward enough to take guesswork out of it.

The benefits of immutability and side-effect free code resonate with most and when working in non-functional environments I have found it beneficial to apply concepts rooted in functional languages. When doing so I’ve often encountered a dissonance when organizing software elements (e.g., classes, packages, modules), and the source of this dissonance has been hard to pin down. I’m starting to land on three hypotheses on what the source might be.

### Defining Behaviour in Classes

Object Oriented Programming (Java being its standard bearer) has often urged me to model things as objects and assign behaviour to those objects. A `Dog` `barks()`. A `WashingMachine` `washes()`, an `Email` `sends()` itself. Wait, what? No, an email can’t send itself. An email needs to have an `EmailSender` to `send()` an `Email` because we also have to worry about MIME types and formats and headers and on and on. So maybe we need an `EmailRenderer` to `generate()` an `Email` and pass it to `EmailSender` to `send()` it, and maybe we check the `EmailResponse` sent by the `SmtpServer` to figure out whether it got `sent?()`. This would of course rely on the `SmtpConfig` and a host of other folk.

Behaviours often tend to have side effects and when they’re encouraged to live near the data they’re modelling, we quickly run into a three-way tension:

- modelling the data for the entity
- keeping behaviours of the entity close to the data
- writing side-effect free code which implements the behaviour.

A class is too simple of a container to house these three animals peacefully. It is here where the proliferation of classes happens. To model something relatively simple we write classes that do these things separately. This is good because SRP but it does come at the expense of the real world thing you’re representing being split apart in terms that are incongruent with the real world. The real world is essentially too complex to satisfy both SRP and objects which represent the real world.

After all, an EmailRenderer isn’t a real world thing. Domain Driven Design (the blue book) deals with this by creating different classification for objects (e.g, Aggregators, Value Objects) which seem like legal explanations on why we can (and should) use classes and objects to represent things even though there’s not a natural fit there. And when we can’t really fit anything anywhere we can always rely on something like the MethodObject pattern which always gives us an out.

No matter how many design patterns from Gang of Four or DDD we apply, we are merely organizing our code within the constraints of classes. It doesn’t always feel like a natural fit because my brain is wired to see classes and their instance objects represent the real world where the software is being used, not the things that glue the software together (which is what we end up doing when organizing those three things - models, data and behaviour).

Instead of writing side-effect free functions I end up writing side-effect free classes while trying to shove the behaviour out of the classes, which is antithetic to what many consider OOP.

### Diminishing Returns as Layers Increase

The unfulfilled promise of Object Models was to think in terms of real world objects and then have data persistence abstracted by an ORM. That never quite happened. The idea that there’s only one place where the relationships between your data can be represented and that place is not the data store was never a great marketing pitch but we went along with it. In those days there were usually two representations of these relationships: the database and the Object Model.

The acceleration in frameworks has unfortunately resulted in specialization (probably another topic) and now we have the same data represented in:

- The database
- The object model
- REST API (usually a subset of the object model)
- In the UIs object model
- In the UI’s state management code

That is a lot of representations! I am not lamenting the need to manage state. We have to manage the state of the UI somewhere (e.g., what dropdown element is selected). It’s that in addition to managing that we also have to worry about managing what we just retrieved from the server. WebSockets in combination with streaming APIs do a good job of lessening this concern, but they don’t take it away.

In most instances we’re still making simple REST calls to “get data for the UI”. In such instances writing side-effect free functions in UI code is good, but it feels like we’re wasting the tools at our disposal. The risk often lies closer to where the core business logic lives or where the state gets manipulated. If those areas are off-limits or live in older stacks, improving the quality of a piece of the stack that has low risk to begin with could be argued to be waste.

I can test the daylights out of my NgRx stack and apply all kinds of cool functional programming concepts but am I really reducing the risk? After all the higher up the stack you go the less the risk (usually), and the real issues usually lie closer to the system of record. Wouldn’t it be just as effective to write a for loop instead of a recursive method?

### Lack of Constraints

If the language allows for mutability there’s nothing but discipline left to prevent state mutation. We can follow all the rules of functional programming but the mindset when writing the exact same feature in Elixir and Java will be different.

In the latter everything is permitted and the environment will not prevent you from unintentionally changing state. Yes, better testing would catch this but now we’re talking about testing whether pointers are pointing to the right thing instead of focusing on delivering business value. `List.of()`, `Map.of()` are valuable APIs which help kickstart a person’s functional programming in a non-functional language journey. However, they’re only pieces of the puzzle that put the onus on the programmer to not make mistakes you wouldn’t have to worry about making if you were using a functional language.

--

In all three cases above I’ve tried to describe some of the workarounds that get me closer to writing functional code. My philosophy has been to take an incremental approach to improvement. It doesn’t matter if the rest of the app is following a different paradigm. Writing side-effect free functions and passing state along rather than centrally managing it is a welcome improvement and someone somewhere at some point in time will be glad that I did. I hope.

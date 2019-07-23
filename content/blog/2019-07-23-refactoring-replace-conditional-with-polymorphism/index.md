---
title: "Impactful Refactorings: Replace Conditional with Polymorphism"
description: The 'Replace Conditional with Polymorphism' refactoring remains one of the most teachable moments in OOP.
date: '2019-07-23T09:00:00.997Z'
categories: []
---

![Image: Unsplash.com](https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)

Twenty years on Martin Fowler released the second edition of [Refactoring](https://www.amazon.ca/Refactoring-Improving-Design-Existing-Code/dp/0134757599/ref=dp_ob_title_bk). Packed with plenty of examples of code smells and what to do about them, the book is a must-read for professional programmers and enthusiasts. Of the [many refactorings](https://refactoring.com/catalog/) described the [Replace Conditional With Polymorphism](https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html) remains one of my favourites. I will explain why.

I've generally observed that object oriented programming is being bastardized. There is a strong tendency for programmers to slap procedural code inside a class and think they're writing object oriented code. I find that following the standard three-layer pattern of Controller/Service/Dao is being seen as "doing OOP", and all the other stuff of making sure you're using domain language, encapsulation, distinguishing Value Objects and Entities, etc. falls to the wayside.  

When coaching teams on writing better code, I can pair with them and execute some of the easy refactorings such as [Extract Function](https://refactoring.com/catalog/extractFunction.html) or [Rename Variable](https://refactoring.com/catalog/renameVariable.html), but it's Replace Conditional With Polymorphism which can be used as a valuable learning opportunity. Here are some reasons.

### Conditionals are everywhere

Conditionals are ubiquitous. It is common to find code such as the following peppered across code bases:

```java
if (user.isAdmin()) {
	// display admin control panel
} else if (user.isSubscriber()) {
	// display subscriber control panel
} else {
	// hide all control panels
}
```
The above code is rarely questioned on whether it should be refactored into some polymorphic behaviour because on the surface it's doing nothing egregious.  Three cases are being checked and in most such cases programmers apply a refactoring that puts the three pieces of logic into three private methods in the same class. At that point the class is violating the Single Responsibility Principle and is probably also too long. But because the code is reasonably structured in a procedural manner it evades the eye. 

Another type of conditional is checking for errors, especially in global exception handlers. Something like the following is very common:

```typescript
function checkForHttpResponseError(response: HttpResponse) {
	switch(response.status.code) { 
	   case 401: { 
		   console.log("Error occurred: ", response);
		   throw new Error("Security exception - not allowed");
	   } 
	   case 500: { 
		   	console.log("Error occurred: ", response);
			throw new Error("Oops..our bad, we're looking into it");
	   } 
	   default: { 
	      // whew
	   } 
	}
}
```
Again, on the surface this looks like decent code which does the job but once interrogated further about maintainability and extensibility, its brittleness and lack of easy testability is exposed. Examples like these are common in enterprise code bases where pressures of getting stuff out the door means refactoring is an afterthought if even a consideration. 

The abundance of such cases and the significant impact this refactoring has on the code makes it a vibrant example of refactoring resulting in more maintainable code. There's a lot here for an coach to work with.

### The connection to Strategy, Template Method and Factory Method design patterns

I was a little sad to see that many recent graduates haven't heard of the [GoF design patterns](http://wiki.c2.com/?DesignPatternsBook). In my opinion they are timeless and every software engineer should have a grasp on recognizing problems that warrant design pattern consideration. When discussing this particular refactoring the Strategy and Template Method patterns lend themselves well to the solution and serve as a gentle introduction to some of the more nuanced design patterns. Let's cover both. I'll only briefly cover the conversation around Factory Method as that is fairly straightforward. First, the Strategy pattern.

Here is a possible refactoring of the first example by applying Replace Conditional with Polymorphism.

```java
abstract class AbstractMenuDisplayer {
	public abstract void display();	
}
class AdminMenuDisplayer {
	// member declarations removed for brevity
	AdminMenuDisplayer(User user) {
		this.user = user;
	}
	public void display() {
		// display admin control panel
	}
}
class SubscriberMenuDisplayer {
	SubscriberMenuDisplayer(User user) {
		this.user = user;
	}
	public void display() {
		// display subscriber control panel
	}
}
class PublicViewDisplayer {
	public void display() {
		// hide all control panels
	}
}
```
There are a number of points to be made here:

* Unit testing is much simpler as we're focused on each view separately
* We are true to SRP as each class is doing one and only one thing
- We are using domain language in our classes making it more maintainable (more on this later)
- The client code (not shown above) is down one to two lines (constructor initialization and a call to ``display()``.
- Customization of each view can be done by in the Displayer class or its subclasses

I find that last point about customization is where the real value of this refactoring is. Our code is now structured so that new requirements can be easily integrated while keeping reuse high. If a new requirement about a ``PremiumSubscriber`` comes in, we can either extend ``SubscriberMenuDisplayer`` or create a new class. At that point, we'll likely use more refactorings like pushing common methods into base classes but now we are in a position to actually make those refactorings.  As Kent Beck says, [for each desired change, make the change easy (warning: this may be hard), then make the easy change](https://twitter.com/kentbeck/status/250733358307500032). I find that Replace Conditional with Polymorphism is the change that enables easier future changes.

The Template Method pattern is generally associated with algorithms and the word algorithm can sometimes be scary. To get maximum value out of the Template Method pattern I find it helpful to simplify and generalize what an algorithm really is. It doesn't always have to be a complex flow like invoice processing or tax calculations. It can be any set of calculations or rules that need to be followed, no matter how minimal.

If we take a simplified view of algorithms and view the second case of detecting exceptions as an algorithm containing two steps:

1. Log the message
2. If needed, throw an exception

This shift in thinking lends itself nicely to the Template Method pattern:

```typescript
abstract class HttpStatusHandler {
	function logDetailedMessage(response: Response) {
		console.log(response);
	}
	function checkResponse() {
		this.logDetailedMessage();
		this.raiseExceptionIfNeeded();
	}
	abstract raiseExceptionIfNeeded() ;
}
class Status401Handler extends HttpStatusHandler {
	function raiseExceptionIfNeeded() {
		throw new Error("Security exception - not allowed");	
	}
}
class Status500Handler extends HttpStatusHandler {
	function raiseExceptionIfNeeded() {
		throw new Error("Oops..our bad, we're looking into it");
	}
}
class Status200Handler extends HttpStatusHandler {
	function raiseExceptionIfNeeded() {
		// nothing to be done
	}
}
class HttpStatusHandlerFactory {
	static create(statusCode: int): HttpStatusHandler {
		// return an implementation based on statusCode
	}
}
```
Once again, several points can be made about this refactor:

- We have abstracted away the selection of the algorithm from the implementation
- New status code handling can be added easily
- Testability of the algorithm has improved
- Reusability is better and duplication is lower as common logging code is abstracted into its own method
- To understand the structure of the algorithm we only need to look at one place (the template method ``checkResponse()``

And it is the last point that is especially salient. We have centralized the knowledge of how status codes are handled in one area, not across cases in a switch statement. The readability for a future programmer in understanding this algorithm is made easier through this change.  Once again, Kent Beck's earlier comment seems relevant.

### Link to Domain Driven Design concepts

Refactoring procedural into object oriented code has clear benefits but one that is often overlooked is the impact it has on naming artifacts. We are now forced to give meaningful names to classes instead of having the full behaviour shoved into single methods. This refactoring forces us to create more artifacts (classes, methods) which we must then name. [And naming things is hard](https://twitter.com/secretGeek/status/7269997868). However, if we are working closely with Product Owners or business SMEs, we can get very good insight into what these artifacts should be called. We can look beyond the generic ``*Controller``, ``*Service`` and ``*Dao`` names and think about how we can use business language to describe technical artifacts.  

In the first example above, instead of a method which displays menus we are now forced to think about our users as admins, subscribers and the general public. This language would not make its way into the code without these types of refactorings. 

This idea of embedding domain knowledge in code is closely related to [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) which is predicated on basing designs on a model of the business domain and having close collaboration between technical and domain experts to refine conceptual models. Unless we explicitly seek out opportunities to embed domain knowledge into our code there's a good chance we'll end up viewing our system as a black box of features rather than a white box of transparent domain decisions.

--

Refactoring is a continuous exercise and for me the most fun part of the Test Driven Development cycle.  It is both useful and rewarding for me to compare the situation in the code pre- and post-refactoring to see what improvements were introduced and how future changes were made easier. It is in that post-refactoring retrospective that we find many learning moments.

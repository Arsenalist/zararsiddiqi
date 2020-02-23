---
title: 'The Phoenix Project, i.e., The Goal for IT'
description: The Goal is the interface. TPP is the implementation.
date: '2015-08-13T04:06:15.695Z'
categories: []
keywords: []
slug: /@zararsiddiqi/the-phoenix-project-i-e-the-goal-for-it-c7c67f727fda
---

![](https://cdn-images-1.medium.com/max/800/1*2B7p76QgtBP8f5jBulYcfA.jpeg)

I finally got around to reading the [Phoenix Project](http://www.amazon.ca/The-Phoenix-Project-Helping-Business/dp/0988262592), a book that’s quite hot right now thanks to the buzz around ‘DevOps’, a term that is catching up with ‘Agile’ when it comes to being misunderstood.

This is a 345-page read which could have been condensed down to about 10 pages. Granted, those 10 pages are significant and I’ll get to them in a bit, it’s just that I found the author’s desire to mimic the style of the groundbreaking and seminal book, [The Goal](http://www.amazon.ca/The-Goal-Process-Ongoing-Improvement/dp/0884270610), slightly overbearing. You know, man faces bad situation at work, man neglects personal life, man meets smart guy, smart guy shows man the light, man finds light, smart guy won’t give man all the answers, man eventually finds his own way, man does great at work, man’s wife is happy.

To see where Phoenix Project comes from, you really have to understand where The Goal comes from, because Phoenix is essentially mapping out concepts introduced in The Goal to Information Technology. Or more specifically, mapping it to a large IT department within a large company that’s struggling to support the business objectives of the company.

The Goal, which is all about the [Theory of Constraints](https://en.wikipedia.org/wiki/Theory_of_constraints), essentially speaks about how your entire system is constrained by a single resource, and exploiting/elevating/subordinating everything else, to that constraint is the way to go, and optimizing anywhere else will lead to waste. AKA: Local optimization is evil.

If you’re an experienced technology practitioner and you’ve read The Goal, there’s a great chance that as you’re reading it, you’re mapping the concepts and lessons in it to a situation you’ve encountered yourself while nodding your head along thinking how you might view situations differently now that you’re armed with a thinking approach like the Theory of Constraints. If you don’t have extensive industry experience, then at least you might know what to look out for (though I honestly find that you need to fail on a couple projects first to really ‘get’ some of these concepts).

When I picked up Phoenix and saw the references to The Goal, I got excited because I felt it would use The Goal as the starting point of discussion, and reach new heights. Unfortunately, that didn’ t happen and the book essentially focused on mapping out IT equivalents of characters/concepts in The Goal rather than offering anything new and groundbreaking. For example, Brent in Phoenix is The Goals’ Herbie — the key constraint that the protagonist has to manage. And that was basically it, the book didn’t really elevate itself to any greater heights than where The Goal left off.

Unless someone struggled to ‘get’ how to map the concepts in The Goal to Information Technology, Phoenix will definitely help make some connections. For me, that alone wasn’t enough to justify the length, or the story-telling format of this read.

Now, there are a some key concepts that Phoenix highlights which are worth mentioning:

**Work groupings and unplanned work**

The model of defining all work in four main categories: business projects, IT projects, changes, and unplanned work, with the latter being the most destructive of all as it takes resources away from planned work, which is very bad. Cool concept, nicely articulated with ‘firefighting’ described as the key culprit. I thought this grouping might be helpful for organizations that really do want to classify just where the work comes from so that they can prioritize better.

**Technical debt increasing unplanned work**

The more technical debt you accumulate, the greater the unplanned work you’ll do, which means the less planned work you’ll do. Therefore, keep your technical debt low and regularly invest and improve in your systems, even though there aren’t immediate day-of-deployment tangible gains. Not exactly a new concept, but articulated well nonetheless.

**Cater to fragile systems**

80% of the unplanned work might come from 20% of the systems, because those 20% are the most fragile. Pareto strikes again. Change control is a big part of Phoenix, and it’s prescribing that very specific attention be paid to fragile systems that have proven in the past to to cause firefighting, with changes being managed carefully (e.g., CAB and all that). In contrast, low risk work doesn’t need the bureaucratic change processes and can be pushed through. Alright, not bad.

**Elevate/exploit/subordinate everything else to your constraint**

Whether it be that one guy who holds all the knowledge, or that one jump server which serves as a window to your entire infrastructure, identify the constraint/bottleneck and ensure that it’s optimized, used to full capacity, and used in a manner where the work flows through nicely. For me, Phoenix falls short here because, though Brent was the constraint for the Ops team, there was little to no talk of what happens once a new constraint pops up, which is the case more often than not. I thought the situations here lacked depth and didn’t really convey the key point that monitoring and observing your system for the next Brent/Herbie, is a HUGE part of maintaining a healthy system.

**Wait time**

The concept that the time you have to wait on a resource is characterized by:

Wait Time = Utilization Percentage / Idle Percentage

So, for example, if you’re a security engineer in charge of making firewall changes, and you’re 50% utilized, the time someone has to wait for you is 50/50 = 1 unit of time. Or 1 hour, or 1 day, or whatever’s relevant in your context.

Contrast this to if you’re 95% busy, that comes to 95/5 = 19 hours, or 19 days etc.

Slack is something that most agile practitioners insist be present in all situations and Phoenix goes some way in trying to highlight that. Again, just like its coverage of finding the next constraint, Phoenix doesn’t quite dive deeper into this topic which I would’ve loved to read about.

**Pulling work**

There’s also the usual Kanban stuff of identifying work centers, repeatable procedures and how each work center has man, materials, method and machine associated with it, but that’s fairly basic stuff.

**“Three ways”**

The principles that Phoenix recommends be present in any organization is summarized in the “three ways”. The first suggests taking a Systems Thinking approach of looking at the flow of work, rather than optimizing locally. The second is about shortening your feedback loops at all levels, and the third is valuing learning, experimentation, and mastery. Somewhere in there you’ll find messages that [Senge](http://www.amazon.ca/The-Fifth-Discipline-Practice-Organization/dp/0385517254) and [Pink](http://www.amazon.ca/Drive-Surprising-Truth-About-Motivates/dp/1594484805) have been preaching for decades/years.

Overall, I thought Phoenix is an executive-level read which might spark a thought or two at the right levels an organization, and is one of those books that gets passed down for all employees to read, subsequently collecting dusts in the third drawer next to the broken staplers.

I’m glad I read it, though I felt like there wasn’t enough emphasis on organizational culture which in my view is the connective tissue that makes everything else tick. It just felt like I was reading a diluted version of The Goal.
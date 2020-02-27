---
title: BusyBusyBusy
description: "\"How's it going?\" \"Busy busy busy.\""
date: '2020-02-26T09:00:00.997Z'
categories: []
---

<div style="text-align: center"><img src="/images/tokyo-japan-subway-crowd.jpg" alt="Wait, there's more."/></div>

*"How's it going?"*

*"Busy busy busy".*

We pride ourselves on being busy. How busy one is has become a symbol of worth and even pride. The thought goes like this: if you're not busy then you're not utilized. If you're not utilized then you're wasting your time. If you're wasting your time then the money you're making is also being wasted. If money is being wasted then why not spend this money somewhere else? So maybe we only need half of you so you're 100% utilized therefore more efficient. And of course we all want to be efficient? How can you possibly argue against being less efficient because that would imply you're less productive?  Thus you have to be busy. Busy busy busy. You must be utilized because we have conflated utilization with efficiency and worse, productivity.

There is a single phrase that if I hear a team utter I know they're on the wrong path: *does everyone have enough work to do?* It is the ultimate sign that the team has little idea how important [slack](https://zararsiddiqi.com/2019-07-25-professionalism-of-embedding-quality-through-slack/) is and are focused on utilization as a proxy for productivity when there is ample mathematical and sociological evidence that this is simply not the case. But because it *feels* good to be doing *something* we will fill up people's plates to the edges so that we haven't "wasted" anything. What good managers we are! 

Exhibit A in the war against 100% utilization is the principle of queuing capacity utilization. To appreciate this we first have to accept a few things:

- Software development involves heterogeneous activities - unlike a manufacturing plan producing t-shirts or ball bearings, the output being produced is different on a case-to-case basis, no matter how similar it might feel to the end user. For example, a password reset feature on Amazon and Apple may look the same, but behind the scenes the implementation details are very different (e.g., systems, languages, architecture, organization structures)
- Software development work has high variability - two random activities or features will take different lengths of time to complete. For example, a password reset feature and a single sign-on implementation will take different lengths of time based on sheer complexity of the problem.
- Software development is knowledge work - it requires large amounts of collaboration with other people and deep thought regarding problem solving.

Every organization has a system of how work is done. At the highest level work is identified, prioritized, and then queued for processing by an individual or team.  If all work came into this system at the same rate and was completed at the same rate then you would be foolish not to have 100% utilization as you would have achieved perfect flow. Think of this like a tap being left on in a sink and the water never accumulating above the drain because the rate of water coming in is in perfect proportion to the diameter of the holes in the sink.

However, in software development, water doesn't flow at the same rate. Big and small items are put into the queue (i.e., heterogenous) which exit the system at different rates (i.e., high variability). In addition, most pieces of work are not executed by a inherently predictable and scalable resource but by teams who have to work together and are often dependent on each other. Skill gaps, new technologies and that meeting you randomly booked to announce nothing special all take a toll on the team. If the team encounters any impediments (which they absolutely will because of the nature of the work) the queue size (i.e., our backlog) gets bigger and bigger because processing capability is being taxed. The effect of this is much like a traffic jam at rush hour where the highway is 100% utilized but cars exit at a very slow rate. More on that particular topic [here](https://www.sciencedirect.com/science/article/abs/pii/S0377221707003116).

So how does pulling less work into the system help since that would mean we have "idle" teams or people? The simple answer is that *when* people are needed they should be able to help immediately and move the work to the next step in whatever the team is trying to do. If these people happen to always be busy with because we have utilized them at 100%, then they won't be available to service those tasks that depend on them. A very common example is a senior developer who has tasks assigned to her but is also reviewing other people's code.  If we want her to move other people's code quickly to the next step we need her to be highly available. If we clog that availability by assigning her work, we are consciously introducing a delay. But for her to be available to service other people immediately means we can't overload her which means she'll be idle, i.e., her utilization will be less than 100%. We need to optimize for how work moves through the entire system and not focus on local optimization of individuals.

A counterargument to the above is why couldn't she keep busy on other work and only work on code reviews when someone requests one.  That argument does not consider the extremely high cost of [context-switching](https://www.apa.org/research/action/multitask), another bane for anyone trying to do any work while also being a source of shame since if you protest about it you'll be labelled someone who can't multitask. And we love people who can multitask!

The effect of emergency work (uh oh, we forgot about this regulatory filing) on a fully utilized system will wreak havoc. If there is no available capacity to perform this work we'll have to context-switch multiple people and artifacts (e.g., source code, environments, project management systems, timesheets, production approvals) to accomodate this work. The cost of this switch is rarely measured in any system but instead we will zoom in on available capacity only because it is easy to measure and fairly visible.   We have evolved to value being `BusyBusyBusy` when in reality eliminating capacity out of our systems leave us unresponsive to change.

All this in mathematical terms can be boiled down to two well-established statements which I have modified to suit the context of this post:

1. *Time to Complete Work = Queue Size / Work Completed*
2. *As utilization increases, queue sizes increase*

The first statement is [Little's Law](https://en.wikipedia.org/wiki/Little%27s_law) and the second is the [Allen-Cuneen Approximation of Queue Length](https://books.google.ca/books?id=PMMUbHvr-7sC&pg=PA341&lpg=PA341&dq=allen-cunneen%20queue&source=bl&ots=APBy1yQEHT&sig=ACfU3U33crWLWSO52VhsArHxtZRjM77lLQ&hl=en&sa=X&ved=2ahUKEwjwtt258-vnAhV1lXIEHapkDmUQ6AEwB3oECAoQAQ#v=onepage&q=allen-cunneen%20queue&f=false).

Thus, it is imperative that we keep queue sizes low if we want to complete work fast, and the way to keep queue sizes low is to reduce utilization. 

Some of the above has been a poor man's explanation of Donald Reinertsen's [work](https://www.amazon.ca/Principles-Product-Development-Flow-Generation/dp/1935401009) which anyone who is managing people or processes must read. An extremely condensed summary of it appears in an [HBR article](https://hbr.org/2012/05/six-myths-of-product-development).

Another critical aspect to note is that the time works take to complete is a *lagging* indicator of the rate at which work gets done because we can't measure that until the work is done. The size of queues is a *leading* indicator meaning we can optimize for the work before it starts. The main way we can do this is to make sure there is slack in our system to handle unexpected, heterogenous, highly variable, and cognitive-skill requiring collaborative activities.

If for some reason there is available capacity in a team or individual which could be used towards improving the flow of work, another time honoured phenomenon held sacred by managers rears its ominous head. It is of course the notion of a fungible resource. The idea that a person's cognitive abilities can be split into separate activities while retaining totality in efficiency, i.e., "I'm 30% allocated to this project, 40% to that one and 30% to that one over there that will for sure be cancelled".  

We briefly talked about context-switching which is similar to fungibility but there is a very important nuance. Whereas context-switching is often a *spontaneous* decision made by a person because of the activities needing to be performed by their team to produce an outcome, the fungible resource is a *conscious* decision made by managers to allocate people across different concerns. "We probably only need about half of Barry's time on this project but let's not assign him any more work so we make sure he gets his work done on time", said no manager ever.

The impact of high utilization goes well beyond the realms of efficiency and productivity. Perhaps its greatest impact can be seen when viewed on a longer time horizon in the context of continuous improvement. Knowledge work requires knowledge and knowledge changes as technology changes. To benefit from technological improvements one must not only be aware of them, but also be able to understand how they can benefit you in your particular environment. It is one thing to read an article about a new method and another to reflect deeply and test whether and how it is applicable to you. When we are 100% utilized we barely even do the reading let alone the testing. 

Freeing up people's time in an open-ended manner so that they can experiment and try out new things sounds like too fluffy of a management objective. We like SMART goals and neat 4-Box models where inputs and outputs are defined. There is no room for giving someone back two hours in their day so they can freeplay and just think about how they could improve their work. Yet it is this time where innovation and improvements come from, but because we can't define clear outputs and outcomes when describing this work, it is instead filled with busy work. 

[Free play among children](https://www.gse.harvard.edu/news/uk/18/06/summertime-playtime) has been seen as an important part of social and cognitive development for decades. This has been extended to adults as well with [autonomy](https://link.springer.com/chapter/10.1007/978-90-481-9667-8_8) acknowledged as an ingredient of productivity, engagement and health. To genuinely action these concepts and give people the autonomy to improve themselves requires us to step back and give back time to people which is not possible if we focus on utilization as a proxy metric for efficiency.  This argument falls further apart when we add a temporal axis to it and view the "ROI" of an employee in terms of what they produce over a longer period of time. When we hire people we hire them for their present skill. The knowledge in knowledge-work is a moving target and if we don't give people the slack to update their knowledge the returns on that employee will decline with time. Sure, you can argue that you can swap out workers and bring more efficient ones in and skip the development aspect of it, but you'd be losing knowledge in this process. It's also a pretty crappy HR strategy for a multitude of reasons.

If you are interested in learning more about the pitfalls of utilization and the importance of slack, there are few better reads out there than [Tom Demarco's](https://www.amazon.ca/Slack-Getting-Burnout-Busywork-Efficiency/dp/0767907698).

I struggle with `BusyBusyBusy` just like anyone else. I also try to acknowledge when I'm in that mode which is the first step in escaping it. This topic is closely related to prioritization because if we effectively prioritize and unschedule the stuff we end up scheduling it will automatically create the capacity we seek (assuming we don't replace that freed up time with more busy work). Some questions I ask myself related to prioritization are:

- If I only had to work two hours on one thing and I wasn't allowed to work on anything but that one thing, what would it be?
- What is the one thing I need to learn today so that I can be more effective for the next two weeks?
- What made me anxious today and why? 
- What is something that is bugging me that I haven't vocalized with anyone?
- What is the bad news that I am scared of giving someone and what am I doing about it?
- What is an activity that has become so routine for me that I don't even question its value?

These are some of the questions that help me prioritize and unschedule work so I'm not `BusyBusyBusy`. For me, it's a start.
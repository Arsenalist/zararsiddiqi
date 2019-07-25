---
title: Embedding quality in software through slack
description: It is our professional responsibility to delivery quality software. Effectively using slack can get us there.
date: '2019-07-25T09:00:00.997Z'
categories: []
---

![Image source: unsplash.com](https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)

Teams usually have a list of features that they need to develop. Call them stories, tasks, experiments, product backlog items...it doesn't quite matter. Basically, code needs to be written for the software to do something. If you're using Scrum or a similar framework you go through this list in somewhat linear order. As you complete Feature A along comes Feature B and you're onto the next thing.  

What gets lost in the mix is time to inspect and adapt on the software increment that is Feature A. By "inspect and adapt" I'm referring to the refactoring of the technical artifacts that were created or modified so they are easier to change in the future. It is difficult to write quality code the first time around because your focus is to solve the business problem at hand and get the feature to a functional state. If we are not explicitly allocating time for this inspect and adapt cycle which improves code structure and behaviour, it results in poor quality and defect-ridden software. Test Driven Development when practiced ruthlessly can avoid this. In the absence of that we must explicitly create slack in our schedules to accommodate this care.

Most projects have slack or "clean up time". It just all comes at the end. I find it helpful to visualize slack as the following:

![enter image description here](https://lh3.googleusercontent.com/COBKEvUp4L8CZ4WcRk2_p3QE0w2rvYvHlVogaQ76ZeW2Y1gWMrGmSzI2j9EIlx8NjT9liJhWcDWYdQ)

We have allocated the same amount of slack in both cases but in the second we are constantly using that slack to improve the software increment we are building.  Though I've shown both cases taking up equal amount of time, in reality the second approach will result in faster development because the technical artifacts (i.e., the code) is in a much better state to make changes that Feature B and C demand because we're caring for it as we go along. The first approach is best [described by Kent Beck](https://twitter.com/KentBeck/status/1123276841110970369): *A plan with no slack is less a plan and more a gestating disappointment*. By the time we get to use our slack in the first approach the code is in such a state that every change is risky.

This focus on quality is also the professional approach to software development. I'm not referring to some hypothetical ideal of a programmer who aims for perfection. I'm referring to being proud of the work you do as a programmer and doing it to the best of your ability. Every programmer should adhere to [The Programmer's Oath](https://blog.cleancoder.com/uncle-bob/2015/11/18/TheProgrammersOath.html), notably points #2 and #5:

- The code that I produce will always be my best work. I will not knowingly allow code that is defective either in behavior or structure to accumulate.
- I will fearlessly and relentlessly improve my creations at every opportunity. I will never degrade them.

When Product Managers want to build the next feature without realizing the team has yet to inspect adapt on the previous product increment, it is a programmer's professional duty to say 'no'. If we don't then we are no different than a plumber who 'finishes' a job and leaves a leak in the pipes. Frequent slack at a feature or story-level is the team's weapon which protects against rot from setting in. Needless to say that this approach also keeps your [technical debt](https://zararsiddiqi.com/2019-02-12-the-tricky-business-of-managing-technical-debt/) to manageable levels.

At its root this is a timeless conflict between management who wants stuff done quickly and the team that cares about the quality of what they produce. At this point in computing we have countless examples and empirical evidence where this neglect has resulted in software that is hard to change and eventually needs to be rewritten or scrapped. At any enterprise you can point to at least a dozen furious "rewrites" that are happening which are making the same mistakes their predecessors did. And I'm not referring to stuff written in the 80s or 90s, I'm talking about stuff written in the last 10 years. 

The technical debt article linked above goes into how this lack of care slows velocity down. More importantly, this is about professional conduct. In Canada at least, there are no software engineering equivalents to societies like [Professional Engineers Ontario](http://www.peo.on.ca/) which at least sets a floor for conduct so it is upto the engineers to ensure they are communicating the implications of not having time to improve work. The best argument to management is to reflect this as a cost of change argument, but this is a vicious chicken-and-the-egg cycle.

![enter image description here](https://lh3.googleusercontent.com/E1_P8f7ZYnwOya39MEKcLUb9xQ39lEPkV0pTtswA1r28ybNy2abWycIFcqV331Cr99Hv2k3ReDT9gg)

At this point we are the mercy of luck that the right people got promoted.

From an engineering perspective it is imperative that we have the courage to not call something 'done' when there are valuable improvements we can make, even if our employer/manager/boss is OK with shipping as-is. Again, much like an electrician wouldn't leave open wiring visible we can't leave code in a state where it will rot.  

I did not practice Test Driven Development early on in my career and since I was introduced to the concept many years ago it has fascinated me. The "tests first" approach ensures that code is defect-free and architecturally sound, which means we never are left facing a *moral* decision of calling something that is only functionally "complete" as complete. The software engineering mindset, especially in large enterprises, has to shift. As a starting point we could create just enough slack in our way of working that we adhere to the [The Boyscout Rule](https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html): always leave the campground cleaner than you found it. 

Perhaps if we create just enough slack to be able to say that, it can become a habit.

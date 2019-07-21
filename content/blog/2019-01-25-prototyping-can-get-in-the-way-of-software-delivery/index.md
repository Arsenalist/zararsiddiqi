---
title: Prototyping can get in the way of software delivery
description: I’m trying to form a perspective on how we can improve getting feedback from end users.
date: '2019-01-25T01:07:22.100Z'
categories: []
keywords: []
---

![Image Credit: [https://mediatemple.net/blog/tips/how-to-use-customer-feedback-to-improve-user-experience/](https://mediatemple.net/blog/tips/how-to-use-customer-feedback-to-improve-user-experience/)](https://cdn-images-1.medium.com/max/800/1*cYDgrGRLkIioJxkHUjrqaA.jpeg)
Image Credit: [https://mediatemple.net/blog/tips/how-to-use-customer-feedback-to-improve-user-experience/](https://mediatemple.net/blog/tips/how-to-use-customer-feedback-to-improve-user-experience/)

I’m trying to form a perspective on how we can improve getting feedback from end users, so that it can be incorporated into software products sooner. Infusing design expertise into engineering has always been a complicated topic, especially when you consider the context of popular agile delivery methods like Scrum, which enforce timeboxes and demand that shippable product increments be delivered very frequently. This has very often been in tension with design where activities such as user testing and research take longer cycles.

Volatile markets and elusive product-market fits result in a high product failure, which concepts like Lean Startup have tried to address with varying levels of success. More so, the focus on experimentation has been high but how best to experiment, and more importantly, where design fits into that experimentation is a quirky topic.

There are many different ways to examine this dynamic, and I’ve picked three.

1.  Design driving the research
2.  Design co-developing the experiment
3.  End-user driving the design

**Design driving the research**

Typically, designers take on the responsibility of research and user testing, and provide guidance to developers regarding interaction, content, and visual design, which the latter implement. Though product people ultimately make the decisions, the data collected by design researchers inform a lot of the product-level decisions. For example, if user testing based on wireframes show a trend in what users prefer, the product owner is often compelled to follow suit because, well, the data says it’s the right direction.

The benefit of this approach is that user testing is cheap, and we can get feedback from our users on prototypes fairly early in the process, thus driving product design through end-user feedback. The biggest problem with this is that the quality of data collected from users is questionable. People say they’ll do something and then do something else, and basing decisions on how people interact with prototypes instead of real software is a big risk.

A mindset to revisit prior decisions once the software is ready helps and is aided by agile practices which promote iterations. I find that this is a stop-gap measure to mitigate the risk of poor data quality coming from research activities which are often based on low-fidelity prototypes where another human being is “walking through” the prototypes with another human being. There’s no software in the mix, which means the subject of evaluation isn’t in the room, therefore we keep the door open by calling out iterations. I love [iterations](http://itsadeliverything.com/revisiting-the-iterative-incremental-mona-lisa) but also emphasize the quality in each iteration, which seems to be lacking in this approach. When I say quality is lacking, I don’t mean the engineering quality of the product or whether we built the thing right. I’m referring to whether we built the right thing.

**Design co-developing the experiment**

This approach accepts that the reason end users aren’t able to provide high quality feedback is because the software delivery team isn’t able to respond fast enough to testing needs, forcing designers to use faster methods of achieving feedback, i.e., prototypes.

In this model, the prototype is the software itself, not a mockup or a wireframe. The role of design here is to sit with developers and design the experiment (i.e., software) so that it can be placed in front of users directly. Things don’t have to be functioning, for example, you could have a button called “View Order History” which doesn’t do anything but you’ll get feedback if the user even clicks on it. The larger point is that the user is interacting with the software itself, not a proxy artifact (hint: InVision).

The data collected in this setting is of much higher quality because it’s based on what the user is doing, not what they said they would do. The Human-Computer Interaction gap here is as small as it gets, unlike prototypes. Assumptions and constraints come to the fore much faster, but because it takes us a while to deliver software, the lead time to get that data is longer. However, focusing on creating better wireframes is the wrong path to traverse, and instead that investment should be funneled towards creating working software through design-engineering collaboration (as opposed to a mini-waterfall within design and engineering).

This is difficult to do because of the waste present in most organizations, but it is very much possible and requires a significant mindset shift of how people work together.

A twist on [Fogg’s behavioural model](https://www.behaviormodel.org/) was taken by [Alex Cowan](https://www.alexandercowan.com/creating-a-lean-startup-style-assumption-set/) who suggested that people tend to confuse usability for motivation.

> I see so, so many teams over-investing in excellent usability for a product that it later turns out no one is motivated to buy or use. Usability matters, but I would say motivation matters more at the early stages of a project.

I find the above borderline profound, and something I subscribe to. The economic cost of designing for great usability is can be very high in an environment where experimentation and user feedback is valued.

**End-user driving the design**

The idea of [community-based design](https://jnd.org/community-based-human-centered-design/) is appealing. In its essence, it’s this:

*   People know what they want better than an “expert” designer trying to understand the people’s context
*   Give people the authority, tools, and processes to design for themselves
*   Designers are responsible for facilitating discussions with people, i.e., design-infused, not design-led

The strength of this approach is that, when facilitated properly, it has the power to elicit end-user needs in an unambiguous manner. The major weakness is that end-user’s have the tendency to focus on addressing the symptom rather than the root cause of a problem (hence the need for expert facilitation), which can result in local optimization to global problems.

The idea is powerful — have the people who have to live with the decisions design the interaction. There is still the issue of people saying what they want and then doing something else, but the difference here is that instead of users picking and choosing between options presented to them, they are creating the options. Their mental models are being directly projected onto what they’re designing, rather than being loosely mapped to options provided by a designer.

—

I have a preference for the second method.

I have had the opportunity to work with content, interaction and visual designers, and find their viewpoints fascinating. They make me think of things in a way that I hadn’t thought of before. There are barriers which prevent this expertise to be infused in software, and in my view, a lot has to do with the distance and artifacts present between this thinking and the software.

It is far more productive and enjoyable for developers to take guidance from designers by sitting side-by-side in creating testable hypotheses. From a designer perspective, the coveted feedback is received that much sooner. The trade-off is the level of usability, which I suggest does not need to be perfected to get directional feedback for the product.

At the end of the day, _working software is the primary measure of progress._ Everything else is a distraction.
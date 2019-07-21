---
title: We must recognize unplanned work
description: Is there anything more deplorable than waste?
date: '2017-11-05T20:13:40.273Z'
categories: []
keywords: []
---

![](https://cdn-images-1.medium.com/max/800/1*e0zTt-9Qa5TaU4gnYO_new.jpeg)

I hate waste. Whether it’s waste of food, time, money, effort, or energy, it annoys me to no end. If there is one thing we should do as a people for humanity, it’s strive to reduce waste. And on a complete tangent, it’s why I liked the final scene in Season 3 of Fargo where V.M Varga used it to [end the conversation](https://www.youtube.com/watch?v=WvXhsyNwO8w&feature=youtu.be&t=191).

Specifically, I’m referring to unplanned work which continues to be seen as the norm rather than a significant problem. For example, we continue to see major allocations of resources to “production support” which if it’s referring to customer service would be okay, except that it’s referring to people being allocated to solve _expected_ production issues. If in addition to solving the problem, we ensured it wouldn’t happen again, this would be fine, except we focus far too often on solving the symptom, rather than the underlying cause. The root problem left unattended, will result in more issues, which will lead to more resource allocation, and things will only get worse.

Very recently I asked one of the teams I was coaching on how much time they spent on dealing with production issues. It was close to 40%. I tested this number across a few more teams some colleagues were coaching, and it held true. Back in 2002, [Forrester figured it was around 35%](https://www.computerworld.com/article/2563263/it-management/unplanned-work-is-silently-killing-it-departments.html) so my 10-minute research is in the ballpark.

Taking a big picture view of this, the “Shifting the Burden” system archetype is a perfect depiction of the problem. Basically, applying the symptomatic solution will worsen the problem, and the only hope of improvement is applying the fundamental solution. Anything else will only increase waste over time.

![Peter Senge’s The Fifth Discipline introduced us to the System Archetype — [Image Source](https://runninginsystems.com/2014/09/17/systemic-archetypes-shifting-the-burden/)](https://cdn-images-1.medium.com/max/800/1*gHneLRX9m6iDaqMJ2Sjffw.jpeg)
Peter Senge’s The Fifth Discipline introduced us to the System Archetype — [Image Source](https://runninginsystems.com/2014/09/17/systemic-archetypes-shifting-the-burden/)

A basic piece of information that I would encourage every individual, team, department, and organization to measure is how much unplanned work is being performed. Forget about even solving the issues, that comes later. First, we just have to get a sense of how much time we are allocating to work that is not adding value, but is spent on firefighting to maintain the status quo, which may be a pretty fair definition of unplanned work.

If we go with the conservative estimate of 35%, that implies that 35% of a team’s capacity is wasted and could have been used to add value, where value is a new feature, better performance, experimentation, etc.

Let’s look at a little more concrete example and consider release management: taking a piece of software and deploying it to an environment (test or production). It’s 2017 and this is still a major problem for many organizations with the time spent on diagnosing why a release isn’t working as expected being a strong candidate for unplanned work. Worst, it’s unplanned work that is now being considered a standard part of the release management process. I will spare you the spiel of how “DevOps”, and its friends like continuous integration, deployment, and automated testing can help solve some of these issues, as there’s [ample literature](https://www.amazon.com/dp/0321601912/ref=asc_df_03216019125208990?smid=ATVPDKIKX0DER&tag=shopzilla0d-20&ascsubtag=shopzilla_rev_444-20;15085253015678018538410080302008005&linkCode=df0&creative=395093&creativeASIN=03) about that.

For now, just raising awareness and acknowledging that this is non-value added work is a very, very good start. Here are ten red flags related to release management that indicate you will be doing a lot of unplanned work in the form of trying to debug and diagnose why things did not go as planned:

1.  Manual coordination is required to ensure the correct sequencing of deployment artifacts
2.  The procedure for deploying to different environments is different
3.  A human being is being relied upon to test whether a deployment worked
4.  There are network topology differences in the environments (e.g., firewall rules)
5.  There is an environment dependent setting in the application configuration file
6.  Binaries are environment specific
7.  You need to wait till next week to deploy a fix because that’s just how it’s always been
8.  You can only deploy on the weekends since a rollback takes more than 15 minutes
9.  Using copy-paste to move over configuration
10.  The application and the infrastructure is managed by two entirely different teams

These are some basic symptoms of how a team is setting themselves up for countless hours being spent on diagnosing issues that never should have been.

Notice I have not embarked on a “manual deployments are terrible” rant as that is a reality of our world. Lot of organizations have bureaucracies which still inhibit that, but that does not mean we can’t start by recognizing that a lot of the work we do should never be done.

Tying this back to one of the [agile principles](http://agilemanifesto.org/principles.html), we have to maximize the amount of work not done, and that starts by recognizing how much of the work we do shouldn’t need to be done.
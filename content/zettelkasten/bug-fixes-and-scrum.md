---
title: Is Scrum suitable for complicated bug fixes?
description: A detailed response to the question of whether Scrum can help when the primary work is to fix  complicated bugs.
date: '2021-01-04T09:00:00.000Z'
categories: ["podcast questions", "continuous delivery podcast", "scrum", "timeboxing"]
---

A podcast listener asked how to use Scrum when the primary responsibility of the team is software maintenance and fixing complicated bugs which are hard to reproduce and take a long time to fix. How do we measure value when all we do is fix bugs?

[Here's the podcast](https://www.buzzsprout.com/883858/7300141) and my response to the question.

Sprints are a good mechanism to get a team that is used to delivering in long cycles (i.e., waterfall) to start thinking about how to deliver in shorter cycles. The timebox forces you to release code and think in small increments. It forces you reflect on what you delivered and how you delivered in much shorter cycles than what people were used to before.

They are not a one-size-fits-all solution that can be applied to any problem domain. I would take the some of the principles at play in sprints (not just sprints but any similar mechanism) offer and apply it to your problem.

For example, if your mean time to recovery/repair (MMTR) is on average two weeks, you should focus on continually reducing your MTTR. Whether it be through root cause analysis of the bug that you just fixed, performing refactorings, better documentation etc. That becomes the metric you optimize for, not value delivered or “points” delivered (ugh, never use points as a productivity metric – I can’t believe I put that in writing).

Sprints appear to be too artificial of a constraint in your context. The main benefit of timeboxing in your example might just be to limit how long you work on a bug before you deem it not worth investing in anymore (kind of like to avoid analysis paralysis).

Another example of a Scrum/agile principle being applied would be planning/prioritization. As your work seems to be highly variable (i.e., not quite predictable), planning for it is different so concepts like sprint planning don’t apply well. Instead, you could track and visualize the different categories of bugs, their root causes, where they were found in the code, etc. so that you get a sense of where the high-risk areas are in your code are, and then you can dedicate some time to improve these areas in a “planning” session. You can do planning without doing sprint planning!

The idea of a sprint commitment can be translated in your context to limiting work in progress. Sprint commitments are a focusing constraint that limit how many things a team works on and allows the team to focus without getting distracted by anything else. In your case, you can limit how many bugs you work on at the same time to a manageable number, say one. This way your “commitment” is to fix this one bug before you move to the next.

This is a very simple but critical agile principle: if you limit how many things you work on at the same time, there’s a significantly higher chance that you’ll do them well. And you’ll get more done. In my view, this is one of the most counterintuitive and fundamental principles of software development which most people struggle with and almost always fail to implement. Mastery of this is rare.

As for measuring value. technically, you’re not adding business value as the customer isn’t getting any new benefits. Though I can easily argue that you’re making the system more stable and reducing cost by ensuring angry customers don’t call to complain. You're not increasing customer satisfaction, but you're preventing it from taking a dive. I would encourage you to think about the opportunity cost of not fixing the bug, i.e., what would happen if you didn’t fix the bug? Would the system crash be resulting in countless hours of everyone scrambling? Would you lose customers? Would morale suffer? The avoidance of this is the value that you’re adding.

You may find it difficult to measure these because management rarely pays attention to these things and are more swayed by new features, so we tend to measure those, not the hairy implications of avoiding software maintenance. Management is usually not in tune with the reality of how teams operate and senior management listens to middle management and are often further detached from reality. Ultimately, in most organizations (but not the great ones) they’re the ones who decide (whether they know it or not) what methodology to follow on the ground. So just because a team is using Scrum doesn’t mean it’s right for them. It just may mean it was unwittingly imposed on them. I would encourage you to look at the principles behind Scrum and see if those can be applied, not the methodology verbatim.
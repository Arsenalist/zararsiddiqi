---
title: The Tricky Business of Managing Technical Debt
description: It’s not thaaat tricky, but it can be.
date: '2019-02-12T21:12:32.960Z'
categories: []
keywords: []
---

![Photo by [Alice Pasqual](https://unsplash.com/@stri_khedonia?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/800/0*-H8QnpOgRyLXpqYo)
Photo by [Alice Pasqual](https://unsplash.com/@stri_khedonia?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

It’s not thaaat tricky, but it can be. Consider the following contrived Python program which replaces all instances of the lower case letter ‘z’, with an uppercase one:

~~~~
def convert_z_to_uppercase(word):  
  new_word = ''  
  for letter in word:  
    if letter == 'z':  
      new_word = new_word + 'Z'  
    else:  
      new_word = new_word + letter  
  return new_word
  ~~~~

Has the implementation of this simple feature resulted in the accumulation of technical debt? Yes, even though we have satisfied the business requirement, it has. Every time we forego an opportunity to refactor and improve, we have incurred debt.

We have done a very quick and dirty implementation of a business requirement that leaves a lot of room for improvement. However, in the interest of time and speed (i.e., time-to-market), we’ve shoved something to production that works just fine and does the job.

There is absolutely nothing “wrong” with the above implementation, as we have consciously traded off flexibility for speed. For example, if tomorrow we’d want to write a feature which replaced lower case u’s, we’d have some refactoring to do since the above doesn’t handle that. The credit card analogy is a popular one when explaining technical debt: we purchase something we need right now (a feature) with something we don’t presently have (time). There is nothing inherently negative about technical debt, it is simply a trade-off. And trade-offs are at the heart of product development.

As engineers, we tend to have amnesia since once code is in production, it’s quickly forgotten as we move to the next feature. If not monitored, over time this debt accumulates and hampers agility. Again, financial analogies work well, as there’s a debt threshold which you can tolerate, beyond which it becomes infeasible. Or from the accounting/finance world, there’s advantages of debt financing (e.g., lower cost of capital) but too much of it and you become insolvent.

In software-speak, the cost of capital can be replaced with the cost of speed, i.e., how much are you “paying” to get stuff shipped quickly.

_All other things being equal_, the cost of making change to software is linearly proportional to the size of the code base. If technical debt is high, this cost becomes non-linear. This concept is [articulated very well by Trey Huffine](https://medium.freecodecamp.org/what-is-technical-debt-and-why-do-most-startups-have-it-9a54458daabf) (beware, complexity notation incoming):

![_More technical debt = harder to make change_](https://cdn-images-1.medium.com/max/800/1*0ybDI_lCNqzh4nAZ8kbKqA.png)
_More technical debt = harder to make change_

In this model, blue is business-as-usual where an average amount of technical debt is accumulated, red is where technical debt is out of control, and green is where the debt is being proactively managed, resulting in lower change costs. This is a model so by definition it’s wrong, but it’s also helpful.

Going back to financial analogies, the \_interest\_ we pay when technical debit is high is the cost of making change. The earlier uppercase example is a good one, because if that function were written differently, for example as the follows, our cost of making a change for supporting the lower case ‘u’ feature would be very close to zero.

def convert\_letter\_to\_uppercase(word, letter):  
  new\_word = ''  
  for l in word:  
    if l == letter:  
      new\_word = new\_word + l.upper()  
    else:  
      new\_word = new\_word + l  
  return new\_word

I am skipping a discussion on testing in this post and tests are ultimately what make change safer, and am consciously grouping them as [ceteris paribus](https://en.wikipedia.org/wiki/Ceteris_paribus).

The main issue I find in keeping technical debt to manageable levels is visibility. In software development, wastes are usually hidden and unless we make a deliberate effort to make technical debt visible, we are doomed. Whether it be a TODO in the code, a sticky on the wall, a JIRA ticket, a Github issue, or whatever floats your boat, it is important that it be tracked, even if we \_presently\_ have no intention of working on it. Capacity inevitability becomes available where previously written code can be improved.

I had an unbelievable conversation some time ago where someone in a very influential position told me that “we have no technical debt” on a product that’s five years old. There are three possible reasons why someone would be under that impression or a similar one:

1\. The team knows it exists but is too lazy to document it

2\. The team knows it exists but is scared to document it

3\. The team doesn’t know it exists

I’m not sure which of these is the worst but the first is mostly a form of either laziness or management pressure where no time is allocated to such work. Market pressure combined with poor leadership will cause teams to cut corners and the ship-it-at-all-costs mentality kicks in, making debt management a distant thought (along with tests). Most of us have been there, and I certainly have, where the demand for the next feature creeps up before you’ve deployed the last one, leaving little time for reflection. Like a neglectful gardener, the weeds grow.

The second is usually a symptom of management failure (What isn’t?). Management can come to expect perfect code where quality is non-negotiable, even when costs are cut and scope is added. Agile may fight the good fight of inverting iron triangles, but management mindsets (and bonuses) are too often still hinged on success theater where admitting there’s technical debt is seen as failure rather than transparency which can lead to continuous improvement.

The third is pure incompetence. Nothing more needs to be said. It forms the red quadrant in [this model](https://deviq.com/technical-debt/), which is a good one to inform thinking about technical debt classification.

![](https://cdn-images-1.medium.com/max/800/1*1H3Nq-WW0wE2MlaHlz1B_w.png)

In this model, green and blue are “good” whereas red and yellow are warning signs. [Other classifications](https://hackernoon.com/there-are-3-main-types-of-technical-debt-heres-how-to-manage-them-4a3328a4c50c) treat it as a function of time, i.e., over time incremental changes and technology changes are bound to introduce staleness and “rot” into your software systems. As massive refactorings are both risky, costly and prone to failure (especially in the absence of tests), having technical debt discussed in the same conversations as new features is a must. Technical debt needs to be a first-class citizen in the product backlog, not something we do when things are slow.

I have emphasized recording of technical debt which is a matter of prudence, but measuring its impact and consequences is more difficult and can be very subjective. Some concepts like [estimated interest](https://martinfowler.com/bliki/EstimatedInterest.html) ask teams to estimate against a mucky and a clean system and measure the difference. This is prone to human error and biases for obvious reasons.

There are [approaches](http://thinkapps.com/blog/development/technical-debt-calculation/) which treat code complexity and test coverage as indicators of debt. Even with the help of continuous inspection frameworks like SonarQube, it is difficult to evaluate code quality in isolation of the business context the features are being developed in. That business context is ultimately a pivotal factor in when we pay it back.

This business context is important because it indicates the likelihood of change to a particular area of the software, which should be a central consideration when prioritizing technical debt in the product backlog. For example, if you’ve written an inefficient sorting algorithm which is seldom used, awareness is a good enough strategy. But if this algorithm is central to business operations and is a scalability constraint, its classification and treatment is very different. The position in the backlog is a function of the likelihood of change — it’s higher if we need to change that area of the code which supports the business, and further down if the interest rate we’re paying is low, i.e., there is little need to change it.

It is no surprise that Product Managers who are attuned to their roadmaps, have the technical skill to engage in engineering discussions, and understand the implications of their prioritization decisions are invaluable.
---
title: A Theory of User Story Sizing
description: The scientific reasoning behind why user stories should be small. 
date: '2018-08-13T21:45:30.402Z'
categories: []
keywords: []
---

![](https://cdn-images-1.medium.com/max/800/1*-oHzjIS7ER4d3IvoRlwD4Q.jpeg)

Creating small user stories has been seen as desirable for reasons such as easier estimation, scope control, and early value delivery. This idea sometimes encounters friction from product developers (e.g., engineers) who see smaller user stories incurring higher overhead costs such as increased time spent creating documentation, test cases etc. After all, why would you need to split a user story about a contact-us form into three stories about viewing the form, validating it, and then sending the data to an external party? It seems logical to just group it all together. Does creating smaller and smaller stories become detrimental to productivity?

There is some strong theory and practical reasoning behind when a user story is too small to the point where it incurs higher costs than if it was larger. For that, we have to look at bits of queueing theory and also examine the impact of batch sizes on throughput and cost. There are two important ideas to consider when making such decisions: transaction cost and holding cost. For the purposes of this post, I’ll use the word feature interchangeably with story, and the two can be viewed as the same.

**Transaction Cost:** The transaction cost of completing the feature is time and money spent on the feature such as creating the requirement, developing it, writing unit tests, setting up test data, writing functional tests, and releasing it. Transaction costs can be argued to be economies of scale, as the more features are delivered, the cheaper it is to develop each feature. This is intuitive as costs related to testing, infrastructure, releasing, will spread out over each feature and become cheaper overall. For example, you might automate setup costs for the test suite so that adding more tests to the suite will be very cheap than the first tests that were created.

**Holding Cost:** This is the probabilistic cost associated with the risk of “holding” features back from development and opting to group them into larger features. This cost could result from increased coupling of requirements, introduction of dependencies, larger features costing more to test, delayed feedback resulting in incorrect implementation, and more. This cost is generally a linear function of feature size which is intuitive, i.e., the bigger the requirement, the greater the chance something might go wrong. Note that it could be argued that this can be logarithmic or exponential, but we’ll stick with linear as it is the least controversial take.

Visualizing these two costs and adding a total cost curve looks something like a traditional and very familiar U-cost optimization problem:

![](https://cdn-images-1.medium.com/max/800/1*pBlffjxJ-FNoJJstfMtd3w.png)

Mathematically, the total cost is simply:

_Total Cost = Transaction Cost + Holding Cost_

Some key points:

*   The total cost is a U-shaped function which immediately suggests that there is a sweet spot where total cost is minimized.
*   The feature being too small or too big results in a less-than-ideal cost.
*   The ideal cost (i.e., the ideal size of a feature to develop) is when the slope of the total cost curve is flat. Mathematically, this equates to the derivative of the total cost curve equalling zero.

It is relevant to call out that the sweet spot is more of a range than a point, especially in a creative field like software development so we need not be exact in our hunt for optima. The math is detailed but once we slog through it, the theoretical optimal feature size is:

![](https://cdn-images-1.medium.com/max/800/1*lP7gfSeAIDAamZ9aQbpMNw.png)

_IdealFeatureSize_ is essentially the size of the story. It is unrealistic to think that we can apply such an equation on a day-to-day basis when deciding how to organize work, but there are some principles we can use when informing our judgement on how big we need to make stories. To get a complete view, we need to have an understanding of queue size, capacity utilization, and its impact on cycle time (or throughput), but that’s for a later date. Just looking at the above equation, we can take away a couple things:

*   If holding cost is high, then create smaller stories. This could mean the risk of receiving delayed feedback is high, dependencies are unclear, high-cost resources are under-utilized, time-to-market is important, etc.
*   If fixed cost of developing a feature is high, then create larger stories. For example, testing is entirely manual and there is high data setup costs. Or there is a high price to pay for a security code scan, so cost needs to be minimized.
*   Though the equation suggests that larger stories are more acceptable when there are a large amount of features to be developed, the emphasis from a software development perspective should be on reducing fixed and transactions cost (e.g., automating testing, releases) so that we can release sooner.

Taking this a step further, smaller stories also translate to smaller development queues, which in turn translate to better capacity utilization, which eventually influence cycle time. All things being equal, it’s the reduction of cycle time while delivering quality that ultimately matters in software development. If you are interested more on such topics, I highly recommend [The Principles of Product Development Flow,](https://www.amazon.ca/Principles-Product-Development-Flow-Generation/dp/1935401009) which dives deeper into these concepts with excellent intuitive and mathematical rigor.

The best gains we can make is focusing on reducing transaction costs, and this is where automation plays a significant role. Automated testing, continuous delivery workflows, behaviour-driven development, and countless other techniques all focus on reducing the transaction cost of feature development.

On the other hand, holding costs are rotating upwards on the graph above, as the cost of not releasing features fast enough is becoming more expensive. Time-to-market is often more important than feature-completeness, which is a source of conflict for developers and product managers.

Overall, it benefits decision-making when these perspectives are considered when accounting for feature scope, prioritization, and risk management.
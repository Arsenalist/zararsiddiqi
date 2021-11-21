---
date: '2021-11-20T09:00:00.000Z'
title: 'Leading Indicators'
description: Leading indicators can offer early insights into whether the investment is worthwhile.
categories: ["metrics", "mvp", "leading indicators"]
---

There are two main types of indicators that we use to measure products. The most common method is to build something and then measure how effective the product was at achieving its goals. These are lagging indicators because they're only available once the investment in the product has happened and its built to a degree where it's available to users. Thus they are expensive. The second method is focusing on metrics which can predict whether what you're thinking about building is viable. These are leading indicators.

We are familiar with lagging indicators with common ones being daily active users, revenue, products sold etc. However, leading indicators are a little more nuanced. Take for example an interior decoration application that allows you to see how a space looks like with different types of furniture. A leading indicator which might indicate success could be:

- How many new houses are being purchased in a city?
- How many ads are being posted for interior decoration services on Kijiji?
- What does Google Trends say about the keyword "design room with furniture online"?

More specific to the software, leading indicators that A/B tests could answer are:

- Having been prompted with the value proposition, how many visitors click on "Learn more..."
- Would people download free designs or want to customize their own?
- What percentage of people want to speak with a designer compared to those who want to try the application?

Leading indicators can provide great insight at a fraction of the cost of lagging indicators, yet we rarely talk about them during product inception, and even less while developing. One big reason is that we are conditioned to not think about leading metrics because of the ease of which data can be collected.

Analytics tools like Google Analytics have made it so easy to integrate and track large amounts of user data that it has had an unforeseen effect: instead of teams using these tools to apply analytical rigour, there is a tendency to "integrate and forget". After all, if you're collecting EVERYTHING the user does, why bother spending time thinking about what you're collecting?

In economic terms, the cost of measuring everything is so low that we measure everything but analyze little. Just by adding a line of JavaScript in an application we now have troves of data at our fingertips. It's tempting to leave it at this and later figure out what data we actually need to analyze. This approach has two main problems. First, it diminishes the importance of the team having a conversation about exactly what behaviour they are trying to optimize for. Having a hypothesis of user behaviour is a critical activity which positions the team to think about customer behaviour from the start instead of as an afterthought. Second, it floods the team with data without direction on what to look for.

So how do you get a team to have conversations about leading indicators? An easy way is during planning. More specifically, we can come up with leading indicators by hypothesizing the implications of an indicator. For example, if we see a upwards trend in the number of people offering interior design services on Kijiji, we can connect this observation to an A/B test to validate whether people really are looking to design furniture online:

	1. Variation 1: Create a Kijiji ad offering interior design services to see if you get enough calls
	2. Variation 2: Create a very similar ad but this one has a link to your website which claims to allow you to design your own space

If #1 wins then perhaps people want experts to come give them advice. If #2 wins then there may be an appetite for such an application.  Either way, you have only invested the cost of a couple Kijiji ads to gauge interest in the product before committing to an expensive build.

This is MVP-thinking. We tend to associate MVPs with software releases, but they can be anything that allows us to execute a build-measure-learn cycle. And the "build" doesn't have to be expensive if we utilize leading indicators since they promote cheaper MVPs. 
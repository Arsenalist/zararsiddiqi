---
title: "A Short Analysis of an Analysis: YouTube Trending Videos"
description: A short critique of an analysis trying to peek under YouTube's trending algorithms.
date: '2020-07-11T09:00:00.000Z'
categories: ["youtube", "video", "engagement", "social media", "data science"]
---

People have been trying to peek underneath "black box" algorithms for decades. The most popular one is the quest to crack how Google's search ranking algorithm works so your article/product is as high as possible. With no knowledge of how the internals of these algorithms work we are forced to observe the _output_ of the algorithm based on the _inputs_ in hopes of observing trends and tendencies. Though sometimes companies provide guidance on how content is prioritized their precise workings have been a mystery. For example, Google stating that faster pages will receive higher rankings.

Brute force strategies like content farms to more specific ones like keyword tailing are used to find an edge and "trick" the algorithm.  Taking an economic view this can be viewed as a "free market" enterprise where agents (content publishers) are trying to find a competitive edge in the market (ranking) with novel strategies eventually being priced into the algorithm. It is a game of cat-and-mouse where the market is really a company instead of public enterprises.

This game makes for some very fun statistical analysis (aided by machine learning toolkits) to decipher just how to structure your content so it is prioritized higher. The latest such endeavor is how to title your videos so they have a higher chance of appearing on YouTube's trending videos. Some findings from 2019 data as summarized by Hustle based on Ammar Al-Yousfi's very enjoyable analysis:

- Include the current year and the words "video," "vs," "game," "new," "highlights," and "first" in your title.
- Title length should hit between 36 and 64 characters.
- Use tags in your video. Almost all trending videos have tags.
- Show a person in the video thumbnail.

On first reading one can surmise this as guidance on how to structure videos to have them appear on trending lists. But the question here is whether trending videos happen to have more tags or do more tags cause the video to be trending? This is not answerable until we actually examine the number of videos that are not trending through random sampling which the analysis does not do. This is a significant shortcoming of any such analysis. Therefore, findings like the above if treated as guidance can mislead.

Examining the correlation matrix we can see some self-fulfilling prophecies such as more views, likes and comments being highly correlated with being on the trending list. These can be safely ignored because it is extremely probable that these are high because these videos are already on the trending list, not what caused them to be there.

!["YouTube Trending Videos Correlation Matrix, ammar-alyousfi.com"](/images/youtube-trending-videos-correlation-matrix.png)
YouTube Trending Videos Correlation Matrix, ammar-alyousfi.com

So the real question here is should we treat this as guidance?

I'm going to cop-out and say "it likely doesn't matter but it most likely can't hurt". I want to explain this (to myself more than to the reader).

It doesn't matter because `engagement/time period` is likely the primary indicator of why something might be considered trending. It is far more valuable to spend our effort trying to either increase the numerator or decrease the denominator. If the latter doesn't sound intuitive I'm thinking publishing a video when the topic is hot (e.g., post the highlight pack right after the game ended).

Of the findings, the only one that is relevant to our equation is the picture in the thumbnail as that can be a strong visual that works at a psychological level to trigger behaviour.

I say that it likely can't hurt because there is a chance that this can hurt. Companies will sniff out and penalize gaming of algorithms (like content farms) though in this case the suggestions are so vanilla that they may get classified as unremarkable in any algorithm.


--

- https://ammar-alyousfi.com/2020/youtube-trending-videos-analysis-2019-us
- https://thehustle.co/07102020-data-scientist-analyzed-youtube-videos/
- https://www.wordstream.com/long-tail-keywords
- https://www.wired.com/2016/02/google-will-now-favor-pages-use-fast-loading-tech/
- https://www.vice.com/en_us/article/3dkmwv/the-100-million-content-farm-thats-killing-the-internet
- https://en.wikipedia.org/wiki/Content_farm

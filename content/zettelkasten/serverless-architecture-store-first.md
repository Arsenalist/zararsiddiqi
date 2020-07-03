---
title: Serverless Architectures and Storing First
description: API, Compute and Store. Or API, Store and Compute.
date: '2020-07-03T09:00:00.000Z'
categories: ["serverless", "architecture", "user experience"]
---

If software development is about trade-offs then one of the ones made by a asynchronous serverless architecture is that between architectural complexity and user experience. The user wait time when invoking heavy operations is reduced and architectural complexity is increased. Instead of a synchronous call where request/response across all layers are queued up and waited for, we store the information on disk and process it later. The user interface polls the system to return processed results.

It can also be debated that architectural complexity is increased because we have split our processing in smaller "lambda" functions instead of a monolith which contains all the compute logic. On the other hand monoliths can make version control easier as dependencies are reduced. Either way you look at it this can be distilled down to whether we write first and process later, or process while keeping the user waiting.

All other things being equal, thinking about a single user operation (translate text) as streams that require multiple types of processing (translate to a culture, convert to audio, store) gives the code a higher chance of following the Single Responsibility Principle (SRP), which makes it simpler.

Whether to use a serverless architecture can also be influenced by the diversity of the application, notably how many services it relies on to produce results the user expects. As a rule of thumb the more diverse the landscape is the more complex it is. As this complexity increases the probability of failures also increase. How to gracefully handle those failures while keeping compute logic of each service separate is something that comes more naturally to serverless architectures than traditional client-server synchronous models.


https://www.youtube.com/watch?v=V_tHVUHKqZQ
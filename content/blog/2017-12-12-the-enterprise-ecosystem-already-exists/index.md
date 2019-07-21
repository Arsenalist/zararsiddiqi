---
title: The Enterprise Ecosystem Already Exists — They’re called EUCs
description: When an intern builds your mission critical system.
date: '2017-12-12T21:52:12.557Z'
categories: []
keywords: []
---

![](https://cdn-images-1.medium.com/max/800/1*gRwCDFm0Zrzng6CDtAHyqQ.jpeg)

We all know of the intern who ended up hacking something over a summer only for that tool to become something of a necessity in day-to-day business. I even know of one business unit which relies on a tool created in Microsoft Excel ’95, which has become so important that a Windows NT machine is still kept around just so it can be run every week. If you’ve worked in business units of medium-to-large organizations, these stories are common. In fact, they even have a name — _EUC Hell_.

Large organizations have two types of technology systems:

1.  IT-supported systems which are subject to governance, mapped to cost centers, and maintained by its owners.
2.  Unsupported systems built by ancillary departments born of a need that systems in #1 could not fill in a time or cost-effective manner.

The desire of technology departments has always been to centralize and control access to lifeblood systems that contain business critical data. This control has manifested itself through business cases, change requests, and other processes which users need to go through before a business need can be fulfilled.

Due to the low velocity at which technology departments move through their governance, in-take, development, and testing processes, users get impatient and seek quick fixes, which is when the path of least resistance is taken. This can be anything from read-only access directly to the database, a nightly batch job that takes data and dumps it into MS Access, or a screen-scraping tool which keeps the business happy enough so they avoid going through the bureaucratic process of IT intakes. This proliferation is frowned upon and discouraged by technology departments, but has become the norm of doing business.

These unsupported tools, also called EUCs ([End User Computing systems](https://en.wikipedia.org/wiki/End-user_computing)), are innovative solutions which solve a very specific problem in a very specific context. They’re narrow enough to be useful, but not flexible enough where they can be reused to solve other problems. Over time, these turn into indispensable and poorly supported applications (e.g., lack of version control, code reviews, upgrade patches) with knowledge concentrated in subject matter experts and interns who’ve plowed away at it over the course of many a summer.

If a change to the supported lifeblood system is needed, EUC integration points are broken, and at this point organizations can either in-house the functionality into supported systems, or maintain status quo by continuing to feed EUCs. This is usually a long and painful political process. The choice of centralization comes with high cost, low change velocities, while the cost of decentralization are unreliable and weakly linked integrations, low quality software, and misaligned development processes across the enterprise.

There are several approaches of how to improve this application topology, and the one that I’d like to focus on is the concept of the ecosystem. We often view ecosystems as independent developers and firms building on top of APIs and platforms provided by Amazon, Google, and the like. They serve as prime examples of the power of platforms in how they enable innovation in existing businesses while creating new and exciting business models.

There is a lot the enterprise can take away from this model, because as companies grow, the needs of internal users grow with it. Greater collection of data leads to greater curiosity and an organization’s supporting and business units are eager to get at the data. We saw a tremendous push over the last twenty years towards Business Process Management tools to automate, measure, and optimize business processes, and though they come with inconvenient limitations such as steep learning curves, organizations have simply learned to live with them. There are better ways, and [this article which discusses Gap Inc.’s experiences building an internal ecosystem is a worthy read](http://fasterthan20.com/2016/10/building-ecosystems-in-organizations-lessons-from-gap-inc/) on how to structure thinking before embarking on creating ecosystems.

The key shift in strategic thinking that organizations should consider is that instead of technology being the _provider_ of services, it should become the _enabler_ of services. This is a big shift in thinking because generally technology has followed a very linear process of requirement => intake => analysis => build, with the entire group being a bottleneck for the larger organization’s growing needs.

In the provider structure, technology’s role is to build, curate, and maintain applications which have been approved through legislative process. In the enabler structure, its role is to curate data and expose services which others can build applications on, therefore making EUCs the norm rather than a problem which must be dealt with every few years.

EUCs have long been the red-headed step child of the enterprise, and their innovative nature has been severely understated. They are always born of a need that, although at times short-sighted, no doubt addressed a very painful problem. As organizations look to be inspired by innovative ideas, the don’t have too far to look. The next step here is to examine these EUCs and see what can be done so people can create more of them, not less. If organized correctly, there is great potential for business units to contribute their own services and APIs ([internal UDDIs anyone?](http://searchmicroservices.techtarget.com/definition/UDDI-Universal-Description-Discovery-and-Integration)) where other units can use them, thus creating a networked ecosystem instead of the hub-and-spoke type.

There are, of course, aspects of governance, security, development support, and knowledge-sharing to name a few that need to be considered. However, if if the principles followed in the Gap Inc. article are followed, it puts the organization on the right trajectory. Three key ones and how they apply here:

1.  **People and context before process and model:** Instead of following the process where a centralized entity executes in-takes, does analysis, etc., view the problem through the lens of people who are best able to solve it. Then empower them by giving them the authority, safety net, and the necessary financial resources to execute.
2.  **Learn through the work:** When diverse units create diverse products, there is a tremendous opportunity to share knowledge and learn about other units across the enterprise. Whether it be software development patterns, tooling, or agile frameworks, there is no shortage of information to be shared. Shortening feedback loops and prioritizing horizontal knowledge-sharing is a necessity for an ecosystem to thrive.
3.  **Democratize strategic thinking and innovation:** The people with the best and most innovative ideas are unlikely to be found in management positions. The mechanism to crowdsource ideas and applications needs to not just be promoted, but also supported centrally, similar to a parenting advantage which business units can benefit from. Although business strategies are set at the C-suite level, strategy and innovation should be travelling “upwards” far better than it is today.

—

The next level of discussion would be to discuss models on what the journey of an enterprise is from going to a centralized hub-and-spoke model to a distributed and connected one. That, we’ll save for a future post.
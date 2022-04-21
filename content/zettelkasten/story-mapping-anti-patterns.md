---
title: 5 Story Mapping Anti-Patterns
description: Story Mapping can be valuable but can just as well lead to a whole lot of confusion.
date: '2022-04-21T09:00:00.000Z'
categories: ["story mapping", "agile", "prioritization"]
---

Story Mapping can be a valuable planning exercise which can help prioritize work while centering the conversation on the customer. It can help a team align on an MVP, create releases, identify dependencies, prioritize stories, and generally lean out the product. It does this by bringing about a multitude of opinions and ideas in how to deliver value to the customer, and having a healthy discussion around the possibilities.

Having seen many story maps in the wild, I've compiled a list of 5 anti-patterns to avoid when using story maps. 


### Creating them in isolation
If one or two people are going away and creating a story map on their own and then presenting it to the team, it is sure to be an unmitigated disaster. There is a strong anchoring bias in these situations and the team will treat the story map as a concrete artifact rather than a pliable one. Even though the effort may be well-intentioned, the team will feel that the major decisions have already been made and that they're being told what the plan is, not asked what it should be.

**What to do instead:** Create the story map from scratch with the full team present with the help of an experienced facilitator.

### Creating a WBS instead
It is easy to fall into the trap of identifying the work you're doing in a hierarchical format, and just label the hierarchies Themes, Epics and Stories. This is a big mistake because the story we are telling in a story map is about the user. It is from the user's perspective that we have to look at the interactions, and then decide what work to do to enable that interaction. If we skip the part about centering on the user, then we are essentially creating a WBS. This may help us organize what needs to be done, but doesn't help us see the customer value of the work we have to do since it is not tied to a user's behavior. This also hurts prioritization as we have little context where the user impact of the work we're doing can be discussed.

**What to do instead:** Start by identifying the users (or personas) of the product and outlining the main interactions you anticipate them having with the product. Then talk about what's needed to enable those interactions. Then think about the simplest way to enable those interactions (i.e., your MVP). 

### Not cutting releases
One of the main benefits of using a story map is that it visualizes all the work to be done. However, we don't want to actually do ALL the work but only the highest value work. Story mapping enables this by using horizontal lines to demarcate releases, i.e., groups of prioritized functionality that is sequentially delivered and aims to enable the customer interactions we want. Ultimately, we want to end up in a position where a lot of the work on the story map remains undone while delivering sufficient value through the work that was done. To do this we must incrementally deliver value, and without explicitly cutting releases it becomes a big bang approach*.

**What to do instead:** Identify the stories that you want to deliver first by carving out a release. While working on those stories, avoid working on anything below the release line. 

\*Unless you're in a continuous delivery environment where stories are sent to production when they're done. In those situations, cutting releases becomes less important as we are getting feedback much more quickly.

### Jumping into Jira
 It is best to use a brainstorming tool rather than a project management tool to create story maps. The Story Mapping Jira Plugin may be one of the saddest things I've ever seen in software development. Electronic tooling works well when story mapping remotely but a tool that allows for quick and easy change of story mapping items (e.g., releases, stories, ideas, thoughts, dependencies) is essential. Changing, reordering, deleting, and creating new items in Jira is a slower and much more painful process than doing it in a tool like Mural. 

**What to do instead:** Use a brainstorming tool, and only when the team has decided what stories to implement, shift them to the project management tool in small batches (don't bring EVERYTHING into Jira). We are trying to maximize the amount of work NOT done while delivering sufficient value, so keep the things you don't intend to work on in the near-term outside of Jira or else they become a form of waste that you have to deal with every time you look at your backlog.

### Staying married to your stickies
Just because it made sense to a sticky to exist at some point, doesn't mean it should still exist. Team conversations around a story map should result in addition, deletion and editing of the stickies on the board. There is a tendency to add stickies to the story map while keeping useless ones "just in case". This is not a good approach and can result in proliferation of stickies that don't have much value, and adds confusion to the map by making it unnecessarily verbose and large.

**What to do instead:** Tear up the sticky if the team doesn't feel it's relevant anymore. If that is too scary of a proposition, create a separate area somewhere (like a story map Recycle Bin) to dump them there just for your own psychological safety. But do take it off the story map so you don't look at the same sticky over and over again, and wonder what it means three times a week. That is wasteful.


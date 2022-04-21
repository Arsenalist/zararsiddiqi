---
title: Simple Practices to Improve Software Development Teams
description: Some simple ideas and practices that can improve any team.
date: '2021-12-08T09:00:00.000Z'
categories: ["agile", "software development", "team building"]
---

This assumes a team where we have the following roles: Product Owner, Developers, Quality Assurance and a Business Analyst.

### QA tests from the same spec as developers
Whatever verification QA does should already have been done by developers. 95% of things that QA checks should not be undergoing a test for the first time, but developers should have already checked it. The remaining 5% are exceptions and should ultimately be reduced to 0%.

The best way to achieve this is to get a common language between developers and QA by having them write the acceptance criteria, and this not be an exclusive responsibility of the BA or PO. Both developers and QA will check the AC to mark completeness.

**Have developers show how the software meets the acceptance criteria before committing/deploying code**
Avoid the practice of committing code, waiting for it to deploy somewhere, and then QA reviewing it. This makes the test-fix-test cycle extremely inefficient. Developers should pair with QA during the story to verify that they meet AC. This should be done locally (e.g., on `localhost`) before any costs related to deployments, check-ins are incurred. 95% of defects will be found at this stage.

### Discuss the 'how' in detail in planning, specifically about how this a story will be tested

Resist the tendency to rush through planning by only discussing and understanding what the requirements are. Have a thorough discussion on how a story will be tested. There is a tendency to use a manual UI-based end-to-end test to verify every story by default. This is wasteful as end-to-end tastes are inefficient (e.g., data setup, deployment) and slow to run. For example, if we're making a content change on the UI, it only requires verification on `localhost` and nothing more. Or if a service changes how it validates a date, a unit test for it is more than sufficient, we don't need an E2E test for this minor change. We have to balance the cost of the test versus the risk of something going wrong. That risk is best mitigated through unit testing, not E2E testing.

### Reduce the queue sizes in "testing" columns
Reducing queue size is a good practice everywhere, but especially if a team has decided to have a separate testing column for QA or PO. Avoid the tendency to wait for more things to be "dev complete" before you test. This has the effect of delaying feedback, which means you find bugs later in the iteration and rush through things the last couple days of a sprint. Instead, install a Work in Process limit on this column to something small (like 2) meaning that we never put more than 2 items in this column. This will have the effect of the team getting more stuff to 'done' earlier.

### Prioritize the sprint backlog, not just the product backlog  
Avoid the tendency to treat all things in the sprint with the same level of importance. Just like we sequence the work in the Product Backlog, the same has to be done in a Sprint Backlog. This ensures we get maximum value out of the sprint and don't inadvertently defer high value items to later in the sprint.

### Go from right to left on your board during stand-up
Instead of the three traditional stand-up questions (what you did, what you will do, any blockers), run the standup by going through each item from right to left, with right being the stuff that's closest to get done. This ensures that you're talking first about finishing work than starting work. The work on the right side of the board will always be more important than on the left because if you prioritize your sprint backlog properly, the important work will start first as well. This also ensure that we talk through all the work that's in progress.

### Planning is not where planning ends  
We may discuss a lot about the work to be done in planning, but that is not where planning ends. The team will undoubtedly discover new things during the sprint and the PO has to be available to clarify acceptance criteria, potentially reduce scope, provide business context etc. during the sprint. Open office hours right after stand-up for the PO every day where the team can show him or her progress and ask for clarifications is critical to resolving impediments.

### Reviewing Pull Requests is a team responsibility, not one or two individuals
Reviewing code is a great way to learn about the application you're working on. Don't deprive your teammates of this knowledge by only having select people be responsible for reviewing PRs. Where possible (and it's usually possible everywhere), do group PR reviews where the person submitting the PR walks their teammates through what they are doing. This maximizes the communication and information being shared, resulting in everyone learning something and improving themselves. Want to go a step further? Use Pair Programming. The only thing more effective than Pair Programming is Mob Programming.

### Avoid interaction and visual design becoming a BRD
The design is an informed opinion on a solution. It must not be treated as a requirement. The POs job is not to simply chop up the design into smaller stories. It is to critically think about what aspects of the design are important. For example, if you are implementing a table which shows your recent credit card purchases and there are 10 fields for which to search across, the PO should not blindly implement all 10, but think about which three are the most important and then weigh the remaining 7 against what else is in the backlog. If we do this meticulously and consistently, the development effort will reduce by 50% while still delivering 95% of value.

### Don't create defects for things that in sprint
If QA finds a defect for a story in the sprint they should reach out to the developer directly and address the defect together. Don't create JIRA tickets to communicate with your team on these occasions. Defects can only be created on things that are actually done. In this case the story is still in progress.  Creating JIRA tickets to reflect defects for in-sprint work creates a needless communication barrier and generates a tremendous amount of waste, while discouraging team communication. 

### QA should not use screenshots/attachments as "evidence" of test
In a team where everyone trusts each other your word means something. When you say something is done, expect your teammates to take your word for it. You do not need to attach documents, screenshots etc. to "prove" that you have tested the story. The story's automated test cases written by developers (e.g., JUnit) are enough. Nobody usually looks at these attachments in Jira anyway since POs verify things by using the software instead of checking screenshots of how someone else used it. This can save QA time. 
  

### Rebase or merge your code daily
If you are using feature branches, either merge your feature branch to the main line daily OR update your feature branch from the main line daily. If you do neither, you're asking for trouble by delaying integration. It doesn't matter if you use `git rebase` or `git merge` to do this, but the delta between main line and feature branch should not exceed a single day.

### No story should take more than two days  
If any story is taking more than 2-3 days to go across the board, the story is either too big or the developer/team needs help implementing it faster. Pairing (two developers or working on it together) or mobbing (3 or more people looking at it together) is the way to go. This will 100% get things done faster even though it may sounds like a waste of having too many people working on one story. There is no doubt about it.

### Retrospective on defects
Defects should be discussed by the team and specifically the question, "How do we prevent this in the future?" needs to be asked for all defects.  The main principle to keep in mind when solving for this is to find defects at the earliest stage possible, i.e., "shift left". This can be done using test-driven development, pair testing, focus on unit testing over E2E, involving PO/business partners early (during "in development" phase, etc.

### Run security scans as part of the build
Any static code analysis should be part of the pipeline and deployment process. Static code analysis should be a step in the pipeline, not an activity to be done manually when we release.


### Test Downstream system using integration tests
Integration tests are a subset of unit tests. Unit testing should account for upwards of 90% of all quality controls (not end to end manual testing). To test the behaviour of your code which accesses downstream system, capture a real response and store it to file. Then create variations of that file to simulate other expected responses from the downstream service. Assert that the code behaves correctly for all these responses in the integration tests. WireMock is a great tool for this.


### Avoid initializing Spring Context in tests
It is tempting to initialize Spring context to setup your test. This is usually slow and not needed as you can use Mockito and mock out the dependencies of your classes without incurring the performance overhead of spring in your tests. For example, you don't have to rely on Spring to inject a  `@Autowired` variable. You can simply mock it using `Mockito.mock()`.

### Unfinished work behind feature toggles (remember to take them out)
Feature Toggles are an excellent mechanism for deploying more frequently and reducing the risk of having multiple branches hanging around. They allow you to release in small batches, reducing the overall risk of the work. However, as more functionality is completed, they become redundant and need to be deleted. If they're not taken out, they become a form of technical debt.
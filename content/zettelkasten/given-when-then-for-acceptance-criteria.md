---
date: '2021-08-25T09:00:00.000Z'
title: Using Gherkin for Acceptance Criteria
description: Given/When/Then has power beyond just writing  tests.
categories: ["acceptance criteria", "user stories", "testing"]
---

I've had a mixed experience working with [Gherkin](https://cucumber.io/docs/gherkin/reference/) and Cucumber, and the culprit has usually been the step definitions. Consider the following scenario:

```
GIVEN the client is logged in
WHEN the client accesses their portfolio
THEN the client sees their balance
AND the client sees an option to transfer funds
```

This requires four methods to be declared which implement each step. The implementation of these methods tends to result in UI-tests as that is often the natural way to look at software. Writing unit and component level tests for this scenario requires a discipline that is often lacking. Many developers also see this as overhead and an unnecessary abstraction layer.

However, even if we choose not to use Gherkin to formulate our tests, there is still value in using Gherkin when writing requirements and more specifically, acceptance criteria, especially when writing them for state and workflow management.

Consider the following flow for a ticketing management software. After a ticket is created it can go through several different states depending on some business rules:

!["State Diagram for Ticketing System"](/images/state-diagram-given-when-then.jpg)


It is fairly easy to write Gherkin for these states. For example:

```
GIVEN that a user wants to create a ticket
WHEN the ticket is created
THEN the ticket status is set to 'Created'
```

OR

```
GIVEN that a ticket is in 'Under Review' status
WHEN the user approves the ticket   
THEN the ticket is in 'Approved' status
```

Let's now layer in some more complex business rules. Let's say that only admin users can approve tickets and and if any other user type tries to approve, an admin is notified. We can write two scenarios for this requirement:

```
GIVEN that a ticket is in 'Under Review' status
WHEN an admin user tries to approve the ticket
THEN the ticket is in 'Approved' status
```

```  
GIVEN that a ticket is in 'Under Review' status
WHEN a non-admin user tries to approve the ticket
THEN the ticket remains in 'Under Review' status
AND the admin user is notified of this attempt to change status
```

Let's now consider a business rule which says that a ticket older than three days which is in Under Review status must immediately be assigned to a supervisor for immediate action.

```  
GIVEN that a ticket is in 'Under Review' 
WHEN 72 hours have passed since it was moved to 'Under Review'
THEN re-assign ticket to supervisor
AND notify ticket creator that supervisor is looking at it
```

Let's do one more. Say we have a rule that tickets related to _Security_ can only be worked on by Alice and that if Alice already has three tickets assigned to her, then it must go to Bob.

```
GIVEN that a Security ticket is created
AND that Alice has less than three tickets assigned to them
THEN assign the ticket to Alice  
AND set the status to 'Created'
```

```
GIVEN that a Security ticket is created
AND that Alice has more than three tickets assigned to them
THEN assign the ticket to Bob  
AND set the status to 'Created'
```

We can see that we can layer in all kinds of complex business rules to this workflow without muddying the requirements. The power of the `GIVEN` clause allows us to set preconditions on the requirement so that the team knows exactly what case we are dealing with. If we are able to write our requirements using this syntax, it will also help us keep our user stories small because splitting stories would just be a matter of splitting out the acceptance criteria.

Even though developers may not use Gherkin/Cucumber to write their tests, having the requirements in this format makes it clear what the minimal set of tests they should write.

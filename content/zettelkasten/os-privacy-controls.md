---
title: OS Privacy Controls
description: The OS is in the best position to protect privacy.
date: '2021-03-05T09:00:00.000Z'
categories: ["privacy"]
---


The challenge with maintaining privacy is that when one provides information to a trusted party, that party unintentionally relays it to other parties.

For example, you give your number to a friend who has no intention of relaying it to marketers or any other third party. Yet, when that friend performs a "Login with X", they will send your information to X without intending to do so.

Looking at it a level deeper this is the flow of information:

- You
- Your OS
- App you used to share your info
- Network
- Your friend's OS
- Your friend's app where they read your info
- App your friend used which now has that info

Generally speaking, the later the security measures are applied in this chain, the less effective they are in protecting you. The security on your friend's OS is there to protect them, not you. The encryption on the network is there to transfer the data securely and doesn't concern itself with where that data will eventually end up.

Individual applications aren't terribly concerned with your privacy as they're usually optimized to make a profit by competing for your attention. We can try holding them to standards by passing laws like GDPR, but that requires thousands of companies to align and adhere to protocols that are not enforceable via a technical implementation. Privacy needs to be built-in, not complied with.

Decentralized, encrypted peer-to-peer networks offer solutions around this, but they are heavy on friction and there's no path to mass adoption. The most feasible way to keeping information private is for the OS to take responsibility.

One way is this:

- Have the OS store an indicator whether users are comfortable sharing personal information with third parties.
- If it's a yes, then that's more or less the current state and we are at the mercy of the app's policies and procedures, and rely on them to do the "right" thing.
- If it's a no, then anytime a user's information is being requested, the OS can step in and filter it out.

For example, if Anne has Bob as a contact and Anne is trying to "Login with X", the OS detects that Bob had answered a "no" to the privacy question on his phone, then Bob's information would be filtered out in any information that is shared with X during Ann's interaction.

This is certainly a walled garden situation because you're reliant on the OS, but it certainly beats the current state where apps request all kinds of permissions which user's blindly agree to, leaving them exposed.

Looking at the two main mobile operating systems, Android and iOS, I have to wonder which of these is more likely to implement such a mechanism. Their business models can provide some clues. Google's business model is built on advertising so it is not in their interest to restrict such information sharing as it's a direct hit to their top line. Apple isn't in the advertising business, they're more in the hardware business and more likely to care about this. Not saying they will, but they're more likely than Google.

A similar idea was floated by [otterley on Hacker News](https://news.ycombinator.com/item?id=26286561):

>Recently Apple added a feature to iOS that allows you only to allow selected photos to be accessible by an app. This allows the user to respond positively to an access request, but allow the app to see only a subset (or zero) actual photos.

> It would be a very useful feature for Apple to do the same for contacts: the app would think it's getting access to your contacts, but would only actually receive a subset of them, and be none the wiser. This would be a tremendous boon for privacy.

I would sign up for this.
---
title: "TeamAroundTool"
description: The model of creating dedicated teams to manage enterprise assets used by internal users needs to be revisited.  
date: '2020-01-01T09:00:00.997Z'
categories: []
---

![Image: Unsplash.com](https://images.unsplash.com/photo-1470753323753-3f8091bb0232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80)

There's a pattern of organization sub-structure that has become a warning sign of deeper dysfunction. It's the idea of assembling a team to manage access to an enterprise asset, e.g., a tool.  Common examples of putting a team around a tool include analytics software, API gateways, performance testing tools and application security software. Once you peel back the onion there appear to be two common reasons why this approach is taken:

1. The way to operate this tool is prone to subjectivity or perceived to be poorly understood
2. The tool is provided by a vendor with a complex relationship to manage

The amount of subjectivity in a process is proportional to the desire to standardize it. If there are multiple ways to perform the same task from the same tool there will be a desire to perform them in similar ways. This can be due to perceptions of economies of scale, or more likely, control mechanisms being seen as moderators and drivers of efficiency. All are valid points in theory but in practice they introduce a vast array of dependencies which must be managed, and ultimately result in their own process controls around it. It is tempting to think that usage complexity can be reduced by adding people and process - notably an intake and scheduling mechanism for clients to use. The reality is different.

The approach creates distance between the clients that seek to gain value the tool itself. This approach also builds a codependence on people managing the tool rather than increasing knowledge of the offering. This is dangerous. Knowledge decay in the maintainers is risky enough and it is compounded by the structure in place which sees external expertise (e.g., clients, other departments) as poorer in quality of their own. There is also an escalating commitment to the tool built through years of emotional connection. At this point we're entering traditional change management talk where the reluctance to inspect and adapt is overcome by familiarity of the tool - after all, why look for something else when what we have "works"? When we have trained people, a working process and a standard pattern which has been followed for a long time, the inertia becomes overpowering.

Most of the time this is not an internally-built software but one supplied by vendors. There may be a number of elements at play which make the relationships complex: golf course deals, budgeting protocols, customizations to manage, vendor history, and a host of other trade-offs and compromises that form the basis of any relationship. Basically, a lot of hysteresis effects.

Ultimately, the desire for cost predictability (not necessary, reduction) seems to be one of the main drivers of this approach. Benjamin Disraeli once said that most people will choose unhappiness over uncertainty, and that is often the case here. The unhappiness of the clients voiced through frustration and experienced through delays is accepted as long the general cost of operating the tool is predictable. What is lost in the equation is the organization cost that is incurred on behalf of clients trying to get value out of an enterprise asset. Asynchronous and low-bandwidth communication patterns, spotty knowledge of features, and heavyweight process controls all carry a cost which is not measured, let alone reflected in the cost-benefit analysis when opting for TeamAroundTool.

## If not this, then what?
We can learn a lot from the open source community in how to manage enterprise assets by focusing on the [principles of open source]([https://opensource.com/open-source-way](https://opensource.com/open-source-way)): transparency, collaboration, release early and often, meritocracy and community.

The people interested in the problem being solved can be spread out across the organization. For example, if Google Analytics is the asset which is being managed then there may be product managers, engineers and visual designers that have a keen interest in the areas of experimentation, visualization and analytics. Collaborating within a community of people who have a genuine enthusiasm of the subject matter and a stake in the outcome is crucial. It is at the intersection of knowledge and interest that we can find curators of these assets and promote meritocracies rather than arbitrary hierarchies. Flat management structures like communities of interest (not a centre of excellence) can take many forms, one of the more popular one being Spotify's guild concept. 

Democratizing the management of these assets is a tough task with people already busy with busy-work. This is not a change that can be made overnight and the [technology adoption curve]([https://en.wikipedia.org/wiki/Technology_adoption_life_cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle)) applies - there will be early adopters that will have the desire to act to improve their current projects. 

The bold step here is to be transparent and open the configuration or code behind the asset to scrutiny. This can be a painful step. For example, if SonarQube is a tool that is centrally managed, opening up its rule sets and policies to public scrutiny with an invitation for conversations (the pull requests come later, hopefully) is a good start towards transparency and building trust. Beyond the artifacts of code and configuration, much like how in open source projects the community has a say into the process being followed, so should be the case inside enterprises. This can only be achieved through a desire to inspect and adapt on the process through which collaboration happens.

The TeamAroundTool is a concept that is rooted in centralization being seen as an advantage. That may have been the case when skills were highly specialized, organizational knowledge concentrated and users less technically mature. The changes in all three areas requires us to revisit this organizational sub-structure and flatten it so that the quality of service and the product is up to the increased expectations.

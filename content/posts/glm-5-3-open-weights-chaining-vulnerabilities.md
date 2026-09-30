---
title: "GLM 5.3, Open Weights, and Chaining Vulnerabilities"
date: 2026-09-30
summary: What Anthropic's GLM 5.3 findings mean when an advanced model that can chain vulnerabilities ships with open weights.
---

[Z.ai](https://z.ai) released its GLM 5.3 model to the public in August. The model weights are open, meaning anyone can download them, run, fine-tune, and modify the model (given you have funds for hardware; ~$500K to buy or ~$60K/month to rent if you know a guy). Anthropic performed some tests on the model and published results on September 29th.

GLM 5.3 is a new "advanced model”. These models (think Mythos, GPT-6) are different. They piece together clues to reach a goal, even if the goal is nefarious. Consider personal home security. Every day, you lock your door when you leave. All windows and doors are locked, and the security system is armed. But for emergencies you hide spare keys in a combination lock toolbox in the garage. The combination is hidden under a floormat nearby.

A user could prompt an advanced model to find a way into the house and be careful to not break the window due to the alarm. The model will try the door, realize it is locked, then shift to finding keys. It will find the toolbox, shake it, and hear something that sounds like a key. After seeing the toolbox is locked, it looks for the combination to the lock. The model finds the combo under the mat, unlocks the toolbox, gets the keys, gets in the house. Oh, guess what? The model is also trained on your security system, so it turns off the alarm without you ever knowing.

This is called “chaining vulnerabilities”. It is the reason these models are being classified differently. Frontier labs, for the most part, tuck models behind an API, so every user is subject to built-in guardrails. Because the access is gated, frontier labs can limit unintended use; like signs of breaking into software. GLM 5.3, on the other hand, is open weight and subject to customization that could allow unintended use. Anthropic noted some targeted techniques dropped GLM 5.3’s refusal rate on malicious prompts from 95% to 6%.

There are a few opinions on Anthropic’s motivation to report on GLM 5.3. One or a combination of these themes usually prevail: (1) Anthropic is genuinely concerned about another advanced model being released to the wild, (2) Anthropic is worried an open weight model will negatively impact their business goals, or (3) Anthropic is setting the stage for government regulation over foreign/open weight models.

It is likely a blend of all three since they all benefit Anthropic. Advanced models in the hands of bad actors can be used for significant harm. Not only would the damage be on primary targets (infrastructure, critical software) but the reputation of AI will continue to tank. It would benefit Anthropic to keep doing this research to educate the community. Most of us are too busy trying to keep up with the onslaught of AI developments and news. The motivation of Anthropic to do the research is not relevant so long as they investigate from a neutral podium and publish techniques and findings.

Anthropic's report: [GLM-5.3 and the spread of advanced cyber capabilities](https://www.anthropic.com/research/glm-5-3-and-the-spread-of-advanced-cyber-capabilities)

*Originally posted on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7511141251480666112/).*

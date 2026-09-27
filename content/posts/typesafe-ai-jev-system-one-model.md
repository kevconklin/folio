---
title: "TypeSafe AI's Jev: A Model That Outputs Numbers, Not Text"
date: 2026-09-18
summary: Jev skips the text-to-structure translation step, which could mean faster, cheaper, and more auditable AI decisions.
---

[TypeSafe AI](https://www.linkedin.com/company/typesafe-ai/)'s new "Jev" model is extremely interesting. It is being described as a "System One" model, different than an LLM since it does not generate text like an LLM. It outputs numbers based on questions you design.

Internal tests on Jev note a 25-40x improvement on speed and 50-450x cut in cost compared to various frontier models when making structured decisions. There is no charge for output tokens which is a logical offshoot of the model's minimalist output format. Jev is still spitting out probability, but the uncertainty is presented in certain terms, allowing other agents to act on the uncertainty and development teams to route based on uncertainty.

LLM-enabled software can not take action on text and relies on a translation service. There must be something built into the app that reads an LLM output, squeezes the text into something structured (like JSON or a Pydantic model), and passes off the work accordingly. It appears that Jev cuts the translation step from the process. Moreover, it drops decision logs wherever they're needed. This seems like a natural on-ramp for placing humans in the loop for critical decisions.

As an example, imagine a patient logging into a medical chatbot to describe some symptoms and make an appointment. Jev wouldn't respond with "The patient's symptoms are chest pain and shortness of breath, let me check what tools I have to route to a doctor " before accessing tools and making more model calls. Instead, it responds quickly with numbers in the backend; `{ 'requires_doctor_review': 'probability': 0.93 }`. The request can then be routed to the appropriate workflow or person without waiting the 10-20 seconds it takes agents to pin down the severity.

TypeSafe AI hasn't released Jev to the public but the attention spent here could have several positive impacts across AI development; including quicker compute times, better accuracy, and easier insight into decisions an AI system is making. If the capability holds up, Jev could have real commercial potential.

- TypeSafe AI's public announcement: [Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- Fun opinion piece on the announcement and capability: [Jev: The Language Model That Won't Talk](https://anthonymaio.substack.com/p/jev-the-language-model-that-wont)

*Originally posted on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7506731015084875777/).*

---
name: wait-what
description: Re-pitches the agent's last message when the user did not follow it, with a line of context first, then ASD-STE100 Simplified Technical English in the words of the project's CONTEXT.md. Use whenever the user shows confusion about what the agent just said, in any wording, such as "what are you talking about", "I don't get it", "that makes no sense", "wait, what?", "huh?", "I'm lost", "you lost me", "what do you mean?", "I don't follow", "too much jargon", "say that in plain English" or a bare "???". Use it too when the user's reply answers a point the message never made, or asks what a word in that message means. The trigger is confusion about the agent's own words; an error message, a test result or code that makes no sense to the user is a debugging task.
---

Wait, I don't understand where you've got to here. Re-pitch that: give me a little bit of context, talk in ASD-STE100 Simplified Technical English, and use the ubiquitous language from `CONTEXT.md` (follow `CONTEXT-MAP.md` to the right one if the repo has more than one).

---
"@acmelabs/brain": minor
---

The agent now loads `wait-what` on its own when the user shows confusion about its last message, for example "what are you talking about", "I don't get it" or "that makes no sense". `/wait-what` still works. An error message the user finds confusing stays a debugging task. `wait-what` is now seeded from matt's pack, so brain owns its text; the body is unchanged.

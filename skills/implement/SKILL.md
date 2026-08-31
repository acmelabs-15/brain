---
name: implement
description: "Implement a piece of work based on a spec or set of tickets."
disable-model-invocation: true
---

Implement the work described by the user in the spec or tickets.

Before exploring the codebase, read `CONTEXT.md` (and `CONTEXT-MAP.md` if the repo has more than one context) when it exists, and the ADRs where the project keeps them. Use the glossary's terms and never a synonym it lists under _Avoid_; a concept it lacks is a gap to note for `/domain-modeling`.

Use /tdd where possible, at pre-agreed seams.

Run typechecking regularly, single test files regularly, and the full test suite once at the end.

Once done, use /code-review to review the work.

Commit your work to the current branch.

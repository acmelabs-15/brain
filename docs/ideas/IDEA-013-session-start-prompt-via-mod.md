---
id: IDEA-013
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-013: Session start prompt via mod

## Intent
- Outcome: a new Claude Code session opens with a multiple-choice prompt shown by a mod, and the answer goes to the router.
- User: Peter, and anyone who starts a session with brain.
- Why now: 0.13.0 gives each session a report and a router, but no opening prompt, and Peter wants one through a mod.
- Success: a new session shows the prompt before the first word, built from `brain status`, and the answer reaches `using-brain`.
- Constraint: a mod runs on Claude Code only, so other hosts wait for the first prompt (DEC-010).
- Out of scope: a prompt on other hosts.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for the mod and its prompt.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Peter made this its own idea on 2026-11-05. The Intent is a draft. Row 06 is the open question.

RES-040's runs used fixed labels and `--plugin-dir`, so reading `brain status` first and a marketplace install are unproven.
<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which mechanisms can a plugin use, on each host, to run `using-brain` at session start with no user setup? | research | resolved | — | RES-035 |
| 02 | Does a new session open with a question before the user types? | interview | resolved | 01 | DEC-010 |
| 03 | Can a turn started before the first word show an ask-user-question prompt on Claude Code, from a plugin with no user setup? | research | resolved | — | RES-038 |
| 04 | Does the opening question use a mod's `$.ui.ask`, with no model turn, in place of a started turn? Test it on every source, with a draft in the box, and with a mid-turn prompt | research | resolved | — | RES-040 |
| 05 | Which mechanism opens the question on Claude Code, so where does its text sit, and what follows Esc or a timeout? | interview | resolved | 04 | DEC-020 |
| 06 | Which session sources show the opening question, and how does it avoid opening in the middle of a task? | interview | open | 04 | — |

## Not yet specified
None.

## Out of scope
None yet.

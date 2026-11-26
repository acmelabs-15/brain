---
name: interview-me
description: Finds out what the user actually wants before any spec is written. Use when an idea is new and its intent is unclear, when the user asks to be interviewed or grilled, or when you are about to guess at what they mean. Use when resuming an idea that already has an open map in docs/ideas. Triggers on "interview me", "grill me", or "help me figure out what I want".
---

# Interview Me

## Overview

Find out what the user actually wants before anything gets built. Most bad specs come from a misread intent, not a bad design. Each session takes one open decision on the idea's map, settles it with the user, and records only the answer.

## When to Use

Apply this skill when:

- The ask is missing at least one of: **who** it is for, **why** now, what **success** looks like, what the binding **constraint** is
- The user names an idea to continue
- The user explicitly invokes: "interview me", "grill me", "are we sure?", "stress-test my thinking"
- You catch yourself filling in a requirement you haven't asked about

**When NOT to use:**

- The ask is clear enough to write a spec now
- Mechanical changes: renames, formats, file moves, typo fixes
- Pure information requests ("how does X work?")
- You can already predict the user's answers to the next three questions

## The Gated Workflow

Interview-me has five phases. Phase 0 sets the intent and destination. Phase 1 charts the map. Phases 2 and 3 work **one decision task per session**, then end the session. Phase 4 closes the idea. Do not advance until the current phase is done.

```
INTENT ──→ CHART ──→ WORK ONE TASK ──→ RE-MAP ──→ CONFIRM
                          ▲               │
                          └─ next session ┘
```

### Phase 0: Intent

Load **ask-user-question** and **domain-modeling**.

1. **Find the idea.** An explicit user choice first, then the branch name, then the only unfinished idea. If it exists, read `idea.md`, the DEC records its done tasks link and the RES records its open tasks wait on, then go to Phase 2. Do not ask a question a record already answers.
2. **Hypothesize, with a confidence number.** Before asking anything, write your best read of what the user wants in one sentence:

   ```
   HYPOTHESIS: <one sentence>
   CONFIDENCE: ~30%: missing who it's for and what success looks like
   ```

   Fill the Intent lines of the map template (Phase 1). Mark each line you cannot fill as missing. Below \~70%, name what is missing.
3. **Name the destination.** The destination is what ends this interview: a spec, a single decision, or a change made in place. Grill for it, one question at a time with a guess attached, until the user agrees on a name. A destination that keeps growing is two ideas.

### Phase 1: Chart

1. **Scan the fog, breadth-first.** List everything still unknown between here and the destination, across the whole idea, before going deep on any part. Start with the missing intent lines. An unknown sharp enough to decide becomes a task; one that isn't stays in the fog.
2. **Create the idea** with `brain new-doc IDEA <slug>` and fill the template below. Wire the blocking links: which tasks must be decided before another can be. Run `brain check`.
3. **Start research.** When a decision needs evidence first, create a research task through the **research** skill. It files a RES record in `docs/research`, not in the map. Add that RES id to the decision's Blocked by. Run research tasks in parallel, in the background. Tell the user the destination and the first frontier task.

**Map template (`idea.md`):**

```markdown
# IDEA-NNN: [Name]

## Intent
- Outcome: [one line]
- User: [one line]
- Why now: [one line]
- Success: [one line]
- Constraint: [one line]
CONFIDENCE: ~NN% — [what is missing]

## Destination
[A spec, a single decision, or a change in place — one line]

## Map
| Task | Decision | Blocked by | Status | Record |
|---|---|---|---|---|
| T01 | [one decision to make] | — | open | |
| T02 | [one decision to make] | T01, RES-NNN | open | |

## Fog
- [An unknown not yet sharp enough to decide]

## Out of Scope
- [Thing] — [why]
```

- **Task:** one decision. It closes only with a DEC record.
- **Research:** a RES record in `docs/research`. It can block a task, and one RES can serve many decisions.
- **Frontier:** every open task whose Blocked by entries are all resolved.
- **Fog:** unknowns not yet sharp enough to become tasks.

Task statuses use the same values as spec tasks. `idea.md` is a **state file**, not a log. It holds only these five sections. What you did in a session goes nowhere.

### Phase 2: Work one task

1. **Take one frontier task.** Pick the one whose answer removes the most uncertainty. If its research just returned, talk the findings through with the user before deciding anything.
2. **Ask one question, with a guess attached.** Through ask-user-question, one question per call:

   ```
   Q:     <one focused question>
   GUESS: <your answer, and the reasoning behind it>
   ```

   The user reacts to a wrong guess faster than they write an answer from scratch. Now and then, guess where you expect pushback. When an answer sounds like best practice rather than a want ("scalable", "clean", "the standard way", "I should probably..."), ask: *"If you didn't have to justify this to anyone, what would you actually want?"*
3. **Record the answer.** A decision becomes a DEC record that lists the RES records it rests on in its `evidence`. The task links the DEC and is done. If the answer is partial, the task stays open: rewrite it to ask only what remains. If it needs more evidence, add a research task that blocks it. Add no note.

### Phase 3: Re-map

1. **Re-read the whole map.** Check the decision against every open task, the intent and the fog. Close tasks it settles, merge duplicates, add new tasks, and turn sharpened fog into tasks. Two decisions that block each other are one decision: merge them. Update the confidence number.
2. **Test the 95% stop.** Ask: *Can I predict the user's reaction to the next three questions I would ask?* If no, end the session; the next one starts at Phase 2. If yes, go to Phase 4, even with tasks still open: a task that only changes the spec's details, not its shape, moves into the spec as an open question. If several sessions pass and confidence isn't rising, stop and tell the user something foundational is missing.

### Phase 4: Confirm

1. **Restate the intent** in the user's own words:

   ```
   Here's what I now think you want:
   
   - Outcome:      <one line>
   - User:         <one line>
   - Why now:      <one line>
   - Success:      <one line>
   - Constraint:   <one line>
   - Out of scope: <one line>
   
   Yes / no / refine?
   ```
2. **Get an explicit yes.** "Whatever you think", "sounds good" and silence are not yes. Re-ask with two concrete options, or ask what they'd refine. Save `Confirmed by <name> on <YYYY-MM-DD>.` only after a clear yes to this version.
3. **Hand off, then stop.** Offer the next step: a spec through spec-driven-development, with the idea and its records as sources; a single decision recorded as the idea's result; or a change made in place. Then **stop your turn** and let the user choose.

## Common Rationalizations

| Rationalization | Reality |
| --- | --- |
| "I'll note this in the idea file so nothing is lost" | The records already hold what matters. A note no later step reads buries the map. |
| "I'm on a roll, I'll take one more task" | One task per session. The restart is where you check whether you're done. |
| "One more question and we'll be sure" | The stop is \~95%, not 100%. Questions that only change details belong in the spec. |
| "The user probably means X, I'll record it" | An implied answer is not a decision. Ask, or keep the task open. |
| "This finding is useful context, I'll add it to the idea" | Findings go in their RES record. The decision cites it as evidence. |
| "The research came back, so the decision is made" | Research unblocks a decision; it doesn't make it. The user decides; you record. |
| "They said 'whatever you think', so I'll decide" | That is delegation, not a decision. Re-ask with two concrete options. |
| "If I attach my guess, I'm leading them" | Leading is the point. The risk is a polite yes; guess where you expect pushback. |
| "I'll write a summary of this session" | The map is the summary. If it doesn't show where things stand, fix the map. |

## Red Flags

- `idea.md` grows every session while the frontier does not shrink
- Notes, progress logs or session history in `idea.md`
- Research tasks listed in the map instead of filed as RES records
- A task closed with a RES record instead of a DEC
- More than one task worked in a session
- Two decisions that block each other
- Two questions in one call, or a question with no guess attached
- A confidence number below \~70% with no reason given
- A task decided on an implied answer, or on research the user has not seen
- Accepting "scalable", "clean" or "the standard way" without the want-vs-should probe
- Still interviewing after you can predict the next three answers
- Starting a spec before the user's explicit yes

## Verification

After applying interview-me:

- [ ] A hypothesis with a confidence number was stated before the first question
- [ ] Every question went through ask-user-question, one per call, with a guess attached
- [ ] Each session worked one task and ended with the 95% stop test
- [ ] Every done task links one DEC record, and each DEC lists its RES records in `evidence`
- [ ] The map holds only decision tasks; research lives in `docs/research`
- [ ] `idea.md` holds only intent, destination, map, fog and out of scope: no logs
- [ ] The restate was confirmed with an explicit yes
- [ ] The turn ended after the hand-off offer, with no downstream work started
- [ ] `brain check` reports no finding for the idea and its records

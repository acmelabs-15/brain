# Spec: question

Module `question` of `CAPABILITY-MAP.md`, added 2026-09-19. Depends on nothing.
Status: draft for review.

## Objective

Rewrite `ask-user-question`, the skill every brain stage names when a decision is the
user's, from the 24 artifact files that produced it. Peter judges those artifacts better
than the skill they produced. The rewrite keeps every rule the artifacts evidence, drops
every rule they contradict, and folds in brain's own rules. Research notes RES-004 and
RES-005 carry the evidence; this spec cites them by section.

Users: the agent, in every stage of every brain host. The skill is model-invoked; a stage
skill names it, and the plain-talk text names it for any question outside a stage.

## What changes, from RES-005 §2 to §4

| Part | Now | After |
|---|---|---|
| Description | 688 characters, claims the wait-what trigger | under 300 characters, three triggers: a user-owned choice during any work, a reply that leaves a gap, a question the user did not understand; no wait-what claim |
| The cycle | three lines | five steps stated once: prepare, write, send and wait, read, return; the hierarchy in one line: the larger workflow, then the question cycle, then the repair of one message |
| Prepare | two lines for a discrepancy | the numbered procedure: separate missing intent, discoverable fact and own confusion; investigate; build alternatives with their cost; the reversible-choice rule with its product-change limit; the pre-send test in both halves |
| Write | rules with no source | one question per call; everything inside the question surface; ASD-STE100 sentences; glossary words with a new term explained; context first, the bounded question last; options on the same dimensions, cost beside each; one recommendation with its reason in every question, and when an unknown user priority decides it, investigate, then ask about that priority |
| Send and wait | the waiting rule stated four times | the tool-to-reference table; what to do with no tool; the waiting rule once, host expiry handled as unanswered, explained, with a way left to reply |
| Read | one row for mixed replies | the seven-row next-action table; the four evidence states; acceptance is not permission; the confirmation rule with a restatement of outcome, scope, decisions and conditions before approval is read; mixed replies kept, deferred with a condition, then back to the gap; an explicit change of task wins |
| Repair | four lines inside another section | its own section: diagnose the defect, missing premise, unknown term, unclear consequence, combined scope, vague option; change that part, keep the settled parts; fires on any sign of confusion, not only on the wait-what command |
| Return | one paragraph | what goes back: settled, conditions, gaps, conflicts, deferred topics, next action; the record destinations, the glossary for definitions through domain-modeling; completion stays with the workflow; one line each for interview-me, idea-refine and domain-modeling |
| Failure modes | 184 lines of wrong and correct pairs, ten cited to a preference | one table, fifteen rows: mistake, mechanism, fix, priority, each cited to the artifact that evidences it; three worked exchanges kept beside the rules they test |
| Terms | five words for one actor and four for one concept | the domain map's terms, one each: user, larger workflow, user-owned choice, deferred topic, reply, settled, question surface |
| Host references | schema kept, dated behaviour lost, waiting rule repeated | distinct contract only, under 120 lines each: version and date, call fields with one example, reply shape, availability, host expiry facts, evidence links, the unverified list; the facts RES-005 §1 names restored |
| Hosts | three | three references plus one line that Antigravity CLI's tool is unverified, or a fourth reference if Peter supplies its contract (open question 1) |

Budget: `SKILL.md` under 250 lines, by the outline in RES-005 §4.

## Tech Stack

Markdown. `bun:test` for two checks: the description length and the term list.

## Commands

```
bun run question:check     # description under 300 characters; no forbidden synonym in SKILL.md; every reference under 120 lines
bun run check              # all gates, question:check included
```

## Project Structure

```
skills/ask-user-question/SKILL.md
skills/ask-user-question/references/claude-code.md
skills/ask-user-question/references/codex.md
skills/ask-user-question/references/gemini-cli.md
skills/ask-user-question/agents/openai.yaml     Codex metadata, model-invoked, no policy block
scripts/question/check.ts
scripts/question/__tests__/check.test.ts
```

## Code Style

ASD-STE100 sentences, one rule stated once, the domain map's terms, no em-dashes. Every
rule in the failure table carries its artifact citation as `file:line` from Peter's repo at
commit `6e9d8a7`, so a reader can follow it.

## Testing Strategy

- `check.ts`, `bun:test`: description length; the forbidden synonyms (the person, the
  reader, surrounding task, another workflow, later topic, response for reply) absent from
  `SKILL.md`; each reference under 120 lines; `SKILL.md` under 250 lines.
- Behaviour: the `evals` module gains one case, a plan-approval question, graded on one
  question per call, a recommendation present, and costs beside options.

## Boundaries

- **Always:** cite the artifact for every rule in the failure table; keep the waiting rule in one place; keep host facts dated.
- **Ask first:** a rule that neither the artifacts nor Peter's standing rules support; a fourth host reference.
- **Never:** claim a runtime the references have not checked; restore the wait-what trigger.

## Success Criteria

1. `question:check` exits 0.
2. Every RES-005 §3 contradiction is resolved in the text, in the direction the artifacts and brain's rules give: recommendation always, with the unknown-priority rule; no wait-what trigger; repair below the cycle; references without the waiting rule; recommended first with the Codex preselection fact stated; restatement before approval; the host set stated; the Codex open-question limit stated.
3. The combined `interview-me` names the skill and drops nothing the skill covers.
4. The evals case passes with the plugin and shows a positive delta.

## Open Questions

1. Antigravity CLI: no artifact covers its question tool. A fourth reference needs its
   contract read from the Antigravity docs and source, or the skill states that host as
   unverified. Peter's call.
2. brain has no `CONTEXT.md` of its own yet. Until one exists, the glossary words are the
   domain map's terms above. The domain-modeling skill can create brain's `CONTEXT.md` from
   them as the first entries.

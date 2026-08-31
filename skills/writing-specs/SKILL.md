---
name: writing-specs
description: "Writes the requirements document — a PRD in the repo's docs tree or a tracker spec — before any code. Covers objectives, user stories, success criteria, testing strategy, boundaries, out-of-scope and a Plans table; decomposes a multi-capability ask into a capability map first. Use when starting a project or feature with no spec yet, when requirements are vague or exist only in conversation (synthesized without re-interviewing), or when the user says \"write a spec\", \"draft a PRD\", \"define the requirements\", \"spec this out\", or \"turn this conversation into a spec\"."
allowed-tools: Bash(cat:*)
---


!`cat "${CLAUDE_PLUGIN_ROOT}/references/read-the-glossary.md"`

# Writing Specs

## Overview

One skill writes the requirements document, whatever the repo calls it: a PRD in the docs tree
or a spec on the tracker. The document is the shared source of truth — what we're building, why,
and how we'll know it's done — written before any code. Two intakes feed it; one template pool
fills it; the repo's convention picks the rendering.

## The workflow

1. Determine the intake:

   **The requirements are still fog — the ask is underspecified, or the user wants to be
   interviewed?** → Call the Skill tool for `interview-me` (intent mode) and return here with
   the confirmed intent. Do not spec an unconfirmed intent.

   **The conversation already settled it?** → Synthesis intake: do NOT re-interview. Write from
   what was discussed and decided; the questions were already asked.

2. Explore the repo (the injected rule above governs the vocabulary). Any clarifying question
   that survives intake goes through `brain:ask-user-question`, one at a time, your
   recommendation attached; needing more than about three means the intake was wrong — hand to
   `interview-me`.

3. Scope check, assumptions, seams, then the document (below), then publication (below).

## Scope check: the capability map

Most requests describe one capability; this gate exists for the exception. Decompose before
specifying when one requirement bundles several independently testable capabilities — distinct
consumers or data, acceptance criteria that cluster into separately shippable groups, a
capability that could be cut without rewriting the others.

Propose the map before writing any spec — a module table plus a build order, ten reviewable
lines, gated on approval:

```markdown
# Capability Map: [Initiative Name]

| Module id | Responsibility | Depends on |
|---|---|---|
| identity | Accounts, sessions, SSO | — |
| billing | Plans, invoices, payments | identity |

Build order: identity → billing …
```

Stable kebab-case module ids, chosen once, never renamed. Dependency direction one-way — two
modules that need each other are one module. Interfaces live at the boundary: the map records
that `billing` depends on `identity`; the contract belongs in the provider module's spec. Then
recurse per module in dependency order, each spec scoped to its module; the approved map, not
filename guessing, is the index of what exists.

## Surface assumptions immediately

Before writing any content, list what you are assuming and hand the list over:

```
ASSUMPTIONS I'M MAKING:
1. This is a web application (not native mobile)
2. Authentication uses session-based cookies (not JWT)
→ Correct me now or I'll proceed with these.
```

Assumptions are the most dangerous form of misunderstanding; the document's whole purpose is to
surface them before code exists.

## Sketch the seams

Sketch the seams at which the feature will be tested. Existing seams beat new ones; the highest
seam possible; propose new ones only at the highest point you can — the ideal number is one.
Check with the user that the seams match their expectations (one `brain:ask-user-question`
call). `codebase-design` carries the vocabulary.

## The document

One template pool, every section doing a job:

```markdown
# [PRD-NNN | Spec]: [Name]

## Objective
[What we're building and why; who the user is; what success looks like.]

## User Stories
[A numbered list — "As an <actor>, I want <feature>, so that <benefit>" — extensive for a
tracker spec, trimmed to the load-bearing ones for a repo PRD.]

## Success Criteria
[Specific, testable conditions. Reframe vague asks: "make it faster" becomes "LCP < 2.5s on
4G" → "are these the right targets?"]

## Tech Stack · Commands · Project Structure · Code Style
[Versions; full executable commands, not tool names; where code, tests and docs live; one real
style snippet over three paragraphs of description.]

## Implementation Decisions
[Modules built or modified and their interfaces, architectural decisions, schema changes, API
contracts. No file paths and no code snippets — they go stale. Exception: a prototype snippet
that encodes a decision more precisely than prose (a state machine, a schema, a type shape),
trimmed to the decision-rich part and marked as from a prototype.]

## Testing Strategy
[What makes a good test here (external behavior, not implementation), which modules get
tested, prior art in the codebase, framework, locations, coverage expectations.]

## Boundaries
- Always: [run tests before commits, …]
- Ask first: [schema changes, new dependencies, …]
- Never: [commit secrets, remove failing tests, …]

## Out of Scope
[What this document deliberately does not cover. Non-negotiable — half of misalignment is
silent disagreement about what is not being built.]

## Open Questions
[Unresolved items that need a human answer.]

## Plans
| Plan | Implements | Status |
| --- | --- | --- |
| PLAN-NNN-<feature>.md | requirements … | planned \| in progress — part N (session SES-NNN) \| done |
```

The **Plans** table is the document's way down — every plan that implements it, with status, so
spec → plan → part → session is one walk. Keep it current in the same change that moves a
plan's status; a stale table sends the next conversation to the wrong place.

## Publication: the repo's convention picks the rendering

Resolve where requirements live — first hit wins: the repo's own `docs/agents/issue-tracker.md`;
else the repo's evident convention (a populated `docs/plan/` PRD series, a `CLAUDE.md` naming
the place); else `~/.claude/references/issue-tracker.md`'s default. Then:

- **Docs tree** → save as the next `PRD-NNN-<kebab>.md` in the convention's directory, update
  any index, keep the Plans table.
- **Tracker** → publish as the tracker spec and apply the `ready-for-agent` triage label — no
  further triage needed.

Say where you saved or published it. The human reviews the document before anything downstream
consumes it.

## Keeping the document alive

Update it when decisions or scope change — document first, then implement; commit it with the
code; link the section a PR implements. An outdated spec is still better than no spec, and a
living one is better than both.

## Handoffs

- **`planning-and-task-breakdown`**: downstream, the canonical decomposition — hand the
  approved document there; do not inline task lists here.
- **`interview-me`**: upstream for fog (step 1); back here with a confirmed intent.
- **`idea-refine`**: upstream when the intent needs divergence before it can be specified.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "This is simple, I don't need a spec" | Simple tasks need short specs, not no spec. Two lines of acceptance criteria are fine. |
| "I'll write the spec after I code it" | That's documentation. The value is forcing clarity before code. |
| "Requirements will change anyway" | That's why it's a living document. |
| "The user knows what they want" | Even clear requests carry implicit assumptions; the document surfaces them. |
| "It's one big feature; splitting it is overhead" | If acceptance criteria cluster into independently testable groups, a ten-line capability map is the cheap alternative to a monolithic spec. |
| "I'll decompose during planning" | Planning slices tasks within a document. Module boundaries and dependency direction must be decided before it is written. |
| "They're mid-conversation, I should ask a few more questions" | If the conversation settled it, synthesis means synthesis. Re-interviewing spends the user's patience on questions they already answered. |

## Red Flags

- Writing code, or task lists, instead of the document
- A spec written from an unconfirmed intent, or re-interviewing after a settled conversation
- Silently resolving an ambiguity instead of an assumptions block or an Open Question
- File paths or code snippets in Implementation Decisions (outside the prototype exception)
- A multi-capability requirement specified without an approved capability map
- A repo PRD without a Plans table, or a tracker spec without `ready-for-agent`
- Skipping the Out of Scope section

## Verification

- [ ] The intake was honored: interview for fog, synthesis for a settled conversation
- [ ] Assumptions were surfaced before content; seams sketched and checked
- [ ] Every template section present or knowingly trimmed; Out of Scope and Success Criteria never trimmed
- [ ] A multi-capability ask got its gated capability map first
- [ ] Published per the resolution order; location said out loud
- [ ] The human approved the document before anything downstream consumed it

## Keeping the domain model current

When a term is resolved or a decision recorded while this skill runs, call the Skill tool for `domain-modeling` and update `CONTEXT.md` right there — it creates the file lazily and keeps it a glossary, not a spec. Do not batch terms for the end.

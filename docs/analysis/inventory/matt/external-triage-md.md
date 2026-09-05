---
package: matt
path: external/triage.md
type: doc
bytes: 376711
unit: inv-matt-30
deprecated: false
aliases: []
memo_inputs:
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/triage.md

## Purpose — required, verbatim
> "Sort raw issues into work someone can pick up." — external/triage.md:24

## Design intent — required
Acts as the inbound operational on-ramp for external, user-submitted bug reports, feature requests, and unexpected external pull requests. Enforces a strict two-dimensional state machine where every item carries exactly one category role (`bug` or `enhancement`) and exactly one state role (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, or `wontfix`). Prohibits speculative briefing by requiring concrete reproduction of reported bugs and checking out PR branches before attaching briefs. Maintains permanent rejection records under `.out-of-scope/` to suppress re-litigation of previously denied concepts. Writes durable, contract-based agent briefs that avoid brittle file paths or line numbers.

## Phase — required
matt:Upkeep

## Inputs — required
External inbound issue tracker tickets and pull requests, repository codebase for bug reproduction, `.out-of-scope/` rejection notes, and tracker configuration from `setup-matt-pocock-skills`.

## Outputs — required
Tracker label transitions (one category role, one state role), structured AI-generated agent briefs posted as issue comments, reporter inquiries, or closed issues; plus persistent concept rejection documents in `.out-of-scope/<concept>.md`.

## Invokes — required
- skill grill-with-docs — external/triage.md:30
- skill to-spec — external/triage.md:30
- skill to-tickets — external/triage.md:30
- skill diagnosing-bugs — external/triage.md:30
- skill setup-matt-pocock-skills — external/triage.md:32
- skill implement — external/triage.md:73
- skill grilling — external/triage.md:73
- skill domain-modeling — external/triage.md:73
- skill ask-matt — external/triage.md:73

## Invoked by — required
none

## Concepts named — required, verbatim
- `triage` — external/triage.md:25 — defined here
- `triage roles` — external/triage.md:25 — defined here
- `category role` — external/triage.md:25 — defined here
- `state role` — external/triage.md:25 — defined here
- `Tickets` — external/triage.md:26 — used here
- `agent` — external/triage.md:29 — used here
- `spec` — external/triage.md:30 — used here
- `needs-triage` — external/triage.md:36 — defined here
- `needs-info` — external/triage.md:36 — defined here
- `ready-for-agent` — external/triage.md:36 — defined here
- `ready-for-human` — external/triage.md:36 — defined here
- `wontfix` — external/triage.md:36 — defined here
- `.out-of-scope` — external/triage.md:40 — defined here
- `grilling` — external/triage.md:42 — used here
- `agent brief` — external/triage.md:44 — defined here
- `context` — external/triage.md:60 — used here
- `on-ramp` — external/triage.md:73 — defined here

## Structure
- # The /triage Skill — external/triage.md:24
- ## What it does — external/triage.md:24
- ## When to reach for it — external/triage.md:28
- ## Prerequisites — external/triage.md:31
- ## The state machine — external/triage.md:34
- ## Verify before you brief — external/triage.md:41
- ## A PR is an issue with attached code — external/triage.md:45
- ## Common questions — external/triage.md:48
- ## It's working if — external/triage.md:63
- ## Where it fits — external/triage.md:72
- ## You have the skill. Now build the workflow around it. — external/triage.md:73
- ## Install the skills — external/triage.md:73
- ## Related reading — external/triage.md:73

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · external/triage.md:47 documents open issue #468 where external PR discovery invokes `gh pr list` querying unexposed `authorAssociation` field and fails.
- `missing-path` · external/triage.md:54 documents open issue #616 where label application fails when labels mapped by setup are not automatically created in the tracker.
- `doc-drift` · external/triage.md:5 places triage under section "Upkeep", whereas the repository doc `docs/engineering/triage.md:1` places it under "engineering".
- `doc-drift` · external/triage.md:62 documents open issue #200 where tracker templates duplicate acceptance criteria.

## Observations
Treats external pull requests as issues with attached code diffs, routing them through the same two-dimensional state machine. Distinguishes sharply between internally planned tickets (which are agent-ready by construction) and incoming third-party issues (which require triage reproduction and scoping). Preserves rejection rationale permanently under `.out-of-scope/` to avoid repeated re-litigation.

## Context cost
376711 bytes, ~75000 tokens (HTML snapshot with inline hydration bundle).

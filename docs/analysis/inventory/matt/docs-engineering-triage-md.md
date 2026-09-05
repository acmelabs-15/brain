---
package: matt
path: docs/engineering/triage.md
type: doc
bytes: 13140
unit: inv-matt-7
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/triage.md

## Purpose — required, verbatim
> "`triage` works through the issues on your project's tracker, moving each one through a small state machine of **triage roles** (a category role and a state role) and leaving behind either an agent-ready brief, a specific question for the reporter, or a closed issue with a recorded reason." — docs/engineering/triage.md:3

## Design intent — required
Acts as the inbound operational on-ramp for external, user-submitted bug reports, feature requests, and unexpected external pull requests. Enforces a strict two-dimensional state machine: exactly one category role (`bug` or `enhancement`) and exactly one state role (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, or `wontfix`). Prohibits speculative briefing by requiring concrete reproduction of reported bugs and checking out PR branches before attaching briefs. Maintains permanent rejection records under `.out-of-scope/` to suppress re-litigation of previously denied concepts. Writes durable, contract-based agent briefs that avoid brittle file paths or line numbers.

## Phase — required
matt:engineering

## Inputs — required
External inbound issue tracker tickets and pull requests, repository codebase for bug reproduction, `.out-of-scope/` rejection notes, and tracker configuration from `setup-matt-pocock-skills`.

## Outputs — required
Tracker label transitions (one category, one state), structured AI-generated agent briefs posted as issue comments, reporter inquiries, or closed issues; plus persistent concept rejection documents in `.out-of-scope/<concept>.md`.

## Invokes — required
- doc to-tickets — docs/engineering/triage.md:5
- doc grill-with-docs — docs/engineering/triage.md:16
- doc to-spec — docs/engineering/triage.md:17
- doc diagnosing-bugs — docs/engineering/triage.md:19
- doc setup-matt-pocock-skills — docs/engineering/triage.md:23
- doc implement — docs/engineering/triage.md:99
- doc grilling — docs/engineering/triage.md:99
- doc domain-modeling — docs/engineering/triage.md:99
- doc ask-matt — docs/engineering/triage.md:99

## Invoked by — required
none

## Concepts named — required, verbatim
- `triage` — docs/engineering/triage.md:3 — defined here
- `triage roles` — docs/engineering/triage.md:3 — defined here
- `Tickets` — docs/engineering/triage.md:5 — used here
- `agent` — docs/engineering/triage.md:11 — used here
- `spec` — docs/engineering/triage.md:17 — used here
- `canonical` — docs/engineering/triage.md:23 — defined here
- `AFK` — docs/engineering/triage.md:35 — used here
- `skill` — docs/engineering/triage.md:39 — used here
- `grilling` — docs/engineering/triage.md:53 — used here
- `agent brief` — docs/engineering/triage.md:57 — defined here
- `durable` — docs/engineering/triage.md:57 — defined here
- `context` — docs/engineering/triage.md:83 — used here
- `on-ramp` — docs/engineering/triage.md:99 — defined here

## Structure
- ## What it does — docs/engineering/triage.md:1
- ## When to reach for it — docs/engineering/triage.md:8
- ## Prerequisites — docs/engineering/triage.md:21
- ## The state machine — docs/engineering/triage.md:27
- ## Verify before you brief — docs/engineering/triage.md:51
- ## A PR is an issue with attached code — docs/engineering/triage.md:59
- ## Common questions — docs/engineering/triage.md:65
- ## It's working if — docs/engineering/triage.md:88
- ## Where it fits — docs/engineering/triage.md:97

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · docs/engineering/triage.md:63 documents open issue #468 where external PR discovery invokes `gh pr list` querying unexposed `authorAssociation` field and fails.
- `missing-path` · docs/engineering/triage.md:73-75 documents open issue #616 where labels mapped by setup are not automatically created in the tracker, causing label application failure.
- `doc-drift` · docs/engineering/triage.md:86-87 documents open issue #200 where local markdown tracker templates duplicate acceptance criteria in generated files.

## Observations
Treats pull requests uniformly as issues with attached code diffs, evaluating them against identical state machine rules. Emphasizes that `triage` is exclusively intended for inbound third-party work, stating flatly that tickets generated internally via `to-tickets` are agent-ready by construction and must never be processed by `triage`.

## Context cost
13140 bytes (~3285 tokens).

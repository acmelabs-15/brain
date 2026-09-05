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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/triage.md

## Purpose — required, verbatim
> "`triage` works through the issues on your project's tracker, moving each one through a small state machine of **triage roles** (a category role and a state role) and leaving behind either an agent-ready brief, a specific question for the reporter, or a closed issue with a recorded reason." — docs/engineering/triage.md:3

## Design intent — required
Provides an inbound evaluation and triage lane for external bug reports, feature requests, and external pull requests not created by the project owner. Moves each issue through a strict two-role state machine (one category: `bug` or `enhancement`; one state: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). Pre-verifies bugs by reproduction against code and PRs by running tests before drafting an agent brief. Manages rejected enhancements in `.out-of-scope/` concept documents to prevent recurring debate. Recommends classifications and waits for human approval rather than auto-applying changes. Without it, incoming external reports would either stall unreviewed, accumulate vague agent work orders lacking reproduction, or repeatedly reopen settled product rejections.

## Phase — required
matt:on-ramp

## Inputs — required
- Unprocessed incoming issues and external pull requests on the configured tracker.
- Existing codebase for bug reproduction and test execution.
- `.out-of-scope/` directory containing markdown concept files of prior rejections.
- Human interactive directives confirming or adjusting recommendations.

## Outputs — required
- Structured durable agent briefs posted as comments on `ready-for-agent` issues.
- Targeted questions posted for reporters on `needs-info` issues.
- Closing explanations on `wontfix` issues (and newly created markdown files under `.out-of-scope/` for rejected enhancements).
- Updated category and state tracker labels.

## Invokes — required
- skill to-tickets — docs/engineering/triage.md:5
- skill grill-with-docs — docs/engineering/triage.md:16
- skill to-spec — docs/engineering/triage.md:17
- skill diagnosing-bugs — docs/engineering/triage.md:19
- skill setup-matt-pocock-skills — docs/engineering/triage.md:23
- skill implement — docs/engineering/triage.md:99
- skill grilling — docs/engineering/triage.md:99
- skill domain-modeling — docs/engineering/triage.md:99
- skill ask-matt — docs/engineering/triage.md:99

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `triage roles` — docs/engineering/triage.md:3 — defined here
- `ticket` — docs/engineering/triage.md:5 — used here
- `agent` — docs/engineering/triage.md:11 — used here
- `spec` — docs/engineering/triage.md:17 — used here
- `state machine` — docs/engineering/triage.md:27 — defined here
- `bug` — docs/engineering/triage.md:29 — defined here
- `enhancement` — docs/engineering/triage.md:29 — defined here
- `needs-triage` — docs/engineering/triage.md:33 — defined here
- `needs-info` — docs/engineering/triage.md:34 — defined here
- `ready-for-agent` — docs/engineering/triage.md:35 — defined here
- `AFK` — docs/engineering/triage.md:35 — used here
- `ready-for-human` — docs/engineering/triage.md:36 — defined here
- `wontfix` — docs/engineering/triage.md:37 — defined here
- `skill` — docs/engineering/triage.md:39 — used here
- `.out-of-scope/` — docs/engineering/triage.md:49 — defined here
- `grilling` — docs/engineering/triage.md:53 — used here
- `redundancy` — docs/engineering/triage.md:55 — defined here
- `prior rejection` — docs/engineering/triage.md:55 — defined here
- `agent brief` — docs/engineering/triage.md:57 — defined here
- `context` — docs/engineering/triage.md:83 — used here
- `on-ramp` — docs/engineering/triage.md:99 — defined here
- `CONTEXT.md` — docs/engineering/triage.md:99 — used here
- `ADRs` — docs/engineering/triage.md:99 — used here

## Structure
- ## What it does — docs/engineering/triage.md:1
- ## When to reach for it — docs/engineering/triage.md:9
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
- doc-drift — docs/engineering/triage.md:25 — External PR triage is disabled by default and no longer prompted during setup, requiring manual configuration in `docs/agents/issue-tracker.md`.
- script-bug — docs/engineering/triage.md:63 — GitHub template command for listing external PRs asks `gh pr list` for an unsupported `authorAssociation` field, causing the command to fail outright (issue #468).
- doc-drift — docs/engineering/triage.md:74 — `setup-matt-pocock-skills` documents label vocabulary but fails to create the labels in the issue tracker, causing `gh label create` errors when `triage` tries to apply them (issue #616).
- doc-drift — docs/engineering/triage.md:77 — The five-state machine lacks states for `blocked`, `deferred`, and terminal `implemented`, forcing users into unstandardized custom label workarounds (issues #139, #297).
- doc-drift — docs/engineering/triage.md:80 — Neither `triage` nor `diagnosing-bugs` mentions the other, leaving the boundary between shallow reproduction and deep root-cause debugging undocumented.
- other — docs/engineering/triage.md:83 — Running triage across an entire backlog in bulk causes the model to rely on summary listings without reading comment threads, missing existing resolution notes.
- doc-drift — docs/engineering/triage.md:86 — Local markdown tracker template duplicates acceptance criteria at the top level and inside the agent brief (issue #200).

## Observations
Emphasizes that triage is strictly an inbound on-ramp for external work, completely separate from the author-originated build chain (`to-spec` / `to-tickets`). Requires agent briefs to be durable across codebase drift by specifying types, signatures, and contracts rather than fragile file paths and line numbers. Highlights concept-based matching against `.out-of-scope/` design notes rather than keyword search. Mandatory AI disclosure prefix on every posted comment: `> *This was generated by AI during triage.*`.

## Context cost
13140 bytes, approximately 3150 tokens.

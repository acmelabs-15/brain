---
package: matt
path: skills/engineering/triage/SKILL.md
type: skill
bytes: 6557
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/triage/SKILL.md

## Purpose — required, verbatim
> "Move issues on the project issue tracker through a small state machine of triage roles." — skills/engineering/triage/SKILL.md:9

## Design intent — required
Implements an interactive state machine workflow for triaging incoming issues and external pull requests on the configured tracker. Classifies items into exactly one category role (`bug`, `enhancement`) and one state role (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). Treats PRs as issues with attached code. Gathers context, checks for redundancy and prior rejections in `.out-of-scope/`, verifies claims by reproducing bugs or running PR tests, conditionally invokes grilling and domain modeling to sharpen specifications, and publishes authoritative agent briefs before handing off to AFK agents.

## Phase — required
cross-phase

## Inputs — required
Natural language maintainer instructions, issue tracker state, issue/PR descriptions, discussion comments, code diffs, `.out-of-scope/*.md` knowledge base, and domain glossary (`CONTEXT.md`).

## Outputs — required
Tracker label updates, disclaimer-prefixed issue/PR comments, structured agent briefs (`ready-for-agent`), triage notes (`needs-info`), closing comments with `.out-of-scope/` references (`wontfix`), and updated domain models/ADRs.

## Invokes — required
- reference AGENT-BRIEF.md — skills/engineering/triage/SKILL.md:21
- reference OUT-OF-SCOPE.md — skills/engineering/triage/SKILL.md:22
- skill setup-matt-pocock-skills — skills/engineering/triage/SKILL.md:43
- skill grilling — skills/engineering/triage/SKILL.md:76
- skill domain-modeling — skills/engineering/triage/SKILL.md:76

## Invoked by — required
- doc README.md — README.md:196
- doc skills/engineering/README.md — skills/engineering/README.md:11
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:38
- doc docs/engineering/triage.md — docs/engineering/triage.md:3
- doc docs/engineering/setup-matt-pocock-skills.md — docs/engineering/setup-matt-pocock-skills.md:13

## Concepts named — required, verbatim
- `triage` — skills/engineering/triage/SKILL.md:3 — defined here
- `issue tracker` — skills/engineering/triage/SKILL.md:9 — used here
- `triage roles` — skills/engineering/triage/SKILL.md:9 — defined here
- `pull requests` — skills/engineering/triage/SKILL.md:11 — used here
- `category` — skills/engineering/triage/SKILL.md:26 — defined here
- `bug` — skills/engineering/triage/SKILL.md:28 — defined here
- `enhancement` — skills/engineering/triage/SKILL.md:29 — defined here
- `state` — skills/engineering/triage/SKILL.md:31 — defined here
- `needs-triage` — skills/engineering/triage/SKILL.md:33 — defined here
- `needs-info` — skills/engineering/triage/SKILL.md:34 — defined here
- `ready-for-agent` — skills/engineering/triage/SKILL.md:35 — defined here
- `ready-for-human` — skills/engineering/triage/SKILL.md:36 — defined here
- `wontfix` — skills/engineering/triage/SKILL.md:37 — defined here
- `AFK agent` — skills/engineering/triage/SKILL.md:35 — used here
- `redundancy` — skills/engineering/triage/SKILL.md:70 — defined here
- `prior rejection` — skills/engineering/triage/SKILL.md:70 — defined here
- `grilling` — skills/engineering/triage/SKILL.md:76 — used here
- `domain-modeling` — skills/engineering/triage/SKILL.md:76 — used here
- `agent brief` — skills/engineering/triage/SKILL.md:79 — used here
- `Triage Notes` — skills/engineering/triage/SKILL.md:95 — defined here

## Structure
- `# Triage` — skills/engineering/triage/SKILL.md:7
- `## Reference docs` — skills/engineering/triage/SKILL.md:19
- `## Roles` — skills/engineering/triage/SKILL.md:24
- `## Invocation` — skills/engineering/triage/SKILL.md:47
- `## Show what needs attention` — skills/engineering/triage/SKILL.md:56
- `## Triage a specific issue or PR` — skills/engineering/triage/SKILL.md:68
- `## Quick state override` — skills/engineering/triage/SKILL.md:88
- `## Needs-info template` — skills/engineering/triage/SKILL.md:92
- `## Resuming a previous session` — skills/engineering/triage/SKILL.md:110

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — skills/engineering/triage/SKILL.md:43: Instructs user to run `/setup-matt-pocock-skills` if tracker configuration is missing, but no command file exists at `commands/setup-matt-pocock-skills.md` (it is a skill at `skills/engineering/setup-matt-pocock-skills/`).

## Observations
Mandates that all AI-generated triage comments start with a standard disclaimer. Formulates external pull requests as issues with attached code, evaluating them through identical state transitions while restricting discovery to non-collaborator external PRs.

## Context cost
6557 bytes, 113 lines, approximately 1550 tokens. Loads companion files `AGENT-BRIEF.md` (7942 bytes) and `OUT-OF-SCOPE.md` (4667 bytes), bringing total immediate context to ~19166 bytes (~4500 tokens).

---
package: matt
path: .claude-plugin/plugin.json
type: config
bytes: 1636
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude-plugin/plugin.json

## Purpose — required, verbatim
> "Matt Pocock's agent skills for real engineering: grilling, spec/ticket flows, TDD, code review, domain modelling and more. Plug-and-play, not vibe coding." — .claude-plugin/plugin.json:4

## Design intent — required
Defines the Claude Code plugin manifest for `mattpocock-skills`. It establishes the plugin identity, version (`1.2.3`), author, repository, licensing, keywords, and enumerates all 25 active skills across the `skills/engineering/` (18 skills) and `skills/productivity/` (7 skills) categories. Without this file, Claude Code cannot recognize, install, or resolve the skills bundled within the repository.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill ask-matt — .claude-plugin/plugin.json:22
- skill diagnosing-bugs — .claude-plugin/plugin.json:23
- skill grill-with-docs — .claude-plugin/plugin.json:24
- skill triage — .claude-plugin/plugin.json:25
- skill improve-codebase-architecture — .claude-plugin/plugin.json:26
- skill setup-matt-pocock-skills — .claude-plugin/plugin.json:27
- skill tdd — .claude-plugin/plugin.json:28
- skill to-spec — .claude-plugin/plugin.json:29
- skill to-tickets — .claude-plugin/plugin.json:30
- skill wayfinder — .claude-plugin/plugin.json:31
- skill implement — .claude-plugin/plugin.json:32
- skill prototype — .claude-plugin/plugin.json:33
- skill research — .claude-plugin/plugin.json:34
- skill domain-modeling — .claude-plugin/plugin.json:35
- skill codebase-design — .claude-plugin/plugin.json:36
- skill code-review — .claude-plugin/plugin.json:37
- skill resolving-merge-conflicts — .claude-plugin/plugin.json:38
- skill wizard — .claude-plugin/plugin.json:39
- skill grill-me — .claude-plugin/plugin.json:40
- skill grilling — .claude-plugin/plugin.json:41
- skill handoff — .claude-plugin/plugin.json:42
- skill teach — .claude-plugin/plugin.json:43
- skill to-questionnaire — .claude-plugin/plugin.json:44
- skill wait-what — .claude-plugin/plugin.json:45
- skill writing-for-agents — .claude-plugin/plugin.json:46

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `mattpocock-skills` — .claude-plugin/plugin.json:2 — defined here
- `grilling` — .claude-plugin/plugin.json:4 — used here
- `TDD` — .claude-plugin/plugin.json:4 — used here
- `code review` — .claude-plugin/plugin.json:4 — used here
- `domain modelling` — .claude-plugin/plugin.json:4 — used here
- `engineering` — .claude-plugin/plugin.json:13 — used here
- `domain-modeling` — .claude-plugin/plugin.json:18 — used here
- `productivity` — .claude-plugin/plugin.json:19 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The plugin manifest registers 25 active skills: 18 under `skills/engineering/` and 7 under `skills/productivity/`. It excludes `skills/in-progress/` and `skills/deprecated/` from the active plugin surface.

## Context cost
1636 bytes, approximately 400 tokens.

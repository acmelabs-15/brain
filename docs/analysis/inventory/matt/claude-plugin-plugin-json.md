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
verified: 2026-09-06 quote-check+coverage
---

# .claude-plugin/plugin.json

## Purpose — required, verbatim
> "Matt Pocock's agent skills for real engineering: grilling, spec/ticket flows, TDD, code review, domain modelling and more. Plug-and-play, not vibe coding." — .claude-plugin/plugin.json:4

## Design intent — required
The primary Claude Code plugin manifest for the repository. Declares package metadata, author details, repository links, license, and the canonical registry of 25 active production skills distributed to Claude Code users.

## Phase — required
none

## Inputs — required
25 production skill directories located under `skills/engineering/` and `skills/productivity/`.

## Outputs — required
Plugin configuration defining the active skills exposed in Claude Code sessions when the plugin is installed.

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
entry-point

## Concepts named — required, verbatim
- `mattpocock-skills` — .claude-plugin/plugin.json:2 — defined here
- `agent skills` — .claude-plugin/plugin.json:4 — defined here
- `grilling` — .claude-plugin/plugin.json:4 — used here
- `spec/ticket flows` — .claude-plugin/plugin.json:4 — defined here
- `TDD` — .claude-plugin/plugin.json:4 — used here
- `code review` — .claude-plugin/plugin.json:4 — used here
- `domain modelling` — .claude-plugin/plugin.json:4 — defined here
- `vibe coding` — .claude-plugin/plugin.json:4 — defined here
- `skills` — .claude-plugin/plugin.json:14 — used here
- `tdd` — .claude-plugin/plugin.json:15 — used here
- `code-review` — .claude-plugin/plugin.json:16 — used here
- `domain-modeling` — .claude-plugin/plugin.json:18 — used here
- `productivity` — .claude-plugin/plugin.json:19 — used here

## Structure
JSON root object:
- `name`
- `version`
- `description`
- `author`
- `homepage`
- `repository`
- `license`
- `keywords`
- `skills`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Packages exactly 25 skills, intentionally omitting experimental skills in `skills/in-progress/` and auxiliary skills in `skills/misc/`. Synchronized with `package.json` through `scripts/sync-plugin-version.mjs`.

## Context cost
1636 bytes, ~400 tokens. When parsed by Claude Code, registers 25 skills.

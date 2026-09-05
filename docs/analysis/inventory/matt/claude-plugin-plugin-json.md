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
verified: 2026-09-04 quote-check+coverage
---

# .claude-plugin/plugin.json

## Purpose — required, verbatim
> "Matt Pocock's agent skills for real engineering: grilling, spec/ticket flows, TDD, code review, domain modelling and more. Plug-and-play, not vibe coding." — .claude-plugin/plugin.json:4

## Design intent — required
Defines the Claude Code plugin manifest for `mattpocock-skills`, declaring plugin identity (version 1.2.3, author, homepage, repository, MIT license) and the explicit array of 25 skill paths grouped under `engineering` and `productivity` subdirectories for Claude Code discovery and loading.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill ./skills/engineering/ask-matt — .claude-plugin/plugin.json:22
- skill ./skills/engineering/diagnosing-bugs — .claude-plugin/plugin.json:23
- skill ./skills/engineering/grill-with-docs — .claude-plugin/plugin.json:24
- skill ./skills/engineering/triage — .claude-plugin/plugin.json:25
- skill ./skills/engineering/improve-codebase-architecture — .claude-plugin/plugin.json:26
- skill ./skills/engineering/setup-matt-pocock-skills — .claude-plugin/plugin.json:27
- skill ./skills/engineering/tdd — .claude-plugin/plugin.json:28
- skill ./skills/engineering/to-spec — .claude-plugin/plugin.json:29
- skill ./skills/engineering/to-tickets — .claude-plugin/plugin.json:30
- skill ./skills/engineering/wayfinder — .claude-plugin/plugin.json:31
- skill ./skills/engineering/implement — .claude-plugin/plugin.json:32
- skill ./skills/engineering/prototype — .claude-plugin/plugin.json:33
- skill ./skills/engineering/research — .claude-plugin/plugin.json:34
- skill ./skills/engineering/domain-modeling — .claude-plugin/plugin.json:35
- skill ./skills/engineering/codebase-design — .claude-plugin/plugin.json:36
- skill ./skills/engineering/code-review — .claude-plugin/plugin.json:37
- skill ./skills/engineering/resolving-merge-conflicts — .claude-plugin/plugin.json:38
- skill ./skills/engineering/wizard — .claude-plugin/plugin.json:39
- skill ./skills/productivity/grill-me — .claude-plugin/plugin.json:40
- skill ./skills/productivity/grilling — .claude-plugin/plugin.json:41
- skill ./skills/productivity/handoff — .claude-plugin/plugin.json:42
- skill ./skills/productivity/teach — .claude-plugin/plugin.json:43
- skill ./skills/productivity/to-questionnaire — .claude-plugin/plugin.json:44
- skill ./skills/productivity/wait-what — .claude-plugin/plugin.json:45
- skill ./skills/productivity/writing-for-agents — .claude-plugin/plugin.json:46

## Invoked by — required
none

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
JSON document declaring top-level properties:
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
Enumerates 25 individual skills explicitly (18 engineering, 7 productivity). Contains no slash command definitions, reflecting Matt's conversation-first, command-less architecture.

## Context cost
1636 bytes (~409 tokens). Claude Code plugin manifest.

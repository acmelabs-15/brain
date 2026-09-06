---
package: addy
name: Intent → Skill Mapping
slug: intent-skill-mapping
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Intent → Skill Mapping

## Definition — verbatim
> "The agent should automatically map user intent to skills:" — AGENTS.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 22 | defines | Section heading introducing the mapping table from user prompts to skill workflows |
| docs/opencode-setup.md | 112 | defines | Section heading detailing automatic intent-to-skill routing rules for OpenCode |

## Consumes
User prompt or stated engineering objective.

## Produces
Selection and invocation of the matching skill.

## When applied
Triggered automatically on every user request before taking action.

## Sub-concepts
skills

## Part of
skill-driven-execution-model

## Implementation status
defects: missing-path

## Design notes
Intent to skill mapping provides an automated classification mechanism that connects ambiguous or natural-language user requests directly to structured skill workflows, ensuring agents adhere to disciplined processes even when users do not explicitly invoke commands.

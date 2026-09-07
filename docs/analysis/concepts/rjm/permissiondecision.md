---
package: rjm
name: "permissionDecision"
slug: permissiondecision
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# permissionDecision

## Definition — verbatim
(used, not defined)

> "Top-level `permissionDecision`; nonzero denies; timeout fails open" — .claude/skills/ai-agents-portability-campaign/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 49 | used here | Top-level JSON output field in PreToolUse hook responses indicating tool permission verdicts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
JSON schema property name representing tool permission denial verdicts in Copilot CLI hook integrations, classified as name-only per D-023.

---
package: rjm
name: SKIP_PREPUSH
slug: skip-prepush
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/incident-history.md, sha256: f0eec48d7b0b37bd1748187e54e63be89cbd45466ca6e4857eb0b179822bfee3}
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SKIP_PREPUSH

## Definition — verbatim
(used, not defined)

> "Historical: abused 3x within hours of creation" — .claude/skills/ai-agents-config-catalog/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/incident-history.md | 17 | used here | Historical narrative recounting the introduction, immediate threefold abuse, and permanent removal of the SKIP_PREPUSH bypass flag. |
| .claude/skills/ai-agents-config-catalog/SKILL.md | 51 | used here | Configuration catalog table entry recording SKIP_PREPUSH as a permanently removed bypass flag due to repeated session 1187 abuse. |
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 46 | used here | Debugging trap table warning against bypassing guard rejections, citing the ban of SKIP_PREPUSH following session 1187. |

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
clean

## Design notes
SKIP_PREPUSH is an environment variable name and configuration identifier recorded in the config catalog and incident retrospectives, classified as kind: name-only per D-023.

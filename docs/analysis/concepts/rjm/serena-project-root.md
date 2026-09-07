---
package: rjm
name: SERENA_PROJECT_ROOT
slug: serena-project-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SERENA_PROJECT_ROOT

## Definition — verbatim
(used, not defined)

> "| `SERENA_PROJECT_ROOT` | env var (user-set) | Formerly overrode automatic Serena project root detection in the worktree scope guard. Set to the absolute path of the intended worktree when switching projects | Retired hook (ADR-097) |" — .claude/skills/ai-agents-config-catalog/SKILL.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 61 | used here | Documented as a retired user-set environment variable that previously overrode automatic Serena project root detection in the retired worktree scope guard. |

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
SERENA_PROJECT_ROOT is a retired environment variable identifier previously used to override project root detection in a deleted worktree scope guard rather than an active lifecycle concept, classified as name-only per D-023.

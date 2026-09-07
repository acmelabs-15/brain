---
package: rjm
name: Hotfix
slug: hotfix
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Hotfix

## Definition — verbatim
> "Hotfix (single known defect, clear root cause, small blast radius)" — docs/when-to-use.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 62 | used here | Used in Cherry-Pick section illustrating critical security patch propagation across release branches. |
| docs/when-to-use.md | 30 | defined here | Defined in fitness table as a streamlined lifecycle task shape skipping spec and plan for urgent, isolated bugs. |

## Consumes
A single known defect with verified root cause and small blast radius.

## Produces
A targeted emergency fix applied, tested, reviewed, and shipped directly.

## When applied
Triggered when resolving urgent production bugs or propagating critical security patches across multiple maintenance branches.

## Sub-concepts
none

## Part of
when-to-use

## Implementation status
defects: orphan

## Design notes
Hotfix defines both an operational cherry-pick workflow across release lines and an expedited lifecycle shape that skips /spec and /plan to deploy urgent, well-understood fixes.

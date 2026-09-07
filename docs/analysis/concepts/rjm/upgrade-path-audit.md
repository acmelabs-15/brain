---
package: rjm
name: Upgrade Path Audit
slug: upgrade-path-audit
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Upgrade Path Audit

## Definition — verbatim
> "CHANGELOG quality: clear, user-facing, migration notes?" — .claude/skills/dx-review/SKILL.md:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 130 | defines | Defined as Step 5 of the audit process evaluating changelogs, migration documentation, and deprecation policies. |

## Consumes
Project changelogs, migration guides, release notes, and deprecation markers identified via source code searches.

## Produces
An Upgrade Path dimension score (0-10, typically INFERRED) and documentation deficiency notes regarding breaking changes.

## When applied
Executed as Step 5 of dx-review to evaluate how seamlessly existing developers can upgrade across product versions.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
Step 5 in rjm's dx-review audit procedure that evaluates how well a product supports version upgrades. It inspects changelogs for user-facing clarity, checks for actionable step-by-step migration guides, and verifies the presence of deprecation notices before breaking changes occur.

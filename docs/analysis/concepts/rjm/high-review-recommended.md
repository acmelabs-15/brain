---
package: rjm
name: High (Review Recommended)
slug: high-review-recommended
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-detection/SKILL.md, sha256: d30a2af5f4760055052ffa9f61d5f440df2538d1d34761b0367dd6b48d33ec9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# High (Review Recommended)

## Definition — verbatim
(used, not defined)

> "### High (Review Recommended)" — .claude/skills/security-detection/SKILL.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-detection/SKILL.md | 99 | defined here | Section heading categorizing high risk file patterns (build scripts, container configs, controllers, IaC) triggering recommended security review. |

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
defects: doc-drift

## Design notes
High (Review Recommended) is a section heading in the security-detection skill grouping file patterns that warrant advisory security review rather than an operational lifecycle concept, classified as kind: name-only per D-023.

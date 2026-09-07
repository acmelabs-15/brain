---
package: rjm
name: Source of Truth Ownership
slug: source-of-truth-ownership
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Source of Truth Ownership

## Definition — verbatim
(used, not defined)

> "Every piece of data in the system has exactly one owner. Make the owner obvious in code and documentation." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 25 | defined here | Section heading introducing rules and guidelines for single-owner data stewardship and derived store rebuildability. |

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
A documentation section heading in data-intensive-applications.md organizing data ownership and single-source-of-truth rules rather than an operational lifecycle concept, classified as kind: name-only per D-023.

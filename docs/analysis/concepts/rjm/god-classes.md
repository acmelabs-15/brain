---
package: rjm
name: God classes
slug: god-classes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# God classes

## Definition — verbatim
> "| God classes | One class doing everything |" — .claude/skills/golden-principles/references/design-separation-of-concerns.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 63 | defined here | Listed in the common violations table as an anti-pattern where a single massive class aggregates disparate responsibilities. |

## Consumes
Monolithic classes aggregating thousands of lines, dozens of methods, and unconstrained access to disparate system dependencies.

## Produces
Decomposed classes, collaborator delegate networks, and granular single-responsibility interfaces.

## When applied
Identified during codebase health reviews, file size invariant checks, and complexity scans when classes amass excessive responsibilities.

## Sub-concepts
extract-classes

## Part of
separation-of-concerns

## Implementation status
defects: missing-path

## Design notes
God classes represent a major architectural failure mode in rjm where a single class centralizes control and aggregates multiple domain concerns. Because God classes touch almost every subsystem, they create high coupling, become hotbeds for merge conflicts, resist isolated unit testing, and impede parallel development. Decomposing God classes into focused collaborators restores modularity and testability.

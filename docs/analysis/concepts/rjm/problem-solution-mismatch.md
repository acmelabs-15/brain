---
package: rjm
name: Problem-Solution Mismatch
slug: problem-solution-mismatch
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Problem-Solution Mismatch

## Definition — verbatim
> "Solution seeking a problem; ADR sells a pre-decided choice" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 130 | defines | Tabulated under Magic Tricks anti-patterns as documenting an ADR to rationalize a pre-selected solution in search of a problem. |

## Consumes
Context problem description and proposed solution pairing.

## Produces
Rejection of retroactive justifications, requiring authors to restate real problems before selecting technology.

## When applied
Detected when an ADR's problem statement has clearly been reverse-engineered to justify adopting a favored tool or technology.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Problem-Solution Mismatch represents the classic 'solution in search of a problem' failure mode, where an author decides to adopt a specific technology (e.g. for resume building or novelty) and then drafts an ADR with artificial constraints designed to make that technology the only viable choice. In rjm, reviewers reject these post-hoc justifications to maintain problem-first engineering.

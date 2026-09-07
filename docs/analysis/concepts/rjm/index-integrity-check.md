---
package: rjm
name: Index Integrity Check
slug: index-integrity-check
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Index Integrity Check

## Definition — verbatim
> "2. **Index Integrity Check**: Periodic validation that all skill files have index entries" — .agents/archive/planning/PRD-skills-index-registry.md:437

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 437 | defined here | Specified as a periodic validation control ensuring all repository skill files have corresponding index entries. |

## Consumes
Repository skill files on disk and the central skills index registry.

## Produces
Integrity audit report identifying unindexed, orphan, or drifting skill definitions.

## When applied
Executed periodically (via scheduled CI or maintenance audit) to verify synchronization between skill files and registry entries.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Index Integrity Check is an asynchronous audit mechanism in rjm's skill governance framework. While the pre-commit gate blocks unregistered skills at commit time, the integrity check periodically verifies that the entire repository skill set remains fully cataloged, detecting out-of-band additions or metadata drift.

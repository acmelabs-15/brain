---
package: rjm
name: Amendment Process
slug: amendment-process
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Amendment Process

## Definition — verbatim
(used, not defined)

> "Amendment Process" — .agents/governance/steering-committee-charter.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 154 | defined here | Heading and procedure specifying formal requirements for altering the steering committee charter. |

## Consumes
Written amendment proposals submitted by Steering Committee members.

## Produces
Updated charter versions ratified by unanimous committee approval following a 2-week comment period.

## When applied
When modifying governance rules, role compositions, voting thresholds, or committee procedures.

## Sub-concepts
none

## Part of
steering-committee-charter

## Implementation status
defects: doc-drift, missing-path

## Design notes
Formal governance amendment protocol establishing stability and consensus for system-wide rules. Requiring a 2-week comment period and unanimous approval prevents unilateral changes to core agent operating constraints.

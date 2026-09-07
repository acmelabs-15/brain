---
package: rjm
name: Status Consistency
slug: status-consistency
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-schemas.md, sha256: 6520d76b9eae7f6d574a1291dc027464ad24dd8d388d55ea04364b25a8a7a431}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Status Consistency

## Definition — verbatim
> "Child cannot be `done` if parent is `draft`" — .claude/skills/spec-generator/references/spec-schemas.md:428

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-schemas.md | 428 | defined here | Validation rule governing lifecycle status synchronization between parent and child artifacts. |

## Consumes
Status attributes across related `REQ-NNN`, `DESIGN-NNN`, and `TASK-NNN` artifacts.

## Produces
Validation verdict preventing state synchronization anomalies between parent and child specifications.

## When applied
> "Child cannot be `done` if parent is `draft`" — .claude/skills/spec-generator/references/spec-schemas.md:428

## Sub-concepts
none

## Part of
traceability-matrix

## Implementation status
defects: missing-path

## Design notes
Prevents lifecycle inconsistencies across specification hierarchies, ensuring implementation work is not completed against specifications that have not been approved or are still in active draft status.

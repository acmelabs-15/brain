---
package: rjm
name: Archival policy
slug: archival-policy
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Archival policy

## Definition — verbatim
> "**Archival policy**: rotation fires when the active file reaches 100 entries" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 126 | defined here | Defines the rotation rule for STEP-0.5-METRICS.md when reaching 100 entries, renaming to a date-stamped archive file. |
| .claude/skills/spec-generator/references/spec-step0-gates.md | 142 | defined here | Defines rotation of STEP-0-METRICS.md after each kill-criteria review or 100 entries using UTC timestamp suffixes. |

## Consumes
Active metrics tally file entry count and review cadence triggers.

## Produces
Archived date-stamped or timestamp-stamped metrics log file and a newly initialized active metrics tally file.

## When applied
Triggered when active metrics files reach 100 entries or following a kill-criteria review (every 30 invocations).

## Sub-concepts
none

## Part of
step-0-5-metrics-tally, step-0-gates

## Implementation status
defects: missing-path, doc-drift

## Design notes
Maintains bounded telemetry file sizes and structured historical audit trails by rotating metrics logs upon reaching threshold capacities or review checkpoints.

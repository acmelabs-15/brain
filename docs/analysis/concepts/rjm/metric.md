---
package: rjm
name: metric
slug: metric
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/SKILL.md, sha256: d07aa90e79ffe8c33b566756e2d80f22aabbcbb71daf128c132d2f1047d1d23f}
  - {path: .claude/skills/observability/schema.json, sha256: 1ace8993f809a4b99066c54b6612555cd89aaae0de1af9585a317fdb3b370632}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# metric

## Definition — verbatim
> "\"metric\"," — .claude/skills/observability/schema.json:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/observability/schema.json | 22 | defined here | Primary definition of `metric` within schema.json. |
| .claude/skills/observability/SKILL.md | 51 | defined here | Primary definition of `metric` within SKILL.md. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
An operational technique or artifact (metric) utilized within the rjm ecosystem to ensure consistency and systematic execution.

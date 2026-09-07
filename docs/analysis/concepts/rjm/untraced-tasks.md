---
package: rjm
name: Untraced Tasks
slug: untraced-tasks
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Untraced Tasks

## Definition — verbatim
> "Tasks without design reference" — .claude/skills/retrospective/references/diagnosis-and-actions.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 42 | defined here | Traceability metric defining tasks without a design reference, classified as a blocking error targeted at zero. |

## Consumes
Task specification artifacts lacking design references in their metadata.

## Produces
Blocking error classification requiring immediate remediation to link tasks to their governing design specifications.

## When applied
Evaluated during retrospective specification layer health checks.

## Sub-concepts
none

## Part of
traceability-metrics

## Implementation status
clean

## Design notes
Untraced Tasks detects implementation tasks created without explicit links to their governing design specifications, preventing rogue or ungrounded implementation work.

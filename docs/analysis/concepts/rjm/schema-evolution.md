---
package: rjm
name: schema evolution
slug: schema-evolution
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# schema evolution

## Definition — verbatim
> "changing the shape of stored data without breaking readers or writers that have not been upgraded yet." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 32 | used here | Cited as the architectural requirement for optional fields with documented defaults when evolving session logs |
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 18 | defined here | Defined in core definitions list as changing stored data shape without breaking unupgraded readers or writers |
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 85 | defined here | Section heading introducing principles for evolving schemas when old and new code coexist |

## Consumes
Stored data structures, schema definitions, serialization formats.

## Produces
Backward- and forward-compatible schema migrations, optional fields with documented defaults.

## When applied
When changing stored data models, session log schemas, or protocol message formats.

## Sub-concepts
backward-compatibility, forward-compatibility

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Schema evolution in rjm governs how persistent data structures such as session JSON logs and telemetry files adapt over time. Derived from Kleppmann's DDIA principles, it mandates explicit Single Source of Truth (SoR) ownership, additive optional fields, and graceful tolerance of unknown attributes so old readers and new writers coexist without validation failures.

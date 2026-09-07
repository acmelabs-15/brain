---
package: rjm
name: Logs
slug: logs
kind: artifact
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
  - {path: .claude/skills/observability/references/otel-semantic-conventions.md, sha256: 7e2b74749fe4c0049aea726658f344b495cda0e05525d52d149adeaa62316f13}
  - {path: .claude/skills/skillforge/.gitignore, sha256: 50a512c8f978ed2a4810ff795d00e0a023abfbcb4ac0e88b98f477279424db5c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Logs

## Definition — verbatim
> "Timestamped records of discrete events. Use for debugging, auditing, compliance." — .claude/skills/analyze/references/reliability-observability-pillars.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 22 | defined here | Subsection defining logs as discrete timestamped records with best practices (JSON formatting, correlation IDs). |
| .claude/skills/observability/references/otel-semantic-conventions.md | 37 | defined here | Listed in OpenTelemetry signal categories with standardized severity, body, and attributes. |
| .claude/skills/skillforge/.gitignore | 50 | used here | Heading in gitignore file ignoring runtime log outputs. |

## Consumes
System execution events, error occurrences, transaction workflows.

## Produces
Timestamped structured event records correlated by trace IDs for debugging and compliance.

## When applied
Emitted during system execution and consumed during incident investigation, debugging, and audit reviews.

## Sub-concepts
none

## Part of
observability-pillars

## Implementation status
defects: missing-path, doc-drift

## Design notes
Logs forms the first pillar of observability in rjm, providing immutable, timestamped event records enriched with context and correlation IDs to enable granular forensic diagnosis of specific discrete events.

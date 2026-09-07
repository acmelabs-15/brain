---
package: rjm
name: schema-drift-detector
slug: schema-drift-detector
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# schema-drift-detector

## Definition — verbatim
(used, not defined)

> "| `schema-drift-detector` | DB schema vs struct alignment |" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 49 | used here | Listed in the static analysis drift detection table as the tool checking database schema against application struct definitions. |

## Consumes
Database schema definitions (SQL/DDL) and code struct declarations.

## Produces
Schema alignment reports and mismatch flags.

## When applied
Applied during build preflight or database migration testing to prevent schema-code desynchronization.

## Sub-concepts
none

## Part of
drift-detection-via-static-analysis

## Implementation status
clean

## Design notes
A purpose-built static analysis checker in rjm that enforces structural synchronization between database schemas and application data access structures.

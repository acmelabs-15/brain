---
package: rjm
name: Deprecated Skills Section
slug: deprecated-skills-section
kind: template
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Deprecated Skills Section

## Definition — verbatim
> "The index MUST include a separate section for deprecated skills." — .agents/archive/planning/PRD-skills-index-registry.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 100 | defined here | Specified as functional requirement FR-4 establishing an isolated table for deprecated skills. |

## Consumes
Deprecated skill records, deprecation dates, rationale statements, and replacement skill identifiers.

## Produces
A dedicated deprecation table within the skills index preventing obsolete skills from polluting active search results while retaining backwards auditability.

## When applied
Applied when a skill is superseded or declared obsolete.

## Sub-concepts
none

## Part of
skills-index-registry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A specialized registry section in rjm that retains deprecated skills with their deprecation dates, reasons, and pointers to replacement skills. It prevents agent confusion when historical documents cite obsolete skills while ensuring agents always adopt current best practices.

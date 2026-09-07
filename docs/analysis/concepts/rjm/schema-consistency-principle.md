---
package: rjm
name: schema-consistency principle
slug: schema-consistency-principle
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# schema-consistency principle

## Definition — verbatim
(used, not defined)

> "the schema-consistency principle ADR-028 established for" — .agents/architecture/ADR-056-skill-output-format-standardization.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 17 | used here | Cited principle requiring output objects to include all properties consistently across calls. |

## Consumes
Skill output schemas and object serialization design.

## Produces
Uniform schema structure across skill script invocations.

## When applied
When designing and implementing output payloads for CLI tools and skills.

## Sub-concepts
standard-envelope

## Part of
skill-output-format-standardization

## Implementation status
clean

## Design notes
An architectural design principle originating in ADR-028 and continued in ADR-056 requiring that all properties be present on output objects regardless of execution path, preventing schema drift that causes agent parser failures.

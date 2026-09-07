---
package: rjm
name: THE SYSTEM SHALL
slug: the-system-shall
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# THE SYSTEM SHALL

## Definition — verbatim
> "Required behavior" — .agents/governance/ears-format.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/ears-format.md | 44 | defined here | Tabular definition of the core normative EARS keyword specifying required system behavior or action. |

## Consumes
Defined business logic, architectural policies, or implementation actions.

## Produces
The mandatory normative action clause in an EARS requirement statement.

## When applied
Applied in all six EARS requirement patterns as the binding assertion of required system behavior.

## Sub-concepts
none

## Part of
- basic-syntax
- ears-format

## Implementation status
defects: missing-path (.agents/governance/ears-format.md:331 broken relative link to archived enhancement-PROJECT-PLAN.md)

## Design notes
THE SYSTEM SHALL represents the mandatory normative assertion clause across all EARS requirement patterns in rjm. By establishing a fixed, non-negotiable phrasing for system obligations, it eliminates ambiguous modal verbs like "should", "may", or "can". Without this phrase, requirements lack a testable assertion of mandatory behavior.

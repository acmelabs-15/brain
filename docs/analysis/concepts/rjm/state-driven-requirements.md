---
package: rjm
name: State-Driven Requirements
slug: state-driven-requirements
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

# State-Driven Requirements

## Definition — verbatim
> "Requirements that apply while a condition is true." — .agents/governance/ears-format.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/ears-format.md | 87 | defined here | Defined as Pattern 3 of the EARS grammar specifying active behaviors governed by an ongoing state condition. |

## Consumes
Ongoing system states, lifecycle phases, or active operational modes.

## Produces
Syntactic requirements formatted as `WHILE [condition is true] THE SYSTEM SHALL [action] SO THAT [rationale]`.

## When applied
Applied when specifying behavior that must persist throughout a modal duration (e.g., while a session is in WORKING phase).

## Sub-concepts
- the-system-shall

## Part of
- ears-format

## Implementation status
defects: missing-path (.agents/governance/ears-format.md:331 broken relative link to archived enhancement-PROJECT-PLAN.md)

## Design notes
State-driven requirements govern modal system behaviors that remain in effect as long as a specified state condition holds true in rjm. By using the WHILE clause, they distinguish continuous state-bound constraints (such as preventing phase regression during an active working session) from instantaneous event triggers. Without state-driven requirements, temporal state constraints would be difficult to model precisely.

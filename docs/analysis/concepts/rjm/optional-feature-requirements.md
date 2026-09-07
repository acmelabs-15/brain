---
package: rjm
name: Optional Feature Requirements
slug: optional-feature-requirements
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

# Optional Feature Requirements

## Definition — verbatim
> "Requirements for optional/configurable features." — .agents/governance/ears-format.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/ears-format.md | 107 | defined here | Defined as Pattern 4 of the EARS grammar specifying behaviors that activate only when an optional feature or flag is enabled. |

## Consumes
Configuration parameters, feature flags, or environment toggles.

## Produces
Syntactic requirements formatted as `WHERE [feature is enabled/configured] THE SYSTEM SHALL [action] SO THAT [rationale]`.

## When applied
Applied when specifying capabilities conditional on user configuration, feature toggles, or optional environment capabilities.

## Sub-concepts
- the-system-shall

## Part of
- ears-format

## Implementation status
defects: missing-path (.agents/governance/ears-format.md:331 broken relative link to archived enhancement-PROJECT-PLAN.md)

## Design notes
Optional feature requirements isolate behaviors that depend on specific configuration settings or feature flags in rjm. Using the WHERE clause, they decouple baseline system behavior from modular, optional capabilities (such as parallel multi-agent execution). Without optional feature requirements, configurable behaviors risk being treated as mandatory baseline operations.

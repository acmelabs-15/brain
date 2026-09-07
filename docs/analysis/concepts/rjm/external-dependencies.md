---
package: rjm
name: External dependencies
slug: external-dependencies
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# External dependencies

## Definition — verbatim
> "Unpredictable, unreliable, or uncontrollable external behavior" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 14 | defined here | Fourth criterion of the ASR Test assessing risk from unpredictable or uncontrollable third-party dependencies and APIs. |

## Consumes
Third-party library choices, external SaaS endpoints, remote vendor APIs, cloud provider infrastructure dependencies.

## Produces
Dependency risk evaluation score prompting ADR documentation of fallback, retry, and fault-tolerance strategies.

## When applied
Evaluated during initial ASR Test assessment when introducing or altering external service and library dependencies.

## Sub-concepts
none

## Part of
asr-test

## Implementation status
clean

## Design notes
The fourth criterion of the ASR Test, External dependencies evaluates architectural risks originating from systems outside direct team control. When an architectural choice relies on third-party services with unpredictable availability, volatile rate limits, or proprietary protocols, an ADR must document the rationale and the necessary isolation patterns (circuit breakers, anti-corruption layers, caching) needed to preserve system reliability.

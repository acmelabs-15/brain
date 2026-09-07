---
package: rjm
name: Cross-cutting leakage
slug: cross-cutting-leakage
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Cross-cutting leakage

## Definition — verbatim
> "| Cross-cutting leakage | Logging logic scattered everywhere |" — .claude/skills/golden-principles/references/design-separation-of-concerns.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 64 | defined here | Listed in the common violations table as the scattering of cross-cutting concerns like logging throughout core business logic. |

## Consumes
Inline invocations of logging, security checks, caching, metrics collection, and transaction management tangled within business logic.

## Produces
Middleware pipelines, aspect wrappers, decorator patterns, and clean separation between business algorithms and cross-cutting infrastructure.

## When applied
Flagged during architecture reviews and code audits when infrastructure concerns pollute domain logic methods across multiple layers.

## Sub-concepts
none

## Part of
separation-of-concerns

## Implementation status
defects: missing-path

## Design notes
Cross-cutting leakage occurs when infrastructure concerns that span multiple architectural layers (such as logging, authentication, caching, and telemetry) are hardcoded directly into business logic. This clutters domain code, creates boilerplate repetition, and impedes centralized updates to operational policies. Using interceptors, decorators, or middleware cleanly isolates these concerns.

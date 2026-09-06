---
package: addy
name: lifecycle
slug: lifecycle
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: external/using-agent-skills.md, sha256: f900bb1f69f838528d2fc85316cb851ca19488a22005f1249ec5d5fc059d32c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# lifecycle

## Definition — verbatim
(used, not defined)
> "workflows across the full lifecycle." — external/browser-testing-with-devtools.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/browser-testing-with-devtools.md | 14 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/code-review-and-quality.md | 12 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/frontend-ui-engineering.md | 14 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/idea-refine.md | 14 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/interview-me.md | 14 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/observability-and-instrumentation.md | 14 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/performance-optimization.md | 12 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/planning-and-task-breakdown.md | 12 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/security-and-hardening.md | 12 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/source-driven-development.md | 14 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/spec-driven-development.md | 14 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/test-driven-development.md | 14 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |
| external/using-agent-skills.md | 14 | used here | Describes skills as encoding workflows across the full engineering lifecycle. |

## Consumes
All project phases and skills.

## Produces
End-to-end development workflow from requirements to production launch.

## When applied
Across the complete development workflow.

## Sub-concepts
build-phase, verify-phase

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The overarching phased workflow structure in addy (Define, Plan, Build, Verify, Review, Ship) coordinating agent skills from initial concept through production operations.

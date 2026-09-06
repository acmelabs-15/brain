---
package: addy
name: performance-optimization
slug: performance-optimization
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# performance-optimization

## Definition — verbatim
> "Measure-first approach - Core Web Vitals targets, profiling workflows, bundle analysis, anti-pattern detection" — README.md:271

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 12 | references | Directs deep performance analysis to performance-optimization skill |
| evals/cases/performance-optimization.json | 2 | applies | Test suite evaluation manifest for performance optimization capabilities |
| external/code-review-and-quality.md | 12 | references | External catalog cross-reference to performance-optimization skill |
| external/performance-optimization.md | 5 | defines | Web catalog page detailing measure-first approach and performance workflows |
| external/security-and-hardening.md | 12 | references | External catalog cross-reference linking security and performance skills |
| README.md | 271 | applies | Catalog summary table entry for performance-optimization skill |
| references/performance-checklist.md | 3 | references | Reference checklist citing performance-optimization for measurement workflows |
| skills/constraint-driven-development/SKILL.md | 311 | references | Constraint guide citing performance-optimization for benchmark validation |
| skills/observability-and-instrumentation/SKILL.md | 22 | references | Instrumentation guide directing slowness optimization to performance-optimization |
| skills/performance-optimization/SKILL.md | 2 | defines | Skill definition establishing measure-first optimization across web and backend |

## Consumes
Profiling traces, Core Web Vitals audits, bundle analysis stats, database explain plans.

## Produces
Performance audit reports, targeted optimizations, and before/after metric benchmark comparisons.

## When applied
When performance requirements exist, when profiling reveals slowness, or when Core Web Vitals / load times degrade.

## Sub-concepts
none

## Part of
addy:Review

## Implementation status
defects: doc-drift, orphan

## Design notes
`performance-optimization` is Addy's dedicated performance engineering skill. It enforces a strict "measure first" methodology across frontend, backend, queries, and bundle sizes, prohibiting speculative optimizations by requiring empirical baseline measurements and post-optimization verification.

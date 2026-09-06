---
package: addy
name: BUNDLE SIZE
slug: bundle-size
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# BUNDLE SIZE

## Definition — verbatim
> "│   BUNDLE SIZE    │  bundlesize check" — skills/ci-cd-and-automation/SKILL.md:47

## Also called — verbatim
`Large Bundle Size` — skills/performance-optimization/SKILL.md:295

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 47 | defined here | Automated gate in the CI quality pipeline executing a bundle size check |
| skills/performance-optimization/SKILL.md | 295 | defined here | Optimization anti-pattern section addressing tree-shaking, code splitting, and lazy loading |

## Consumes
Bundled JavaScript assets, bundler output statistics, and bundle size budget configuration.

## Produces
Asset size measurement report and pass/fail budget verdict.

## When applied
During CI verification before PR merge, and during performance profiling when initial load sizes exceed targets.

## Sub-concepts
none

## Part of
quality-gate-pipeline, performance-optimization

## Implementation status
clean

## Design notes
In addy, BUNDLE SIZE operates both as a hard automated CI gate and as a key performance optimization concern. By enforcing bundle size limits during CI and guiding developers to use tree-shaking, dynamic imports, and route-level code splitting, it guarantees client-side payloads remain compact and performant.

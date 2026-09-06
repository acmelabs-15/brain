---
package: addy
name: Synthetic
slug: synthetic
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Synthetic

## Definition — verbatim
> "- **Synthetic (Lighthouse, DevTools Performance tab):** Controlled conditions, reproducible. Best for CI regression detection and isolating specific issues." — skills/performance-optimization/SKILL.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 44 | defined here | Defined as controlled, reproducible performance measurement for CI regression detection and diagnostics. |

## Consumes
Controlled lab test environments, diagnostic tooling (Lighthouse, Chrome DevTools), and reproducible benchmark workloads.

## Produces
Reproducible performance traces, lighthouse scores, and CI regression checks.

## When applied
During automated CI builds and focused debugging sessions to detect regressions and analyze specific code changes under controlled conditions.

## Sub-concepts
none

## Part of
- the-optimization-workflow
- performance-optimization

## Implementation status
clean

## Design notes
A controlled lab measurement technique that ensures performance evaluations are reproducible and isolated from external real-world network variations, making it ideal for CI regression detection.

---
package: addy
name: Metric-Honesty Rule
slug: metric-honesty-rule
kind: gate
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Metric-Honesty Rule

## Definition — verbatim
(used, not defined)
> "## Metric-Honesty Rule" — agents/web-performance-auditor.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/web-performance-auditor.md | 41 | defines | Section heading establishing strict rules against hallucinating performance metrics during static code analysis. |

## Consumes
Audit input sources, static code analysis results, and scorecard metric values.

## Produces
Verification that all scorecard entries reflect authentic measurements or are explicitly marked not measured.

## When applied
Applied whenever constructing a performance audit report or populating metric scorecards.

## Sub-concepts
never-fabricate-metrics

## Part of
web-performance-audit

## Implementation status
clean

## Design notes
Metric-Honesty Rule is an essential integrity gate in addy, forbidding LLMs from fabricating synthetic Core Web Vitals figures when reading static source code without empirical tool artifacts.

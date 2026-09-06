---
package: addy
name: Never fabricate metrics
slug: never-fabricate-metrics
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

# Never fabricate metrics

## Definition — verbatim
> "Never fabricate metrics." — agents/web-performance-auditor.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/web-performance-auditor.md | 43 | defines | Core imperative of the Metric-Honesty Rule declaring that LLMs reading static code cannot measure runtime Web Vitals. |

## Consumes
Performance audit assertions and scorecard entries.

## Produces
Enforcement that unmeasured metrics are marked 'not measured' rather than populated with speculative numbers.

## When applied
Applied universally during web performance evaluation whenever empirical data is absent.

## Sub-concepts
none

## Part of
metric-honesty-rule

## Implementation status
clean

## Design notes
Never fabricate metrics establishes an uncompromising standard for agent honesty, mandating that lack of measurement tools results in explicit unmeasured markers rather than plausible-sounding guesses.

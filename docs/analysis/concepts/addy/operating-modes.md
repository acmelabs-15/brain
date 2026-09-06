---
package: addy
name: Operating Modes
slug: operating-modes
kind: pattern
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

# Operating Modes

## Definition — verbatim
(used, not defined)
> "## Operating Modes" — agents/web-performance-auditor.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/web-performance-auditor.md | 10 | defines | Section heading defining Quick mode (static code scan) and Deep mode (runtime artifact interpretation) for web performance audits. |

## Consumes
Presence or absence of runtime performance artifacts (Lighthouse JSON, CrUX, PageSpeed Insights, DevTools trace).

## Produces
Selection of audit execution pathway, governing whether metrics are measured or marked unmeasured.

## When applied
Evaluated at the start of every web performance audit.

## Sub-concepts
none

## Part of
web-performance-audit

## Implementation status
clean

## Design notes
Operating Modes bifurcates performance auditing into static heuristic inspection (Quick) and empirical telemetry analysis (Deep), preventing agents from blurring static guesses with real measurements.

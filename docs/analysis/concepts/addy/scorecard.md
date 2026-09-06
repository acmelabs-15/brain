---
package: addy
name: Scorecard
slug: scorecard
kind: artifact
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Scorecard

## Definition — verbatim
> "The subagent returns a scorecard (only populated with sourced values — mark unmeasured fields `not measured`, never fabricate metrics), a ranked list of findings, positive observations, and proactive recommendations." — commands/webperf.toml:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/web-performance-auditor.md | 129 | defines | Section heading and markdown table format structuring Core Web Vitals metrics, values, data sources, targets, and statuses. |
| commands/webperf.toml | 27 | references | Specifies that the webperf command subagent returns a scorecard populated only with verified values or explicit unmeasured markers. |

## Consumes
Lab measurements, field data from CrUX, or null signals in quick mode.

## Produces
Tabular summary of Core Web Vitals compliance (LCP, INP, CLS) and Lighthouse scores.

## When applied
Rendered as the opening section of a Web Performance Audit report.

## Sub-concepts
none

## Part of
web-performance-audit

## Implementation status
clean

## Design notes
Scorecard provides an executive-level summary table of Core Web Vitals metrics at the start of a performance audit, enforcing provenance labeling for all recorded values.

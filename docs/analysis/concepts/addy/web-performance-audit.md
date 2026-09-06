---
package: addy
name: Web Performance Audit
slug: web-performance-audit
kind: artifact
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

# Web Performance Audit

## Definition — verbatim
(used, not defined)
> "## Web Performance Audit" — agents/web-performance-auditor.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/web-performance-auditor.md | 127 | defines | Defines the markdown output artifact schema for web performance audits containing a metric scorecard, summary counts, categorized findings, and recommendations. |

## Consumes
Web application code, runtime performance traces, and empirical measurement reports.

## Produces
Comprehensive markdown performance audit document with prioritized findings and Core Web Vitals scorecard.

## When applied
Emitted when executing /webperf or running the web-performance-auditor subagent.

## Sub-concepts
scorecard, operating-modes, severity-classification, metric-honesty-rule

## Part of
none

## Implementation status
clean

## Design notes
Web Performance Audit is the comprehensive report artifact delivered by web performance reviews, providing an evidence-backed scorecard and ranked remediation advice.

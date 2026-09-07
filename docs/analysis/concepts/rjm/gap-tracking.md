---
package: rjm
name: gap tracking
slug: gap-tracking
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# gap tracking

## Definition — verbatim
(used, not defined)

> "Produces quality reports with gap tracking and trend analysis." — .claude/agents/quality-auditor.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 3 | used here | Core capability of quality-auditor identifying missing tests, documentation, or guardrails across domains. |

## Consumes
Audit scan results across architectural layers.

## Produces
Explicit catalog of missing artifacts, unaddressed deficiencies, and coverage gaps per domain.

## When applied
Applied during domain quality auditing to highlight actionable omissions.

## Sub-concepts
none

## Part of
quality-auditor

## Implementation status
clean

## Design notes
An analytical technique used by the quality auditor to record specific structural deficiencies (such as missing unit tests, undocumented skills, or unverified workflows) across product domains. It translates abstract letter grades into concrete inventories of missing assets for targeted engineering remediation.

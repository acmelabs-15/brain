---
package: rjm
name: Force Mode
slug: force-mode
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/technical-guardrails.md, sha256: 16099b0af1bf37a012414b8430666217cbbc6e88c05a45ffc3c2e3f5d14b900d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Force Mode

## Definition — verbatim
> "**Force Mode**: Creates audit trail in `.agents/audit/pr-creation-force-*.txt`" — docs/technical-guardrails.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/technical-guardrails.md | 75 | defined here | Emergency bypass mechanism for PR creation that generates an audit trail log in `.agents/audit/pr-creation-force-*.txt`. |

## Consumes
Explicit bypass parameters or flags passed to GitHub PR creation scripts.

## Produces
Persistent audit trail records in `.agents/audit/pr-creation-force-*.txt` logging the circumstances and rationale for bypassing checks.

## When applied
When developers or agents intentionally bypass normal PR creation guardrails while maintaining auditability.

## Sub-concepts
none

## Part of
technical-guardrails

## Implementation status
defects: doc-drift

## Design notes
An emergency bypass mechanism in rjm's GitHub PR creation workflow that allows urgent pull requests to skip pre-creation checks while ensuring governance integrity through mandatory generation of an audit trail log.

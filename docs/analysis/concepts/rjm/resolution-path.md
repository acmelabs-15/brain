---
package: rjm
name: Resolution Path
slug: resolution-path
kind: template
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Resolution Path

## Definition — verbatim
(used, not defined)

> "## Resolution Path" — .agents/critique/ADR-045-debate-log.md:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 133 | defined here | Section heading in ADR-045 debate log detailing concrete steps to resolve P0 issues before round 2. |

## Consumes
Identified P0/P1 issues, review recommendations, debate consensus points.

## Produces
Actionable modification plan guiding the revision of an ADR prior to subsequent review rounds.

## When applied
Included in ADR debate logs following review rounds to define the revision roadmap.

## Sub-concepts
none

## Part of
adr-debate-log

## Implementation status
defects: cross-file-contradiction

## Design notes
Resolution Path is a structured section in rjm's multi-agent ADR debate log outlining the concrete remediation steps and modifications required to address critique findings and bring an ADR to consensus.

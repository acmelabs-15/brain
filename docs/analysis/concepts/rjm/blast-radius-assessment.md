---
package: rjm
name: Blast Radius Assessment
slug: blast-radius-assessment
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Blast Radius Assessment

## Definition — verbatim
(used, not defined)

> "## Blast Radius Assessment" — .agents/security/ADR-045-framework-extraction-security-review.md:871

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/ADR-045-framework-extraction-security-review.md | 871 | defined here | Section analyzing control failure scenarios, affected systems, data at risk, and isolation boundaries. |
| .claude/agents/security.md | 620 | defined here | Report template section heading structuring worst-case impact and containment strategy analysis. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
`Blast Radius Assessment` is a recurring audit document section heading and report template section in architectural security reviews evaluating failure impact and isolation boundaries rather than an independent software lifecycle concept, classified as `name-only` per D-023.

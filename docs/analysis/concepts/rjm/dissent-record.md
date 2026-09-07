---
package: rjm
name: Dissent Record
slug: dissent-record
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

# Dissent Record

## Definition — verbatim
(used, not defined)

> "## Dissent Record" — .agents/critique/ADR-045-debate-log.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 127 | defined here | Section heading in ADR-045 debate log capturing minority blocking arguments from High-Level Advisor. |

## Consumes
Reviewing agent dissenting opinions, BLOCK votes, disagree-and-commit statements.

## Produces
Permanent written record of unallayed architectural objections and counterpoints.

## When applied
Included in ADR debate logs under .agents/critique/ whenever an architectural decision is approved despite non-unanimous review feedback.

## Sub-concepts
none

## Part of
adr-debate-log

## Implementation status
defects: cross-file-contradiction

## Design notes
A Dissent Record is a governance template section in rjm debate logs that formally documents minority dissent, blocking arguments, and disagree-and-commit stances, ensuring that minority architectural concerns remain visible rather than being erased by consensus.

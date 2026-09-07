---
package: rjm
name: adr-review debate
slug: adr-review-debate
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# adr-review debate

## Definition — verbatim
(used, not defined)

> "The standard 6-agent adr-review debate (architect, critic, independent-thinker, security, analyst, high-level-advisor) ran on 2026-06-19 and is recorded at `.agents/critique/ADR-076-debate-log.md` (tally: 6 APPROVE-WITH-CHANGES, 0 BLOCK)." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 18 | used here | Cited as the multi-agent consensus debate required before ADR acceptance. |

## Consumes
Draft architecture decision records (ADRs) and critique prompts for the six review agent personas.

## Produces
Debate logs (`.agents/critique/ADR-NNN-debate-log.md`), vote tallies (`APPROVE-WITH-CHANGES`, `BLOCK`), and binding `must_fix` action items.

## When applied
Invoked during architecture review before an ADR can be accepted and authorized by repository maintainers.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A multi-agent consensus deliberation technique where six specialized persona agents (architect, critic, independent-thinker, security, analyst, high-level-advisor) critique proposed architectural changes to surface unexamined trade-offs, security vulnerabilities, and failure modes prior to implementation.

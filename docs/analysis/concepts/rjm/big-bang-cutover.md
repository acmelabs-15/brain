---
package: rjm
name: big-bang cutover
slug: big-bang-cutover
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# big-bang cutover

## Definition — verbatim
> "Is there a big-bang cutover where an incremental path would lower failure risk?" — .claude/skills/review/references/decision-rigor.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/decision-rigor.md | 92 | used here | Decision rigor checklist item flagging monolithic transitions in favor of incremental evolution. |

## Consumes
Deployment strategies, system migration proposals, and architecture transition plans.

## Produces
Risk findings and recommendations urging phased, incremental migration paths.

## When applied
During Stage-2 decision rigor review when evaluating rollout and cutover plans for architectural changes.

## Sub-concepts
none

## Part of
start-simple

## Implementation status
clean

## Design notes
An architectural anti-pattern flagged during decision rigor review where a monolithic, all-at-once system replacement elevates deployment failure risk relative to an incremental evolutionary rollout.

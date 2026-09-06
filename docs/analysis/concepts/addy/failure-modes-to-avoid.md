---
package: addy
name: Failure Modes to Avoid
slug: failure-modes-to-avoid
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Failure Modes to Avoid

## Definition — verbatim
> "These are the subtle errors that look like productivity but create problems:" — skills/using-agent-skills/SKILL.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 116 | defined here | Enumerates ten subtle behavioral anti-patterns where agents appear productive while introducing bugs and rework. |

## Consumes
Agent execution logs, user feedback, reasoning chains, code diffs.

## Produces
Checklist of ten anti-patterns used for self-auditing and avoiding deceptive productivity traps.

## When applied
Referenced during execution and self-review to catch subtle agent mistakes early.

## Sub-concepts
none

## Part of
using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
A catalog of ten subtle operational traps (such as silent assumptions, plowing ahead when confused, sycophancy, overcomplication, and skipping verification) that mimic productivity while generating technical debt and rework.

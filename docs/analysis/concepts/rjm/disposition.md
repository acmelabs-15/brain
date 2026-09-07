---
package: rjm
name: disposition
slug: disposition
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/avoiding-manufactured-work/SKILL.md, sha256: dabcb96a0c4d6575feac1b833b4402e6d81db7e20422444726beffd8edaeafc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# disposition

## Definition — verbatim
> "5. Report the disposition as one of: keep, shrink, defer, or delete." — .claude/skills/avoiding-manufactured-work/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/avoiding-manufactured-work/SKILL.md | 22 | defined here | Step 5 of the audit workflow mandating a 4-way classification verdict (keep, shrink, defer, delete) for follow-up work. |

## Consumes
Proposed follow-up deliverable, identified consumer, and minimum unblocking scope analysis.

## Produces
Explicit disposition verdict categorizing work into keep, shrink, defer, or delete.

## When applied
In step 5 of the avoiding-manufactured-work workflow when concluding an audit of proposed tasks.

## Sub-concepts
keep, shrink, delete

## Part of
avoiding-manufactured-work

## Implementation status
defects: missing-path

## Design notes
Disposition is the formal triage classification produced by the avoiding-manufactured-work skill. By requiring an explicit choice among four mutually exclusive categories (keep, shrink, defer, or delete), it prevents ambiguous backlog accumulation and forces agents to justify whether any proposed follow-up action is genuinely required or should be pruned immediately.

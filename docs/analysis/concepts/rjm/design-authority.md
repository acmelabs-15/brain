---
package: rjm
name: Design Authority
slug: design-authority
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/zimmermann-review-guidance.md, sha256: 2b8d3a21a4e0a2a8cd0766bfbe1b605752200470c4f6f94d189d2dbb625e0cfb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Design Authority

## Definition — verbatim
> "| **Design Authority** | Formal approval/sign-off | High, formal | Final acceptance, governance gate |" — .claude/skills/adr-review/references/zimmermann-review-guidance.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 11 | defined here | Third review perspective operating at high, formal rigor for final acceptance and governance sign-off, fulfilled by high-level-advisor. |

## Consumes
Final ADR drafts and unresolved conflicts from debate rounds.

## Produces
Binding architectural decisions, conflict rulings, and final approval sign-offs.

## When applied
Applied during final acceptance gates or when deadlocks require authoritative arbitration.

## Sub-concepts
none

## Part of
three-review-perspectives, zimmermann-review-guidance

## Implementation status
defects: missing-path

## Design notes
The apex governance role in rjm's ADR review framework. Fulfilled by the `high-level-advisor` agent persona, Design Authority arbitrates disputes, evaluates architectural compliance, and provides authoritative sign-off.

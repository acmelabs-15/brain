---
package: rjm
name: Stakeholder
slug: stakeholder
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

# Stakeholder

## Definition — verbatim
> "| **Stakeholder** | Confirm AD is adequate, seek agreement | Medium, official | Ready for team consensus |" — .claude/skills/adr-review/references/zimmermann-review-guidance.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 10 | defined here | Second review perspective operating at medium rigor to confirm adequacy and establish consensus; default stance for 6-agent debate. |

## Consumes
Completed ADR drafts ready for multi-agent evaluation.

## Produces
Official review positions (Accept, Disagree-and-Commit, Block) and categorized findings.

## When applied
Default perspective for the 6-agent review panel when an ADR is ready for team consensus.

## Sub-concepts
none

## Part of
three-review-perspectives, zimmermann-review-guidance

## Implementation status
defects: missing-path

## Design notes
The standard perspective for multi-agent ADR review in rjm. Reviewing agents act as affected stakeholders evaluating whether proposed solutions solve the stated problem and are acceptable to the broader engineering team.

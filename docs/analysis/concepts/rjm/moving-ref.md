---
package: rjm
name: moving ref
slug: moving-ref
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# moving ref

## Definition — verbatim
> "moving ref. `origin/main` is a different set of commits on Tuesday." — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 51 | used here | Anti-pattern of evaluating test deltas against dynamic git branches rather than fixed commit SHAs. |

## Consumes
Git repository revisions and comparison targets.

## Produces
Measurement instability and distorted baseline comparisons if not replaced with immutable commit SHAs.

## When applied
Relevant when measuring test additions, deletions, or diffs across revision histories.

## Sub-concepts
none

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
An anti-pattern in measurement and verification where comparisons are run against unstable branch tips (such as `origin/main`) rather than immutable commit SHAs, leading to false attribution of change counts.

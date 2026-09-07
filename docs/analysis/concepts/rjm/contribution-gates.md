---
package: rjm
name: contribution gates
slug: contribution-gates
kind: gate
package_phase: rjm:autoplan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# contribution gates

## Definition — verbatim
> "detect contribution gates" — .claude/skills/autoplan/SKILL.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 58 | used here | Governance gates in target repositories requiring API review and maintainer approval before implementation. |

## Consumes
Target repository contribution policies, PR guidelines, and API review requirements.

## Produces
Mandatory pre-implementation routing steps (API proposals, maintainer sign-off) for public-facing code changes.

## When applied
Detected during Phase 0 (Recon) when analyzing large governed repositories (frameworks, SDKs, runtimes).

## Sub-concepts
none

## Part of
phase-0-recon-the-target

## Implementation status
clean

## Design notes
`contribution gates` forces autonomous planning agents to respect repo governance (e.g. API reviews, ref-assembly updates, breaking-change policies) before jumping straight into code changes.

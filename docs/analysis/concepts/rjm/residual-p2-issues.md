---
package: rjm
name: Residual P2 Issues
slug: residual-p2-issues
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/issue-resolution.md, sha256: 0a50a77e7a5b822596d45280d9b7a1ee36a6d19b7f86e9ad7e948c98ee51e4e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Residual P2 Issues

## Definition — verbatim
> "Residual P2 Issues" — .claude/skills/adr-review/references/issue-resolution.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/issue-resolution.md | 123 | defined here | Section heading and logging requirement in the debate log recording unaddressed nice-to-have P2 issues for backlog creation. |

## Consumes
Unresolved P2 (nice-to-have) issues from independent reviewer feedback.

## Produces
Documented entries in the debate log under "Residual P2 Issues" and linked GitHub backlog issues.

## When applied
Compiled during the final issue resolution step of an ADR debate prior to concluding review.

## Sub-concepts
none

## Part of
issue-resolution, adr-review

## Implementation status
clean

## Design notes
The formal recording artifact for non-blocking improvement opportunities identified during multi-agent ADR review. While P2 issues do not block decision approval, logging them under Residual P2 Issues and filing them into the backlog ensures good ideas and secondary improvements are captured for future iterations.

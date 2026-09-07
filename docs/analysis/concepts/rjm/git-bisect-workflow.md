---
package: rjm
name: Git bisect workflow
slug: git-bisect-workflow
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Git bisect workflow

## Definition — verbatim
> "Git bisect workflow" — .claude/skills/git-advanced-workflows/SKILL.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 18 | defined here | Defined in triggers table as the target workflow for finding breaking commits. |

## Consumes
A known good commit tag/hash, a known bad commit, and reproducible verification criteria.

## Produces
Exact SHA of the commit that introduced a defect or test failure.

## When applied
Triggered when regression testing reveals a bug of unknown origin across multiple commits.

## Sub-concepts
automated-bisect

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
Git bisect workflow applies binary search over commit history to isolate regressions efficiently, reducing investigative time from linear scan to logarithmic inspection.

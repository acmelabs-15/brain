---
package: rjm
name: Phase 1: Assess the Situation
slug: phase-1-assess-the-situation
kind: phase
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

# Phase 1: Assess the Situation

## Definition — verbatim
> "### Phase 1: Assess the Situation" — .claude/skills/git-advanced-workflows/SKILL.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 24 | defined here | Defined as the opening assessment phase for diagnosing repository state before destructive operations. |

## Consumes
Repository working tree status, recent git log, and user workflow intent.

## Produces
Identification of applicable workflow, clean status check, and a timestamped safety branch.

## When applied
Mandatory first step before executing any advanced Git operation.

## Sub-concepts
safety-branch

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
Phase 1: Assess the Situation establishes defensive hygiene before Git operations, preventing accidental data loss by requiring status verification and safety branch creation prior to rewriting history.

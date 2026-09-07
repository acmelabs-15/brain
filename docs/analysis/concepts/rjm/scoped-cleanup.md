---
package: rjm
name: Scoped Cleanup
slug: scoped-cleanup
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scoped Cleanup

## Definition — verbatim
> "### 6. Boy Scout Rule (Scoped Cleanup)" — .claude/skills/review/references/code-quality.md:85

## Also called — verbatim
"Boy Scout Rule" — .claude/skills/review/references/code-quality.md:85

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/code-quality.md | 85 | defined here | Checklist section in code quality review enforcing opportunistic cleanup within touched files while guarding against scope creep. |

## Consumes
Pull request diff across touched files.

## Produces
Findings identifying rot left behind in modified files or excessive scope expansion into unrelated files.

## When applied
During code quality review on files already touched by a change.

## Sub-concepts
none

## Part of
code-quality

## Implementation status
defects: doc-drift, other

## Design notes
A code quality review pattern balancing the Boy Scout Rule against scope creep, mandating that authors leave touched files at least as clean as found without expanding diffs into broad, unrelated refactorings.

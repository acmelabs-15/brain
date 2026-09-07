---
package: rjm
name: Drift fails closed
slug: drift-fails-closed
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Drift fails closed

## Definition — verbatim
> "- **Drift fails closed**. If `.claude/skills/review/references/` and `.github/prompts/` diverge, the pre-push hook blocks the push. CI re-checks as a backstop." — .claude/skills/review/SKILL.md:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 187 | defined here | Review design principle mandating that divergence between local review prompts and CI prompts blocks git push. |

## Consumes
Comparison between local skill reference files and upstream CI prompt definitions.

## Produces
A blocking pre-push verification check preventing synchronization drift.

## When applied
Enforced during pre-push git hook execution and validated in CI builds.

## Sub-concepts
none

## Part of
review-principles

## Implementation status
defects: missing-path, doc-drift

## Design notes
A governance principle enforcing strict synchronization between local review reference prompts and remote CI prompt definitions, blocking push operations whenever drift occurs.

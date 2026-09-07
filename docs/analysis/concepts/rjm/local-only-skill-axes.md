---
package: rjm
name: local-only skill axes
slug: local-only-skill-axes
kind: technique
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

# local-only skill axes

## Definition — verbatim
> "The 3 local-only skill axes (`code-qualities-assessment`, `golden-principles`, `taste-lints`) need local code execution and repo state, so CI cannot run them, but they are language-agnostic and can be selected or pinned as always-on when relevant." — .claude/skills/review/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 31 | defined here | Defines review axes requiring local repo state and code execution. |

## Consumes
Local repository checkout, base branch diff, and Python execution environment.

## Produces
Repo-level quality metrics, architectural principles compliance checks, and stylistic taste linting findings.

## When applied
Run in deep-review mode or when explicitly pinned or risk-selected following canonical axis evaluation.

## Sub-concepts
none

## Part of
review, 15-axis-set

## Implementation status
defects: missing-path, doc-drift

## Design notes
Local-only skill axes execute specialized AST and repo-level analysis scripts that depend on local file access and command execution, verifying properties that CI cannot independently assess. They complement the prompt-driven canonical review axes by enforcing mechanical repository hygiene and structural architectural patterns.

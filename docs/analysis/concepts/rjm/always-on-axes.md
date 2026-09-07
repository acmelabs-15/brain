---
package: rjm
name: always-on axes
slug: always-on-axes
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

# always-on axes

## Definition — verbatim
> "analyst always runs, callers can pin extra always-on axes, and explicit deep review runs the full 15-axis set." — .claude/skills/review/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 4 | defined here | Defines review axes that execute unconditionally on every invocation. |

## Consumes
Review invocation arguments and caller configuration options.

## Produces
Unconditional execution of designated review axes regardless of change risk filtering.

## When applied
Evaluated during every `/review` execution where Stage 1 passes or yields an inconclusive verdict.

## Sub-concepts
analyst, spec-compliance

## Part of
review, stage-2-review-axes

## Implementation status
defects: missing-path, doc-drift

## Design notes
Always-on axes designate evaluation dimensions in rjm that run unconditionally on every review invocation, preventing critical baselines like requirements gap-checks from being bypassed by dynamic risk classification. Callers can also pin project-specific high-priority axes as always-on to enforce domain-critical invariants across all pull requests.

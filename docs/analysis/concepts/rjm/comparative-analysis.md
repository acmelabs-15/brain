---
package: rjm
name: comparative_analysis
slug: comparative-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# comparative_analysis

## Definition — verbatim
> "### Lens 10: Comparative Analysis" — .claude/skills/skillforge/references/multi-lens-framework.md:268

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 26 | used here | Applied as an evaluation lens in CVA skill specification questioning rounds. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 268 | defined here | Defined as Lens 10 benchmarking competing design options side-by-side across structured criteria. |

## Consumes
Two or more candidate designs, architectural patterns, algorithms, or technological choices.

## Produces
Side-by-side trade-off matrix evaluating alternatives against common criteria such as complexity, speed, and maintainability.

## When applied
Whenever multiple architectural approaches or patterns are viable and a defensible selection must be documented.

## Sub-concepts
none

## Part of
multi-lens-framework

## Implementation status
defects: doc-drift, missing-path

## Design notes
comparative_analysis (Lens 10 of rjm's multi-lens framework) mandates structured, side-by-side comparison of competing technical solutions against explicit evaluation criteria. Rather than adopting the first workable design, it forces objective evaluation of trade-offs, making decision rationale transparent and auditable. Without this technique, architectural decisions would default to developer familiarity and intuition rather than measurable merit.

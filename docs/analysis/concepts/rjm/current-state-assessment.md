---
package: rjm
name: Current State Assessment
slug: current-state-assessment
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Current State Assessment

## Definition — verbatim
> "### 1.2 Current State Assessment" — .claude/skills/prompt-engineer/references/workflow.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/workflow.md | 52 | defined here | Defined as the Phase 1 diagnostic step auditing working sections, ambiguities, and missing capabilities. |

## Consumes
Baseline prompt text and recorded observations of prompt performance.

## Produces
Triaged inventory identifying preserved effective text, ambiguous instructions, and unhandled edge case gaps.

## When applied
During Phase 1 of prompt optimization immediately following operating context evaluation.

## Sub-concepts
none

## Part of
full-process

## Implementation status
clean

## Design notes
Current State Assessment enforces the package's core principle of preserving what works. By explicitly identifying effective prompt sections alongside ambiguities and missing instructions, it ensures that optimization addresses demonstrated problems rather than performing indiscriminate full-text rewrites.

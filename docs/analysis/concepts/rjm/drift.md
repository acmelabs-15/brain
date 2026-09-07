---
package: rjm
name: Drift
slug: drift
kind: pattern
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Drift

## Definition — verbatim
> "Drift: the generated tree no longer matches what the generators would produce from the canonical tree." — .claude/skills/ai-agents-generation-and-release/SKILL.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 16 | defined here | Defined in jargon as the condition where generated artifacts diverge from what generators produce from canonical sources. |

## Consumes
Canonical source edits, unregenerated outputs.

## Produces
Drift gate failures and CI blockages.

## When applied
Evaluated during pre-push checks and CI validation runs.

## Sub-concepts
agent-template-drift, lib-mirror-drift, drift-gate-failures

## Part of
ai-agents-generation-and-release

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
Drift denotes state divergence between canonical source files and their derived generated artifacts. In rjm's multi-platform architecture, drift occurs when contributors modify source definitions without executing generators, or vice versa. Detecting drift via automated gates prevents stale or conflicting files from being merged.

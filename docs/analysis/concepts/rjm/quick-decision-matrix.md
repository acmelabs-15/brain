---
package: rjm
name: Quick Decision Matrix
slug: quick-decision-matrix
kind: technique
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quick Decision Matrix

## Definition — verbatim
> "### Quick Decision Matrix" — .claude/skills/skillforge/references/script-integration-framework.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 56 | defined here | Reference table mapping 8 representative skill scenarios to script recommendations and rationale. |

## Consumes
Common operational scenarios in skill authoring.

## Produces
Script/No-script verdicts with design rationales.

## When applied
Consulted for rapid assessment of scripting necessity across typical development tasks.

## Sub-concepts
none

## Part of
decision-tree-script-vs-no-script

## Implementation status
clean

## Design notes
A quick-lookup heuristic table pairing common skill activities (e.g. output validation, cognitive comprehension, score calculation) with clear script vs no-script recommendations and rationales.

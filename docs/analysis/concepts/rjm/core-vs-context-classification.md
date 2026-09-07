---
package: rjm
name: Core vs Context classification
slug: core-vs-context-classification
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Core vs Context classification

## Definition — verbatim
> "2. Core vs Context classification (differentiator vs table stakes)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 12 | defined here | Stated as an explicit requirement defining strategic differentiation versus table stakes capabilities. |

## Consumes
Business capability description, value proposition, competitive landscape, and customer purchasing drivers.

## Produces
Classification of capability as either Core (competitive differentiator) or Context (necessary table stakes).

## When applied
Applied during Phase 1 of buy-vs-build analysis before financial TCO modeling or vendor selection begins.

## Sub-concepts
core, context

## Part of
buy-vs-build-framework

## Implementation status
clean

## Design notes
A strategic classification technique in rjm's buy-vs-build skill based on Geoffrey Moore's framework. It distinguishes Core capabilities (which create direct competitive advantage and justify custom development) from Context capabilities (commodity features where buying standard solutions is optimal).

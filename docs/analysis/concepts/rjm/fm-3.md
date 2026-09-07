---
package: rjm
name: FM-3
slug: fm-3
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FM-3

## Definition — verbatim
> "Ambiguous instruction inversion" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 85 | used here | Mapped as failure mode FM-3 representing ambiguous instruction inversion anchored by the 2025-12-17 protocol compliance failure. |

## Consumes
Ambiguous natural language instructions, loosely specified protocol prompts, subjective criteria.

## Produces
Inverted behavior, incorrect defaults, or unintended bypasses of engineering guidelines.

## When applied
When analyzing protocol compliance failures where agent actions contradicted the implicit intent of ambiguous prompts.

## Sub-concepts
none

## Part of
failure-mode-catalog

## Implementation status
defects: doc-drift

## Design notes
FM-3 classifies failures where agents interpret ambiguous instructions by inverting their intended meaning or choosing the path of least resistance contrary to system intent. In rjm, categorizing FM-3 drives the formalization of explicit negative constraints, EARS syntax requirements, and unambiguous decision rubrics that eliminate interpretive latitude.

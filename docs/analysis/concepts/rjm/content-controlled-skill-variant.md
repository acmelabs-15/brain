---
package: rjm
name: content-controlled skill variant
slug: content-controlled-skill-variant
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# content-controlled skill variant

## Definition — verbatim
> "Issue [#2936](https://github.com/rjmurillo/ai-agents/issues/2936) built a content-controlled skill variant whose body is byte-identical to the agent body, so only the form label differs." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 100 | defined here | Introduced as an evaluation variant holding prompt content constant between agent and skill forms. |

## Consumes
The base agent prompt definition (`templates/agents/security.shared.md`) with frontmatter stripped.

## Produces
An evaluation fixture artifact (`evals/security-spike/skill-content-controlled/SKILL.md`) for form-factor benchmarking.

## When applied
Used in confirmatory evaluation reruns to decouple domain content quality from delivery form-factor effects.

## Sub-concepts
none

## Part of
form-factor-eval-methodology

## Implementation status
defects: cross-file-contradiction, internal-contradiction

## Design notes
An evaluation fixture artifact constructed specifically to eliminate content confounding when comparing subagent and inline skill delivery forms. By holding prompt bytes identical across forms, it enables the evaluation harness to measure whether the delivery mechanism itself influences recall or cost.

---
package: rjm
name: VHumanize
slug: vhumanize
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md, sha256: 51df9b36a717cc5e44165fbb2928f27609494f6c5d6ec05165224a3f300d6b27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VHumanize

## Definition — verbatim
(used, not defined)

> "| VHumanize | Low scores | Stiff corporate tone |" — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md | 45 | used here | Benchmarked text rewriter tool cited for generating low detection scores at the cost of producing a stiff corporate tone. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
VHumanize is an external commercial humanization utility tested during detection evasion experiments rather than an internal lifecycle concept.

---
package: rjm
name: Verbatim quoting
slug: verbatim-quoting
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/incident-history.md, sha256: f0eec48d7b0b37bd1748187e54e63be89cbd45466ca6e4857eb0b179822bfee3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Verbatim quoting

## Definition — verbatim
> "## Verbatim quoting: FM-9 and PR #1887" — .claude/skills/ai-agents-change-control/references/incident-history.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/incident-history.md | 19 | defined here | Section heading introducing the mandatory discipline requiring character-for-character quotation of load-bearing interface contracts. |

## Consumes
Target source file paths, line numbers, and canonical contract definitions.

## Produces
Byte-exact citations and verified contract quotes that prevent hallucinated interface drift.

## When applied
Applied whenever an agent claims an implementation matches, mirrors, or implements a canonical source or specification.

## Sub-concepts
none

## Part of
fm-9

## Implementation status
clean

## Design notes
Verbatim quoting is a mandatory verification technique introduced after PR #1887 (FM-9) to stop agents from modeling canonical contracts from memory, requiring character-for-character quotation of load-bearing fragments.

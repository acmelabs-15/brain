---
package: rjm
name: Paraphrased repo cross-claim
slug: paraphrased-repo-cross-claim
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Paraphrased repo cross-claim

## Definition — verbatim
> "Paraphrase drifts from the contract (FM-9, PR #1887)" — .claude/skills/ai-agents-external-claims/SKILL.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 100 | defined here | Anti-pattern where inter-repository or cross-module assertions are paraphrased instead of quoted verbatim. |

## Consumes
Assertions regarding rules, contracts, or specifications in other repository files.

## Produces
Contractual drift, confident incorrectness, and broken assumptions across agent contexts.

## When applied
Checked when cross-referencing contracts across skills, commands, and rules.

## Sub-concepts
none

## Part of
ai-agents-external-claims

## Implementation status
defects: missing-path

## Design notes
`Paraphrased repo cross-claim` is the anti-pattern of restating repository rules or contractual behaviors in casual prose rather than quoting the authoritative file and line. In rjm, paraphrasing allows subtle divergence to accumulate, leading directly to failure mode FM-9.

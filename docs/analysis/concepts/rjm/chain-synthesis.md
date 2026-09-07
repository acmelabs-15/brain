---
package: rjm
name: Chain Synthesis
slug: chain-synthesis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Chain Synthesis

## Definition — verbatim
> "Combines complementary facts from different chains" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 22 | defined here | Defined in the technique selection guide as a meta-reasoning method combining complementary facts from different reasoning chains. |

## Consumes
Multiple valid reasoning paths generated across parallel candidate chains.

## Produces
A synthesized reasoning response combining complementary facts into a unified conclusion.

## When applied
"Multiple valid reasoning paths exist" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:22

## Sub-concepts
none

## Part of
mcr

## Implementation status
clean

## Design notes
A meta-reasoning technique within multi-chain reasoning (MCR) that moves beyond majority voting by synthesizing diverse, complementary facts across different reasoning chains into a unified answer. In rjm, it ensures that distinct pieces of evidence discovered in different chains are not discarded but merged.

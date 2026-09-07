---
package: rjm
name: Factored CoVe
slug: factored-cove
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

# Factored CoVe

## Definition — verbatim
> "| Factored CoVe | 0.22 |" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:310

## Also called — verbatim
> "Factored Verification" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:18

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 310 | defined here | Listed in the precision comparison table as the highest-precision CoVe variant (0.22 precision). |

## Consumes
Individual verification questions dispatched independently in clean context.

## Produces
Accurate, uncorrupted factual verification answers insulated from baseline hallucinations.

## When applied
When maximum factual precision is required and hallucination persistence in joint verification is unacceptable.

## Sub-concepts
none

## Part of
factored-vs-joint-verification

## Implementation status
clean

## Design notes
The most rigorous variant of Chain-of-Verification in rjm prompt engineering. It executes each verification question in complete isolation without attending to the initial response, preventing the model from copying its own hallucinations and achieving the highest precision across factual QA benchmarks.

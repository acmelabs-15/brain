---
package: rjm
name: Falsifiable milestone
slug: falsifiable-milestone
kind: pattern
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Falsifiable milestone

## Definition — verbatim
> "Falsifiable milestone (short form)" — .claude/skills/ai-agents-research-frontier/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 31 | defined here | Table column heading establishing that each research program must define a verifiable, falsifiable milestone. |

## Consumes
Concrete success criteria, reproducible evaluation fixtures, and baseline benchmarks.

## Produces
Binary pass/fail criteria validating whether a research hypothesis succeeded.

## When applied
Defined at program inception before committing engineering resources to research tasks.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A methodological standard requiring research objectives to be phrased as falsifiable, empirically verifiable conditions rather than open-ended explorations. Specifying unambiguous criteria ensures research initiatives produce definitive progress or clear negative results.

---
package: rjm
name: FM-1
slug: fm-1
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FM-1

## Definition — verbatim
> "Context reading failure (95.8% session-start non-compliance in the anchor sample)" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 83 | used here | Mapped as failure mode FM-1 representing context reading failure anchored by the 2025-12-20 session protocol mass failure. |
| .claude/skills/ai-agents-research-frontier/SKILL.md | 112 | used here | Cited as the measured failure baseline to beat for verified governance research program. |

## Consumes
Agent session start sequences, instruction prompts, repository rules, and project context.

## Produces
Measured failure rate data and justification for automated rule activation and verification harnesses.

## When applied
When classifying agent session-start instruction misses or designing governance mechanisms to ensure instructions are loaded and respected.

## Sub-concepts
none

## Part of
failure-mode-catalog

## Implementation status
defects: doc-drift, missing-path, internal-contradiction

## Design notes
FM-1 (Context Reading Failure) designates the primary failure mode where agents fail to ingest, parse, or adhere to mandatory session instructions and context at session initialization. Having exhibited a 95.8% non-compliance rate in baseline incident samples, it serves as the benchmark failure pattern driving rjm's verified governance and rule activation harness architectures.

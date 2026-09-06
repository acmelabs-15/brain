---
package: rjm
path: .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md
type: reference
bytes: 2664
unit: inv-rjm-141
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md, sha256: 51df9b36a717cc5e44165fbb2928f27609494f6c5d6ec05165224a3f300d6b27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md

## Purpose — required, verbatim
> "The fundamental incompatibility between writing quality and AI detector evasion. A hard empirical finding, not a fixable engineering problem." — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:9

## Design intent — required
Documents empirical findings establishing that attempting to evade AI detectors (such as GPTZero) is fundamentally incompatible with writing quality. Explains why the detection cliff exists (human token selection is erratic, whereas LLM token selection is flat) and demonstrates that adding rules actually increases structural regularities, raising detector scores while degrading voice. Guides prompt designers to abandon detector score optimization and instead focus on voice fidelity, structural unpredictability, and detection-neutral craft techniques.

## Phase — required
cross-phase

## Inputs — required
- "GPTZero measures the probability surface: how the model selects each token from its probability space." — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:24

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference prompting-ai-detection-cliff.md — .claude/skills/prompt-engineer/SKILL.md:178

## Concepts named — required, verbatim
- `AI Detection Cliff` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:7 — defined here
- `GPTZero` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:13 — used here
- `probability surface` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:24 — defined here
- `DIPPER 11B` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:43 — used here
- `Humaneyes` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:44 — used here
- `VHumanize` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:45 — used here
- `Detection-neutral craft techniques` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:53 — defined here
- `Structural Unpredictability` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:55 — defined here
- `SICO method` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:62 — used here

## Structure
- `# AI Detection Cliff` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:7
- `## The Cliff` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:11
- `## Why the Cliff Exists` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:22
- `## Adding Rules Makes It Worse` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:31
- `## Humanizer Tools Don't Help` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:37
- `## Practical Conclusion` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:49
- `## Structural Unpredictability` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:55
- `## Implications for Prompt Engineering` — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:59

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Derived from wiki documentation (`wiki/concepts/Prompting/AI Detection Cliff.md`). Highlights the 0.74 score gap between human writing (max 0.02) and any LLM output (min 0.76), with Claude using a voice skill reaching 0.9999. Demonstrates empirically that adding style rules increased detectability from 0.84 to 0.9999 while improving writing quality, confirming that writing quality and detector evasion are anti-correlated.

## Context cost
2664 bytes, approximately 660 tokens.

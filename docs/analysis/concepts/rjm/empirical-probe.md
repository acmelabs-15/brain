---
package: rjm
name: empirical probe
slug: empirical-probe
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# empirical probe

## Definition — verbatim
> "Turn the hunch into a falsifiable claim and probe it. Rules of the probe" — .claude/skills/ai-agents-research-methodology/SKILL.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 113 | used here | Cites the empirical probe first rule over fixing by analogy when investigating CLI or environment behaviors. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 115 | defined here | Heading and section defining Phase 2 of research methodology: spiking hunches with falsifiable empirical probes. |

## Consumes
A hypothesis or hunch regarding external tooling, environment behaviors, or CLI contracts.

## Produces
Empirical verification results with positive assertions and negative controls recorded in decision memory.

## When applied
When testing claims about external tooling or dependencies, prioritized over reasoning by analogy or unverified vendor documentation.

## Sub-concepts
none

## Part of
ai-agents-research-methodology

## Implementation status
defects: missing-path, unfailable-gate, doc-drift, internal-contradiction

## Design notes
A foundational research and debugging technique in rjm requiring that engineering hunches be converted into falsifiable, empirical experiments. Governed by rules learned from painful upstream vendor doc omissions, an empirical probe must execute against real tools at pinned versions, operate in foreign cwd/env settings, and include explicit negative controls proving the test can fail.

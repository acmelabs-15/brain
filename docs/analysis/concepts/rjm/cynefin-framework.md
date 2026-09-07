---
package: rjm
name: Cynefin Framework
slug: cynefin-framework
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Cynefin Framework

## Definition — verbatim
> "Classify problems into Cynefin Framework domains (Clear, Complicated, Complex, Chaotic, Confusion) and recommend appropriate response strategies." — .claude/skills/cynefin-classifier/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 60 | used here | Framework used by the advisor to classify problem complexity and select the appropriate response mode. |
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 1 | defined here | Deep dive reference manual documenting Cynefin origins, domains, transitions, and practices. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 2 | used here | Script implementation classifying problem descriptions into Cynefin domains based on cause-effect indicators. |
| .claude/skills/cynefin-classifier/SKILL.md | 4 | defined here | Skill specification outlining domain classification and recommended decision strategies. |
| docs/skill-reference.md | 170 | used here | Skill reference overview describing problem classification across Clear, Complicated, Complex, and Chaotic domains. |
| templates/agents/high-level-advisor.shared.md | 63 | used here | Shared reference citing Cynefin problem complexity classification. |

## Consumes
Problem descriptions, system constraints, cause-and-effect predictability characteristics.

## Produces
Domain classification (Clear, Complicated, Complex, Chaotic) and corresponding operational response strategy.

## When applied
Applied during problem intake and triage when unsure whether to apply best practices, expert analysis, or probe-sense-respond experiments.

## Sub-concepts
none

## Part of
cynefin-classifier

## Implementation status
defects: missing-path

## Design notes
The Cynefin Framework prevents category errors in problem solving. By classifying problems by their causal predictability, rjm prevents applying rigid best practices to complex emergent situations or over-analyzing clear, deterministic engineering tasks.

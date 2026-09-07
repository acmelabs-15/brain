---
package: rjm
name: SkillsBench
slug: skillsbench
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/modularity-guidelines.md, sha256: 5c151e7d32f6e7bfc22aa372e53f9a57af5d71069dbbf201e89eb90522632518}
  - {path: .claude/skills/skillforge/scripts/skill_modularity_audit.py, sha256: 55ccc09bdac6caa91ec34111cd8faa6ffddafc52b0684f831ba21993eeab07f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SkillsBench

## Definition — verbatim
> "Audit skill modularity based on SkillsBench research findings." — .claude/skills/skillforge/scripts/skill_modularity_audit.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/modularity-guidelines.md | 1 | used here | Cited in heading as the empirical benchmark research basis for skill modularity guidelines. |
| .claude/skills/skillforge/scripts/skill_modularity_audit.py | 2 | used here | Cited in module docstring as the research foundation for auditing skill modularity. |

## Consumes
Agent execution logs, model benchmark configurations, and skill repository evaluation tasks.

## Produces
Empirical macro pass-rate deltas, skill shape performance benchmarks, and modularity thresholds.

## When applied
Applied when formulating or evaluating architectural standards for agent skill size, composition, and progressive disclosure.

## Sub-concepts
- skill-shape
- modularity-score

## Part of
skillforge

## Implementation status
defects: doc-drift, other, exit-code-mismatch

## Design notes
SkillsBench is an empirical benchmark study (Feb 2026) measuring agent performance across 87 tasks and 18 model/harness configurations. In rjm, its findings anchor the modularity guidelines in SkillForge, providing quantitative evidence that curated standard-length skills boost task success while self-generated or overly exhaustive skills degrade agent performance.

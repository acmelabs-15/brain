---
package: rjm
name: Quality Gates
slug: quality-gates
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
  - {path: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md, sha256: 9010d2ac17b09423f0d984afeafdbbbc5144f1a5b43452dcd80d9936ac6dab5d}
  - {path: .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md, sha256: 456c2b45675af44c0b9b0ab432e98a4f33d1b5b3d57a0fa91fccb9ae5e4ca239}
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quality Gates

## Definition — verbatim
> "Critic and QA agents validate work before it proceeds" — .agents/AGENT-SYSTEM.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 21 | defined here | Listed in the Key Benefits table defining validation gates before work proceeds. |
| .agents/analysis/adr-045-feasibility-analysis.md | 15 | used here | Identified as one of four candidate plugins to extract into a standalone marketplace. |
| .agents/analysis/claude-flow-architecture-analysis.md | 83 | used here | Compared against claude-flow automated phase gates in methodology gap analysis. |
| .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md | 82 | defined here | Specified as a standalone enforcement plugin containing hooks, composite actions, and prompts. |
| .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md | 37 | used here | Cited regarding the project commitment to automated review gates for design decisions. |
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 86 | defined here | Listed as a core job-to-be-done plugin responsible for enforcing engineering standards. |
| .agents/projects/v0.4.0/PLAN.md | 133 | defined here | Planned as one of four extracted plugins with enforcement logic in the v0.4.0 roadmap. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 47 | defined here | Table heading defining after-work review gates and depth across complexity tiers. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 407 | defined here | XML tag grouping mandatory verification gates across decision phases. |
| .claude/skills/research-and-incorporate/references/workflow.md | 198 | defined here | Section header defining blocking requirements for research incorporation. |
| .claude/skills/research-and-incorporate/SKILL.md | 122 | defined here | Section header defining blocking quality criteria across research phases. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 2 | used here | Module docstring describing validation of slash command files for quality gates. |
| .claude/skills/slashcommandcreator/SKILL.md | 3 | used here | Skill description referencing multi-agent validation and quality gates. |
| docs/architecture.md | 184 | defined here | Architecture section defining multi-level enforcement across hooks, CI, and agents. |

## Consumes
Work artifacts (plans, code, tests, documentation, slash commands, ADRs) submitted for verification.

## Produces
Validation verdicts (PASS, WARN, BLOCKING, FAIL), critique reports, and execution permissions.

## When applied
Applied at phase transitions, before code commits, during PR reviews, and prior to deployment.

## Sub-concepts
critic, qa, post-implementation-verification, security-critical-coverage

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Quality gates provide multi-layered verification preventing defects, unvetted architectural deviations, and incomplete tasks from progressing across lifecycle boundaries. Enforced at agent, script, hook, and CI levels, they operationalize reviewer asymmetry and ensure compliance with risk-tiered quality thresholds.

---
package: rjm
name: Result
slug: result
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/generate_experiment.py, sha256: 73b8a865a5fda70135d588b957fadcea836fc97f915b8e10accd54420010934e}
  - {path: .claude/skills/skillforge/assets/templates/script-template.py, sha256: 50af05ade0055f329c89815a126c5ff43f3dd21ff959c8ce8d674a32b660e9a0}
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
  - {path: scripts/ci/mutation_harness_ciperms.py, sha256: 814dca7906ebdabba9e13a5f2d72039965f792b5d6f534877b452e5e40084fba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Result

## Definition — verbatim
(used, not defined)

> "class Result:" — .claude/skills/chaos-experiment/scripts/generate_experiment.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/generate_experiment.py | 56 | defined here | Dataclass defining structured return values for experiment generation automation. |
| .claude/skills/skillforge/assets/templates/script-template.py | 40 | defined here | Dataclass template providing standard result structure for script operations. |
| .claude/skills/skillforge/references/script-patterns-catalog.md | 19 | defined here | Standard script pattern catalog specification for operation result objects. |
| .claude/skills/skillforge/scripts/discover_skills.py | 47 | defined here | Dataclass capturing operation success, message, and discovered skills. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 40 | defined here | Dataclass capturing operation success, message, and triage recommendations. |
| scripts/ci/mutation_harness_ciperms.py | 66 | defined here | Dataclass recording mutation test outcomes and notes. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path, orphan, script-bug

## Design notes
Result is a Python dataclass identifier used across multiple automation scripts to encapsulate structured operation outcomes, classified as name-only per D-023.

---
package: rjm
name: DEFAULT_BASELINE_NAME
slug: default-baseline-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/agent_skill_discriminator_baseline.py, sha256: 25e7f6b164c7be6361c22acacc683a54b4b053fb01051e8c0643d223f09dfef3}
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_BASELINE_NAME

## Definition — verbatim
(used, not defined)

> "DEFAULT_BASELINE_NAME = \"agent_skill_discriminator_baseline.json\"" — scripts/validation/agent_skill_discriminator_baseline.py:37

## Also called — verbatim
> "_DEFAULT_BASELINE_NAME = \"skill_md_exec_portability_baseline.json\"" — scripts/validation/check_skill_md_exec_portability.py:82
> "_DEFAULT_BASELINE_NAME = \"skill_portability_baseline.json\"" — scripts/validation/check_skill_portability.py:106

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 37 | defined here | Constant defining the default baseline file name for agent-skill discriminator scoring. |
| scripts/validation/check_rule_activation_coverage.py | 82 | defined here | Constant defining the default baseline JSON file name for rule activation coverage. |
| scripts/validation/check_skill_md_exec_portability.py | 82 | defined here | Constant defining the default baseline JSON file name for SKILL.md execution portability. |
| scripts/validation/check_skill_portability.py | 106 | defined here | Constant defining the default baseline JSON file name for skill portability checks. |

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
clean in scripts/validation/check_rule_activation_coverage.py; defects: missing-path in scripts/validation/agent_skill_discriminator_baseline.py; defects: other in scripts/validation/check_skill_md_exec_portability.py; defects: doc-drift, orphan in scripts/validation/check_skill_portability.py

## Design notes
`DEFAULT_BASELINE_NAME` (and `_DEFAULT_BASELINE_NAME`) is a configuration constant specifying default JSON baseline file names across validation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.

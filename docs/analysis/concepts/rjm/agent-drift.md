---
package: rjm
name: Agent drift
slug: agent-drift
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
  - {path: scripts/ci/parse_drift_results.py, sha256: 7e775d8af6a72e3232c10ec44be4478940d8c85900fe7a39472b1b9c80ef228a}
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Agent drift

## Definition — verbatim
(used, not defined)

> "| Agent drift | Do generated agent files match their templates? |" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 30 | used here | Listed in the Instrument Index as the check verifying whether generated agent files match their canonical templates. |
| scripts/ci/parse_drift_results.py | 2 | used here | Cited in script docstring as the target entity parsed from drift-detection workflow JSON into PR markdown comments. |
| scripts/validation/pre_pr.py | 20 | used here | Documented as step 12 in the pre-PR validation sequence to detect semantic divergence in agent configurations. |

## Consumes
Agent templates under `templates/agents/` and generated agent markdown files in `.claude/agents/`.

## Produces
Validation diffs or JSON diagnostic reports indicating whether generated agent files have drifted from their source templates.

## When applied
Checked during pre-PR validation step 12 and CI drift-detection workflows.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other, doc-drift

## Design notes
A specific divergence pattern where generated agent configuration files in `.claude/agents/` deviate from their source templates in `templates/agents/`. Detected by `build/generate_agents.py --validate` and parsed in CI workflows to ensure agent definitions are generated rather than modified by hand.

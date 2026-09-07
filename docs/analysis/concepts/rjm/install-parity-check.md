---
package: rjm
name: Install-parity check
slug: install-parity-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/validate-generated-agents.yml, sha256: bfec11e4e278d7959a9341743431c53b8f4c68ee7d453a25390ec6e58777e6ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Install-parity check

## Definition — verbatim
> "- name: Install-parity check (changed-together siblings)" — .github/workflows/validate-generated-agents.yml:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 190 | defined here | Workflow step invoking `scripts/validation/run_install_parity_ci.py` to ensure self-host siblings change in lockstep. |

## Consumes
Base reference commit identifiers (`PR_BASE_REF`, `PUSH_BEFORE_SHA`) and committed agent files in `.claude/agents/`, `.github/agents/`, and `templates/agents/`.

## Produces
Parity verification verdict ensuring hand-maintained self-host copies match template and vendored siblings.

## When applied
Executed in CI during `validate` job when `steps.should-run.outputs.skip != 'true'`.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A continuous integration verification gate that catches drift between hand-maintained self-host agent copies and their shared template counterparts, preventing divergent behaviors across `.claude/` and `.github/` platforms.

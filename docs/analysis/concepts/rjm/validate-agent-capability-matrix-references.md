---
package: rjm
name: Validate agent capability matrix references
slug: validate-agent-capability-matrix-references
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

# Validate agent capability matrix references

## Definition — verbatim
> "- name: Validate agent capability matrix references" — .github/workflows/validate-generated-agents.yml:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 184 | defined here | Workflow step executing `build/scripts/validate_agent_matrix_refs.py` to verify agent matrix routing targets. |

## Consumes
Agent capability matrix documentation and agent install trees.

## Produces
Validation verdict ensuring that matrix rows point to existing installed agent definitions.

## When applied
Executed in CI during `validate` job when `steps.should-run.outputs.skip != 'true'`.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction

## Design notes
A continuous integration gate verifying that capability matrix rows map to valid, existing agent definitions, preventing model routing mechanisms from dispatching tasks to missing or dead agent routes.

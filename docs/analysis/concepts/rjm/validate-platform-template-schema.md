---
package: rjm
name: Validate platform template schema
slug: validate-platform-template-schema
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

# Validate platform template schema

## Definition — verbatim
> "- name: Validate platform template schema (REQ-003-002)" — .github/workflows/validate-generated-agents.yml:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 171 | defined here | Step in the validate job executing `build/scripts/validate_templates_schema.py` to verify platform template schemas. |

## Consumes
Platform configuration templates under `templates/platforms/*.yaml` and validation script `build/scripts/validate_templates_schema.py`.

## Produces
Exit code 0 on valid schema compliance, or non-zero exit code blocking the CI validation job.

## When applied
Executed in CI during `validate` job when `steps.should-run.outputs.skip != 'true'`.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A continuous integration validation gate that verifies platform configuration YAML files in `templates/platforms/` against their required schema, preventing malformed substitution rules from corrupting generated multi-platform agent definitions.

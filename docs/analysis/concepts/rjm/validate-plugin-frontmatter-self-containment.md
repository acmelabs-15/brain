---
package: rjm
name: Validate plugin frontmatter self-containment
slug: validate-plugin-frontmatter-self-containment
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

# Validate plugin frontmatter self-containment

## Definition — verbatim
> "Validate plugin frontmatter self-containment (issue #3565)" — .github/workflows/validate-generated-agents.yml:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 175 | defined here | Workflow step executing `check_plugin_frontmatter_self_containment.py` to prevent upstream-only paths in plugin descriptions. |

## Consumes
Skill and agent frontmatter YAML blocks and `scripts/validation/check_plugin_frontmatter_self_containment.py`.

## Produces
Validation verdict ensuring shipped component descriptions do not reference non-distributed repository paths.

## When applied
Executed in CI during `validate` job when `steps.should-run.outputs.skip != 'true'`.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A continuous integration validation gate that prevents consumer session errors by ensuring that published plugin frontmatter descriptions do not reference internal upstream-only paths like `docs/agent-metrics.md`.

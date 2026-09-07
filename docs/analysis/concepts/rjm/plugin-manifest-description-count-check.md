---
package: rjm
name: Plugin manifest description count check
slug: plugin-manifest-description-count-check
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

# Plugin manifest description count check

## Definition — verbatim
> "Plugin manifest description count check (Issue #3651)" — .github/workflows/validate-generated-agents.yml:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 222 | defined here | Workflow step executing `build/scripts/check_plugin_manifest_parity.py` to prevent embedding counts in manifest descriptions. |

## Consumes
Marketplace definitions and plugin manifest files across distribution packages.

## Produces
Validation verdict ensuring descriptions do not contain hardcoded component counts that become stale.

## When applied
Executed in CI during `validate` job when `steps.should-run.outputs.skip != 'true'`.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A continuous integration gate that prevents documentation staleness by ensuring plugin and marketplace manifests never embed hardcoded component counts (e.g., 'contains 42 skills'), which rot upon subsequent component additions or deletions.

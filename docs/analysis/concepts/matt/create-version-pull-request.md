---
package: matt
name: Create Version Pull Request
slug: create-version-pull-request
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/release.yml, sha256: 73ce81a83de90d93a63272dae7e1a3ff8d57dc2f8e99424694289dc7174eec46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Create Version Pull Request

## Definition — verbatim
(used, not defined)
> "- name: Create Version Pull Request" — .github/workflows/release.yml:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/release.yml | 29 | defined here | Step name executing Changesets version PR creation in CI release workflow. |

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
clean

## Design notes
Workflow step name identifier in `.github/workflows/release.yml` executing the Changesets action rather than a lifecycle concept.

---
package: addy
name: materializeWorkspace
slug: materializeworkspace
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals-test.js, sha256: a5615342742376308da5890c366714d33dba36a09b66bd2a842dc5f773af0de9}
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# materializeWorkspace

## Definition — verbatim
(used, not defined)
> "function materializeWorkspace(ev) {" — scripts/run-evals.js:388

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals-test.js | 11 | used here | Imported to test git repository baseline initialization and working-tree patch application. |
| scripts/run-evals.js | 388 | defined here | Creates an isolated temporary git workspace and copies fixtures for behavioral evaluation runs. |

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
defects: other

## Design notes
Helper function in `scripts/run-evals.js` materializing temporary git sandboxes for test execution, rather than an engineering lifecycle concept.

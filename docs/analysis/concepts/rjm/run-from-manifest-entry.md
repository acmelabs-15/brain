---
package: rjm
name: run_from_manifest_entry
slug: run-from-manifest-entry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/runs_file.py, sha256: fc54605d096ae1191ec2ae922105c431c4f73b8993785931ff245fd72818e4f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run_from_manifest_entry

## Definition — verbatim
(used, not defined)

> "def run_from_manifest_entry(entry: object) -> WorkflowRun:" — scripts/github_core/runs_file.py:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/runs_file.py | 146 | defined here | Reconstructs a WorkflowRun from a serialized recovery manifest entry dictionary. |

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
A parsing helper function (`run_from_manifest_entry`) for deserializing recovery manifest entries rather than an SDLC lifecycle concept, classified as `name-only` per D-023.

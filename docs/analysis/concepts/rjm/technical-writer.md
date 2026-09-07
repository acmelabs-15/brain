---
package: rjm
name: Technical Writer
slug: technical-writer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Technical Writer

## Definition — verbatim
(used, not defined)

> "Documentation changes → Technical Writer" — scripts/incoherence.py:569

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 569 | used here | Agent role selected to execute documentation and markdown modifications during reconciliation. |

## Consumes
Target documentation file paths, inconsistency analyses, and user resolution decisions.

## Produces
Updated markdown documentation, restructured guides, and corrected prose specifications.

## When applied
Dispatched during reconciliation waves when inconsistencies require updates to documentation files or docstrings.

## Sub-concepts
none

## Part of
incoherence

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
`Technical Writer` is a specialized agent persona in `incoherence.py` responsible for applying user-specified resolutions to documentation and guide files, preventing documentation drift without risking unwanted code changes.

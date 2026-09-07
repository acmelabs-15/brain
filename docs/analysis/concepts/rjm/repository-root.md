---
package: rjm
name: REPOSITORY_ROOT
slug: repository-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/quality_gate/path_utils.py, sha256: 08124dda4b3314400a2f087ca9a871fda7013715a91e58383adceecdd735ffc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REPOSITORY_ROOT

## Definition — verbatim
(used, not defined)

> "REPOSITORY_ROOT = Path(__file__).resolve().parents[2]" — scripts/quality_gate/path_utils.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/path_utils.py | 7 | defined here | Constant defining the repository root directory as two levels above path_utils.py for path resolution. |

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
REPOSITORY_ROOT is a Python module-level constant identifier in path_utils.py locating the repository root directory rather than an autonomous lifecycle concept.

---
package: rjm
name: incremental PR scope markers
slug: incremental-pr-scope-markers
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/extract_incremental_scope.py, sha256: b4d90659249173f58ce95742155bc4021e9b3cf8436be4cdbce4f8800d4c1c8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# incremental PR scope markers

## Definition — verbatim
> "Extract incremental PR scope markers from a title." — .github/scripts/extract_incremental_scope.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/extract_incremental_scope.py | 2 | defined here | Module docstring defining title conventions ("Phase 2 of #1799", "PR 1 of 3") for sliced delivery. |

## Consumes
Pull request title strings containing candidate delivery slice declarations.

## Produces
Normalized scope marker strings ("Phase 2 of #1799" or "PR 1 of 3") passed to spec validation workflows.

## When applied
Parsed during CI spec validation workflows when evaluating PR title metadata.

## Sub-concepts
scope-pattern

## Part of
none

## Implementation status
clean

## Design notes
Incremental PR scope markers allow pull requests to declare that they represent partial slices of larger features (e.g. "Phase 2 of #1799" or "PR 1 of 3"), signaling validation tooling to adjust completeness expectations accordingly.

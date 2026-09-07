---
package: rjm
name: artifact insight findings
slug: artifact-insight-findings
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/artifact_create_issues.py, sha256: fb16852af5a0a38c29c2fbd7d3d1ef2dcd5632c410819b730a2d2ea903c0255f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# artifact insight findings

## Definition — verbatim
> "Create GitHub issues from artifact insight findings." — scripts/ci/artifact_create_issues.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/artifact_create_issues.py | 2 | used here | Input findings representing insights extracted from agent artifacts to be converted into GitHub issues. |

## Consumes
Scanned agent artifacts analyzed by the AI insight scanner.

## Produces
GitHub issues with provenance footers.

## When applied
When the artifact insight scanner detects findings or recommendations in recently modified agent artifacts.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Artifact insight findings represent structured discoveries and recommendations generated from inspecting agent workspace artifacts, converted into tracked GitHub issues to prevent insights from being lost across sessions.

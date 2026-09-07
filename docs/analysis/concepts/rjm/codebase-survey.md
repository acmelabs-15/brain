---
package: rjm
name: CODEBASE SURVEY
slug: codebase-survey
kind: technique
package_phase: rjm:Code Quality
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

# CODEBASE SURVEY

## Definition — verbatim
> "CODEBASE SURVEY" — scripts/incoherence.py:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 133 | defined here | Step 1 action instruction gathering minimal repository context without reading domain docs. |

## Consumes
README.md (first 50 lines), CLAUDE.md, directory listing, and package manifest.

## Produces
Identification of codebase type, primary language, documentation locations, and information source types.

## When applied
Executed during Step 1 of the Detection Phase as the initial orientation action.

## Sub-concepts
none

## Part of
detection-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Initial orientation technique in incoherence detection that restricts the agent to high-level repository metadata and prevents reading detailed domain docs or source code prematurely.

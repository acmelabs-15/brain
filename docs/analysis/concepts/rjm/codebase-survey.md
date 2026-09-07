---
package: rjm
name: CODEBASE SURVEY
slug: codebase-survey
kind: technique
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
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

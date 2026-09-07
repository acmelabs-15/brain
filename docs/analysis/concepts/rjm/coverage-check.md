---
package: rjm
name: COVERAGE CHECK
slug: coverage-check
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

# COVERAGE CHECK

## Definition — verbatim
> "COVERAGE CHECK [SUB-AGENT]" — scripts/incoherence.py:229

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 229 | defined here | Step 5 action instruction for sub-agents to review search coverage and identify exploration gaps. |

## Consumes
Step 4 search findings, list of searched directories/files, and diversity criteria.

## Produces
List of unexplored gaps (at least 3) and specific files or search patterns for gap-fill exploration.

## When applied
Executed during Step 5 of the Detection Phase following the broad sweep.

## Sub-concepts
none

## Part of
detection-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Coverage auditing technique prompting the exploration sub-agent to self-critique its search distribution across directories and file types to prevent localized blind spots.

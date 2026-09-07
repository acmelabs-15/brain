---
package: rjm
name: SemgrepScanner
slug: semgrepscanner
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SemgrepScanner

## Definition — verbatim
(used, not defined)

> "class SemgrepScanner:" — scripts/security/run_semgrep.py:247

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/run_semgrep.py | 247 | defined here | Main scanner orchestrator class managing binary resolution, git diff filtering, rule execution, and finding reporting. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`SemgrepScanner` is a Python class identifier orchestrating local static security scans rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.

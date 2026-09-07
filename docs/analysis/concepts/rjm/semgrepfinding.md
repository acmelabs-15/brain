---
package: rjm
name: SemgrepFinding
slug: semgrepfinding
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SemgrepFinding

## Definition — verbatim
(used, not defined)

> "class SemgrepFinding:" — scripts/security/run_semgrep.py:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/run_semgrep.py | 67 | defined here | Dataclass representing a detected Semgrep rule violation with rule ID, file, line, severity, CWE, and OWASP tags. |

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
`SemgrepFinding` is a Python dataclass identifier modeling static security findings in scanner scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.

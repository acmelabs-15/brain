---
package: rjm
name: Job
slug: job
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# Job

## Definition — verbatim
(used, not defined)

> "class Job:" — scripts/quality_gate/resolve_pytest_signal.py:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 161 | defined here | Dataclass representing a GitHub Actions workflow job parsed from GitHub API responses for status resolution. |

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
defects: orphan

## Design notes
Job is a Python dataclass identifier in resolve_pytest_signal.py modeling workflow jobs and their step conclusions rather than an autonomous lifecycle concept.

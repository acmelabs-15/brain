---
package: rjm
name: Developer
slug: developer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# Developer

## Definition — verbatim
(used, not defined)

> "Code changes → Developer" — scripts/incoherence.py:568

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 568 | used here | Agent role selected to execute code, configuration, or schema modifications during reconciliation. |

## Consumes
Target file paths, incoherence issue details, and user resolution specifications.

## Produces
Modified source code, configuration files, and verification test changes.

## When applied
Dispatched during reconciliation waves when target modifications require code or schema updates.

## Sub-concepts
none

## Part of
incoherence

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
`Developer` is an agent execution role specialized in applying code and configuration changes to resolve confirmed contradictions, ensuring that code edits are performed by coding agents while documentation remains separate.

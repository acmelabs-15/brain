---
package: rjm
name: Developer
slug: developer
kind: role
package_phase: cross-phase
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

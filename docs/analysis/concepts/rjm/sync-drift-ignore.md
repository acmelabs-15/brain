---
package: rjm
name: sync-drift-ignore
slug: sync-drift-ignore
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sync-drift-ignore

## Definition — verbatim
> "sync-drift-ignore" — scripts/sync/detect_spec_drift.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/detect_spec_drift.py | 101 | defined here | Constant defining the inline HTML comment directive to mute drift findings for intentional references to absent paths. |

## Consumes
A specification markdown line containing a planned, hypothetical, or example code reference.

## Produces
Line-level suppression of spec drift findings during detect_spec_drift scans.

## When applied
Added as `<!-- sync-drift-ignore -->` at the end of a line in a specification file to mark absent code references as intentionally exempted.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`sync-drift-ignore` is an inline HTML comment directive in rjm that allows specification authors to reference planned or example code paths without triggering false-positive spec-to-code drift alerts. By marking intentional forward references explicitly on the offending line, it prevents spec drift detection tools from failing CI checks while preserving strict validation for all unannotated references.

---
package: rjm
name: drift detector
slug: drift-detector
kind: technique
package_phase: rjm:sync
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/sync.md, sha256: f6e8579a330acaa0c1fad9b84a0e10fae41cdd63122e9d9becd65564f3727019}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# drift detector

## Definition — verbatim
> "Run the drift detector against the specification tier:" — .claude/commands/sync.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 29 | defined here | Automated command step invoking `detect_spec_drift.py` to scan specifications for invalid path references. |

## Consumes
Specification files in the specification tier and repository working tree filesystem state.

## Produces
Structured JSON results and terminal verdicts (`PASS`, `DRIFT`, `ERROR`) identifying missing referenced paths.

## When applied
Executed in Step 1 of `/sync` to discover discrepancies between specification citations and working tree reality.

## Sub-concepts
spec-to-code-drift

## Part of
sync

## Implementation status
defects: orphan, missing-path

## Design notes
The drift detector is an automated validation tool implemented in `detect_spec_drift.py`. It inspects markdown specifications for referenced source files, tools, and artifacts, verifying their presence in the working tree and reporting missing paths with line numbers to enable rapid triage and synchronization.

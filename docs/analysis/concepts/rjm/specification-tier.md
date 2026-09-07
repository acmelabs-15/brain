---
package: rjm
name: specification tier
slug: specification-tier
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/sync.md, sha256: f6e8579a330acaa0c1fad9b84a0e10fae41cdd63122e9d9becd65564f3727019}
  - {path: scripts/sync/__init__.py, sha256: 67ea47006dcd2b4c68e601bdc4092436a47d5454f6838565320bc77ee02c9f47}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# specification tier

## Definition — verbatim
> "specification tier (REQ/DESIGN/TASK) for references to code paths and" — scripts/sync/__init__.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 29 | used here | Target scanned by the drift detector script during Step 1 of `/sync`. |
| scripts/sync/__init__.py | 4 | used here | Package docstring defining the specification tier as the collection of REQ, DESIGN, and TASK documents. |
| scripts/sync/detect_spec_drift.py | 7 | used here | Module docstring describing drift scanning across the specification tier for broken file references. |

## Consumes
Requirements definitions (REQ), system designs (DESIGN), and decomposed tasks (TASK).

## Produces
The structured specification layer that governs repository architecture and provides baseline criteria for tests and review.

## When applied
Authored in `/spec` and `/plan`; monitored and verified in `/sync` and `/review`.

## Sub-concepts
none

## Part of
spec, sync

## Implementation status
clean

## Design notes
The specification tier encompasses the formal specification documents in rjm: REQ, DESIGN, and TASK. This tier represents the durable record of engineering intent, architectural boundaries, and acceptance criteria against which implementation code and automated tests are evaluated.

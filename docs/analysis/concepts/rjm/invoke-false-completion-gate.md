---
package: rjm
name: invoke_false_completion_gate
slug: invoke-false-completion-gate
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# invoke_false_completion_gate

## Definition — verbatim
(used, not defined)

> "When an agent claimed completion without test evidence, the gate exited non-zero (exit code 2) by design to block the false claim." — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 116 | used here | Cited as a historical policy gate script that exited code 2 to block premature completion claims without test evidence. |
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 73 | used here | Cited as drift evidence where the hook script was wrapped into divergent per-matcher shims. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
pretooluse-false-completion-gate

## Implementation status
defects: missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:144. Hook script retired by #3184 and removed from disk because completion verification was shifted to CI test evidence; ADR-061 cites historical shim drift.

## Design notes
An executable script and hook identifier that implemented the PreToolUse false completion gate, rather than an independent lifecycle concept.

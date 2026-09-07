---
package: rjm
name: 6-agent debate
slug: 6-agent-debate
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 6-agent debate

## Definition — verbatim
(used, not defined)

> "This ADR was withdrawn before acceptance after a 6-agent debate (architect, critic, independent-thinker, security, analyst, high-level-advisor) revealed that the urgency framing was unsupported by evidence on `main`:" — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 36 | used here | Cited as the multi-perspective review process that evaluated ADR-061 and led to its withdrawal |

## Consumes
Proposed architectural decision records, codebase diffs, empirical failure metrics.

## Produces
Multi-agent debate logs, critique positions, consensus recommendations (accept, reject, withdraw).

## When applied
Applied during architectural decision review when proposals involve structural refactoring or disputed urgency.

## Sub-concepts
none

## Part of
ADR-061

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A 6-agent debate is a structured peer-review technique in rjm that convenes six specialized agent personas (architect, critic, independent-thinker, security, analyst, and high-level-advisor) to rigorously critique significant architectural proposals before acceptance. In ADR-061, this technique prevented premature abstraction and unneeded refactoring by demonstrating that the claimed drift was absent on main.

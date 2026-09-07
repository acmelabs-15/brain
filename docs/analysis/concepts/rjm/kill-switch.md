---
package: rjm
name: kill switch
slug: kill-switch
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# kill switch

## Definition — verbatim
(used, not defined)

> "### 6. Operability: kill switch and mode" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 234 | defined here | Defined in section heading as an operational environment variable mechanism to bypass gate enforcement. |

## Consumes
Environment variable configuration (e.g. `SKIP_LSP_GATE=true`, `SKIP_QA_GATE=true`).

## Produces
Immediate bypass of automated runtime interception or validation hooks without blocking agent sessions.

## When applied
When an automated gate malfunctions, misfires, or creates unexpected blocking friction during active development.

## Sub-concepts
none

## Part of
conditional-lsp-first-navigation-enforcement

## Implementation status
defects: missing-path, doc-drift

## Design notes
A kill switch is an essential operational escape hatch in rjm's enforcement infrastructure. Every automated gate and hook is paired with a corresponding environment variable bypass (such as `SKIP_LSP_GATE=true`) to guarantee that a broken hook, unexpected edge case, or parser regression cannot wedge developer or agent sessions. This embodies the system-wide design principle that gates must never block on uncertainty or fail closed during unexpected operational failures.

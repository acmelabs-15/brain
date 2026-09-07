---
package: rjm
name: JSON Decision Mode
slug: json-decision-mode
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# JSON Decision Mode

## Definition — verbatim
> "**JSON Decision Mode** (preferred for gates):" — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 128 | defined here | Architectural specification defining structured JSON deny output format for enforcement gates. |

## Consumes
Hook validation failure conditions, blocking criteria, and remediation guidance messages.

## Produces
A structured JSON payload emitted to stdout containing decision: "deny" alongside descriptive remediation instructions while exiting code 0.

## When applied
Applied when an enforcement hook gate determines that a tool action must be denied, outputting JSON with exit code 0 rather than raw exit code 2.

## Sub-concepts
none

## Part of
routing-level-enforcement-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
JSON Decision Mode is an output technique for enforcement gates in Claude Code hooks where a blocked action emits a structured JSON payload with `decision: "deny"` and exits 0 instead of terminating abruptly with exit code 2. This technique allows hooks to provide descriptive explanations of why the action was blocked and explicit remediation guidance to the agent.

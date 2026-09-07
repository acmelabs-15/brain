---
package: rjm
name: routing-level enforcement gates
slug: routing-level-enforcement-gates
kind: gate
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

# routing-level enforcement gates

## Definition — verbatim
> "Implement routing-level enforcement gates using Claude Code hooks." — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 67 | defined here | Architectural decision establishing enforcement gates implemented via Claude Code hooks to intercept high-stakes tool calls. |

## Consumes
High-stakes agent tool invocation requests (such as git commit, gh pr create, gh pr merge, git push) and current session state.

## Produces
Binary gate verdicts allowing execution or blocking actions with exit code 2 or structured JSON deny feedback.

## When applied
> "Gates operate at the **tool invocation layer**, blocking high-stakes actions until validation prerequisites are met." — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:69

## Sub-concepts
tool-invocation-layer, pretooluse, critic-review, adr-existence, json-decision-mode

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
Routing-level enforcement gates provide deterministic, mechanical interception at the tool invocation layer to ensure autonomous agents cannot bypass protocol requirements (such as session tracking, QA validation, critic reviews, or ADR creation). By evaluating prerequisites before tool execution occurs, routing gates eliminate autonomous agent protocol bypass.

---
package: matt
name: subagent-dispatch
slug: subagent-dispatch
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# subagent-dispatch

## Definition — verbatim
(used, not defined)
> "Drop Claude Code's tool and agent-type names from the subagent-dispatch instructions in `code-review`, `codebase-design`, and `improve-codebase-architecture`, so the step is followable on Codex and other harnesses." — CHANGELOG.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 13 | used here | Describes decoupling subagent-dispatch instructions from harness-specific tool and agent-type names. |

## Consumes
Tasks that can be delegated or executed in parallel by child agent processes.

## Produces
Independent worker agent sessions executing targeted analyses or parallel work.

## When applied
When delegating specialized or parallel tasks like research, review, or architecture analysis.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
Subagent-dispatch enables a primary agent to launch background child agents for focused tasks (such as parallel research or adversarial code review) using harness-agnostic instructions.

---
package: rjm
name: dispatcher
slug: dispatcher
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dispatcher

## Definition — verbatim
> "Replace the narrative completion gate with a dispatcher." — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 35 | defined here | Architectural decision replacing narrative PR review completion gates with an executable verifier dispatcher |
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 278 | used here | Documents dispatcher behavior when tool matchers cannot be reduced to known tool names |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 237 | defined here | Build configuration declaring hook dispatcher generation for multi-platform artifact compilation |

## Consumes
Verifier configuration files, criterion command specifications, and command execution results.

## Produces
Summary evaluation tables, structured evidence JSON, and exit codes (0 for pass, 1 for fail, 2 for error).

## When applied
Applied during PR review completion gate execution or hook event handling to evaluate criteria and route events.

## Sub-concepts
pass-when, pass-when-python

## Part of
none

## Implementation status
defects: missing-path, other, doc-drift

## Design notes
A dispatcher is an executable coordinator that runs external verification commands, evaluates criteria against a declarative schema, and renders an unambiguous pass/fail decision. In rjm's architecture, dispatchers decouple gate logic from agent narrative, ensuring that process boundaries are enforced by code execution rather than LLM self-reporting.

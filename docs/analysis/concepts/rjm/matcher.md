---
package: rjm
name: matcher
slug: matcher
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# matcher

## Definition — verbatim
(used, not defined)

> "| Matcher | Supported; PascalCase tool events use Claude-compatible tool names |" — .claude/skills/ai-agents-portability-campaign/SKILL.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 148 | used here | Specified in CVA variabilities table as event-specific regex or Claude-compatible tool filters. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 48 | used here | Catalogued in settled portability contracts confirming tool name matching across harnesses. |

## Consumes
Hook invocation events, tool names, and tool arguments passed by the execution harness.

## Produces
A boolean decision determining whether an individual hook registration executes.

## When applied
Evaluated by the CLI harness or dispatch shim before running registered hook handlers.

## Sub-concepts
none

## Part of
official-hook-contracts, req-003

## Implementation status
defects: missing-path, doc-drift

## Design notes
`matcher` is the predicate filtering mechanism in rjm's hook architecture. It inspects tool names or event properties using exact strings or regular expressions, ensuring that hook handlers execute only for relevant commands while avoiding performance overhead and false alarms on unrelated tool calls.

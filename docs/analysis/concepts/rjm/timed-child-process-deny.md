---
package: rjm
name: timed child-process deny
slug: timed-child-process-deny
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# timed child-process deny

## Definition — verbatim
(used, not defined)

> "the guard's plugin-wide `Bash` matcher combined with the Copilot dispatcher's timed child-process deny (#4706) denied 127 unrelated Bash commands over more than 21 minutes before the owner applied immediate containment." — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:44-46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 45 | used here | Cited as the Copilot dispatcher execution mechanism that enforces child process timeouts by denying tool calls on overrun. |

## Consumes
Subprocess execution monitoring and configured timeout thresholds during hook dispatch.

## Produces
Automatic denial of agent tool execution when a spawned hook child process exceeds its allotted execution time.

## When applied
Applied during Copilot hook dispatch when evaluating tool-call interceptors running in external child processes.

## Sub-concepts
none

## Part of
copilot-dispatcher

## Implementation status
defects: missing-path, doc-drift

## Design notes
The timed child-process deny is an operational gate in rjm's Copilot hook dispatcher. It prevents runaway or hanging hook processes from freezing agent sessions by enforcing a strict execution timeout, terminating the process and denying the tool call if an overrun occurs.

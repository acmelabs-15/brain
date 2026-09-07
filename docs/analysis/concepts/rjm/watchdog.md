---
package: rjm
name: watchdog
slug: watchdog
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# watchdog

## Definition — verbatim
> "arms a watchdog at 165s covering the whole process" — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 166 | defined here | Describes the 165s process-level watchdog armed in `git_hook_policy` to terminate hangs outside child processes. |

## Consumes
Process startup signals and timer configurations.

## Produces
Guaranteed process-level termination with error diagnostics prior to external container timeouts.

## When applied
Armed on entry to long-running hook processes and runners in container environments.

## Sub-concepts
none

## Part of
gate-tier-placement

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A watchdog is an asynchronous process-level timer configured to forcefully terminate an execution if the primary workflow hangs or stalls outside normal subprocess dispatch (such as during test discovery, module import, or cleanup). In rjm (ADR-104), a 165s watchdog in `git_hook_policy` acts as a fail-safe backstop to ensure container jobs never hang indefinitely without producing actionable diagnostics.

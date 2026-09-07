---
package: rjm
name: subprocess clamp
slug: subprocess-clamp
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

# subprocess clamp

## Definition — verbatim
> "Two jobs are not single-subprocess, so the per-subprocess clamp does not bound" — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 196 | defined here | Highlights the architectural limitation of per-subprocess clamps for multi-subprocess jobs requiring aggregate deadlines. |

## Consumes
Container environment detection flags (`_is_remote_container()`) and subprocess invocation calls.

## Produces
Enforced execution deadlines that truncate runaway child processes before container reclamation occurs.

## When applied
Applied during pre-push hook execution when running inside remote or containerized environments.

## Sub-concepts
none

## Part of
gate-tier-placement

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A subprocess clamp is an execution constraint in `git_hook_policy` that restricts individual spawned child processes to a strict maximum execution time (e.g. 150 seconds in remote containers). In rjm's gate architecture (ADR-104), subprocess clamps prevent runaway commands from monopolizing execution time, though multi-step jobs must also implement aggregate deadlines so that sequences of clamped subprocesses cannot collectively cause container timeouts.

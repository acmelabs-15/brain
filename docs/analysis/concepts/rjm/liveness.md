---
package: rjm
name: liveness
slug: liveness
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# liveness

## Definition — verbatim
> "Liveness is \"the process is not wedged\"" — .claude/skills/software-engineering-library/references/release-it.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 132 | defined here | Defined as verifying that the process is not wedged, requiring a restart when it fails. |

## Consumes
Internal thread health, event loop responsiveness, and deadlock detection signals.

## Produces
Process restart directives when the system is deadlocked or wedged.

## When applied
Monitored continuously by supervisors, orchestrators, and container runtimes to detect unrecoverable process states.

## Sub-concepts
none

## Part of
health-check-integrity

## Implementation status
defects: missing-path

## Design notes
Liveness verifies that an executing agent or process has not entered an unrecoverable state such as an infinite loop or thread deadlock. Unlike readiness issues, a liveness failure indicates the process cannot recover on its own and must be restarted.

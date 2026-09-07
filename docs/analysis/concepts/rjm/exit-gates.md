---
package: rjm
name: exit gates
slug: exit-gates
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# exit gates

## Definition — verbatim
> "Static check that ``.claude/commands/build.md`` wires the required exit gates." — scripts/validation/check_build_gates.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 2 | defined here | Validates that required exit gate skill invocations remain wired in the build command. |

## Consumes
Implementation artifacts produced during the build phase.

## Produces
Verification verdict determining whether the build phase may be exited.

## When applied
Invoked at the end of the /build lifecycle command before handing off to review or PR creation.

## Sub-concepts
none

## Part of
exit-path

## Implementation status
defects: missing-path

## Design notes
Exit gates are mandatory validation skills wired into the conclusion of the build lifecycle phase to enforce quality criteria prior to review handoff.

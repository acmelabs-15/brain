---
package: matt
name: Cleanup
slug: cleanup
kind: phase
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Cleanup

## Definition — verbatim
> "## Phase 6: Cleanup" — skills/engineering/diagnosing-bugs/SKILL.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/user-invoked-skill-invocation.md | 8 | defined here | Changeset noting Phase 6 was scoped to Cleanup only, removing post-mortem hand-offs. |
| skills/engineering/diagnosing-bugs/SKILL.md | 130 | defined here | Heading establishing Phase 6 of the bug diagnosis workflow as a mechanical cleanup checklist. |

## Consumes
A verified code fix, passing regression test, and any temporary debugging instrumentation or test fixtures.

## Produces
A clean working directory stripped of temporary log statements and prototypes, with the root-cause hypothesis documented in the commit message.

## When applied
Executed as the final stage of bug diagnosis before declaring the task complete.

## Sub-concepts
checklist

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
In `matt:engineering`'s `diagnosing-bugs` skill, Cleanup is the mandatory sixth and final phase. It ensures that debugging artifacts—such as `[DEBUG-...]` logging probes, throwaway reproduction harnesses, and experimental mocks—do not leak into production commits, that regression tests pass cleanly, and that the confirmed hypothesis is documented in version control for future maintainers.

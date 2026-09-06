---
package: matt
name: checklist
slug: checklist
kind: checklist
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# checklist

## Definition — verbatim
(used, not defined)
> "Phase 6 is now \"Cleanup\" only; the mechanical checklist is untouched." — .changeset/user-invoked-skill-invocation.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/user-invoked-skill-invocation.md | 8 | used here | Mentions the mechanical verification checklist in Phase 6 of diagnosing-bugs. |

## Consumes
Completed engineering tasks, regression tests, and workspace changes.

## Produces
Explicit verification that all required cleanup or quality actions have been executed.

## When applied
When concluding an engineering task or phase to ensure no mandatory step is skipped.

## Sub-concepts
none

## Part of
cleanup, diagnosing-bugs

## Implementation status
clean

## Design notes
In `matt`, a checklist provides an unambiguous list of mechanical tasks that an autonomous agent must confirm before marking a phase or skill execution complete. In `diagnosing-bugs`, the Phase 6 checklist mandates five specific verifications (repro resolved, regression test passing, debug instrumentation removed, prototypes deleted, commit message documented) so that cleanup is never skipped during autonomous debugging.

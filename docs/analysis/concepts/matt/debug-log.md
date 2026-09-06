---
package: matt
name: debug log
slug: debug-log
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# debug log

## Definition — verbatim
(used, not defined)

> "Probes map to a specific prediction, one variable at a time, every debug log tagged `[DEBUG-a4f2]`-style so cleanup is one grep" — docs/engineering/diagnosing-bugs.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 51 | used here | Specified as tagged temporary instrumentation logs required during Phase 4 probing for easy grep cleanup. |

## Consumes
Codebase execution paths and active hypothesis probe instrumentation.

## Produces
Console or log outputs that test specific predictions during bug diagnosis.

## When applied
During Phase 4 hypothesis probing to inspect execution state.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean in core technique; associated with risk of secret leakage in unredacted log captures noted in docs/engineering/diagnosing-bugs.md:70

## Design notes
Temporary instrumentation statements added to confirm or refute hypotheses during bug diagnosis. They must be tagged with a unique prefix (such as `[DEBUG-a4f2]`) so all temporary probes can be identified and removed with a single grep command during Phase 6 cleanup.

---
package: matt
name: gates
slug: gates
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# gates

## Definition — verbatim
> "The phases are gates, not a checklist. Each one refuses to open until something specific is true." — docs/engineering/diagnosing-bugs.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 44 | defined here | Defined as the structural boundary between diagnosis phases that prevents proceeding until specific criteria are met. |
| external/diagnosing-bugs.md | 48 | defined here | Defined in external documentation as strict phase entry criteria rather than passive checklist steps. |

## Consumes
Concrete evidence artifacts (pasted red command, minimised repro, ranked hypotheses, passing test).

## Produces
Clearance to enter the subsequent diagnosis phase.

## When applied
At each phase transition in bug diagnosis (e.g. between building the repro and minimizing it, or between hypotheses and probes).

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
defects: other (missing human gate between instrumentation and code fix in docs/engineering/diagnosing-bugs.md:64)

## Design notes
A core lifecycle concept in Matt's diagnosing-bugs process. Phases are explicitly structured as gates rather than checklists: the agent is blocked from advancing until an objective condition is satisfied on disk or in command execution output.

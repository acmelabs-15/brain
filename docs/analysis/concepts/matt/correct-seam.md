---
package: matt
name: correct seam
slug: correct-seam
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# correct seam

## Definition — verbatim
> "The regression test is written before the fix, but only if a **correct seam** exists for it: one where the test exercises the real bug pattern as it occurs at the call site." — docs/engineering/diagnosing-bugs.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 54 | defined here | Defined as an essential qualification for writing regression tests, preventing shallow tests that give false confidence. |
| external/diagnosing-bugs.md | 50 | defined here | Described in external documentation as the testing interface that exercises the actual failure pattern at the call site. |
| skills/engineering/diagnosing-bugs/SKILL.md | 116 | defined here | Prescribed as the required precondition before writing a regression test in Phase 5; its absence is recorded as an architectural finding. |

## Consumes
Codebase architecture, module interfaces, and call-site failure patterns.

## Produces
A valid testing boundary for locking down a bug, or an architectural defect finding routing to `improve-codebase-architecture`.

## When applied
In Phase 5 of bug diagnosis prior to implementing any code fix.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean in skill definition; documented escape hatch in skills/engineering/diagnosing-bugs/SKILL.md:120 for when no correct seam exists

## Design notes
A testing boundary that exercises the real defect pattern as it occurs at the call site. Matt's lifecycle explicitly forbids writing tests against shallow or artificial seams that provide false confidence; if no correct seam exists, the absence of the seam is documented as an architectural finding rather than writing an ineffective test.

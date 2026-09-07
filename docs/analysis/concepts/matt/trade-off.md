---
package: matt
name: trade-off
slug: trade-off
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: skills/engineering/domain-modeling/ADR-FORMAT.md, sha256: 944c92aa790e8fbdc9199640b170979abb8a34ba8d0fe18c2a01a63bce140ca0}
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# trade-off

## Definition — verbatim
> "3. **The result of a real trade-off**: there were genuine alternatives and you picked one for specific reasons" — skills/engineering/domain-modeling/ADR-FORMAT.md:35

> "3. **The result of a real trade-off**: there were genuine alternatives and you picked one for specific reasons" — skills/engineering/domain-modeling/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 26 | used here | Instructs the resolver to state the explicit trade-off when conflicting intents cannot both be preserved. |
| skills/engineering/domain-modeling/ADR-FORMAT.md | 35 | defined here | Defined as the third qualifying test required for deciding whether an architectural decision warrants an ADR. |
| skills/engineering/domain-modeling/SKILL.md | 72 | used here | Specified as the third mandatory prerequisite condition before offering to create an ADR. |

## Consumes
Competing technical alternatives, architectural approaches, or irreconcilable branch changes.

## Produces
A clear rationale identifying which option was chosen and what consequences were accepted, documented in an ADR or merge commit.

## When applied
When deciding whether to document an architectural choice in an ADR, or when resolving an irreconcilable conflict during merge or rebase.

## Sub-concepts
none

## Part of
adr-s-three-tests

## Implementation status
clean

## Design notes
The third qualifying gate in matt's three-part ADR threshold filter (alongside 'Hard to reverse' and 'Surprising without context'). Requiring a real trade-off ensures that documentation effort is reserved for non-obvious choices among viable alternatives, preventing ADR spam for trivial implementations while ensuring sacrificed features are explicitly noted during merge conflict resolution.

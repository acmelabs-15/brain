---
package: matt
name: Surprising without context
slug: surprising-without-context
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/domain-modeling/ADR-FORMAT.md, sha256: 944c92aa790e8fbdc9199640b170979abb8a34ba8d0fe18c2a01a63bce140ca0}
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Surprising without context

## Definition — verbatim
> "2. **Surprising without context**: a future reader will look at the code and wonder \"why on earth did they do it this way?\"" — skills/engineering/domain-modeling/ADR-FORMAT.md:34

> "2. **Surprising without context**: a future reader will wonder \"why did they do it this way?\"" — skills/engineering/domain-modeling/SKILL.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/domain-modeling/ADR-FORMAT.md | 34 | defined here | Defined as the second qualifying test for determining if an ADR should be created. |
| skills/engineering/domain-modeling/SKILL.md | 71 | used here | Stated as the second condition required before offering to create an ADR during domain modeling. |

## Consumes
An architectural choice whose rationale is not self-evident from inspecting the code.

## Produces
A gate verdict on whether future maintainers would be surprised or tempted to reverse the design without recorded rationale.

## When applied
When evaluating whether a technical decision requires an ADR.

## Sub-concepts
none

## Part of
adr-s-three-tests

## Implementation status
clean

## Design notes
The second of three qualifying tests for ADR creation, ensuring that documentation is created for choices that would otherwise surprise or confuse future readers, protecting deliberate architectural deviations from accidental "fixes".

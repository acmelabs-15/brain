---
package: matt
name: seams
slug: seams
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: skills/engineering/implement/SKILL.md, sha256: 6d3fd9e83b8f36e5213854779db49b256a457a7ebb4a503e53fa7dcff696adc3}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# seams

## Definition — verbatim
> "Before it writes a word, `to-spec` sketches the **seams** the feature will be tested at, and checks them with you. It prefers seams that already exist to new ones, and takes the highest seam it can: the ideal number across a change is one." — docs/engineering/to-spec.md:32

## Also called — verbatim
seam — external/implement.md:46

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/implement.md | 3 | defined here | Explains that implement drives test-driven development specifically at public seams. |
| docs/engineering/improve-codebase-architecture.md | 20 | used here | Notes that architectural surveys identify missing seams before attempting legacy test coverage. |
| docs/engineering/to-spec.md | 32 | defined here | Mandates sketching and confirming testing seams before authoring specifications. |
| external/improve-codebase-architecture.md | 42 | used here | Describes using architecture analysis to uncover natural boundaries and seams in legacy modules. |
| external/to-spec.md | 37 | defined here | Describes the seam confirmation protocol in to-spec before formalizing requirements. |
| skills/engineering/implement/SKILL.md | 9 | used here | Instructs the implement skill to use /tdd where possible at pre-agreed seams. |
| skills/engineering/to-spec/SKILL.md | 15 | used here | Step directing to-spec to sketch testing seams and favor existing, high-level seams. |

## Consumes
Codebase architecture analysis and feature requirements.

## Produces
Agreed-upon public boundaries for test observation that decouple test durability from internal implementation changes.

## When applied
Agreed upstream during to-spec and enforced during implement and tdd.

## Sub-concepts
none

## Part of
implement

## Implementation status
clean

## Design notes
Seams are the stable public observational boundaries where tests are anchored without penetrating private module internals. Enforcing that tests only attach to pre-agreed seams guarantees test durability: the underlying implementation can be refactored or completely rewritten without breaking the test suite.

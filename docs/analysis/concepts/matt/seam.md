---
package: matt
name: seam
slug: seam
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
  - {path: skills/engineering/codebase-design/DESIGN-IT-TWICE.md, sha256: 8e740bf98446dbd4dfdc132ac4346d9a7eedaf93de6a495889171cf7f99f16bd}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# seam

## Definition — verbatim
> "The idea the skill runs on is the **seam**: the public boundary you observe behaviour at, without reaching inside. Tests live at seams." — docs/engineering/implement.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 76 | used here | Utilizes seams to maintain clean boundaries between interfaces and implementations. |
| CHANGELOG.md | 209 | defined here | Highlights seam definition as a core architectural contribution in release notes. |
| docs/engineering/codebase-design.md | 3 | defined here | Defines seam as the location where a module's interface lives, where behavior can be altered without editing internals. |
| docs/engineering/diagnosing-bugs.md | 21 | used here | Traces bugs back to seams where components interact. |
| docs/engineering/domain-modeling.md | 18 | used here | Considers seam placement when evaluating module boundaries against ubiquitous language. |
| docs/engineering/implement.md | 45 | defined here | Anchors the implementation loop on pre-agreed seams where durable tests reside. |
| external/codebase-design.md | 25 | defined here | Defines seam as the location where a module's interface lives, where behavior can be altered without editing internals. |
| external/implement.md | 46 | defined here | Anchors the implementation loop on pre-agreed seams where durable tests reside. |
| external/improve-codebase-architecture.md | 60 | used here | Hunts for architectural leakage where module implementation spills across public seams. |
| external/tdd.md | 38 | defined here | Mandates testing at clean seams rather than reaching inside private module state. |
| skills/engineering/codebase-design/DEEPENING.md | 3 | used here | Explores alternative seam locations during interface design iterations. |
| skills/engineering/codebase-design/DESIGN-IT-TWICE.md | 5 | used here | Explores alternative seam locations during interface design iterations. |
| skills/engineering/codebase-design/SKILL.md | 8 | defined here | Defines seam as the location where a module's interface lives, where behavior can be altered without editing internals. |
| skills/engineering/diagnosing-bugs/SKILL.md | 26 | used here | Traces bugs back to seams where components interact. |
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 110 | used here | Hunts for architectural leakage where module implementation spills across public seams. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 13 | used here | Hunts for architectural leakage where module implementation spills across public seams. |
| skills/engineering/tdd/SKILL.md | 20 | defined here | Mandates testing at clean seams rather than reaching inside private module state. |
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 11 | used here | Enforces structural isolation at package seams using static lint rules. |

## Consumes
Component boundaries, module interfaces, and testing strategies.

## Produces
Durable observational boundaries where tests verify behavior without coupling to internal code.

## When applied
Agreed upon prior to implementing code or writing automated tests.

## Sub-concepts
pre-agreed seam

## Part of
codebase-design, implement, tdd

## Implementation status
defects: missing-path, doc-drift, script-bug, other, internal-contradiction, orphan

## Design notes
Adapted from Michael Feathers, the seam is the public boundary where module behavior is observed and verified without reaching into implementation internals. Defining seams upfront ensures tests remain durable across internal refactorings.

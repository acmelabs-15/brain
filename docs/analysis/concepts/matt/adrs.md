---
package: matt
name: ADRs
slug: adrs
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .changeset/remove-em-dashes-repo-wide.md, sha256: bf463a1fc067e2a0752a952c247169e1ba1e0bc81fc542d434eb42a99de317bd}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
  - {path: skills/productivity/teach/LEARNING-RECORD-FORMAT.md, sha256: 701fa34b6748aa89e6c960ffb815257f481a7d77fb2900f9028f7edf3fdd6052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ADRs

## Definition — verbatim
(used, not defined)
> "It does not interview you. By the time you reach for it the deciding is already done, so it synthesises what is known (from the thread, from the codebase, from your `CONTEXT.md` and ADRs) rather than opening a fresh round of questions." — docs/engineering/to-spec.md:5

## Also called — verbatim
> "| A durable architecture decision, written into `CONTEXT.md` and ADRs | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) |" — docs/engineering/research.md:17
> "An ADR records a decision you keep." — docs/engineering/research.md:21

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 8 | used here | Soft dependencies reference ADRs in the area being touched |
| .agents/invocation.md | 26 | used here | Mentioned in context of repository decisions |
| .changeset/remove-em-dashes-repo-wide.md | 5 | used here | Included in scope of files where em-dashes are removed |
| docs/engineering/research.md | 17 | used here | Distinguishes durable ADR decisions from short-lived research facts |
| docs/engineering/setup-matt-pocock-skills.md | 94 | used here | Listed in documentation overview |
| docs/engineering/to-spec.md | 5 | used here | Upstream source synthesized into specifications |
| docs/engineering/triage.md | 99 | used here | Cited in triage documentation references |
| docs/productivity/grill-me.md | 16 | used here | Cited as destination for durable decisions |
| docs/productivity/grilling.md | 16 | used here | Contrasted with transient interview outcomes |
| external/grilling.md | 30 | used here | Mentioned in decision recording workflows |
| external/research.md | 41 | used here | Cited as persistent architectural records |
| external/setup-matt-pocock-skills.md | 70 | used here | Cited in setup file organization |
| external/to-spec.md | 26 | used here | Input synthesized during spec writing |
| external/triage.md | 73 | used here | Cited in triage documentation |
| external/writing-for-agents.md | 73 | used here | Mentioned in writing guidelines for agent consumption |
| skills/engineering/diagnosing-bugs/SKILL.md | 10 | used here | Consulted during bug diagnosis to understand architectural constraints |
| skills/engineering/improve-codebase-architecture/SKILL.md | 14 | used here | Referenced when evaluating architectural deepening candidates |
| skills/engineering/tdd/SKILL.md | 10 | used here | Respected when designing test seams and contracts |
| skills/engineering/to-spec/SKILL.md | 13 | used here | Respected during specification writing |
| skills/engineering/to-tickets/SKILL.md | 21 | used here | Respected when drafting ticket descriptions |
| skills/in-progress/claude-handoff/SKILL.md | 14 | used here | Cited in handoff context records |
| skills/productivity/handoff/SKILL.md | 12 | used here | Cited in handoff documentation |
| skills/productivity/teach/LEARNING-RECORD-FORMAT.md | 5 | used here | Referenced in learning record formats |

## Consumes
Architectural choices, trade-off evaluations, and decision rationale developed through grilling or design sessions.

## Produces
Version-controlled Markdown records (typically stored in `docs/adr/` or `.agents/adr/`).

## When applied
When making significant, durable architectural choices that outlive individual sessions and govern subsequent implementation.

## Sub-concepts
none

## Part of
domain-doc-layout

## Implementation status
clean

## Design notes
Architectural Decision Records capture immutable, permanent design choices, rejected alternatives, and context. Serving as durable institutional memory across ephemeral agent sessions, ADRs inform specification, planning, and bug diagnosis so agents maintain architectural consistency without re-opening settled debates.

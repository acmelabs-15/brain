---
package: matt
name: improve-codebase-architecture
slug: improve-codebase-architecture
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: skills/engineering/improve-codebase-architecture/agents/openai.yaml, sha256: c8cb20f68ebf0edb4e497bc11ae5fcaa196004e661cd189015b04f4109ced7f1}
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# improve-codebase-architecture

## Definition — verbatim
> "`improve-codebase-architecture` surveys a codebase for **deepening opportunities**: places where a shallow module (an interface nearly as complex as the thing it hides) could become a deep one." — docs/engineering/improve-codebase-architecture.md:3
> "  display_name: \"Improve Codebase Architecture\"" — skills/engineering/improve-codebase-architecture/agents/openai.yaml:2

## Also called — verbatim
> "  short_description: \"Find and grill architecture improvements\"" — skills/engineering/improve-codebase-architecture/agents/openai.yaml:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 8 | used here | Listed as a soft-dependency skill referencing domain docs in vague prose |
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Updated in changeset standardizing invocation terminology |
| .changeset/user-invoked-skill-invocation.md | 8 | used here | Configured as an explicitly user-invoked skill |
| docs/engineering/domain-modeling.md | 86 | used here | Cited in workflow transitions |
| docs/engineering/grill-with-docs.md | 58 | used here | Cited in documentation grilling transitions |
| docs/engineering/improve-codebase-architecture.md | 3 | defined here | Core documentation page establishing purpose, execution, and filters |
| docs/productivity/grilling.md | 87 | used here | Cited in grilling workflow transitions |
| external/code-review.md | 29 | used here | Referenced in code review recommendations |
| external/diagnosing-bugs.md | 30 | used here | Cited in bug diagnosis transitions |
| external/domain-modeling.md | 71 | used here | Mentioned regarding aligning architecture with domain models |
| external/grill-with-docs.md | 50 | used here | Downstream routing destination for architectural questions |
| external/grilling.md | 70 | used here | Transition from conversational grilling to architectural survey |
| external/improve-codebase-architecture.md | 25 | defined here | External documentation page defining architectural survey workflow |
| skills/engineering/improve-codebase-architecture/agents/openai.yaml | 2 | defined here | Metadata declaring display name and invocation policy |
| skills/engineering/setup-matt-pocock-skills/domain.md | 11 | used here | Cited in setup domain guidance |

## Consumes
Codebase files, recent git commit history (to identify actively changing paths), and optional domain glossaries/ADRs.

## Produces
A standalone HTML report in the OS temp directory detailing candidate deepening opportunities, followed by an interactive grilling session.

## When applied
Periodically outside the main build loop: during routine upkeep, before large builds ("how can we make this change easy?"), during brownfield audits, or before legacy test work.

## Sub-concepts
none

## Part of
soft-dependency

## Implementation status
clean

## Design notes
An architectural survey skill that identifies opportunities to turn shallow modules into deep modules (hiding complexity behind simpler interfaces). Applying Ousterhout's philosophy and a strict "deletion test" (concentrating vs. spreading complexity), it acts as an advisory survey producing an external HTML report and interactive dialogue, deliberately leaving code modification to subsequent separate sessions.

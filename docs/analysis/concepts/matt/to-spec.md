---
package: matt
name: to-spec
slug: to-spec
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/to-spec/agents/openai.yaml, sha256: 1c5b4d1e3d8e52287ef19cc2742fdbbfae1914ac75d33af3e4c8174f08cc55bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# to-spec

## Definition — verbatim
> "  display_name: \"To Spec\"" — skills/engineering/to-spec/agents/openai.yaml:2
> "  short_description: \"Turn a conversation into a spec\"" — skills/engineering/to-spec/agents/openai.yaml:3
> "<code class=\"ah-code-inline\">to-spec</code> turns the conversation you have just had into a <strong class=\"ah-prose-strong\"><a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/spec\">spec</a></strong>, and publishes it to your issue tracker as a single issue." — external/to-spec.md:25

## Also called — verbatim
> "You invoke this by typing <code class=\"ah-code-inline\">/to-spec</code>; the <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/agent\">agent</a> won&#x27;t reach for it on its own." — external/to-spec.md:28

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 7 | used here | Listed as a hard-dependency skill requiring explicit setup instructions |
| .agents/writing-docs.md | 25 | used here | Referenced in documentation standards for engineering skills |
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Included in frontmatter syntax remediation patch |
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Included in terminology alignment changes |
| .changeset/user-invoked-skill-invocation.md | 5 | used here | Configured as user-invoked only |
| .out-of-scope/mainstream-issue-trackers-only.md | 7 | used here | Cited in tracker integration limitations |
| CONTEXT.md | 8 | used here | Referenced as an engineering skill reading and writing to issue tracker |
| docs/engineering/grill-with-docs.md | 39 | used here | Transition destination when grilling settles architectural requirements |
| docs/engineering/implement.md | 90 | used here | Cited as upstream source for implementation requirements |
| docs/engineering/improve-codebase-architecture.md | 50 | used here | Downstream path when architectural surveys require formal specification |
| docs/engineering/wizard.md | 20 | used here | Cited in interactive workflow guidance |
| docs/productivity/grill-me.md | 65 | used here | Downstream destination converting settled interview points into a spec |
| docs/productivity/grilling.md | 87 | used here | Listed in workflow transitions following interrogation sessions |
| docs/productivity/to-questionnaire.md | 78 | used here | Mentioned in cross-skill workflow transitions |
| external/ask-matt.md | 32 | used here | Router guidance directing users to turn conversations into specs |
| external/code-review.md | 72 | used here | Cited in review follow-up options |
| external/grill-me.md | 64 | used here | Downstream conversion step following requirements grilling |
| external/grill-with-docs.md | 38 | used here | Recommended next step after documentation grilling clears design |
| external/grilling.md | 70 | used here | Transition from conversational grilling to written specification |
| external/implement.md | 74 | used here | Cited as upstream reference for implementation context |
| external/improve-codebase-architecture.md | 47 | used here | Used to formalize architecture changes before execution |
| external/prototype.md | 67 | used here | Recommended after throwaway prototype settles key design questions |
| external/research.md | 61 | used here | Next step after research resolves technology or approach questions |
| external/setup-matt-pocock-skills.md | 30 | used here | Hard dependency requiring prior setup of issue tracker |
| external/tdd.md | 30 | used here | Precursor skill establishing scope before test-driven implementation |
| external/to-questionnaire.md | 74 | used here | Cited in workflow cross-references |
| external/to-spec.md | 24 | defined here | External documentation heading establishing skill definition |
| external/to-spec.md | 24 | defined here | External documentation page defining specification workflow |
| external/triage.md | 30 | used here | Cited in triage transitions for issues needing full specifications |
| external/triage.md | 49 | used here | Listed in workflow transitions |
| external/wayfinder.md | 30 | used here | Downstream conversion step once a decision map has cleared |
| external/wizard.md | 31 | used here | Cited in interactive workflow routing |
| skills/engineering/to-spec/agents/openai.yaml | 2 | defined here | Metadata declaring display name and invocation policy |

## Consumes
An active conversational thread where design decisions were argued and settled, plus issue tracker configuration and domain glossary (`CONTEXT.md`).

## Produces
A published specification issue on the configured issue tracker, tagged with `ready-for-agent` triage label.

## When applied
When a multi-session build has been decided upon in conversation and must be captured in durable written form before context clears.

## Sub-concepts
none

## Part of
hard-dependencies

## Implementation status
defects: missing-path (references `/setup-matt-pocock-skills` as a command path rather than a skill directory).

## Design notes
Synthesizes decisions already made in conversation into a durable specification issue on the project's issue tracker. Designed under the principle that "specs are decision records, not questionnaires", it does not interview the user; instead, it records settled architecture, explicit user stories, implementation decisions, and testing seams so subsequent agent sessions can execute without context drift.

---
package: matt
name: wayfinder
slug: wayfinder
kind: technique
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md, sha256: ea175f73d193b3f55819c0ed9bbccf6ee0e70ad8f928e3d7607596c53380acd6}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
  - {path: skills/engineering/wayfinder/agents/openai.yaml, sha256: 88bc81a11a6d52ac67aeaa76b8b619e387020d47c5133a4dd4927fd15c4ad073}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# wayfinder

## Definition — verbatim
> "Map a large effort as decision tickets" — skills/engineering/wayfinder/agents/openai.yaml:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Updated to standardize cross-skill invocation on Skill tool calls. |
| .changeset/user-invoked-skill-invocation.md | 5 | used here | Corrected to remove direct Skill tool calls to user-invoked setup-matt-pocock-skills. |
| CONTEXT.md | 16 | used here | Cites wayfinder in project context rules for managing large architectural initiatives. |
| docs/engineering/domain-modeling.md | 9 | used here | Notes that wayfinder orchestrates domain-modeling across multi-session planning efforts. |
| docs/engineering/grill-with-docs.md | 17 | used here | Distinguishes single-session grilling from multi-session wayfinder exploration. |
| docs/engineering/implement.md | 95 | used here | Identifies wayfinder as upstream source for decision tickets leading to implementation. |
| docs/engineering/improve-codebase-architecture.md | 25 | used here | Recommends wayfinder for large, multi-session codebase restructuring plans. |
| docs/productivity/grill-me.md | 17 | used here | Contrasts single-sitting interviews against multi-session wayfinder roadmaps. |
| docs/productivity/grilling.md | 17 | used here | Notes that wayfinder embeds grilling sessions inside decision ticket explorations. |
| docs/productivity/teach.md | 71 | used here | References wayfinder for mapping complex learning roadmaps spanning many sessions. |
| external/ask-matt.md | 29 | used here | Directs users with large, multi-session initiatives to run wayfinder. |
| external/domain-modeling.md | 28 | used here | Discusses domain modeling integration during wayfinder mapping sessions. |
| external/grill-with-docs.md | 30 | used here | Compares single-session repo grilling with multi-session wayfinder ticket trees. |
| external/grilling.md | 30 | used here | Highlights wayfinder running grilling rounds inside individual decision tickets. |
| external/implement.md | 74 | used here | Points to cleared wayfinder maps feeding to-spec, to-tickets, and implement pipelines. |
| external/improve-codebase-architecture.md | 35 | used here | Suggests wayfinder when architecture improvements exceed single-session scope. |
| external/prototype.md | 30 | used here | Contrasts quick exploratory prototyping against comprehensive wayfinder planning. |
| external/research.md | 30 | used here | Recommends wayfinder when technical research uncovers broad architectural forks. |
| external/research.md | 50 | used here | Outlines mapping research findings into wayfinder decision tickets. |
| external/setup-matt-pocock-skills.md | 30 | used here | Configures issue tracker integration required by wayfinder decision boards. |
| external/to-spec.md | 47 | used here | Describes transitioning from a cleared wayfinder map into formal specification authoring. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 38 | used here | Configures GitHub Issues labels and boards used by wayfinder. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 39 | used here | Configures GitLab issue trackers for wayfinder decision mapping. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 23 | used here | Configures local markdown issue tracking fallback for wayfinder. |
| skills/engineering/wayfinder/agents/openai.yaml | 2 | defined here | Declares UI metadata and display name for the Wayfinder skill. |

## Consumes
A large, ambiguous software effort whose destination is known but route is unclear, and a connected issue tracker.

## Produces
A dependency graph of decision tickets on an issue tracker representing unblocked questions requiring resolution.

## When applied
When a project or feature is too large to resolve in a single session and requires multi-session strategic alignment.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural planning discipline designed for large, multi-session initiatives. Instead of generating speculative implementation tasks, wayfinder charts the unknowns as a shared board of 'decision tickets' on an issue tracker. It methodically resolves decisions one at a time before any implementation code or task slicing begins.

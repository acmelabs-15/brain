---
package: rjm
name: dev-lifecycle
slug: dev-lifecycle
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dev-lifecycle

## Definition — verbatim
> "| `dev-lifecycle` | Write and ship code safely | spec -> plan -> build -> test -> review -> ship workflows, supporting quality skills, shipping hooks |" — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 85 | defined here | Defined in the plugin taxonomy table as the core plugin packaging the 6-phase developer lifecycle |

## Consumes
Lifecycle workflow commands, quality skills, and verification hooks.

## Produces
A standalone, installable plugin providing end-to-end developer lifecycle capabilities.

## When applied
Installed by developers requiring the core development lifecycle workflow without agent delegation overhead.

## Sub-concepts
none

## Part of
jtbd-based-plugin-architecture

## Implementation status
defects: missing-path

## Design notes
dev-lifecycle is a core JTBD plugin package in rjm's architecture dedicated to the job of "writing and shipping code safely." It bundles the primary 6-phase workflow (`/spec` -> `/plan` -> `/build` -> `/test` -> `/review` -> `/ship`), supporting quality skills, and enforcement hooks.

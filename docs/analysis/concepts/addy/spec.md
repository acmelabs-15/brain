---
package: addy
name: spec
slug: spec
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/fixtures/spec-driven-development/billing-brief.md, sha256: 097d44d7ea2cfe9d93257b2d9052e89b5c993c1775d3d2232ae43445a218740f}
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# spec

## Definition — verbatim
> "  /spec          /plan          /build        /test         /review       /ship" — README.md:17

> "spec and surface these decisions; do not implement them by assumption." — evals/fixtures/spec-driven-development/billing-brief.md:16

## Also called — verbatim
- `PRD` — README.md:15
- `PRD` — external/spec-driven-development.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/spec-driven-development/billing-brief.md | 16 | used here | Brief instructs agent to produce a spec and surface decisions before implementation |
| external/idea-refine.md | 12 | used here | Sidebar lists /spec command under Define phase |
| external/interview-me.md | 12 | used here | Sidebar lists /spec command under Define phase |
| external/spec-driven-development.md | 5 | used here | States that the skill writes a spec/PRD before implementation begins |
| external/spec-driven-development.md | 12 | used here | Sidebar lists /spec command under Define phase |
| README.md | 17 | defined here | Visual lifecycle diagram defining /spec as slash command for the Define phase |

## Consumes
Rough feature ideas, briefs, or user requirements.

## Produces
A specification document (spec / PRD) establishing boundaries, objectives, commands, and tests.

## When applied
During the Define phase before writing implementation code.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The specification artifact in Addy's lifecycle represents the formal contract defining what to build before implementation begins. In Addy's design, the /spec command and spec-driven development skill anchor the Define phase, preventing agents from writing premature code based on unvalidated assumptions.

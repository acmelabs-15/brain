---
package: addy
name: DEFINE
slug: define
kind: phase
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: CLAUDE.md, sha256: f03b7aaf2c08ab93e70a020442634a09f518286ff1beb7b8353dde92533ff9b0}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# DEFINE

## Definition — verbatim
> "DEFINE          PLAN           BUILD          VERIFY         REVIEW          SHIP" — README.md:12

## Also called — verbatim
> "**Define:**" — CLAUDE.md:21

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 40 | defines | Maps DEFINE phase to `spec-driven-development` in the implicit lifecycle table |
| CLAUDE.md | 21 | defines | Catalogs skills under the Define phase (`idea-refine`, `interview-me`, `spec-driven-development`) |
| docs/comparison.md | 11 | references | Lists Define as the second phase in the overall lifecycle comparison table |
| docs/opencode-setup.md | 168 | references | Lists Define phase skills in the OpenCode configuration mapping table |
| external/idea-refine.md | 5 | references | Marks `idea-refine` as belonging to the Define phase in web catalog metadata |
| external/interview-me.md | 5 | references | Marks `interview-me` as belonging to the Define phase in web catalog metadata |
| external/spec-driven-development.md | 5 | references | Marks `spec-driven-development` as belonging to the Define phase in web catalog metadata |
| README.md | 12 | defines | Displays DEFINE as the initial phase in the core lifecycle pipeline ASCII diagram |

## Consumes
Unstructured user idea, problem statement, or feature request.

## Produces
Approved specification document or PRD clarifying requirements, boundaries, and acceptance criteria.

## When applied
Triggered when starting a new project, feature, or significant change, or when requirements are unclear.

## Sub-concepts
spec-driven-development, interview-me, idea-refine

## Part of
lifecycle-mapping-implicit-commands

## Implementation status
defects: cross-file-contradiction, doc-drift, missing-path, orphan

## Design notes
The Define phase serves as the critical front-end gate of addy's lifecycle, compelling the agent to clarify objectives, interview the user, and lock down specifications before any planning or implementation commences.

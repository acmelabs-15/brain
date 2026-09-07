---
package: rjm
name: UPSTREAM
slug: upstream
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analysis-provenance/SKILL.md, sha256: da8d7cfd6e7333bb7a893e589bc58588386cd6eb9c73c555be2e3b1757de7c27}
  - {path: .claude/skills/analysis-provenance/scripts/check_provenance.py, sha256: e9ba09d25d1343e57de5e42155192494ac325c4738171459485d9ab85d9e63ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# UPSTREAM

## Definition — verbatim
> "External dependency (npm, pip, NuGet) | Configure, do not modify" — .claude/skills/analysis-provenance/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/scripts/check_provenance.py | 26 | defined here | Enumeration member in ProvenanceCategory representing external code ownership. |
| .claude/skills/analysis-provenance/SKILL.md | 42 | defined here | Defined in the provenance classification table as external dependencies that must be configured but not modified. |

## Consumes
External package manager dependencies (npm, pip, NuGet) and external codebases.

## Produces
Governance constraint prohibiting local code modifications and directing agents toward configuration options.

## When applied
When analyzing file provenance prior to making codebase modifications.

## Sub-concepts
none

## Part of
analysis-provenance

## Implementation status
defects: doc-drift, missing-path, exit-code-mismatch, script-bug

## Design notes
A provenance classification designating code originating from external package registries or third-party dependencies. In rjm, classifying code as `UPSTREAM` imposes an inviolable constraint that agents must configure the dependency externally rather than modifying third-party files.

---
package: rjm
name: VENDOR
slug: vendor
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

# VENDOR

## Definition — verbatim
> "Copied/vendored upstream code | Avoid modification, track upstream" — .claude/skills/analysis-provenance/SKILL.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/scripts/check_provenance.py | 28 | defined here | Enumeration member in ProvenanceCategory designating copied or vendored upstream code. |
| .claude/skills/analysis-provenance/SKILL.md | 44 | defined here | Defined as copied/vendored code where modifications should be avoided and upstream versions tracked. |

## Consumes
Third-party code copied or vendored into repository directories.

## Produces
Governance instruction to avoid local modifications and track upstream changes.

## When applied
When analyzing files residing in vendor directories or containing third-party attribution headers.

## Sub-concepts
none

## Part of
analysis-provenance

## Implementation status
defects: doc-drift, missing-path, exit-code-mismatch, script-bug

## Design notes
A provenance category designating third-party source code copied or vendored directly into the repository. Rjm warns agents to avoid modifying vendored code and instead track changes against upstream releases to preserve patchability and prevent divergence.

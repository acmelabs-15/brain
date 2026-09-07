---
package: rjm
name: LOCAL
slug: local
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analysis-provenance/SKILL.md, sha256: da8d7cfd6e7333bb7a893e589bc58588386cd6eb9c73c555be2e3b1757de7c27}
  - {path: .claude/skills/analysis-provenance/scripts/check_provenance.py, sha256: e9ba09d25d1343e57de5e42155192494ac325c4738171459485d9ab85d9e63ce}
  - {path: scripts/ci/_main_binding.py, sha256: 1009fe6ae95a4957bbb97bd561b2d48ac998636732375b335c3ef32dadacd60d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# LOCAL

## Definition — verbatim
> "Project-owned code | Modify as needed" — .claude/skills/analysis-provenance/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/scripts/check_provenance.py | 27 | defined here | Enumeration member in ProvenanceCategory designating project-owned code. |
| .claude/skills/analysis-provenance/SKILL.md | 43 | defined here | Defined as project-owned code that is safe to modify as needed. |
| scripts/ci/_main_binding.py | 14 | defined here | State model entry where main is bound to something unrelated, leading to verification credit denial. |

## Consumes
First-party repository files, local source modules, and script entry point bindings.

## Produces
Modification permissions for provenance analysis, or credit denial under main-binding verification.

## When applied
Evaluated during provenance checks prior to code edits and in CI main-binding state transitions.

## Sub-concepts
none

## Part of
analysis-provenance

## Implementation status
defects: doc-drift, missing-path, exit-code-mismatch, script-bug

## Design notes
Represents project-owned code in provenance determination where modification is explicitly permitted. In the CI main-binding script, `LOCAL` denotes a state where the `main` entrypoint is bound to something unrelated, thereby denying verification credit under conservative branch joining.

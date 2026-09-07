---
package: rjm
name: _iter_skill_files
slug: iter-skill-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_resolver_anchoring.py, sha256: 8013b916e0028b1191d0d6f89083dfc8030d317c22fc705a4fb159522f950e46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _iter_skill_files

## Definition — verbatim
(used, not defined)

> "def _iter_skill_files(repo_root: Path, skill_root: Path) -> list[Path]:" — scripts/validation/check_skill_md_exec_portability.py:222

## Also called — verbatim
`def iter_skill_files(repo_root: Path) -> list[Path]:` — scripts/validation/check_skill_resolver_anchoring.py:182

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 222 | defined here | Helper function collecting skill files including SKILL.md, references markdown, and script readmes. |
| scripts/validation/check_skill_resolver_anchoring.py | 182 | defined here | Generator function yielding all SKILL.md file paths across configured scan roots. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other, orphan

## Design notes
An internal Python helper function identifier collecting skill markdown and script files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.

---
package: rjm
name: find_malformed
slug: find-malformed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_copilot_agent_frontmatter.py, sha256: e4b2a8f78737f7a264ad60ab2fe96757f850f658704bec47695d2d5fc4e42e76}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# find_malformed

## Definition — verbatim
(used, not defined)

> "def find_malformed(agents_dir: Path, *, repo_root: Path = _REPO_ROOT) -> list[tuple[Path, str]]:" — scripts/validation/validate_copilot_agent_frontmatter.py:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_copilot_agent_frontmatter.py | 121 | defined here | Directory sweep function returning invalid agent file paths and their associated frontmatter errors. |

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
clean

## Design notes
A validation scanning function in validate_copilot_agent_frontmatter.py rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.

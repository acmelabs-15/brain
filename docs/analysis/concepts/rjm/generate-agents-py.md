---
package: rjm
name: generate_agents.py
slug: generate-agents-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# generate_agents.py

## Definition — verbatim
(used, not defined)

> "3. **Build system verification**: `python3 build/generate_agents.py` generates `model: claude-opus-4.5` for Copilot CLI and `model: Claude Opus 4.5 (copilot)` for VS Code." — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 151 | used here | Verified as the build script generating agent markdown files with platform-specific model identifiers |
| scripts/validation/check_skill_md_portability.py | 54 | used here | Cited in docstring describing how templates/agents generates Copilot CLI agent outputs |

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
defects: doc-drift

## Design notes
generate_agents.py is a Python build script filename used to generate agent markdown files across platforms rather than an architectural lifecycle concept.

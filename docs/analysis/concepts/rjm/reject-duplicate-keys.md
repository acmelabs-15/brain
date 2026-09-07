---
package: rjm
name: _reject_duplicate_keys
slug: reject-duplicate-keys
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _reject_duplicate_keys

## Definition — verbatim
(used, not defined)

> "def _reject_duplicate_keys(loader: yaml.SafeLoader, node: yaml.MappingNode) -> dict[Any, Any]:" — scripts/validation/check_adr_lifecycle.py:297

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 126 | used here | Cited as failing to catch nested duplicates because nested keys are not repeated keys in a single mapping. |
| scripts/validation/check_adr_lifecycle.py | 297 | defined here | SafeLoader constructor function that raises an error when duplicate mapping keys occur in frontmatter. |

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
`_reject_duplicate_keys` is a Python function in `check_adr_lifecycle.py` and YAML/JSON loader implementations that prevents silent key-overwrite exploits by raising errors on duplicate keys, classified as kind: name-only per D-023.

---
package: rjm
name: validate_colocated_skill_tests
slug: validate-colocated-skill-tests
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_plugin.py, sha256: bde1cc8ea22ca4ac213de4ce3b615700be8f0c8bfaaa715f49f58b141094a2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_colocated_skill_tests

## Definition — verbatim
(used, not defined)

> "def validate_colocated_skill_tests(repo_root: Path) -> bool:" — scripts/validation/checks_plugin.py:423

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_plugin.py | 423 | defined here | Validates that no newly added test files are placed inside customer-shipped skill directories. |

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
defects: script-bug

## Design notes
A Python validation function identifier in `checks_plugin.py` guarding against test colocation in shipped skills rather than an agent lifecycle concept.

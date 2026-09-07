---
package: rjm
name: MODEL_BEARING_KEYS
slug: model-bearing-keys
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MODEL_BEARING_KEYS

## Definition — verbatim
(used, not defined)
> "MODEL_BEARING_KEYS: frozenset[str]" — scripts/validation/check_model_pins.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 219 | used here | Cited in scope note explaining ADR-080 model-pin policy enforcement across nested frontmatter keys. |
| scripts/validation/check_model_pins.py | 68 | defined here | Python constant set defining YAML frontmatter keys subject to model pin governance checks. |

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
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 allowed-tools and ADR-080 model field supersession)

## Design notes
A Python constant identifier in validation tooling defining YAML frontmatter keys that specify LLM models subject to pin governance, rather than an independent lifecycle concept.

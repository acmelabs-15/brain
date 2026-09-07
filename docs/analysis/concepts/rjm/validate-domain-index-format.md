---
package: rjm
name: validate_domain_index_format
slug: validate-domain-index-format
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# validate_domain_index_format

## Definition — verbatim
(used, not defined)

> "def validate_domain_index_format(index_path: Path, result: ValidationResult) -> None:" — scripts/validate_memory_tier.py:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 105 | defined here | Function validating that a domain index strictly adheres to pure lookup table formatting per ADR-017. |

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
defects: always-failing-gate, doc-drift

## Design notes
A Python function identifier enforcing pure lookup table formatting rather than an agent lifecycle concept.

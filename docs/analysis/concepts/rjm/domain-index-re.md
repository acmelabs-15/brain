---
package: rjm
name: DOMAIN_INDEX_RE
slug: domain-index-re
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# DOMAIN_INDEX_RE

## Definition — verbatim
(used, not defined)

> "DOMAIN_INDEX_RE = re.compile(r\"^[a-z][\w-]*-index\.md$\")" — scripts/validate_memory_tier.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 45 | defined here | Regular expression compiling naming pattern for domain memory index files. |

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
A regular expression constant identifier matching domain index file names rather than an agent lifecycle concept.

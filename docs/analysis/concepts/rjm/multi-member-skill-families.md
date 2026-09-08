---
package: rjm
name: multi-member skill families
slug: multi-member-skill-families
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# multi-member skill families

## Definition — verbatim
> "Validate SKIP clauses for multi-member skill families." — scripts/validation/check_skill_skip_clauses.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_skip_clauses.py | 2 | defined here | Subject of routing validation ensuring all member skills connect to sibling skills. |

## Consumes
Two or more skills sharing the same leading hyphen-separated token in their directory names.

## Produces
A connected sibling routing graph across skills of the same family.

## When applied
Whenever two or more skills share the same family prefix (e.g. `docker-build`, `docker-test`).

## Sub-concepts
skip-clauses, leading-token

## Part of
none

## Implementation status
defects: script-bug

## Design notes
Multi-member skill families represent groups of related skills that share a common prefix token (such as `docker-` or `git-`). In rjm's skill catalog, grouping skills into families requires explicit cross-referencing and negative routing so an executing agent does not trigger a generic or incorrect member of the family when a specialized sibling is available.

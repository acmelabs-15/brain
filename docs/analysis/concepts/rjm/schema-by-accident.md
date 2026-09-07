---
package: rjm
name: Schema-by-accident
slug: schema-by-accident
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Schema-by-accident

## Definition — verbatim
> "- **Schema-by-accident**: data shapes drift because every writer adds optional fields and every reader silently ignores unknowns. Pin a schema and version it." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 160 | defined here | Defined as an anti-pattern where unversioned data models silently diverge over time. |

## Consumes
Ad-hoc document persistence, unversioned JSON payloads, permissive schema parsers.

## Produces
Fragmented data shapes, unmaintainable parsers, and silent degradation of data integrity.

## When applied
Flagged when services persist loose data objects without explicit version pinning or validation schemas.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
defects: doc-drift

## Design notes
Schema-by-accident occurs when uncoordinated writers introduce ad-hoc fields and readers silently ignore unrecognized keys, resulting in uncontrolled schema drift that requires pinned versions and envelope versioning.

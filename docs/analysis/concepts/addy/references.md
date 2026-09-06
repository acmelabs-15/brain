---
package: addy
name: References
slug: references
kind: reference
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
  - {path: scripts/validate-reference-links.js, sha256: 06b94becedc5e82e495a7f44db69001ecc22e55fd8f2aa87ee8d1a5d6262ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# References

## Definition — verbatim
> "| **References** | `references/*.md` | Checklists skills pull in on demand | *What to check* |" — docs/developer-onboarding.md:18

## Also called — verbatim
- `references/` — scripts/validate-reference-links.js:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 18 | used here | Defined in the mental model table as checklists that skills pull in on demand. |
| scripts/validate-reference-links.js | 5 | used here | Named as the target checklists guarded by the reference link validator script. |

## Consumes
Established engineering standards across security, performance, accessibility, definition of done, and observability.

## Produces
Comprehensive evaluation checklists pulled into agent context on demand.

## When applied
Referenced dynamically by skills when entering verification, review, or shipping activities.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other

## Design notes
References are centralized checklists stored in `references/*.md` that skills load on demand. By maintaining standards in dedicated reference files rather than duplicating them across skill workflows, the repository ensures a single source of truth for engineering quality gates while keeping individual skill contexts lightweight.

---
package: matt
name: in-progress/
slug: in-progress
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# in-progress/

## Definition — verbatim
(used, not defined)
> "- `in-progress/`: beta: public on purpose, feedback wanted, not shipped in the plugin" — CLAUDE.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 6 | defined here | Defines in-progress/ as the bucket folder for public beta skills not yet shipped in the plugin. |
| external/wizard.md | 58 | used here | Explains that wizard graduated from in-progress/ to engineering/ in v1.2. |

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
defects: doc-drift, script-bug, orphan (wizard prompt issue #741, CLAUDE.md em-dash drift, unreferenced external doc snapshot)

## Design notes
This name designates an organizational staging bucket directory under skills/ for public beta skills seeking user feedback prior to graduation into promoted categories.

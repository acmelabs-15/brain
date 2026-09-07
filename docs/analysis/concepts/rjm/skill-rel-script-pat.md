---
package: rjm
name: _SKILL_REL_SCRIPT_PAT
slug: skill-rel-script-pat
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _SKILL_REL_SCRIPT_PAT

## Definition — verbatim
(used, not defined)

> "_SKILL_REL_SCRIPT_PAT = re.compile(" — scripts/validation/check_skill_md_exec_portability.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 61 | defined here | Compiled regular expression matching skill-relative script invocations such as `python3 scripts/foo.py`. |

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
defects: other

## Design notes
A compiled regular expression pattern identifying relative script invocations rather than an agent lifecycle concept.

---
package: rjm
name: trailing_offer
slug: trailing-offer
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# trailing_offer

## Definition — verbatim
(used, not defined)

> "\"trailing_offer\": \"manufactured trailing offer; delete it\"," — .claude/skills/prose-self-check/scripts/prose_lint.py:921

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 921 | defined here | Rule dictionary entry mapping trailing offer tell to remediation guidance. |
| .claude/skills/prose-self-check/SKILL.md | 91 | defined here | Structural tell heading associating code identifier with manufactured trailing offers. |

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
defects: doc-drift, missing-path, other, script-bug

## Design notes
An internal finding kind identifier in prose_lint.py and SKILL.md used to flag manufactured trailing offers in emitted prose.

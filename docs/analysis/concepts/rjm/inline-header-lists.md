---
package: rjm
name: Inline-header lists
slug: inline-header-lists
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Inline-header lists

## Definition — verbatim
> "- **Inline-header lists**: bullets that each open with a bolded restatement" — .claude/skills/prose-self-check/SKILL.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 104 | defined here | Defined as a structural tell featuring bullet items that open with redundant bolded restatements. |

## Consumes
Bulleted lists with leading bold phrases.

## Produces
Streamlined bullet lists or standard prose paragraphs with redundant bold labels removed.

## When applied
Evaluated manually in Layer 2 structural review to distinguish redundant restatements from valid index labels.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
A formatting anti-pattern where bulleted lists prefix items with bold restatements that duplicate subsequent text rather than acting as meaningful index keys.

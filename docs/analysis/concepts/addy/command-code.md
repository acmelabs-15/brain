---
package: addy
name: Command Code
slug: command-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/commandcode-setup.md, sha256: 6305e672cd15c1dd709d7a2b307dca4bbf2704328654f8b3a5f37c495d3cf31c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Command Code

## Definition — verbatim
(used, not defined)
> "[Command Code](https://commandcode.ai) has a native skills system. The built-in `cmd skills` command clones a GitHub repo, recursively discovers every `SKILL.md`, and installs the ones you pick." — docs/commandcode-setup.md:3

## Also called — verbatim
> "cmd" — docs/commandcode-setup.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/commandcode-setup.md | 3 | defines | Setup guide documenting integration with the Command Code AI terminal agent |

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
clean

## Design notes
Command Code is an external AI terminal application and host tool rather than a lifecycle concept.

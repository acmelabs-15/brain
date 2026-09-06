---
package: addy
name: Persona resolution
slug: persona-resolution
kind: name-only
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Persona resolution

## Definition — verbatim
(used, not defined)
> "If you've defined your own `code-reviewer`, `security-auditor`, or `test-engineer` in `agents/`" — .gemini/commands/ship.toml:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 25 | defines | Precedence mechanism where user agent definitions override plugin defaults |
| commands/ship.toml | 25 | defines | Precedence mechanism where user agent definitions override plugin defaults |

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
`Persona resolution` is a configuration heading and precedence mechanism in the `/ship` command describing how user-level or repository-level agent personas override plugin defaults, rather than an independent lifecycle concept.

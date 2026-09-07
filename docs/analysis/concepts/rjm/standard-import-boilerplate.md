---
package: rjm
name: Standard Import Boilerplate
slug: standard-import-boilerplate
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Standard Import Boilerplate

## Definition — verbatim
> "Every hook or skill script that imports from `.claude/lib/` MUST use this pattern with path validation." — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 72 | defined here | Defined as the mandatory import preamble resolving lib directories with path validation across hooks |

## Consumes
File location `__file__` and optional `CLAUDE_PLUGIN_ROOT` environment variable.

## Produces
Resolved, validated library directory path inserted into `sys.path`.

## When applied
Placed at the top of every hook or skill script importing from `.claude/lib/`.

## Sub-concepts
none

## Part of
`path-resolution`

## Implementation status
defects: missing-path

## Design notes
The standard import boilerplate is a python preamble pattern that resolves the plugin library directory via environment variable or upward manifest walk-up before modifying `sys.path`.

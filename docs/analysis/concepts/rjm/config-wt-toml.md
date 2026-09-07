---
package: rjm
name: .config/wt.toml
slug: config-wt-toml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_selection/runtime_read_patterns.txt, sha256: 5bab0d48d8906521a1f19e991200ce72507009857733e862a05dbdc91e63c5dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# .config/wt.toml

## Definition — verbatim
(used, not defined)

> ".config/wt.toml" — scripts/test_selection/runtime_read_patterns.txt:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/runtime_read_patterns.txt | 9 | defined here | Pattern entry triggering a full-suite test run whenever worktree configuration is modified. |

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
`.config/wt.toml` is a configuration file path in `scripts/test_selection/runtime_read_patterns.txt` governing worktree settings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.

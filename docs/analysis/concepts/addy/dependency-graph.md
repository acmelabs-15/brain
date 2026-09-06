---
package: addy
name: dependency graph
slug: dependency-graph
kind: technique
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# dependency graph

## Definition — verbatim
> "Identify the dependency graph between components" — .gemini/commands/planning.toml:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 9 | applies | Step 2 directive to identify dependency graph between components |
| commands/planning.toml | 9 | applies | Step 2 directive to identify dependency graph between components |
| skills/planning-and-task-breakdown/SKILL.md | 35 | defines | Step 2 section explaining component dependency mapping and build order |

## Consumes
Component and interface models extracted from specifications and existing codebase architecture.

## Produces
An ordered mapping of dependencies indicating which architectural components must precede others.

## When applied
Step 2 of the planning process, immediately following plan mode entry.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
`dependency graph` mapping determines the build order of tasks during planning. By explicitly identifying what depends on what (e.g. database schema before API models, API models before endpoints, endpoints before client interfaces), it prevents blocking cycles, avoids phantom abstractions, and ensures tasks can be executed and tested incrementally.

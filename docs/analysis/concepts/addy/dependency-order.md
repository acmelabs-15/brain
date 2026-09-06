---
package: addy
name: dependency order
slug: dependency-order
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# dependency order

## Definition — verbatim
> "Execute every task in dependency order. Use each task's declared dependencies; if they aren't explicit, execute in the order the plan lists them." — commands/build.toml:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/build.toml | 34 | defines | Step 5 of /build auto instructing the agent to execute tasks according to declared dependency graphs or plan listing order. |

## Consumes
Task list with declared prerequisites and topological dependency relationships.

## Produces
Linear execution sequence guaranteeing foundational components exist before dependent tasks execute.

## When applied
Applied throughout autonomous task implementation in /build auto.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Dependency order ensures tasks are executed in topological dependency sequence so each incremental vertical slice builds upon verified, tested foundations.

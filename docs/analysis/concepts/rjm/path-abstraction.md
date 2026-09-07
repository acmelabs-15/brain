---
package: rjm
name: Path Abstraction
slug: path-abstraction
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Path Abstraction

## Definition — verbatim
(used, not defined)

> "### P0-5: Path Abstraction Failure Modes (Critic, Security)" — .agents/critique/ADR-045-debate-log.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 41 | defined here | Architectural issue heading in ADR-045 debate log analyzing failure modes in extracted plugin path handling. |

## Consumes
Configurable directory roots, environment variables, consumer repository layouts.

## Produces
Decoupled filesystem path resolution allowing framework components to operate across varying repositories.

## When applied
Architected during framework extraction to decouple hardcoded repository paths in skills and agents.

## Sub-concepts
path-traversal-risk

## Part of
4-plugin-model

## Implementation status
defects: cross-file-contradiction

## Design notes
Path abstraction in rjm refers to decoupling hardcoded repository paths using environment variables and configuration settings, enabling framework skills and tools to be extracted into external plugins and reused across varying directory trees.

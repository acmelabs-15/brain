---
package: rjm
name: Hook Code Execution Without Sandboxing
slug: hook-code-execution-without-sandboxing
kind: technique
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

# Hook Code Execution Without Sandboxing

## Definition — verbatim
(used, not defined)

> "### P0-7: Hook Code Execution Without Sandboxing (Security)" — .agents/critique/ADR-045-debate-log.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 49 | defined here | Identified as a critical security vulnerability (CVSS 9.1) in plugin hook execution privileges. |

## Consumes
Plugin lifecycle hook scripts, host operating system environment, filesystem permissions, secrets.

## Produces
Threat assessment finding mandating sandbox isolation or capability-based permission models.

## When applied
Evaluated during architectural security reviews of plugin hook execution models.

## Sub-concepts
none

## Part of
4-plugin-model

## Implementation status
defects: cross-file-contradiction

## Design notes
Hook Code Execution Without Sandboxing describes a critical architectural vulnerability identified in ADR-045 wherein plugin hooks execute with full host privileges (filesystem, network, and secrets) without isolation or capability-based restrictions.

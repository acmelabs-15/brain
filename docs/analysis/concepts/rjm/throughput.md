---
package: rjm
name: "Throughput"
slug: throughput
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md, sha256: 6f709db1093b8f67931da79d032f5171bdf85aabad2deba67d29e9350156983f}
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Throughput

## Definition — verbatim
> "### Throughput" — .claude/skills/slo-designer/SKILL.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 33 | used here | Common SLI row monitoring requests per second to validate capacity during failure scenarios. |
| .claude/skills/slo-designer/SKILL.md | 74 | defined here | SLI category section defining throughput in requests per second or transaction volume. |

## Consumes
Request counters, completed transaction logs, and time duration intervals.

## Produces
Rate metrics measuring operational volume (e.g. requests per second or transactions processed).

## When applied
Applied during capacity validation, load testing, and failure resilience verification.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, missing-path

## Design notes
Throughput quantifies the processing capacity and transaction rate handled by a system. In RJM's reliability framework, throughput confirms that systems maintain required request handling capacity under nominal conditions and degraded operational states.

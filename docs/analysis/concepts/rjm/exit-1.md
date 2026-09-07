---
package: rjm
name: Exit 1
slug: exit-1
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/dependency-auditor.md, sha256: bba28af9880dc67233b35d0e739ae8f8702158713d097d177a2034fd605cf51e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exit 1

## Definition — verbatim
> "- Exit 1 if any Critical or High finding (gate signal for CI/release workflows)." — .claude/agents/dependency-auditor.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/dependency-auditor.md | 135 | defined here | Defines the failure exit condition and gate signal when Critical or High findings are surfaced. |

## Consumes
Audit classification results identifying one or more Critical or High severity vulnerabilities.

## Produces
Process exit code 1 halting CI/CD release workflows.

## When applied
When dependency scanning detects unmitigated high-risk vulnerabilities.

## Sub-concepts
none

## Part of
dependency-auditor

## Implementation status
clean

## Design notes
The blocking gate exit code for the dependency auditor in rjm. By returning 1 upon encountering any Critical or High severity finding, it provides a deterministic boolean gate signal that halts automated release pipelines and requires human intervention.

---
package: rjm
name: 'Treating "outdated" as "vulnerable."'
slug: treating-outdated-as-vulnerable
kind: pattern
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

# Treating "outdated" as "vulnerable."

## Definition — verbatim
> "Staleness is a hygiene signal, not a" — .claude/agents/dependency-auditor.md:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/dependency-auditor.md | 150 | defined here | Anti-pattern definition emphasizing that version staleness is hygiene, not a security vulnerability. |

## Consumes
Package version data and vulnerability advisory feeds.

## Produces
Clean separation between hygiene updates (outdated versions) and security blockers (CVEs).

## When applied
During severity classification in dependency auditing.

## Sub-concepts
none

## Part of
dependency-auditor

## Implementation status
clean

## Design notes
An anti-pattern and classification rule in rjm's dependency auditor. It warns against treating package staleness as an active security vulnerability, keeping dependency hygiene (routine maintenance) distinct from vulnerability remediation (blocking CVEs).

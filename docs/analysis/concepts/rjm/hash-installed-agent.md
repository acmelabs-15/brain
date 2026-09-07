---
package: rjm
name: hash_installed_agent
slug: hash-installed-agent
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hash_installed_agent

## Definition — verbatim
(used, not defined)

> "def hash_installed_agent(source: Path) -> str:" — scripts/eval/_runtime_parity.py:304

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_parity.py | 304 | defined here | Computes the SHA-256 hash of agent definition files after name transformation for parity testing. |

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
A Python utility function in the parity harness that digests transformed agent definition bytes, classified as name-only per D-023.

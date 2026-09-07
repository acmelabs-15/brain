---
package: rjm
name: Untrusted Search Path
slug: untrusted-search-path
kind: reference
package_phase: none
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

# Untrusted Search Path

## Definition — verbatim
(used, not defined)

> "- CWE-426: [Untrusted Search Path](https://cwe.mitre.org/data/definitions/426.html)" — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:279

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 279 | used here | Cited in references as CWE-426 vulnerability governing dynamic path and module search order security |

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
defects: missing-path

## Design notes
Untrusted Search Path (CWE-426) is an external security vulnerability reference defining risks when an application searches for critical resources in paths that could be manipulated by malicious actors.

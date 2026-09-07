---
package: rjm
name: safe_resolve
slug: safe-resolve
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md, sha256: 9010d2ac17b09423f0d984afeafdbbbc5144f1a5b43452dcd80d9936ac6dab5d}
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# safe_resolve

## Definition — verbatim
(used, not defined)

> "def safe_resolve(path: str, project_root: str) -> str:" — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md | 120 | defined here | Defined as Python utility function resolving paths and verifying containment within project root |
| .agents/critique/ADR-045-debate-log.md | 168 | defined here | Cited in security review verdict confirming safe_resolve() validates path containment |

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
defects: missing-path, doc-drift

## Design notes
safe_resolve is a Python utility function identifier implementing path containment and traversal prevention rather than an architectural lifecycle concept.

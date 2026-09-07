---
package: rjm
name: Containment Validation
slug: containment-validation
kind: technique
package_phase: cross-phase
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

# Containment Validation

## Definition — verbatim
> "**Containment Validation**: Verify resolved paths remain within expected boundaries:" — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 154 | defined here | Defined as security check ensuring resolved file paths stay within project boundaries |

## Consumes
Resolved absolute path and trusted root boundary path.

## Produces
Boolean validation verdict confirming path stays within authorized project bounds or triggers safe fallback.

## When applied
Executed after path normalization before performing file reads or writes in hooks and scripts.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Containment validation is a security technique that checks normalized paths against authorized base directory boundaries using relative path checks to prevent directory traversal and unintended file modification.

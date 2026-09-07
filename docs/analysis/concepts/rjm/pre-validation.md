---
package: rjm
name: Pre-Validation
slug: pre-validation
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

# Pre-Validation

## Definition — verbatim
> "**Pre-Validation**: Reject malicious patterns before `Path()` construction:" — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 171 | defined here | Defined as defensive security screening filtering null bytes and traversal tokens before object creation |

## Consumes
Raw unvalidated path string from environment or external input.

## Produces
Sanitized path string or null rejection signal prior to filesystem object construction.

## When applied
Applied immediately when receiving raw path strings from environment variables or external callers.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Pre-validation is a defensive input sanitation technique that screens raw path strings for null bytes, control characters, and traversal patterns prior to constructing Path objects or interacting with the filesystem.

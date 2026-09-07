---
package: rjm
name: Path Normalization
slug: path-normalization
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Path Normalization

## Definition — verbatim
> "**Path Normalization**: Use `Path.resolve()` to eliminate `..` sequences:" — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 144 | defined here | Defined as security practice using Path.resolve() to eliminate directory traversal sequences |
| .agents/security/ADR-045-framework-extraction-security-review.md | 244 | defined here | Prescribed as mandatory remediation in path abstraction contract for environment-sourced paths |
| scripts/validation/pre_pr_sequence.py | 355 | defined here | Configured as a validation gate checking repository files for improper path normalization |
| scripts/validation/pre_pr.py | 17 | used here | Listed in pre-PR sequence summary as check #9 inspecting for unnormalized absolute paths |

## Consumes
Raw filesystem path strings or environment-variable-provided paths.

## Produces
Canonical resolved absolute path without dot-dot traversal sequences.

## When applied
Applied before file system read/write operations on dynamic paths, and evaluated during pre-PR gate validation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Path normalization is both a security defensive technique using `Path.resolve()` to neutralize path traversal tokens and a shift-left pre-PR validation gate preventing unnormalized absolute paths from being committed.

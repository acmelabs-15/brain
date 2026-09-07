---
package: rjm
name: Path Traversal
slug: path-traversal
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/security-scan/references/vulnerability-patterns.md, sha256: a6e99c3fd3cf0d269f997e2382e5e70089d8c48853182f7d72dc65d330ea159d}
  - {path: .claude/skills/skillforge/scripts/package_skill.py, sha256: 15c5c247f958c4d329d4b440559b118ee80423c7a239dff7654ca753b0a324d7}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Path Traversal

## Definition — verbatim
> "Path traversal vulnerabilities occur when user input is used to construct file paths without proper validation." — .claude/skills/security-scan/references/vulnerability-patterns.md:9

## Also called — verbatim
`CWE-22: Improper Limitation of a Pathname to a Restricted Directory (Path Traversal)` — .claude/skills/security-scan/references/vulnerability-patterns.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/vulnerability-patterns.md | 5 | used here | Documented with vulnerability patterns, detection rules, and Python remediation examples |
| .claude/skills/security-scan/SKILL.md | 19 | used here | Scoped as delegated to CodeQL analysis in CI workflows rather than regex skill detection |
| .claude/agents/implementer.md | 121 | used here | Specified in implementer agent security checklist as vulnerability pattern to guard against |
| templates/agents/implementer.shared.md | 129 | used here | Specified in shared implementer template checklist requiring path validation |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 245 | used here | Validates file paths in CVA matrix scanner to guard against path traversal |
| .claude/skills/skillforge/scripts/package_skill.py | 88 | used here | Sanitizes tar/zip archive entries during skill packaging to prevent directory traversal |
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 278 | used here | Referenced under security considerations as governing CWE-22 standard |

## Consumes
External path inputs, archive entries, or dynamic filesystem parameters.

## Produces
Security scanning classifications and defensive path validation implementations.

## When applied
Evaluated during static analysis (CodeQL), security reviews, file archive packaging, and input handling.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Path Traversal (CWE-22) is an architectural security vulnerability category where untrusted path inputs allow escaping intended directories, mitigated through CodeQL static analysis in CI and runtime path normalization with containment checks.

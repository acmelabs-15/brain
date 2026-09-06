---
package: matt
name: Codex
slug: codex
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/question-limits.md, sha256: a4c7ab33523e8f88b75be6549f657cf086b86d77be48b87d48276311e368cc9d}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
  - {path: scripts/link-skills.sh, sha256: f1ffdc620769e7703d4d6365b05b981e01175bfabd92e0f8e17b05301805cabe}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Codex

## Definition — verbatim
(used, not defined)
> "#   - ~/.agents/skills: Codex and other Agent Skills-compatible harnesses" — scripts/link-skills.sh:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/question-limits.md | 18 | used here | Cited in an issue report where an agent asked excessive questions during grilling. |
| CLAUDE.md | 11 | used here | References architectural decision on why a native Codex plugin is deferred. |
| scripts/link-skills.sh | 11 | used here | Specifies `~/.agents/skills` as the local skill directory for Codex harnesses. |
| skills/productivity/README.md | 7 | used here | Details Codex configuration using `policy.allow_implicit_invocation: false`. |

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
Codex is an external AI coding agent harness developed by OpenAI that is supported as a target platform across the skills repository, rather than a development lifecycle concept.

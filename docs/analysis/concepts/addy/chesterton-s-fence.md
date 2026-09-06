---
package: addy
name: Chesterton's Fence
slug: chesterton-s-fence
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/code-simplification.md, sha256: 91567ad5289ace67907b96afacbbf6f462f776f6f74cd5b9ffc87e02148bbabf}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: skills/code-simplification/SKILL.md, sha256: f0c5ed754057eb0c1e027e2587f59de816651feb5e837242296c43ea21cf621d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Chesterton's Fence

## Definition — verbatim
> "This is Chesterton's Fence: if you see a fence across a road and don't understand why it's there, don't tear it down. First understand the reason, then decide if the reason still applies." — skills/code-simplification/SKILL.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 91 | applies | Operative principle for brownfield code simplification requiring agents to understand why code exists before removing it |
| external/code-review-and-quality.md | 12 | references | Catalog sidebar references code-simplification skill which enforces Chesterton's Fence |
| external/code-simplification.md | 5 | references | Web page summary lists Chesterton's Fence as a core principle for reducing complexity while preserving behavior |
| external/performance-optimization.md | 12 | references | Catalog navigation links to code-simplification embodying Chesterton's Fence |
| external/security-and-hardening.md | 12 | references | Catalog navigation links to code-simplification embodying Chesterton's Fence |
| README.md | 269 | references | Catalog table lists Chesterton's Fence under the code-simplification skill |
| skills/code-simplification/SKILL.md | 107 | defines | Section heading and core rule governing Step 1: Understand Before Touching in the simplification process |

## Consumes
Existing code, tests, or configurations whose original intent or rationale must be understood before modification.

## Produces
Rationale assessment determining whether the original reasons for code or configuration still apply.

## When applied
When simplifying, refactoring, or removing existing code, particularly in legacy or brownfield systems.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean in skills/code-simplification/SKILL.md and docs/adoption-guide.md; defects: doc-drift, internal-contradiction, orphan in external documentation; defects: doc-drift in README.md

## Design notes
Chesterton's Fence prevents coding agents from naively deleting or refactoring code whose necessity isn't immediately obvious, protecting against regressions in brownfield codebases.

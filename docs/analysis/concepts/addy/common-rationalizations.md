---
package: addy
name: Common Rationalizations
slug: common-rationalizations
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
  - {path: docs/getting-started.md, sha256: 2c218fb92f46645d93191b9f3ff4f2df8faa25ba3d7517c336c6fa87fed8ab0b}
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
  - {path: skills/api-and-interface-design/SKILL.md, sha256: 5dafd0c44a3aabf11cae5bcb34f6fcc24dfa5c01ba6e0d3176bce997f4d68bc8}
  - {path: skills/browser-testing-with-devtools/SKILL.md, sha256: 4e3aacd6a380cd25bc6c2d67fdd1c926a9b22535b8a62109ecd33cefd909e3d9}
  - {path: skills/code-simplification/SKILL.md, sha256: f0c5ed754057eb0c1e027e2587f59de816651feb5e837242296c43ea21cf621d}
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
  - {path: skills/shipping-and-launch/SKILL.md, sha256: daa57a85dcd96dee03343272a432fce2ebf144c9d8ece9541eb6e1464dae27ac}
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Common Rationalizations

## Definition — verbatim
> "- **Common Rationalizations** — Excuses agents use to skip steps, with rebuttals" — CONTRIBUTING.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 49 | defines | Recommends Common Rationalizations tables in skill anatomy (excuses agents use to skip steps, with rebuttals). |
| docs/comparison.md | 54 | references | Highlights Common Rationalizations tables as a distinctive mechanism of agent-skills across every skill. |
| docs/getting-started.md | 25 | references | Identifies Common Rationalizations as a key section in every SKILL.md explaining excuses agents use. |
| docs/skill-anatomy.md | 60 | defines | Defines the required tabular format (`\| Rationalization \| Reality \|`) in skill anatomy. |
| skills/api-and-interface-design/SKILL.md | 323 | defines | Tables rationalizations for cutting corners on interface contracts and validation. |
| skills/browser-testing-with-devtools/SKILL.md | 279 | defines | Rebuts excuses for skipping real browser verification in favor of unit test mocks. |
| skills/code-simplification/SKILL.md | 297 | defines | Rebuts rationalizations for skipping tests, bundling refactors with features, or leaving dead code. |
| skills/git-workflow-and-versioning/SKILL.md | 313 | defines | Addresses rationalizations for large megacommits, skipped atomic commits, or vague commit messages. |
| skills/planning-and-task-breakdown/SKILL.md | 221 | defines | Counters excuses for skipping task breakdown, writing coarse tasks, or starting coding without a plan. |
| skills/security-and-hardening/SKILL.md | 453 | defines | Refutes excuses for bypassing security reviews, hardcoding secrets, or postponing input validation. |
| skills/shipping-and-launch/SKILL.md | 273 | defines | Rebuts excuses for bypassing release checklists, skipping rollback plans, or rushing deployments. |
| skills/source-driven-development/SKILL.md | 181 | defines | Counters excuses for hallucinating APIs rather than verifying with official documentation. |
| skills/spec-driven-development/SKILL.md | 213 | defines | Refutes rationalizations for skipping written specifications on "simple" features or prototypes. |
| skills/test-driven-development/SKILL.md | 363 | defines | Rebuts rationalizations for testing after implementation, testing trivial code, or repeating clean test commands. |

## Consumes
Common evasions, cognitive shortcuts, and corner-cutting rationalizations typical of LLMs during engineering tasks.

## Produces
Two-column reference tables (`Rationalization` vs `Reality`) pairing expected excuses with strict rebuttals.

## When applied
Consulted during self-critique, prompt evaluation, and step transitions within every skill workflow.

## Sub-concepts
none

## Part of
skill-anatomy, agent-skills

## Implementation status
clean

## Design notes
Common Rationalizations tables serve as a defensive prompting mechanism designed to counteract LLM sycophancy, laziness, and corner-cutting. By predicting the exact excuses an agent will generate to avoid difficult or tedious steps (e.g., "This change is too small to test") and providing preemptive rebuttals, this section keeps agents aligned with engineering standards.

---
package: addy
name: Core Web Vitals
slug: core-web-vitals
kind: reference
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
  - {path: docs/antigravity-setup.md, sha256: 2fc07de1373ccf06eaa1ea84943cd1b4492f0e1d21dc311eda9538ab0702002d}
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
  - {path: docs/getting-started.md, sha256: 2c218fb92f46645d93191b9f3ff4f2df8faa25ba3d7517c336c6fa87fed8ab0b}
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Core Web Vitals

## Definition — verbatim
(used, not defined)
> "## Core Web Vitals Targets" — skills/performance-optimization/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 33 | references | Cross-checked during Phase B performance synthesis before release. |
| agents/web-performance-auditor.md | 57 | references | Listed as primary review category for web application audits. |
| commands/ship.toml | 33 | references | Cross-checked under performance review axis during merge phase. |
| docs/agents.md | 10 | references | Listed as primary focus of the web-performance-auditor persona. |
| docs/antigravity-setup.md | 59 | references | Cited in Antigravity setup guide as web-performance-auditor capability. |
| docs/gemini-cli-setup.md | 121 | references | Cited in Gemini CLI configuration guide for performance audits. |
| docs/getting-started.md | 101 | references | Documented as core metric focus of the web-performance-auditor agent. |
| evals/cases/performance-optimization.json | 22 | applies | Included in evaluation test cases validating performance review prompts. |
| external/code-review-and-quality.md | 12 | references | Mentioned in external documentation sidebar for performance review. |
| external/performance-optimization.md | 5 | references | Highlighted on external documentation page as core optimization target. |
| external/security-and-hardening.md | 12 | references | Mentioned in external documentation sidebar as related capability. |
| README.md | 271 | references | Summarized under performance optimization skill description. |
| skills/performance-optimization/SKILL.md | 22 | defines | Defines explicit numeric target thresholds for LCP, INP, and CLS. |

## Consumes
Real user monitoring data, synthetic lab benchmarks (Lighthouse, CrUX, DevTools traces)

## Produces
Performance evaluations and metric compliance statuses against Good, Needs Improvement, and Poor thresholds

## When applied
Applied when monitoring detects slow behavior, metric scores fall below thresholds, or before shipping web user interfaces.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean across in-scope skills (skills/performance-optimization/SKILL.md, agents/web-performance-auditor.md, commands/ship.toml); external documentation pages exhibit doc-drift and orphan status (external/performance-optimization.md, external/code-review-and-quality.md, external/security-and-hardening.md)

## Design notes
Core Web Vitals serve as Google's standard user-experience metrics (LCP, INP, CLS), establishing objective thresholds for frontend performance. Within addy, they ground performance audits and release gates in empirical numbers rather than subjective impressions of speed.

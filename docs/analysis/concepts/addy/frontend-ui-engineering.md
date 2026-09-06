---
package: addy
name: frontend-ui-engineering
slug: frontend-ui-engineering
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/frontend-ui-engineering.json, sha256: ae0d255641d13fe5c8d06b35a12bb388b76a24a4f2dc9d6d801d359753b28f40}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: references/accessibility-checklist.md, sha256: 61c759d94d52296231f5f310b92b401f56c44e4430dc3cc95ebac5d7b1d5ffac}
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# frontend-ui-engineering

## Definition — verbatim
> "Build production-quality user interfaces that are accessible, performant, and visually polished." — skills/frontend-ui-engineering/SKILL.md:10

## Also called — verbatim
- "Frontend UI Engineering" — skills/frontend-ui-engineering/SKILL.md:6

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/frontend-ui-engineering.json | 2 | used here | Names the skill evaluated in the test case configuration. |
| external/frontend-ui-engineering.md | 1 | defined here | Web catalog page title defining the skill in the external documentation site. |
| README.md | 40 | used here | Lists frontend-ui-engineering as the skill automatically triggered when building UI. |
| references/accessibility-checklist.md | 3 | used here | Documents the accessibility checklist as a companion reference for the skill. |
| skills/frontend-ui-engineering/SKILL.md | 2 | defined here | Declares the skill name in the YAML frontmatter. |
| skills/frontend-ui-engineering/SKILL.md | 6 | defined here | Heading title introducing the skill. |

## Consumes
User interface requirements, design specifications, component state needs, or visual/UX bug reports.

## Produces
Accessible, responsive UI components with clean colocation, semantic HTML, design system token adherence, and keyboard/focus management.

## When applied
> "Use when building or modifying interfaces and pages, creating components, implementing layouts, meeting WCAG accessibility requirements, managing state, or when the output needs to look and feel production-quality rather than AI-generated." — skills/frontend-ui-engineering/SKILL.md:3

## Sub-concepts
- component-architecture
- focus-management
- keyboard-navigation
- aria-labels
- responsive-design
- mobile-first
- skeleton-loading
- optimistic-updates

## Part of
- addy:Build

## Implementation status
clean

## Design notes
Provides a comprehensive discipline for building production-grade user interfaces that avoid generic AI aesthetics. Enforces strict design system adherence, WCAG 2.1 AA accessibility compliance, thoughtful focus management, and mobile-first responsive architecture so that generated code matches the quality of experienced frontend engineers.

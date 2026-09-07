---
package: rjm
name: three-horizons-framework
slug: three-horizons-framework
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# three-horizons-framework

## Definition — verbatim
> "- `three-horizons-framework`: Balance short, medium, and long-term priorities" — .claude/agents/high-level-advisor.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 59 | used here | Strategic model balancing immediate short-term deliverables (H1), medium-term enhancements (H2), and long-term bets (H3). |
| templates/agents/high-level-advisor.shared.md | 62 | used here | Shared strategic model balancing short, medium, and long-term engineering priorities. |

## Consumes
Roadmap initiatives, technical debt backlogs, exploratory capabilities.

## Produces
Strategic distribution of effort across current core operations (H1), emerging capabilities (H2), and future exploratory bets (H3).

## When applied
Applied during high-level advisory reviews to prevent over-indexing on immediate fires at the expense of long-term survival.

## Sub-concepts
none

## Part of
high-level-advisor

## Implementation status
defects: missing-path

## Design notes
The Three Horizons Framework balances immediate operational demands against sustainable architectural evolution. In rjm, the high-level advisor leverages it to ensure engineering bandwidth is deliberately partitioned across immediate delivery, near-term enhancements, and transformative future architecture.

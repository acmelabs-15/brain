---
package: rjm
name: asymmetric
slug: asymmetric
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# asymmetric

## Definition — verbatim
> "Current generation model (corrected; the seam is asymmetric)" — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 51 | defined here | Characterizes the two distinct code generation seams in rjm rather than a single uniform template approach |

## Consumes
Repository architectural artifact definitions and generation pipelines.

## Produces
A dual-seam generation model balancing agent templating with direct Claude-canonical projection.

## When applied
Considered when designing and auditing build pipelines and artifact distribution generators.

## Sub-concepts
none

## Part of
jtbd-based-plugin-architecture

## Implementation status
defects: missing-path

## Design notes
Asymmetric describes rjm's generation architecture where agents are generated from shared dual-frontmatter templates (`templates/agents/*.shared.md`), whereas commands, rules, and hooks use `.claude/` as the canonical source from which other harness projections are generated. Recognizing this asymmetry prevented costly and unnecessary refactoring into a forced single template seam.

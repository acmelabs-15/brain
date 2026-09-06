---
package: addy
name: test-engineer
slug: test-engineer
kind: role
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: agents/test-engineer.md, sha256: c4acde91d6307d88515387344a129a2d0679134e587596c3517d73faffcd5aa6}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# test-engineer

## Definition — verbatim
> "QA engineer specialized in test strategy, test writing, and coverage analysis." — agents/test-engineer.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 16 | references | Specialist persona tool dispatched concurrently during pre-launch review |
| agents/test-engineer.md | 6 | defines | Title and role definition for QA Engineer persona |
| commands/ship.toml | 16 | references | Specialist persona tool dispatched concurrently during pre-launch review |
| docs/agents.md | 9 | defines | Agent roster entry detailing QA Engineer role, test strategy, Prove-It pattern |
| README.md | 293 | applies | Catalog table listing test-engineer persona and responsibilities |

## Consumes
Code changes, existing test suites, edge case scenarios, and specification contracts.

## Produces
Test strategy documents, comprehensive test coverage analysis, gap reports, and new assertion suites.

## When applied
Invoked when designing test suites, evaluating test quality, or dispatched via `/ship` pre-launch orchestration.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
clean

## Design notes
`test-engineer` is an autonomous specialist subagent acting as an experienced QA Engineer. It analyzes code changes to uncover test coverage gaps across happy paths, boundary edge cases, error conditions, and concurrency scenarios. By applying the "Prove-It" pattern, it ensures that every behavioral claim made by implementation code is backed by an automated assertion test.

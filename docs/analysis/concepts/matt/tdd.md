---
package: matt
name: tdd
slug: tdd
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .claude-plugin/marketplace.json, sha256: 83e889fed719fc92dc17a4accc69beed7d6c28bc87ec064b515a90a030f72e13}
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: skills/engineering/implement/SKILL.md, sha256: 6d3fd9e83b8f36e5213854779db49b256a457a7ebb4a503e53fa7dcff696adc3}
  - {path: skills/engineering/tdd/agents/openai.yaml, sha256: ea6f01cf1b8c06a4b0f5b649d74b1b8ce8685e72af1b38d70d877693e092af0b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tdd

## Definition — verbatim
> "`tdd` builds a feature or fixes a bug test-first: one failing test, then just enough code to pass it, then the next behaviour." — docs/engineering/tdd.md:3
> "  display_name: \"TDD\"" — skills/engineering/tdd/agents/openai.yaml:2

## Also called — verbatim
> "  short_description: \"Test-driven red-green-refactor\"" — skills/engineering/tdd/agents/openai.yaml:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 8 | used here | Identified as a soft-dependency skill referencing domain docs in vague prose |
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Updated in changeset standardizing invocation terminology |
| .claude-plugin/marketplace.json | 12 | used here | Included in promoted skills catalog manifest |
| .claude-plugin/marketplace.json | 17 | used here | Listed in plugin skill directory paths |
| .claude-plugin/plugin.json | 4 | used here | Configured in plugin skills array |
| .claude-plugin/plugin.json | 15 | used here | Referenced in plugin distribution manifest |
| docs/engineering/implement.md | 3 | used here | Referenced as the discipline guiding test-first implementation |
| docs/engineering/tdd.md | 3 | defined here | Core documentation page defining what TDD does and when to reach for it |
| external/ask-matt.md | 49 | used here | Router guidance directing users to test-driven development |
| external/code-review.md | 29 | used here | Cited in review verification guidelines |
| external/diagnosing-bugs.md | 30 | used here | Referenced when locking down bug repros with tests |
| external/implement.md | 25 | used here | Cited as the underlying loop that implement drives |
| external/improve-codebase-architecture.md | 77 | used here | Mentioned regarding maintaining test coverage during refactoring |
| external/setup-matt-pocock-skills.md | 70 | used here | Cited as soft-dependency skill functioning without explicit setup |
| external/tdd.md | 25 | defined here | External documentation page defining test-driven development workflow |
| external/to-spec.md | 38 | used here | Cited in testing strategy transitions |
| skills/engineering/implement/SKILL.md | 9 | used here | Cited in implementation skill instructions as the core execution pattern |
| skills/engineering/tdd/agents/openai.yaml | 2 | defined here | Metadata declaring display name and description |

## Consumes
Concrete behavior specifications with defined inputs and observable outputs, plus testing boundaries/seams confirmed with the user.

## Produces
Failing tests, passing minimal implementations, refactored production code, and surviving test suites.

## When applied
When implementing new features or fixing bugs test-first, or upon trigger phrases like "red-green-refactor".

## Sub-concepts
none

## Part of
soft-dependency

## Implementation status
clean

## Design notes
Test-driven development skill functioning primarily as a reference standard rather than an active driver. It establishes the rules of the red-green-refactor loop, enforces user confirmation of test seams before test authoring, and provides guards against test suite degradation (avoiding tautological tests, testing implementation details, or excessive mocking).

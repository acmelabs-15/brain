---
package: rjm
name: Vendor Lock-In
slug: vendor-lock-in
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
  - {path: .claude/skills/adr-review/references/artifacts.md, sha256: 82daf59b64761376f05dd9a47a02294f060cf150675f6c926722ee1d7c300c65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Vendor Lock-In

## Definition — verbatim
(used, not defined)

> "- [ ] Vendor lock-in assessed (if external dependencies)" — .claude/skills/adr-review/references/agent-prompts.md:53

## Also called — verbatim
Vendor lock-in assessment — .claude/skills/adr-review/references/artifacts.md:95

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 214 | used here | Analyzed in ADR section evaluating external dependency posture and fallback mechanisms for memory tooling. |
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 182 | used here | Evaluated alongside reversibility across plugin architecture implementation milestones. |
| .agents/critique/ADR-045-debate-log.md | 83 | used here | Raised by the architect reviewer as an objection regarding sole reliance on Claude Code marketplace distribution. |
| .claude/skills/adr-review/references/agent-prompts.md | 53 | used here | Listed in adr-review verification checklist as a mandatory assessment item when external dependencies are introduced. |
| .claude/skills/adr-review/references/artifacts.md | 95 | used here | Documented as a required architectural quality dimension in the decision review rubric. |

## Consumes
Proposed third-party platforms, external services, closed ecosystems, and proprietary formats.

## Produces
Risk assessments, mitigation plans, exit strategies, and open-standard fallback mechanisms.

## When applied
Mandatory assessment conducted during ADR reviews and architectural evaluations whenever external dependencies are introduced.

## Sub-concepts
exit-strategy

## Part of
adr-review, architectural-governance

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
Vendor Lock-In is an architectural review dimension in rjm ensuring the repository does not become irreversibly dependent on any single proprietary tool, platform, or harness. Evaluated across ADR reviews and debate logs, it requires defining clear exit strategies, export mechanisms, and fallback layers (such as dual-harness generation and open file formats) so that the codebase retains complete strategic portability.

---
package: rjm
name: DISAGREE AND COMMIT
slug: disagree-and-commit
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DISAGREE AND COMMIT

## Definition — verbatim
> "**Disagree-and-Commit**: Reservations remain but I agree to proceed." — .claude/skills/adr-review/references/agent-prompts.md:491

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 453 | defined here | Recorded as the final consensus vote outcome where one dissenting agent agreed to commit. |
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 18 | used here | Cited as the 6-agent debate consensus verdict that approved ADR-073. |
| .agents/archive/planning/PRD-skills-index-registry.md | 417 | used here | Recorded as the final decision verdict for PRD-skills-index-registry. |
| .agents/critique/ADR-045-debate-log.md | 157 | used here | Cited in consolidated round 2 verdict (3 Accept + 3 Disagree-and-Commit). |
| .claude/skills/adr-review/references/agent-prompts.md | 491 | used here | Defined in agent voting guidelines as an approval position with documented dissent. |
| .claude/skills/adr-review/references/debate-protocol.md | 193 | used here | Formal voting position definition in the ADR review debate protocol. |
| .claude/skills/adr-review/SKILL.md | 100 | used here | Stated in consensus criteria allowing consensus when all 6 agents vote Accept or Disagree-and-Commit. |

## Consumes
Unresolved non-blocking concerns, minority agent dissent, and debate deliberations.

## Produces
A binding consensus verdict with documented dissenting rationale in the debate log.

## When applied
Applied during the convergence voting phase of multi-agent debate when an agent retains reservations but agrees not to block progress.

## Sub-concepts
none

## Part of
consensus-protocol

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path

## Design notes
A consensus technique in the multi-agent review protocol that enables decision-making to converge without requiring unanimous agreement. Agents with reservations record their specific dissent in the debate log but cast a non-blocking vote, allowing proposals without critical flaws to be accepted.

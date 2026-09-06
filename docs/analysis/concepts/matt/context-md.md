---
package: matt
name: CONTEXT.md
slug: context-md
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .changeset/domain-modeling-trigger-context-adr.md, sha256: ec97502246b5d9cfc3aeea3ed584ca8ac0b43c82ec8389ff2ed96c231b76062d}
  - {path: .changeset/wait-what-context-map.md, sha256: 6a01f1b4b3686179ceca13206e1bf3cb3cc8e1413ba71a47b15ab780ffd04e2a}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/wait-what/SKILL.md, sha256: e3f44e3ccbc0e7b62f20ba70b295fc9c9f4aa3f96c77168faee1c71bacbf4215}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CONTEXT.md

## Definition — verbatim
(used, not defined)

> "It adds the context you were missing, writes in plain English, and uses the vocabulary from your project's `CONTEXT.md`." — docs/productivity/wait-what.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 26 | used here | Distinguishes passive reading of CONTEXT.md from the active modification handled by domain-modeling. |
| .changeset/domain-modeling-trigger-context-adr.md | 5 | used here | Serves as the primary output artifact where resolved domain terms and ubiquitous language are recorded. |
| .changeset/wait-what-context-map.md | 5 | used here | Provides the authoritative project vocabulary that wait-what draws upon to re-pitch explanations. |
| docs/engineering/to-spec.md | 5 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in to-spec. |
| docs/engineering/triage.md | 99 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in triage. |
| docs/productivity/grill-me.md | 16 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in grill-me. |
| docs/productivity/grilling.md | 16 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in grilling. |
| docs/productivity/wait-what.md | 3 | used here | Provides the authoritative project vocabulary that wait-what draws upon to re-pitch explanations. |
| docs/productivity/writing-for-agents.md | 70 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in writing-for-agents. |
| external/domain-modeling.md | 26 | used here | Serves as the primary output artifact where resolved domain terms and ubiquitous language are recorded. |
| external/domain-modeling.md | 34 | used here | Serves as the primary output artifact where resolved domain terms and ubiquitous language are recorded. |
| external/domain-modeling.md | 42 | used here | Serves as the primary output artifact where resolved domain terms and ubiquitous language are recorded. |
| external/grill-with-docs.md | 26 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in grill-with-docs. |
| external/grilling.md | 30 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in grilling. |
| external/research.md | 30 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in research. |
| external/setup-matt-pocock-skills.md | 27 | used here | Identifies CONTEXT.md as the repository's root domain documentation to be read prior to exploration. |
| external/to-spec.md | 26 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in to-spec. |
| external/triage.md | 73 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in triage. |
| external/wait-what.md | 25 | used here | Provides the authoritative project vocabulary that wait-what draws upon to re-pitch explanations. |
| external/writing-for-agents.md | 73 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in writing-for-agents. |
| skills/engineering/diagnosing-bugs/SKILL.md | 10 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in SKILL. |
| skills/engineering/domain-modeling/SKILL.md | 3 | used here | Serves as the primary output artifact where resolved domain terms and ubiquitous language are recorded. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 14 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in SKILL. |
| skills/engineering/setup-matt-pocock-skills/domain.md | 7 | used here | Identifies CONTEXT.md as the repository's root domain documentation to be read prior to exploration. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 25 | used here | Identifies CONTEXT.md as the repository's root domain documentation to be read prior to exploration. |
| skills/engineering/tdd/SKILL.md | 10 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in SKILL. |
| skills/productivity/README.md | 13 | used here | Reads or references CONTEXT.md to maintain vocabulary consistency and domain alignment in README. |
| skills/productivity/wait-what/SKILL.md | 7 | used here | Provides the authoritative project vocabulary that wait-what draws upon to re-pitch explanations. |

## Consumes
Domain modeling sessions, resolved glossary terms, and architectural definitions.

## Produces
The repository's ubiquitous language and canonical glossary file at the project root.

## When applied
Read continuously by skills to align on terminology; created or updated lazily by domain-modeling.

## Sub-concepts
ubiquitous language, glossary

## Part of
domain-modeling, setup-matt-pocock-skills

## Implementation status
clean

## Design notes
The foundational knowledge artifact anchoring a codebase's ubiquitous language. Located at the root of a single-context repository (or pointed to by CONTEXT-MAP.md), it stores canonical terminology and concepts to prevent drift across human developers and AI agents.

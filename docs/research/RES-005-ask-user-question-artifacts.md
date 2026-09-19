# RES-005: What the ask-user-question artifacts hold for the rewrite

Date: 2026-09-19. Status: read-only analysis. All 24 artifacts, the shipped skill, its three references and RES-004 were read in full.

## How to read

`A/` = `/Users/peterkloss/Dev/ACMElabs/ask-user-question/skills/_artifacts/`. `Q` = `skills/ask-user-question/SKILL.md` in brain-wrap; `QC`, `QX`, `QG` = its `references/claude-code.md`, `codex.md`, `gemini-cli.md`. `R4` = `docs/research/RES-004-ask-user-question-fit.md`. `I` = `docs/intent/brain-wrap.md`. Line counts are from `wc -l`. brain-wrap has no `CONTEXT.md` glossary yet (only `skills/domain-modeling/CONTEXT-FORMAT.md`), so "glossary words" below means the words the domain map fixes.

## 1. Inventory

| File | Holds | Lines | Best content Q lacks or states worse | Role |
|---|---|---|---|---|
| `A/alignment-proposed-wording.md` | The accepted confirmation rule, its rejected alternative, costs and test list. | 53 | Before implementation, restate outcome, scope, decisions and open conditions, then read the reply against that work (`:19`). Q:145-148 keeps "clear approval is sufficient" but drops the restatement step. Test list `:51`. | source |
| `A/brain-alignment-wording.md` | Replacement wording for readiness, recording and recommendation in the Brain skills. | 63 | Recommendation rule `:45`: when an unknown user priority decides it, investigate, then ask about that priority. Q:107 instead sends the question saying no option is favoured. Recording rule `:29-33` names the destinations; Q:171-177 does not name domain-modeling. | source |
| `A/brain-skill-alignment.md` | The alignment review: settled rules and the five-step preparation process. | 49 | Five steps to prepare a discrepancy `:39-43`. Q:368-378 compresses them to two lines. Naming rule `:7`: say "Brain skills", never "callers". | source |
| `A/context-domain-modeling.md` | Report on the domain-modeling archive. | 46 | Current behaviour and intended behaviour are separate before a claim is called false (`:22`). ADR needs all three conditions (`:28`); Q:176-177 gives only the glossary half. | background |
| `A/context-idea-refine.md` | Report on the idea-refine archive. | 41 | Caller ownership list `:13`; batched examples conflict `:29`. Q has no handoff section for idea-refine. | background |
| `A/context-interview-me.md` | Report on the interview-me archive. | 65 | Where the caller puts context and reasoning: decision context in question text, reasoning in the option description (`:11`). Five evaluation cases `:42`. `:38` cites the old 0.1.6 exclusion, now fixed. | background |
| `A/context-wait-what.md` | Scope and limits of wait-what. | 37 | Repair must fire on ordinary confusion, not only on the command (`:34`); the user owns the explicit trigger (`:31`). Q:3 claims the trigger for itself (R4:67). | source |
| `A/coverage.md` | Reading coverage record. | 67 | None for the body. `:61` confirms every failure mode carries a wrong/correct pair. | background |
| `A/discovery-notes.md` | Working memory: Peter's answers, decisions, hashes. | 394 | Peter's three reply cases `:105-109`; language `:115-118`; visual organisation `:122-126`; "never make any assumptions", evidence from him, code or research `:175`; the waiting requirement and its two incidents `:291-293`; the preparation direction `:333-337`; the hierarchy `:238`. Q:94-102 states the language rules with no source (R4:69); these lines are the source. | source |
| `A/domain_map.yaml` | Structured map: covers, tasks, 15 failure modes with mechanism, source, priority, wrong/correct exchange, tensions, gaps. | 531 | Every mechanism line, for example `:98-100` and `:124-125`. Q:199-378 shows wrong and correct lines but never the mechanism. The `Context:` lines in the patterns (`:134-136`) are cut from Q:226-231. | source |
| `A/generation-verification.md` | What the generator did and measured. | 91 | Evidence grade of the shipped skill: one sample per arm, 10/10 against 9/10 (`:49-57`); two selection probes (`:70-72`). | background |
| `A/host-claude-code.md` | Claude Code contract with captures. | 96 | Typed replies are relayed neutrally (`:18`); auto-continue submits already-selected options and tells the agent it may continue (`:20`); 20-second countdown, keyboard restarts (`:20`); setting from v2.1.200 (`:56`); 2.1.198 and 2.1.199 had a 60-second default (`:62`); `CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS` does not govern the tool (`:62`); `--permission-prompts none` needs v2.1.259 (`:78`). QC keeps none of these. | source |
| `A/host-codex.md` | Codex contracts, pinned to commit. | 74 | This session's sync tool is Plan-only (`:9`); cancellation is reported distinctly (`:25`); source line numbers for the timer (`:52`); do not match Peter's 30 seconds to the two-minute policy (`:54`). QX has no cancellation shape and no incident caveat. | source |
| `A/host-contracts.md` | One-page comparison of the four tools and the waiting rule. | 38 | The table `:7-12`. Q has no cross-host table; R4:75 lists the differences in prose. Waiting rule stated once `:18-23`. | source |
| `A/host-gemini.md` | Gemini CLI contract with captures. | 79 | Antigravity CLI does not share this contract (`:7`), while `I:5` names Antigravity CLI as a host; header 16 characters documented, no `maxLength` (`:23`, QG:19 drops the number); placeholder meaning per type (`:27`); `tools.core` allowlist (`:59`); dismissal text and `empty_submission` (`:51-53`); Escape and Ctrl-C (`:69`). | source |
| `A/research-conversation.md` | Clark and Brennan, Dingemanse, Shaikh. | 90 | Absence of objection is weaker than positive evidence (`:67`); acceptance is not permission (`:66`, `:69`); question count is not a success measure (`:24`); eight operational conditions `:75-82`. Q:128-132 cites nothing for reply meaning. | source |
| `A/research-decision-preparation.md` | Two clarification papers and a candidate procedure. | 37 | The pre-send check `:33`: how each answer changes the next action and why more inspection would not settle it. Q:125-126 keeps the first half only. Rejects confidence-based stopping `:15`. | source |
| `A/research-evidence-conflicts.md` | Amershi; Lemmer and Corso. | 46 | Four evidence states: user statement, inspected evidence, agent interpretation, unresolved claim (`:36`); confusion and factual disagreement need different responses (`:38`); understanding, belief and permission are separate (`:40`). Q:53-55 and Q:161-164 compress these. | source |
| `A/research-initiative.md` | Horvitz; TRAINS-95. | 52 | Six-step application `:41-46`; timing-out assistance rejected (`:35`). Q:378 cites one paper for the whole rule. | source |
| `A/research-language-layout.md` | W3C COGA, GOV.UK, Google. | 83 | Seven pre-send checks `:71-77`; a recommendation label is not a selected answer, preselection biases (`:52-54`); 50-word heuristic is not a rule (`:21`). Q:124-126 has two checks. | source |
| `A/research-mixed-replies.md` | Roberts, questions under discussion. | 34 | Four-step handling `:23-26`; keeping the current question must not override an explicit change of task (`:28`); records can be corrected (`:32`). Q:141 has one row. | source |
| `A/research-proposal.md` | The operational proposal: flow, six cases, record, boundary, eval cases. | 113 | Boundary sentence `:88`; deferred-topic record fields `:34`; "these requirements do not reduce to a command to ask more questions" `:36`; open question rule `:20`; eighteen eval cases `:94-109`. Q:16-22 and Q:134-142 are the compressed form. | source |
| `A/skill_spec.md` | The spec: hierarchy, exchange, failure table, tensions, gaps, structure. | 133 | "Understanding, factual support, and permission are distinct" `:31`; a one-line product change is still the user's `:35`; the failure table with priority `:45-61`; the structure plan `:104-108`. | source |
| `A/skill_tree.yaml` | File plan and the shipped description text. | 59 | None. Its description `:19-28` is the 688-character one R4:65 measures. | stale |

## 2. What the artifacts do better

### Rules with evidence the skill dropped

- Language and layout. Q:94-102 cite nothing (R4:69). The evidence is Peter's requirement at `A/discovery-notes.md:115-126` and the official guidance at `A/research-language-layout.md:19`, `:63`. The seven checks at `:71-77` are the testable form; Q:124-126 keeps two.
- Reply meaning. Q:128-132 say "interpret meaning against the question" with no source. `A/research-conversation.md:64-67` gives it: acceptance is evidence of understanding, not consent; silence is weaker than a spoken yes.
- Evidence states. `A/research-evidence-conflicts.md:36` names four states. Q:161-164 say only "trace its required inputs". The four states make the check operable.
- Preparation. `A/brain-skill-alignment.md:39-43` and `A/research-initiative.md:41-46` give a numbered procedure. Q:368-378 gives two lines. `A/research-decision-preparation.md:33` gives the pre-send test; Q:125-126 drop its second clause.
- Confirmation. `A/alignment-proposed-wording.md:19` adds the restatement before implementation. Q:145-148 lacks it, so "sounds good" has nothing concrete to attach to.
- Mechanisms. Each failure mode in `A/domain_map.yaml` carries a mechanism (`:73-74`, `:98-100`, `:311-312`). Q:195-378 spends 184 of 388 lines on wrong/correct pairs and never states why the mistake happens.
- Waiting. Q:37-41 is right but cites "maintainer requirement" (Q:294, Q:366). The requirement text and its two incidents are at `A/discovery-notes.md:291-293`; the host facts are at `A/host-contracts.md:18-27`.
- Repair trigger. `A/context-wait-what.md:34` requires repair on ordinary confusion; Q:168 only says a wait-what request is not an answer.

### Domain map terms the skill does not use consistently

| Map term | Where the map fixes it | Q's words |
|---|---|---|
| user | `A/domain_map.yaml:24`, `:72` | "the person" Q:37; "the reader" Q:87, 104, 124, 244; "the user" 23 lines |
| larger workflow | `:23`, `:37`; `A/skill_spec.md:7` | "surrounding task" Q:4; "another workflow" Q:3, 341; "larger workflow" Q:171, 179, 339 |
| user-owned choice | `:41`, `:74`, `:467` | never; "belongs to the user" Q:66, "user trade-off" Q:375 |
| deferred topic | `:35`; `A/research-proposal.md:34` | "later topic" Q:132; "outside the current question" Q:141; "Later:" Q:155; "deferred" Q:174 |
| reply | `:19-20` | "reply" 12 lines; "answer" 24 lines; "response" Q:37, 186, 365 |
| settled | `:123`, `:144` | "settled" Q:153, 226; "resolved" Q:141, 172, 181 |
| question surface | Q:85 only | "layout" Q:109-110, 347; "visible field" Q:351; "surface" Q:85 |

### Skill spec structure against the shipped structure

`A/skill_spec.md:108` plans a body with preparation, language, layout, reply, evidence and repair rules. Q ships four Core Patterns (Q:45, 83, 128, 159): language and layout are folded into "Make one question answerable", repair is four lines inside "Advance from evidence" (Q:166-169). `A/skill_spec.md:107` asks the skill to describe the handoff to the Brain skills; Q names none of interview-me, idea-refine or domain-modeling. `A/skill_spec.md:25-29` gives a five-step exchange; Q:16-22 gives three lines. `A/research-proposal.md:38` lists the record fields; Q:171-174 lists them in one paragraph. The shared read-the-reference rule appears twice (Q:24-25, Q:382-383) and the waiting rule four times (Q:37-41, 142, 284-294, 356-366; R4:28).

### Host contract facts the references lost

Listed per host in §1. The pattern: every reference keeps the schema and drops the version-dated behaviour facts (`A/host-claude-code.md:20`, `:56`, `:62`, `:78`; `A/host-codex.md:9`, `:25`, `:54`; `A/host-gemini.md:7`, `:23`, `:51-53`, `:59`). Each reference also restates the shared waiting rule (QC:88-95, QX:110-113, QG:87-90) although `A/skill_spec.md:108` says references carry only their distinct contracts. `A/host-contracts.md:7-12` is the one-page comparison none of the four shipped files has.

## 3. Contradictions

1. Recommendation when the priority is unknown. `A/brain-alignment-wording.md:45` says investigate, then ask about that priority. Q:107 says send the question and say no option is favoured. brain's rule wants a recommendation in every question (`I:58`).
2. The wait-what trigger. `A/context-wait-what.md:31` gives the explicit trigger to the user and `:35` leaves wait-what unmerged. Q:3 says "Use for a wait-what request", so two skills claim one trigger (R4:67).
3. Repair's place. `A/discovery-notes.md:238` fixes the hierarchy as larger workflow, then question cycle, then repair of one message. Q:3 promotes repair to an entry trigger of the skill.
4. Reference scope. `A/skill_spec.md:108` and `A/generation-verification.md:11-13` say the references carry only distinct contracts. QC:88-95, QX:110-113 and QG:87-90 each restate the shared waiting rule.
5. Recommended first plus preselection. `A/research-language-layout.md:52-54` warns that preselection causes missed questions and that a recommendation label is not a selection. QX:16-17 puts the recommended option first and QX:86 says Codex async preselects the first option.
6. Restatement before approval. `A/alignment-proposed-wording.md:19` requires stating outcome, scope, decisions and conditions before reading approval. Q:145-148 accept "a clear written approval" with no restatement step.
7. Host set. `A/host-gemini.md:7` says Antigravity CLI does not share the ask_user contract. `I:5` names Antigravity CLI as a brain host and Q:4 names only three hosts. No artifact covers the fourth.
8. Open questions on Codex. `A/research-proposal.md:20` allows an open question with no manufactured options. QX:15 says the sync normaliser requires nonempty options; only the async form allows none (QX:66). Q:66-69 permits open wording without naming this limit.

## 4. Proposed outline for the rewritten SKILL.md

Total budget 250 lines. Each host reference under 120 lines.

| # | Section | What goes in | Fed by | Lines |
|---|---|---|---|---|
| 1 | Frontmatter | Name; a short description naming three triggers: a user-owned choice during any work, a reply that leaves a gap, a question the user did not understand. No wait-what trigger. Drop the 0.1.6 metadata (Q:5-9). | `A/skill_spec.md:21`; `A/domain_map.yaml:41-54`; R4:65 | 8 |
| 2 | The cycle | Five steps, once: prepare, write, send and wait, read, return. Hierarchy in one line. | `A/skill_spec.md:25-29`; `A/discovery-notes.md:238` | 10 |
| 3 | Prepare | Separate missing user intent from discoverable fact from own confusion; investigate first; construct alternatives with cost; the reversible-choice rule with its product-change limit; the pre-send test in both halves. | `A/research-initiative.md:41-46`; `A/research-decision-preparation.md:27-33`; `A/skill_spec.md:35`, `:37`; `A/domain_map.yaml:72-122`, `:441-471` | 30 |
| 4 | Write the question | One question per call; everything inside the surface; STE sentences; glossary words, new term explained; context first, bounded question last; options on the same dimensions with cost beside each; one recommendation with its reason every time, and the unknown-priority rule. | `A/discovery-notes.md:91`, `:115-126`; `A/research-language-layout.md:71-77`; `A/domain_map.yaml:151-207`; `A/brain-alignment-wording.md:45` | 40 |
| 5 | Send and wait | Tool-to-reference table; what to do with no tool; the waiting rule stated once, with host expiry handled as "unanswered, explain, keep a way to reply". | Q:27-35; `A/host-contracts.md:18-27`; `A/discovery-notes.md:293` | 14 |
| 6 | Read the reply | The seven-row next-action table; four evidence states; acceptance is not permission; the confirmation rule with restatement; mixed replies: keep, defer with condition, return to the gap; an explicit change of task wins. | Q:134-142; `A/research-evidence-conflicts.md:36-40`; `A/research-conversation.md:64-67`; `A/alignment-proposed-wording.md:19`, `:27`; `A/research-mixed-replies.md:23-28` | 36 |
| 7 | Repair | Diagnose the defect: missing premise, unknown term, unclear consequence, combined scope, vague option; change that part, keep settled parts; fires on any sign of confusion. | `A/research-conversation.md:78`; `A/research-language-layout.md:77`; `A/context-wait-what.md:27`, `:31-35`; `A/domain_map.yaml:336-361` | 14 |
| 8 | Return to the larger workflow | What is handed back: settled, conditions, gaps, conflicts, deferred topics, next action; record destinations; completion stays with the workflow; one line each for interview-me, idea-refine, domain-modeling. | `A/research-proposal.md:38`, `:88`; `A/brain-alignment-wording.md:29-33`; `A/skill_spec.md:107`, `:113-117`; `A/domain_map.yaml:362-389` | 22 |
| 9 | Failure modes | One table: mistake, mechanism, fix, priority. Fifteen rows. Three worked exchanges kept beside the rules they test, with their `Context:` lines. | `A/domain_map.yaml:71-471`; `A/skill_spec.md:45-61` | 60 |
| 10 | References | Three links with tool name, verification date and evidence grade; one line noting Antigravity CLI is unverified. | `A/host-contracts.md:7-12`; `A/host-gemini.md:7` | 8 |

Total: 242 lines.

Host references, each under 120 lines, distinct contract only: version and date; call fields with one JSON example; reply shape; availability; host expiry facts; evidence links; the unverified list. Restore the facts named in §1 for each host. Remove the shared waiting rule from all three. Codex shrinks from 124 lines by moving QX:105-113 into SKILL.md §5. Whether Antigravity CLI gets a fourth reference or a stub is Peter's decision; no artifact supplies its contract.

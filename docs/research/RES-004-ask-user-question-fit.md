# RES-004: Where ask-user-question fits in brain

Date: 2026-09-19. Status: evidence gathered, decision open.

## Question

brain asks every user decision through ask-user-question (`docs/intent/brain-wrap.md:8-9`). Peter asked that the skill be judged like any other pack: kept, merged, split or improved (`docs/intent/brain-wrap.md:51`). This note recommends nothing.

## How to read

Paths: `A` = `skills`, `C` = `.claude/commands`, `M` = `/private/tmp/claude-501/-Users-peterkloss/d71891a9-f15c-48be-b664-852390fc2582/scratchpad/matt/skills`. Codes (`SKILL.md` unless named): Q `A/ask-user-question`; QC, QX, QG its `references/claude-code.md`, `codex.md`, `gemini-cli.md`; I `A/interview-me`; R `A/idea-refine`; S `A/spec-driven-development`; U `A/using-agent-skills`; P `A/planning-and-task-breakdown`; D `A/doubt-driven-development`; CS, CP, CB `C/spec.md`, `plan.md`, `build.md`; G `M/productivity/grilling`. `auq` is ask-user-question. `addy adds` covers a rule held by addy or grilling that auq lacks. Where addy and grilling differ, RES-002 §1 rows 2 and 5 record it (`docs/research/RES-002-matt-over-addy.md:20`, `:24`); `docs/intent/brain-wrap.md:58` settled it.

## 1. Rules about asking the user

| Row | Rule | auq | addy | grilling | Verdict |
|---|---|---|---|---|---|
| 1 | Investigate discoverable facts first; ask only what belongs to the user | Q:49-53, Q:199-209 | R:82 scans the codebase; U:67 stops and asks | G:26 | same |
| 2 | A sub-agent fetches a fact while the rest of the round goes out | none; Q:53 investigates inline | none | G:26 | addy adds |
| 3 | Questions per call: one | Q:113, QC:15-16, QX:15, QG:10 | one, I:53, I:203; three to five, R:62-69; four areas, CS:7-11 | the whole frontier, G:8 | conflict |
| 4 | Medium: the host question tool, not chat prose | Q:24-35 | tool, R:69; chat format, I:57-60, S:79, D:122, CB:34 | chat format, G:12-22 | conflict |
| 5 | A recommendation with its reason on every question | Q:105-107 | GUESS with reasoning, I:59-60, I:70-77 | G:15 | same |
| 6 | Options compare the same dimensions; costs as plain as benefits | Q:104-107, Q:247-258 | downside quantified, U:78-80; four options without costs, D:122 | choices allowed, G:13; no cost rule | auq adds |
| 7 | Everything needed to decide sits inside the question surface | Q:84-88, QC:44 | none | body may run several paragraphs, G:13 | auq adds |
| 8 | Project words and glossary terms; explain a new term | Q:90-92 | the user's language in the restate only, I:96 | none | auq adds |
| 9 | Choose the layout per host; read the host reference first | Q:24-31, Q:109-111, QC-QX-QG | AskUserQuestion named once, R:69 | none | auq adds |
| 10 | Header, option count, multiSelect, no duplicate Other | QC:15-17, QC:43, QX:14-16, QG:13-14, QG:45-47 | none | none | auq adds |
| 11 | Dependent decisions asked separately; an answer to one settles only that one | Q:113, Q:223-233 | I:68 | design tree and frontier, G:6-8, G:24 | same |
| 12 | Wait; no agent timer; silence is not consent | Q:37-41, Q:142, Q:284-294, Q:356-366 | I:118-120; CB:34 | G:8, G:28 | same |
| 13 | Approval must be explicit; a hedged reply is not yes | any clear written approval, Q:145-148 | named phrases only, I:113-122, CB:34 | G:28 | conflict |
| 14 | Read the whole reply: condition, correction, side topic; free text is not rejection | Q:128-157, Q:260-270, Q:308-318 | fold the correction in, I:122 | the round reshapes the tree, G:24 | auq adds |
| 15 | Partial answer: keep the settled part, ask the gap | Q:138, Q:272-282 | none | G:24 recomputes | auq adds |
| 16 | User claim conflicts with evidence | show the discrepancy after inspecting, Q:139, Q:296-306, Q:368-378 | stop, name it, ask which takes precedence, U:63-73 | none | conflict |
| 17 | Assumptions listed with "correct me now or I'll proceed" | no default on silence, Q:113, Q:142 | S:71-82, U:49-61 | G:28 | conflict |
| 18 | Small reversible implementation choices stay with the agent, stated | Q:71-74, Q:211-221 | none | every decision is the user's, G:26, G:28 | conflict |
| 19 | Want-versus-should probe on convention-signalling answers | none | I:79-92, I:197 | none | addy adds |
| 20 | Confidence number first; stop when the next three answers are predictable | rejected, Q:180-182 | I:40-51, I:124-132 | frontier empty, G:28 | conflict |
| 21 | Floor: several rounds without convergence means step back | none | I:132, I:209 | none | addy adds |
| 22 | What the first questions cover: who, why, success, constraint | none; composition only | I:20, R:62-69, CS:7-11 | none | addy adds |
| 23 | Repair a confusing question; shorten only after the scope is fixed | Q:166-169, Q:320-330 | none | none | auq adds |
| 24 | Record the exchange in the workflow's Markdown record; glossary takes definitions | Q:171-177 | save intent or one-pager only on confirmation, I:138, R:140 | none | auq adds |
| 25 | One resolved question does not approve the whole plan | Q:179-182, Q:332-342 | one plan checkpoint, CB:34, P:253 | G:28 | same |
| 26 | Non-interactive run: do not ask; state the blocker | Q:33-35, QC:73-76, QX:44, QG:72 | I:34-36, D:161-164 | none | same |
| 27 | Cross-model second opinion offered every doubt cycle | none | D:116-124 | none | addy adds |
| 28 | Each external CLI run needs its own confirmed command | authorization scope, Q:137, Q:145-148 | D:127-135, D:205 | none | same |
| 29 | Push back; not a yes-machine | honest recommendation, Q:105-107; no silent replacement, Q:296-306 | U:75-84, R:106 | none | same |

## 2. Conflicts, one sentence per side

Row 3. auq and interview-me ask one question (Q:113, I:53); idea-refine asks three to five per call (R:62-69), grilling the whole frontier per round (G:8).

Row 4. auq composes the call for the host tool (Q:24-35); interview-me, spec, doubt, build and grilling ask in chat text (I:57-60, S:79, D:122, CB:34, G:12-22).

Row 13. auq accepts any clear written approval and asks again only for a real ambiguity (Q:145-148); interview-me re-asks after "sounds good" and "sure, let's go" (I:118-119) and build accepts only approve, go or yes (CB:34).

Row 16. auq inspects first and asks only the remaining trade-off (Q:368-378); using-agent-skills stops at the confusion and asks which source takes precedence (U:67-73).

Row 17. auq chooses nothing from silence (Q:142) and asks one question at a time (Q:113); spec and using-agent-skills list several assumptions in one message and proceed unless corrected (S:79, U:58).

Row 18. auq and Peter's standing rule let the agent take a small reversible implementation choice and state it (Q:71-74); grilling puts every decision to the user and ends only when nothing is silently assumed (G:26, G:28).

Row 20. interview-me opens with a confidence number and stops when it can predict the next three answers (I:40-51, I:128); auq names both an invented percentage and predicted answers as false readiness (Q:180-182), and grilling stops on an empty frontier (G:28).

## 3. Weaknesses of ask-user-question as a skill file

**Description length.** The description is 688 characters and 95 words (Q:3, measured). The Agent Skills spec caps it at 1,024 characters (agentskills.io/specification). Claude Code truncates each entry at 1,536 characters, budgets all descriptions at 1 % of the context window with an 8,000-character fallback, and drops the least-used skills' descriptions first (code.claude.com/docs/en/skills, "Skill descriptions are cut short"). Codex caps its initial list at about 2 % of the context window or 8,000 characters and shortens descriptions first (developers.openai.com/codex/skills). Gemini CLI injects every name and description into the system prompt and documents no cap (geminicli.com/docs/cli/skills, "Discovery"). The field passes every hard cap. The pressure is the budget: brain's 33 skills carry 10,319 description characters (measured), above the 8,000 fallback before any other plugin counts, and ask-user-question is the second longest entry after constraint-driven-development at 887 (measured). A skill loaded by pointer spends budget it does not use.

**Trigger overlap.** The description claims "a wait-what request" (Q:3), the body says such a request answers nothing (Q:168-169), and brain vendors matt's `wait-what` as its own skill (`A/wait-what/SKILL.md:2-3`, `upstream.json:44-47`). Two skills claim one trigger.

**Rules without evidence.** Sentence and paragraph rules (Q:94-102), the Markdown record and glossary rule (Q:171-177), the four tensions (Q:190-193) and the open-discovery rule (Q:66-69) cite nothing. Ten Common Mistakes cite "Maintainer requirement, 2026-09-11" (Q:209, Q:221, Q:233, Q:270, Q:282, Q:294, Q:306, Q:318, Q:342, Q:366): a preference, not evidence. Q:342 cites "Reviewed Brain workflow scenarios", which no file in this repo holds. The external links at Q:245, Q:258, Q:270, Q:282, Q:330 and Q:378 were not fetched; unverified here.

**Rules in tension inside the file.** Q:105 asks for a best-supported recommendation and Q:107 allows none; brain requires one in every question (`docs/intent/brain-wrap.md:58`, README.md:16). Q:71-72 hands reversible implementation choices to the agent, Q:73-74 says reversibility supplies no missing fact, and no test separates the two. Q:37 keeps an unanswered question pending without limit, and QX:100-105 says the Codex host expires a non-blocking request and the agent cannot override it. The read-the-reference instruction appears twice (Q:24-25, Q:382-383).

**What Codex or Gemini cannot honour.** The layout rule on previews (Q:109-111): no preview or multiSelect on Codex (QX:41), no preview on Gemini (QG:13-16, QG:49). The indefinite wait (Q:37-41): Codex outside Plan mode gives sixty seconds of grace, a sixty-second countdown, then an empty answer map (QX:96-103). Visible line breaks (Q:98-99): unverified in the Codex terminal (QX:123), Markdown on Gemini (QG:76). Codex async acknowledges emission and the reply arrives as a later chat message (QX:88-92); Q:128-157 reads a structured reply and never says how to match a chat message to a pending question. Gemini asks consent before the first activation (geminicli.com/docs/cli/skills, "Consent"), one extra prompt per session. Claude Code excludes the tool from subagents (QC:73), so a stage that delegates cannot ask.

**Where the three references disagree.** Answers keyed by question text (QC:51), by id (QX:48), by position (QG:54-55). A multi-answer is comma-separated labels (QC:55-56), an array with a `user_note:` entry (QX:50-58), or one comma-space string (QG:61-62). The recommendation convention is a rule on Codex (QX:16-17), an example on Claude Code (QC:30), absent from the Gemini schema while its example keeps the label (QG:32, QG:49). Maxima: four questions, two to four options (QC:15); one to three, two to three (QX:14); one to four, two to four (QG:10, QG:13). Waiting: a host setting (QC:80-82), Plan-mode dependent (QX:96-99), none (QG:83-85). Evidence grade: Claude Code rests on documentation with rendering untested (QC:4-6); Codex and Gemini cite source at a commit (QX:3-5, QG:3-6).

## 4. Three integration shapes

### (a) Standalone model-invoked skill; every stage skill points at it

This is the current state: `plain-talk/PLAIN-TALK.md:36` (rendered at GEMINI.md:38 and `output-styles/talk-plain.md:45`) and `A/setup-brain/SKILL.md:34` already point at the skill.

Costs. The vendored file stays byte-identical (`docs/intent/brain-wrap.md:15`, README.md:35, `upstream.json:67-75`), so every §3 weakness is fixed upstream or not at all. The §2 conflicts stay live in addy's text: interview-me, spec, doubt and build keep their chat formats (I:57-60, S:79, D:122, CB:34) until a stage skill overrides them, one pointer each. The description spends budget on a skill loaded by pointer (§3). Each session loads 2,544 words of SKILL.md plus a host reference of 592 to 696 words (measured). A missed load means a question composed without the rules.

### (b) Merged into interview-me as one combined interview skill

brain's decision allows this shape: one combined skill seeded from addy's text under addy's name, the vendored copy leaving the take-list, `sync --report` tracking addy's later changes (`docs/intent/brain-wrap.md:50`).

Costs. Rows 20 and 13 must be resolved in one file (I:40-51, I:124-132 against Q:180-182; I:113-122 against Q:145-148). Questions arise outside the interview: plan approval (P:253, CP:14), build blockers (CB:36-41), the cross-model offer (D:120-124), setup (`A/setup-brain/SKILL.md:34`), idea-refine (R:69); each would load a 225-line interview skill plus 388 lines of composition rules to ask one question. Two descriptions of 486 and 688 characters become one under the 1,024 cap. interview-me refuses non-interactive contexts (I:36); auq falls back to a plain-text question (Q:33-35). Five pointers change (GEMINI.md:38, PLAIN-TALK.md:36, README.md:16, `docs/install/codex.md:23`, `docs/install/claude-code.md:28`). The host contracts ride inside a Define-stage skill that Codex and Gemini load only on activation (developers.openai.com/codex/skills, "progressive disclosure"; geminicli.com/docs/cli/skills, "Injection").

### (c) Split: composition rules become a brain reference; the host tool references stay a skill

addy already loads a shared reference from stage skills (U:114, P:257, `references/definition-of-done.md`), so the shape has a precedent in the vendored pack.

Costs. brain's `references/` directory is vendored from addy (`upstream.json:11-14`), so the brain-owned file needs a path beside it (README.md:35). A reference has no description and never triggers: every stage skill must carry the pointer, and a plain coding turn reaches the rules only through the plain-talk text (PLAIN-TALK.md:36). The split cuts Q:43-193 and Q:195-378 (composition) from Q:14-41 and Q:380-388 (host contracts); both halves hold the "read the host reference first" rule (Q:24, Q:382), so one must own it. The remaining skill needs a description that names the tool contracts. Either the vendored skill stays untouched and its Core Patterns are duplicated, two copies to drift, or the pin is dropped and brain loses the dated upstream checks (QC:4-5, QX:3-5, QG:3-6). Gemini activation grants read access to the skill's own directory (geminicli.com/docs/cli/skills, "Injection"); whether an extension-installed skill can read a reference outside it is unverified here.

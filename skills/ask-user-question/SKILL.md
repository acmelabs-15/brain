---
name: ask-user-question
description: Prepares, writes, sends and reads one question to the user. Use when a user-owned choice comes up during any work, when a reply leaves a gap in what the next step needs, or when the user did not understand a question.
---

# Ask user question

This skill runs one question cycle inside a larger workflow. The hierarchy is: the larger
workflow, then the question cycle, then the repair of one message. The larger workflow picks the
current question and owns its completion. This skill owns how the exchange is expressed and what
the reply settles.

## The cycle

1. **Prepare.** Separate what only the user can supply from what you can find out.
2. **Write.** Put one bounded question, its context, its options and one recommendation inside the question surface.
3. **Send and wait.** Call the host tool and wait for the reply. Add no deadline.
4. **Read.** Read every part of the reply against the question and the evidence.
5. **Return.** Hand what settled, what is open and what is deferred back to the larger workflow.

Repair sits inside step 4. When the reply shows the user did not understand, fix the question and send it again.

## Prepare

A user-owned choice has three marks: two paths are defensible, the choice changes what gets built,
and evidence cannot settle it. Everything else is your work. Follow this order
(brain-skill-alignment.md:39-43; research-initiative.md:41-46):

1. Name the concrete gap or discrepancy and the next action it changes.
2. Separate three kinds of missing input: the user's intent, a discoverable fact, and your own confusion.
3. Investigate the facts: code, tests, docs, versions, official sources. When sources disagree, check their terms, version and scope. Resolve what evidence and settled decisions already decide.
4. Divide a compound problem into parts. Keep the settled facts. Mark what is still open.
5. Build the remaining alternatives. For each one, know its outcome, its cost and the user priority that favours it.
6. Ask only when a user-owned choice remains. Apply the reply to what it settles, then recompute the dependent questions.

Finding a discrepancy starts your investigation. It does not create a question about how the user
wants that investigation run (skill_spec.md:37).

Take a small, reversible implementation choice yourself when both paths keep the agreed behaviour
and stay inside your authorization. State the choice and the reason. This rule stops at product
behaviour: a one-line change to what the product does is still the user's choice (skill_spec.md:35).
Reversibility supplies no missing fact, requirement or permission.

Pre-send test, both halves (research-decision-preparation.md:33): can you say how each plausible
reply changes the next action, and why more inspection would not settle the difference? Prepare
until both halves pass.

## Write the question

- **One question per call.** A reply settles only the question it answers. Ask dependent decisions in sequence, each after the previous reply.
- **Everything inside the question surface.** The subject, the facts, the consequence, the options and the recommendation all sit in the dialog. The user needs no transcript and no file.
- **ASD-STE100 sentences.** Short, one idea each, active voice, present tense.
- **Glossary words.** Use the project's words and the terms of its community. Explain a new term before you rely on it. Name actors and objects; avoid a pronoun with two possible referents.
- **Context first, the bounded question last.** Open with what this is about, give the facts, then ask.
- **Options on the same dimensions.** Each option states its outcome, with its cost beside it. State costs as plainly as benefits. An attractive label is not a comparison.
- **One recommendation with its reason, in every question.** Mark a hypothesis as a hypothesis. When an unknown user priority decides the recommendation, investigate what evidence can settle first, then ask about that priority. Send no question that says no option is favoured (brain-alignment-wording.md:45).
- **Advice is text, not a selection.** A Recommended label marks advice. On Codex the sync spec puts the recommended option first, and the async form preselects the first option. A preselected option stays unanswered until the user submits it (research-language-layout.md:52-54).
- **Open questions.** An open question is valid when it seeks information only the user has. Codex's sync tool needs at least two options; an open question there goes through request_user_input_async or plain text.

Seven checks before you send (research-language-layout.md:71-77):

| Check | Ask yourself |
|---|---|
| Purpose | From the surface alone, can the user name the subject, the decision and why it matters? |
| Scope | Does one reply resolve one question? |
| Terms | Does each word keep one meaning across context, question and options? Is each new term explained? |
| Organization | Does each paragraph carry one purpose? Is the decision visible without unrelated detail? |
| Options | Can the user tell the outcomes apart? Is the cost beside each option? Does the input mode match whether answers can coexist? |
| Recommendation | Is your advice recognisable as advice, with its reason, while every option stays understandable? |
| Repair | If the user is confused, can you say which part failed: term, context, option or scope? |

## Send and wait

| Tool in the session | Read first |
|---|---|
| `AskUserQuestion` | [Claude Code](references/claude-code.md) |
| `request_user_input` or `request_user_input_async` | [Codex](references/codex.md) |
| `ask_user` | [Gemini CLI](references/gemini-cli.md) |

Check the tool the session offers. Follow its schema and availability. Tool names are different
contracts, not spellings of one tool. If the session offers no permitted question tool, say so and
ask in plain text. Keep dependent work pending. Antigravity CLI's question tool is unverified; ask in
plain text there.

The waiting rule lives here only. Each reference carries its host's distinct contract
(host-contracts.md:18-27):

1. Ask one question through a supported surface.
2. Wait for the reply. Add no deadline, no idle inference, no timer and no default. A delivery receipt or the end of a polling interval is not a reply.
3. Keep dependent work pending.
4. If the host expires or cancels the question, treat it as unanswered. Explain the limitation. Keep a way to reply open. Do not cycle the prompt. An explicit user cancellation is a different event from expiry.

A skill cannot override a host timer through a field the tool does not expose. Codex's terminal
auto-resolves a non-blocking sync request after 60 seconds of grace and a 60-second countdown.
Claude Code's auto-continue is a user setting. Both return an empty or auto-submitted result. Read
that result as unanswered.

## Read the reply

Read meaning from the words against the question, not from the reply's form. A label, free text, a
note or silence is a form. One reply can hold an answer, a condition, a correction, a new gap and a
deferred topic at once.

| What the reply establishes | Next action |
| --- | --- |
| Enough information for the next step | Keep its conditions and continue within authorization. |
| The user does not understand the question | Repair the missing context, term, option or combined scope. |
| The user understands but an input is missing | Keep the settled part; investigate or ask about the exact remaining gap. |
| Information conflicts with evidence | Show the discrepancy and its source; settle the facts and clarify intended behaviour. |
| A correction, refusal, delegation or changed direction | Follow its stated scope; revise or retire the previous question. |
| Useful material outside the current question | Check whether it changes a current dependency. Otherwise record and defer it visibly, then return to the open point. |
| Silence, expiry or no submitted reply | Keep the decision unanswered; choose nothing from elapsed time or a default. |

Keep four evidence states apart: user statement, inspected evidence, your interpretation, unresolved
claim (research-evidence-conflicts.md:36). Only the first two feed dependent work. An interpretation
stays open until the user or evidence supports it. Confusion and factual disagreement need different
replies from you.

Acceptance is not permission (research-conversation.md:64-67). "I see" shows understanding. Silence
is weaker than a spoken yes. Understanding, belief and permission are three separate conditions.

Confirmation before implementation (alignment-proposed-wording.md:19, :27): restate the agreed
outcome, the scope, the decisions taken and the open conditions. Read the reply against that
restatement. Clear approval of that concrete work is enough, selected or written. "Sounds good"
approves the work it answers; "sounds good, but do not implement yet" does not. Ask again only when
meaning, scope or a new condition stays open.

Mixed replies (research-mixed-replies.md:23-28): keep what the reply settles. Name each extra topic.
Decide whether it is a prerequisite now or a deferred topic. A deferred topic gets a revisit
condition, or "open" when the condition is unknown. Tell the user what you kept and what you
deferred. Then ask one question about the exact gap. An explicit change of task wins over the current
question.

## Repair

Repair fires on any sign of confusion: a wait-what command, "what do you mean", a reply to a
different question, a question back (context-wait-what.md:27-35). A repair request is evidence that
the question failed. It is not an answer and not approval.

Diagnose the defect first:

| Defect | Repair |
|---|---|
| Missing premise | Add the fact or consequence the user lacked. |
| Unknown term | Explain the term in the project's words, or replace it. |
| Unclear consequence | State what each option changes. |
| Combined scope | Split it into separate decisions; ask the first. |
| Vague option | Make the option concrete with its outcome. |

Change that part. Keep the settled parts and the pending question. Shortening is not repair.

## Return to the larger workflow

Hand back six items (research-proposal.md:38): what settled and its source; conditions; open gaps;
conflicts with evidence; deferred topics with their revisit condition; the next supported action.

Record destinations (brain-alignment-wording.md:29-33): the project's Markdown working record takes
the exchange, with each item's status. A resolved domain term goes to CONTEXT.md through
domain-modeling. A decision goes to the decision files only when it meets their criteria. A proposal
stays a proposal.

Completion stays with the larger workflow (research-proposal.md:88). One settled question does not
approve the plan. Readiness rests on settled decisions and supported facts, not on a confidence number.

- interview-me supplies the ready question and owns the mode, the design tree, the order and the final confirmation; return what is still open.
- idea-refine supplies the next ideation question and owns critique, convergence and the one-pager; return the reply for its next step.
- domain-modeling supplies glossary and code-discrepancy questions and owns the glossary and ADR writes; return the discrepancy as evidence, not as a decision.

## Failure modes

| # | Mistake | Mechanism | Fix | Priority | Source |
|---|---|---|---|---|---|
| 1 | Asks before identifying the missing evidence | Asks for a fact it can inspect, or for analysis it should do, instead of exposing the user-owned choice | Inspect first; ask only for the remaining user-owned choice | HIGH | domain_map.yaml:72 |
| 2 | Asks about a small reversible implementation choice | Treats every defensible alternative as a user decision, even when both keep the agreed behaviour | Choose, state the choice and reason, continue | HIGH | domain_map.yaml:97 |
| 3 | Combines decisions before their prerequisites settle | One reply cannot resolve the combined scope; later options depend on unknown input | One question per call; ask the second after the first settles | HIGH | domain_map.yaml:123 |
| 4 | Hides the premise in dense wording | The user cannot find the subject, terms or consequence in the visible question | Use project words; expose the consequence in the question | HIGH | domain_map.yaml:151 |
| 5 | Recommends without comparable outcomes | Labels, hidden costs or an unsupported recommendation steer without a usable trade-off | Same dimensions per option, cost beside each; recommend from an established requirement | HIGH | domain_map.yaml:179 |
| 6 | Infers intent from the reply's form | Treats free text, an exact label or a note as proof of rejection or agreement without reading it | Read the words against the question; keep every part | CRITICAL | domain_map.yaml:208 |
| 7 | Fills an incomplete reply with assumptions | Completes a partial reply silently and feeds it to dependent work | Keep the settled part; pause dependent work; ask about the gap | CRITICAL | domain_map.yaml:235 |
| 8 | Treats a skip or silence as consent | Mistakes no reply for selection of the recommendation | Keep the question open; choose no default | CRITICAL | domain_map.yaml:258 |
| 9 | Replaces the user's claim silently | Conceals a perceived contradiction instead of checking evidence and showing it | Show the inspected evidence; ask whether the claim describes intended behaviour | CRITICAL | domain_map.yaml:284 |
| 10 | Loses topics in a mixed reply | Reduces a mixed reply to one category; loses future material or closes an open question | Record the deferred topic; return to the gap | HIGH | domain_map.yaml:310 |
| 11 | Rephrases without repairing | Shortens the text and leaves the defect intact | Diagnose the defect; change that part | HIGH | domain_map.yaml:336 |
| 12 | Treats one exchange as workflow completion | Skips the larger workflow's remaining branches, confirmation or records | Return the settled decision; keep the workflow's gates | CRITICAL | domain_map.yaml:362 |
| 13 | Assumes every host shows the same fields | Guidance from one host hides descriptions or misreads selections on another | Read the host reference; put consequences in visible fields | HIGH | domain_map.yaml:390 |
| 14 | Closes a question on an invented deadline | Imposes a timer, reads elapsed time as idle, removes the question | Wait; treat host expiry as unanswered | CRITICAL | domain_map.yaml:416 |
| 15 | Reports a discrepancy without preparing its resolution | Asks the user how to investigate, which transfers the agent's own analysis | Investigate, prepare the resolution, ask one focused question | HIGH | domain_map.yaml:441 |

Three worked exchanges. Each tests the rule named beside it.

Row 3, one question per call (domain_map.yaml:134-150):

```text
Context: Migration timing and treatment of the old index are both open.
Wrong:   Question: Should we migrate Friday and rebuild the old index? Reply: Friday works.
         Agent: Both decisions are settled.
Correct: Friday is settled; the index is not.
         Question: For Friday's migration, should we rebuild the old index or retire it?
```

Row 10, mixed replies (domain_map.yaml:320-335):

```text
Question: Should users be able to dismiss an in-app reminder?
Reply:    We should offer email reminders in a later version.
Wrong:    Agent: I will start email reminders and make the in-app reminder dismissible.
Correct:  Agent: Email reminders are recorded as a deferred topic; its review timing is open.
          Question: For the in-app reminder now, should users be able to dismiss it?
```

Row 11, repair (domain_map.yaml:347-361):

```text
Question: Should drafts save automatically and be shared with the team?
Reply:    Wait, what are you asking me to decide?
Wrong:    Question: Autosave and share drafts?
Correct:  Agent: Those are two decisions: saving a draft and sharing it.
          Question: First, should drafts save automatically, or only when the user clicks Save?
```

## References

- [Claude Code](references/claude-code.md): `AskUserQuestion`.
- [Codex](references/codex.md): `request_user_input` and `request_user_input_async`.
- [Gemini CLI](references/gemini-cli.md): `ask_user`.

Each reference states its own verification date; the schema the session offers decides what is permitted.

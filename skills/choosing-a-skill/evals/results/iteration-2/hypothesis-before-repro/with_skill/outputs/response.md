Yes — I'll run this as a diagnosis, and the first thing I need isn't a theory about the cause, it's a **tight loop**: one command I can run that goes **red** on this specific bug, deterministically, every time. Until that exists there's nothing to diagnose against.

One-in-five is the part that makes this awkward, and it cuts the other way from how it feels. A failure rate isn't evidence for a mechanism — it's a rate I have to drive to certainty before any fix means anything. If I patch something plausible and reload, I've got an 80% chance of seeing green whether or not I fixed it. So I'm not going to reason my way to a likely culprit from the error text and then confirm it; that's the thing that goes wrong here.

What I'm going to do first is build the loop, by forcing the failing conditions rather than sampling until they happen:

- Get the login page loading under something I can drive repeatedly and script — headless browser or the existing test harness, whichever this repo already has — with the console error surfaced as a hard failure rather than a log line.
- Find the axis the intermittency actually rides on, and pin it. Candidates I want the loop to be able to **force**, not rank: request/response ordering between whatever the page fetches on mount and the first render that reads `.id`; a cached vs cold session or token state; render-order or effect-order differences between a warm and a fresh mount. These are knobs to control, not a shortlist of suspects — I'll be surprised by which one it is as often as not.
- Prove the loop by making it go red on demand, several runs in a row, before I touch any product code.

Two things I need from you to build that:

- How do I run the app and reach the login page locally (command, URL, any seed/auth setup)? And is there a browser-driven test setup already in the repo I should build on?
- Anything that correlates with the bad loads from your side — cold browser vs. reload, logged-out vs. previously-logged-in, a specific environment, or a stack trace / file+line from the console. Even a rough correlation gives me an axis to pin.

If it turns out the failing conditions can't be forced in the environment I've got — no way to control the ordering, no way to run the page reliably — I'll tell you that plainly and stop there rather than switching to reading the code and reasoning about what *could* race. That fallback looks like progress and reliably produces a confident wrong answer on intermittent bugs, which is precisely the failure mode here.

Once the loop is red on demand, the rest is fast: bisect the surface until it's minimal, fix, and then the same loop run green repeatedly is the actual proof.

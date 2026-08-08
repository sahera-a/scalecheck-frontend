export const REMEDIATION_STEPS = {
  "Ownership Dissolution": {
    intro:
      "This risk means accountability for the initiative isn't durable — it depends on one person's attention rather than a structure. Here's how to fix that:",
    steps: [
      {
        title: "Name a single accountable owner",
        description:
          "Assign one named executive — not a team — with end-to-end accountability for this initiative, documented in writing.",
      },
      {
        title: "Create a formal charter or RACI",
        description:
          "Document who is Responsible, Accountable, Consulted, and Informed at each stage, so accountability doesn't rely on memory.",
      },
      {
        title: "Set a recurring leadership review",
        description:
          "Put a fixed cadence — monthly, for example — on the calendar where leadership reviews progress, not just ad hoc updates.",
      },
      {
        title: "Build a succession plan",
        description:
          "Document what happens if the current owner leaves — who picks it up, and what continuity actually looks like.",
      },
      {
        title: "Separate pilot funding from production funding",
        description:
          "Secure a distinct, protected budget line for post-pilot operation, so it isn't the first thing cut when priorities shift.",
      },
    ],
  },

  "Integration Tax": {
    intro:
      "This risk means the system works as a demo but was never built to connect to real production data and workflows. Here's how to close that gap:",
    steps: [
      {
        title: "Map real data flows early",
        description:
          "Document exactly how production data will reach the system — no manual CSV exports or one-off handoffs standing in for a real pipeline.",
      },
      {
        title: "Get engineering sign-off before scaling",
        description:
          "Have IT/engineering formally review integration requirements before expanding beyond the pilot.",
      },
      {
        title: "Design for existing workflows, not around them",
        description:
          "Build the system to slot into how teams already work, rather than asking teams to adopt a separate tool.",
      },
      {
        title: "Pilot at production data volume",
        description:
          "Test with realistic data scale early, not a curated demo dataset, so integration gaps surface before they're expensive.",
      },
      {
        title: "Assign a dedicated integration owner",
        description:
          "Make one engineering lead responsible specifically for the connection layer, separate from the initiative's overall owner.",
      },
    ],
  },

  "Narrative Capture": {
    intro:
      "This risk means the story of success is outrunning the actual, measured evidence. Here's how to bring them back in line:",
    steps: [
      {
        title: "Define one measurable success metric",
        description:
          "Pick a single, specific, trackable metric before continuing — not a general 'efficiency gain' claim.",
      },
      {
        title: "Track actuals, not projections",
        description:
          "Replace forecasted numbers in every update with real measured outcomes, even when the number is less impressive.",
      },
      {
        title: "Route reporting through an independent reviewer",
        description:
          "Have someone outside the initiative's own team validate the numbers before they reach leadership.",
      },
      {
        title: "Re-run the business case with real data",
        description:
          "Redo the original ROI calculation using actual, not projected, figures — and be willing to accept the answer.",
      },
      {
        title: "Separate storytelling from decision-making",
        description:
          "Use the narrative to motivate the team internally, but base go/no-go decisions strictly on the tracked metric.",
      },
    ],
  },
};
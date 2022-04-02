(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{714:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"architecture-decision-records-adr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture-decision-records-adr"}},[e._v("#")]),e._v(" Architecture Decision Records (ADR)")]),e._v(" "),a("p",[e._v("This is a location to record all high-level architecture decisions for new feature and module proposals in the Cosmos Hub.")]),e._v(" "),a("p",[e._v("An Architectural Decision ("),a("strong",[e._v("AD")]),e._v(") is a software design choice that addresses a functional or non-functional requirement that is architecturally significant.\nAn Architecturally Significant Requirement ("),a("strong",[e._v("ASR")]),e._v(") is a requirement that has a measurable effect on a software system’s architecture and quality.\nAn Architectural Decision Record ("),a("strong",[e._v("ADR")]),e._v(") captures a single AD, such as often done when writing personal notes or meeting minutes; the collection of ADRs created and maintained in a project constitute its decision log. All these are within the topic of Architectural Knowledge Management (AKM).")]),e._v(" "),a("p",[e._v("You can read more about the ADR concept in this "),a("a",{attrs:{href:"https://product.reverb.com/documenting-architecture-decisions-the-reverb-way-a3563bb24bd0#.78xhdix6t",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog post"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("ADRs are intended to be the primary mechanism for proposing new feature designs and new processes, for collecting community input on an issue, and for documenting the design decisions.\nAn ADR should provide:")]),e._v(" "),a("ul",[a("li",[e._v("Context on the relevant goals and the current state")]),e._v(" "),a("li",[e._v("Proposed changes to achieve the goals")]),e._v(" "),a("li",[e._v("Summary of pros and cons")]),e._v(" "),a("li",[e._v("References")]),e._v(" "),a("li",[e._v("Changelog")])]),e._v(" "),a("p",[e._v("Note the distinction between an ADR and a spec. The ADR provides the context, intuition, reasoning, and\njustification for a change in architecture, or for the architecture of something\nnew. The spec is much more compressed and streamlined summary of everything as\nit stands today.")]),e._v(" "),a("p",[e._v("If recorded decisions turned out to be lacking, convene a discussion, record the new decisions here, and then modify the code to match.")]),e._v(" "),a("h2",{attrs:{id:"creating-new-adr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-adr"}},[e._v("#")]),e._v(" Creating new ADR")]),e._v(" "),a("h3",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[e._v("#")]),e._v(" Process")]),e._v(" "),a("ol",[a("li",[e._v("Copy the "),a("code",[e._v("template.md")]),e._v(" file. Use the following filename pattern: "),a("code",[e._v("adr-next_number-title.md")])]),e._v(" "),a("li",[e._v("Link the ADR in the related "),a("RouterLink",{attrs:{to:"/.github/ISSUE_TEMPLATE/feature-readiness.html"}},[e._v("feature epic")])],1),e._v(" "),a("li",[e._v("Create a draft Pull Request if you want to get early feedback.")]),e._v(" "),a("li",[e._v("Make sure the context and a solution is clear and well documented.")]),e._v(" "),a("li",[e._v("Add an entry to a list in the README file "),a("a",{attrs:{href:"#ADR-Table-of-Contents"}},[e._v("Table of Contents")]),e._v(".")]),e._v(" "),a("li",[e._v("Create a Pull Request to publish the ADR proposal.")])]),e._v(" "),a("h3",{attrs:{id:"life-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#life-cycle"}},[e._v("#")]),e._v(" Life cycle")]),e._v(" "),a("p",[e._v("ADR creation is an "),a("strong",[e._v("iterative")]),e._v(" process. Rather than solving all decisions in a single PR, it's best to first understand the problem and then solicit feedback through Github Issues.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Every proposal should start with a new GitHub Issue and be linked to the corresponding Feature Epic. The Issue should contain a brief proposal summary.")])]),e._v(" "),a("li",[a("p",[e._v("Once the motivation is validated, a GitHub Pull Request (PR) is created with a new document based on the "),a("code",[e._v("template.md")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("An ADR doesn't have to arrive to "),a("code",[e._v("master")]),e._v(" with an "),a("code",[e._v("accepted")]),e._v(" status in a single PR. If the motivation is clear and the solution is sound, we should be able to merge it and keep a "),a("code",[e._v("proposed")]),e._v(" status.")])]),e._v(" "),a("li",[a("p",[e._v("If a "),a("code",[e._v("proposed")]),e._v(" ADR is merged, then it should clearly document outstanding issues in the Feature Epic.")])]),e._v(" "),a("li",[a("p",[e._v("The PR should always be merged. In the case of a faulty ADR, it's still preferable to merge it with a "),a("code",[e._v("rejected")]),e._v(" status. The only time the ADR should not be merged is if the author abandons it.")])]),e._v(" "),a("li",[a("p",[e._v("Merged ADRs "),a("strong",[e._v("should not")]),e._v(" be pruned.")])])]),e._v(" "),a("h3",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Status has two components:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"e0NPTlNFTlNVUyBTVEFUVVN9IHtJTVBMRU1FTlRBVElPTiBTVEFUVVN9Cg=="}}),e._v(" "),a("p",[e._v("IMPLEMENTATION STATUS is either "),a("code",[e._v("Implemented")]),e._v(" or "),a("code",[e._v("Not Implemented")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"consensus-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consensus-status"}},[e._v("#")]),e._v(" Consensus Status")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"RFJBRlQgLSZndDsgUFJPUE9TRUQgLSZndDsgTEFTVCBDQUxMIHl5eXktbW0tZGQgLSZndDsgQUNDRVBURUQgfCBSRUpFQ1RFRCAtJmd0OyBTVVBFUlNFREVEIGJ5IEFEUi14eHgKICAgICAgICAgICAgICAgICAgXCAgICAgICAgfAogICAgICAgICAgICAgICAgICAgXCAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgdiAgICAgIHYKICAgICAgICAgICAgICAgICAgICAgQUJBTkRPTkVECg=="}}),e._v(" "),a("ul",[a("li",[a("code",[e._v("DRAFT")]),e._v(": [optional] an ADR which is work in progress, not being ready for a general review. This is to present an early work and get an early feedback in a Draft Pull Request form.")]),e._v(" "),a("li",[a("code",[e._v("PROPOSED")]),e._v(": an ADR covering a full solution architecture and still in the review - project stakeholders haven't reached an agreed yet.")]),e._v(" "),a("li",[a("code",[e._v("LAST CALL <date for the last call>")]),e._v(": [optional] clear notify that we are close to accept updates. Changing a status to "),a("code",[e._v("LAST CALL")]),e._v(" means that social consensus (of Cosmos Hub maintainers) has been reached and we still want to give it a time to let the community react or analyze.")]),e._v(" "),a("li",[a("code",[e._v("ACCEPTED")]),e._v(": ADR which will represent a currently implemented or to be implemented architecture design.")]),e._v(" "),a("li",[a("code",[e._v("REJECTED")]),e._v(": ADR can go from PROPOSED or ACCEPTED to rejected if the consensus among project stakeholders will decide so.")]),e._v(" "),a("li",[a("code",[e._v("SUPERSEEDED by ADR-xxx")]),e._v(": ADR which has been superseded by a new ADR.")]),e._v(" "),a("li",[a("code",[e._v("ABANDONED")]),e._v(": the ADR is no longer pursued by the original authors.")])]),e._v(" "),a("h3",{attrs:{id:"language-used-in-adr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language-used-in-adr"}},[e._v("#")]),e._v(" Language used in ADR")]),e._v(" "),a("ul",[a("li",[e._v("The context/background should be written in the present tense.")]),e._v(" "),a("li",[e._v("Avoid using a first, personal form.")])]),e._v(" "),a("p",[a("strong",[e._v("Use RFC 2119 Keywords")])]),e._v(" "),a("p",[e._v('When writing ADRs, follow the same best practices for writing RFCs. When writing RFCs, key words are used to signify the requirements in the specification. These words are often capitalized: "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL. They are to be interpreted as described in '),a("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc2119",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 2119"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"adr-table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-table-of-contents"}},[e._v("#")]),e._v(" ADR Table of Contents")]),e._v(" "),a("h3",{attrs:{id:"accepted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accepted"}},[e._v("#")]),e._v(" Accepted")]),e._v(" "),a("ul",[a("li",[e._v("n/a")])]),e._v(" "),a("h3",{attrs:{id:"proposed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposed"}},[e._v("#")]),e._v(" Proposed")]),e._v(" "),a("ul",[a("li",[e._v("n/a")])]),e._v(" "),a("h3",{attrs:{id:"draft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#draft"}},[e._v("#")]),e._v(" Draft")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/readiness/adr-001-interchain-accounts.html"}},[e._v("ADR 001: Interchain Accounts")])],1)])],1)}),[],!1,null,null,null);t.default=r.exports}}]);
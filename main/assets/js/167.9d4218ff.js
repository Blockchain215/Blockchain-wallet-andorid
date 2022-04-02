(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{594:function(t,a,e){"use strict";e.r(a);var o=e(1),i=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"running-a-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-a-validator"}},[t._v("#")]),t._v(" Running a Validator")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("We suggest you try out joining a public testnet first. Information on how to join the most recent testnet can be found "),e("RouterLink",{attrs:{to:"/hub-tutorials/join-testnet.html"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("Before setting up a validator node, make sure to have completed the "),e("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[t._v("Joining Mainnet")]),t._v(" guide.")],1),t._v(" "),e("p",[t._v("If you plan to use a KMS (key management system), you should go through these steps first: "),e("RouterLink",{attrs:{to:"/validators/kms/kms.html"}},[t._v("Using a KMS")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"what-is-a-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-validator"}},[t._v("#")]),t._v(" What is a Validator?")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/validators/overview.html"}},[t._v("Validators")]),t._v(" are responsible for committing new blocks to the blockchain through an automated voting process. A validator's stake is slashed if they become unavailable or sign blocks at the same height. Because there is a chance of slashing, we suggest you read about "),e("RouterLink",{attrs:{to:"/validators/validator-faq.html#how-can-validators-protect-themselves-from-denial-of-service-attacks"}},[t._v("Sentry Node Architecture")]),t._v(" to protect your node from DDOS attacks and to ensure high-availability.")],1),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),e("p",[t._v("If you want to become a validator for the Hub's "),e("code",[t._v("mainnet")]),t._v(", you should learn more about "),e("RouterLink",{attrs:{to:"/validators/security.html"}},[t._v("security")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("The following instructions assume you have already "),e("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[t._v("set up a full-node")]),t._v(" and are synchonised to the latest blockheight.")],1),t._v(" "),e("h2",{attrs:{id:"create-your-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-validator"}},[t._v("#")]),t._v(" Create Your Validator")]),t._v(" "),e("p",[t._v("Your "),e("code",[t._v("cosmosvalconspub")]),t._v(" can be used to create a new validator by staking tokens. You can find your validator pubkey by running:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdGVuZGVybWludCBzaG93LXZhbGlkYXRvcgo="}}),t._v(" "),e("p",[t._v("To create your validator, just use the following command:")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[t._v("Don't use more "),e("code",[t._v("uatom")]),t._v(" than you have!")])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggc3Rha2luZyBjcmVhdGUtdmFsaWRhdG9yIFwKICAtLWFtb3VudD0xMDAwMDAwdWF0b20gXAogIC0tcHVia2V5PSQoZ2FpYWQgdGVuZGVybWludCBzaG93LXZhbGlkYXRvcikgXAogIC0tbW9uaWtlcj0mcXVvdDtjaG9vc2UgYSBtb25pa2VyJnF1b3Q7IFwKICAtLWNoYWluLWlkPSZsdDtjaGFpbl9pZCZndDsgXAogIC0tY29tbWlzc2lvbi1yYXRlPSZxdW90OzAuMTAmcXVvdDsgXAogIC0tY29tbWlzc2lvbi1tYXgtcmF0ZT0mcXVvdDswLjIwJnF1b3Q7IFwKICAtLWNvbW1pc3Npb24tbWF4LWNoYW5nZS1yYXRlPSZxdW90OzAuMDEmcXVvdDsgXAogIC0tbWluLXNlbGYtZGVsZWdhdGlvbj0mcXVvdDsxMDAwMDAwJnF1b3Q7IFwKICAtLWdhcz0mcXVvdDthdXRvJnF1b3Q7IFwKICAtLWdhcy1wcmljZXM9JnF1b3Q7MC4wMDI1dWF0b20mcXVvdDsgXAogIC0tZnJvbT0mbHQ7a2V5X25hbWUmZ3Q7Cg=="}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("When specifying commission parameters, the "),e("code",[t._v("commission-max-change-rate")]),t._v(" is used to measure % "),e("em",[t._v("point")]),t._v(" change over the "),e("code",[t._v("commission-rate")]),t._v(". E.g. 1% to 2% is a 100% rate increase, but only 1 percentage point.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("code",[t._v("Min-self-delegation")]),t._v(" is a stritly positive integer that represents the minimum amount of self-delegated voting power your validator must always have. A "),e("code",[t._v("min-self-delegation")]),t._v(" of "),e("code",[t._v("1000000")]),t._v(" means your validator will never have a self-delegation lower than "),e("code",[t._v("1atom")])])]),t._v(" "),e("p",[t._v("It's possible that you won't have enough ATOM to be part of the active set of validators in the beginning. Users are able to delegate to inactive validators (those outside of the active set) using the "),e("a",{attrs:{href:"https://wallet.keplr.app/#/cosmoshub/stake?tab=inactive-validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("Keplr web app"),e("OutboundLink")],1),t._v(". You can confirm that you are in the validator set by using a third party explorer like "),e("a",{attrs:{href:"https://www.mintscan.io/cosmos/validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mintscan"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"edit-validator-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#edit-validator-description"}},[t._v("#")]),t._v(" Edit Validator Description")]),t._v(" "),e("p",[t._v("You can edit your validator's public description. This info is to identify your validator, and will be relied on by delegators to decide which validators to stake to. Make sure to provide input for every flag below. If a flag is not included in the command the field will default to empty ("),e("code",[t._v("--moniker")]),t._v(" defaults to the machine name) if the field has never been set or remain the same if it has been set in the past.")]),t._v(" "),e("p",[t._v("The <key_name> specifies which validator you are editing. If you choose to not include some of the flags below, remember that the --from flag "),e("strong",[t._v("must")]),t._v(" be included to identify the validator to update.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("--identity")]),t._v(" can be used as to verify identity with systems like Keybase or UPort. When using Keybase, "),e("code",[t._v("--identity")]),t._v(" should be populated with a 16-digit string that is generated with a "),e("a",{attrs:{href:"https://keybase.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("keybase.io"),e("OutboundLink")],1),t._v(" account. It's a cryptographically secure method of verifying your identity across multiple online networks. The Keybase API allows us to retrieve your Keybase avatar. This is how you can add a logo to your validator profile.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggc3Rha2luZyBlZGl0LXZhbGlkYXRvcgogIC0tbW9uaWtlcj0mcXVvdDtjaG9vc2UgYSBtb25pa2VyJnF1b3Q7IFwKICAtLXdlYnNpdGU9JnF1b3Q7aHR0cHM6Ly9jb3Ntb3MubmV0d29yayZxdW90OyBcCiAgLS1pZGVudGl0eT02QTBENjVFMjlBNENCQzhFIFwKICAtLWRldGFpbHM9JnF1b3Q7VG8gaW5maW5pdHkgYW5kIGJleW9uZCEmcXVvdDsgXAogIC0tY2hhaW4taWQ9Jmx0O2NoYWluX2lkJmd0OyBcCiAgLS1nYXM9JnF1b3Q7YXV0byZxdW90OyBcCiAgLS1nYXMtcHJpY2VzPSZxdW90OzAuMDAyNXVhdG9tJnF1b3Q7IFwKICAtLWZyb209Jmx0O2tleV9uYW1lJmd0OyBcCiAgLS1jb21taXNzaW9uLXJhdGU9JnF1b3Q7MC4xMCZxdW90Owo="}}),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),e("p",[t._v("Please note that some parameters such as "),e("code",[t._v("commission-max-rate")]),t._v(" and "),e("code",[t._v("commission-max-change-rate")]),t._v(" cannot be changed once your validator is up and running.")])]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": The "),e("code",[t._v("commission-rate")]),t._v(" value must adhere to the following rules:")]),t._v(" "),e("ul",[e("li",[t._v("Must be between 0 and the validator's "),e("code",[t._v("commission-max-rate")])]),t._v(" "),e("li",[t._v("Must not exceed the validator's "),e("code",[t._v("commission-max-change-rate")]),t._v(" which is maximum\n% point change rate "),e("strong",[t._v("per day")]),t._v(". In other words, a validator can only change\nits commission once per day and within "),e("code",[t._v("commission-max-change-rate")]),t._v(" bounds.")])]),t._v(" "),e("h2",{attrs:{id:"view-validator-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-validator-description"}},[t._v("#")]),t._v(" View Validator Description")]),t._v(" "),e("p",[t._v("View the validator's information with this command:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgc3Rha2luZyB2YWxpZGF0b3IgJmx0O2FjY291bnRfY29zbW9zJmd0Owo="}}),t._v(" "),e("h2",{attrs:{id:"track-validator-signing-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#track-validator-signing-information"}},[t._v("#")]),t._v(" Track Validator Signing Information")]),t._v(" "),e("p",[t._v("In order to keep track of a validator's signatures in the past you can do so by using the "),e("code",[t._v("signing-info")]),t._v(" command:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgc2xhc2hpbmcgc2lnbmluZy1pbmZvICZsdDt2YWxpZGF0b3ItcHVia2V5Jmd0O1wKICAtLWNoYWluLWlkPSZsdDtjaGFpbl9pZCZndDsK"}}),t._v(" "),e("h2",{attrs:{id:"unjail-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unjail-validator"}},[t._v("#")]),t._v(" Unjail Validator")]),t._v(" "),e("p",[t._v('When a validator is "jailed" for downtime, you must submit an '),e("code",[t._v("Unjail")]),t._v(" transaction from the operator account in order to be able to get block proposer rewards again (depends on the zone fee distribution).")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggc2xhc2hpbmcgdW5qYWlsIFwKCS0tZnJvbT0mbHQ7a2V5X25hbWUmZ3Q7IFwKCS0tY2hhaW4taWQ9Jmx0O2NoYWluX2lkJmd0Owo="}}),t._v(" "),e("h2",{attrs:{id:"confirm-your-validator-is-running"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#confirm-your-validator-is-running"}},[t._v("#")]),t._v(" Confirm Your Validator is Running")]),t._v(" "),e("p",[t._v("Your validator is active if the following command returns anything:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgdGVuZGVybWludC12YWxpZGF0b3Itc2V0IHwgZ3JlcCAmcXVvdDskKGdhaWFkIHRlbmRlcm1pbnQgc2hvdy1hZGRyZXNzKSZxdW90Owo="}}),t._v(" "),e("p",[t._v("You should now see your validator in one of the Cosmos Hub explorers. You are looking for the "),e("code",[t._v("bech32")]),t._v(" encoded "),e("code",[t._v("address")]),t._v(" in the "),e("code",[t._v("~/.gaia/config/priv_validator.json")]),t._v(" file.")]),t._v(" "),e("h2",{attrs:{id:"halting-your-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#halting-your-validator"}},[t._v("#")]),t._v(" Halting Your Validator")]),t._v(" "),e("p",[t._v("When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have your validator systematically and gracefully halt. You can achieve this by either setting the "),e("code",[t._v("halt-height")]),t._v(" to the height at which you want your node to shutdown or by passing the "),e("code",[t._v("--halt-height")]),t._v(" flag to "),e("code",[t._v("gaiad")]),t._v(". The node will shutdown with a zero exit code at that given height after committing\nthe block.")]),t._v(" "),e("h2",{attrs:{id:"advanced-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration"}},[t._v("#")]),t._v(" Advanced configuration")]),t._v(" "),e("p",[t._v("You can find more advanced information about running a node or a validator on the "),e("a",{attrs:{href:"https://docs.tendermint.com/v0.35/nodes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint Core documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"common-problems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-problems"}},[t._v("#")]),t._v(" Common Problems")]),t._v(" "),e("h3",{attrs:{id:"problem-1-my-validator-has-voting-power-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-1-my-validator-has-voting-power-0"}},[t._v("#")]),t._v(" Problem #1: My validator has "),e("code",[t._v("voting_power: 0")])]),t._v(" "),e("p",[t._v("Your validator has become jailed. Validators get jailed, i.e. get removed from the active validator set, if they do not vote on at least "),e("code",[t._v("500")]),t._v(" of the last "),e("code",[t._v("10,000")]),t._v(" blocks, or if they double sign.")]),t._v(" "),e("p",[t._v("If you got jailed for downtime, you can get your voting power back to your validator. First, if you're not using "),e("a",{attrs:{href:"https://docs.cosmos.network/master/run-node/cosmovisor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmovisor"),e("OutboundLink")],1),t._v(" and "),e("code",[t._v("gaiad")]),t._v(" is not running, start it up again:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),t._v(" "),e("p",[t._v("Wait for your full node to catch up to the latest block. Then, you can "),e("a",{attrs:{href:"#unjail-validator"}},[t._v("unjail your validator")])]),t._v(" "),e("p",[t._v("After you have submitted the unjail transaction, check your validator again to see if your voting power is back.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhdHVzCg=="}}),t._v(" "),e("p",[t._v("You may notice that your voting power is less than it used to be. That's because you got slashed for downtime!")]),t._v(" "),e("h3",{attrs:{id:"problem-2-my-gaiad-crashes-because-of-too-many-open-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-2-my-gaiad-crashes-because-of-too-many-open-files"}},[t._v("#")]),t._v(" Problem #2: My "),e("code",[t._v("gaiad")]),t._v(" crashes because of "),e("code",[t._v("too many open files")])]),t._v(" "),e("p",[t._v("The default number of files Linux can open (per-process) is "),e("code",[t._v("1024")]),t._v(". "),e("code",[t._v("gaiad")]),t._v(" is known to open more than "),e("code",[t._v("1024")]),t._v(" files. This causes the process to crash. A quick fix is to run "),e("code",[t._v("ulimit -n 4096")]),t._v(" (increase the number of open files allowed) and then restarting the process with "),e("code",[t._v("gaiad start")]),t._v(". If you are using "),e("code",[t._v("systemd")]),t._v(" or another process manager to launch "),e("code",[t._v("gaiad")]),t._v(" (such as "),e("a",{attrs:{href:"https://docs.cosmos.network/master/run-node/cosmovisor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmovisor"),e("OutboundLink")],1),t._v(") this may require some configuration at that level. A sample "),e("code",[t._v("systemd")]),t._v(" file to fix this issue is below:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyAvZXRjL3N5c3RlbWQvc3lzdGVtL2dhaWFkLnNlcnZpY2UKW1VuaXRdCkRlc2NyaXB0aW9uPUNvc21vcyBHYWlhIE5vZGUKQWZ0ZXI9bmV0d29yay50YXJnZXQKCltTZXJ2aWNlXQpUeXBlPXNpbXBsZQpVc2VyPXVidW50dQpXb3JraW5nRGlyZWN0b3J5PS9ob21lL3VidW50dQpFeGVjU3RhcnQ9L2hvbWUvdWJ1bnR1L2dvL2Jpbi9nYWlhZCBzdGFydApSZXN0YXJ0PW9uLWZhaWx1cmUKUmVzdGFydFNlYz0zCkxpbWl0Tk9GSUxFPTQwOTYKCltJbnN0YWxsXQpXYW50ZWRCeT1tdWx0aS11c2VyLnRhcmdldAo="}})],1)}),[],!1,null,null,null);a.default=i.exports}}]);
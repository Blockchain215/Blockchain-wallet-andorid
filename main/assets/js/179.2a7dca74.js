(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{588:function(v,d,_){"use strict";_.r(d);var e=_(1),s=Object(e.a)({},(function(){var v=this,d=v.$createElement,_=v._self._c||d;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"创世-genesis-文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创世-genesis-文件"}},[v._v("#")]),v._v(" 创世（Genesis）文件")]),v._v(" "),_("p",[v._v("本文档解释了 Cosmos Hub 主网的 genesis 文件是如何构建的。 它还解释了如何为自己的"),_("code",[v._v("gaia")]),v._v(" testnet 创建一个 genesis 文件。")]),v._v(" "),_("p",[v._v("请注意，您可以通过运行以下命令为您自己的 testnet 生成默认的 genesis 文件：")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgaW5pdCAmbHQ7bW9uaWtlciZndDsgLS1jaGFpbi1pZCAmbHQ7Y2hhaW4taWQmZ3Q7Cg=="}}),v._v(" "),_("p",[v._v("genesis 文件存储在 "),_("code",[v._v("~/.gaia/config/genesis.toml")]),v._v(".")]),v._v(" "),_("h2",{attrs:{id:"什么是创世文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是创世文件"}},[v._v("#")]),v._v(" 什么是创世文件")]),v._v(" "),_("p",[v._v("genesis 文件是一个 JSON 文件，用于定义区块链的初始状态。 它可以看作是区块链的高度“0”。 高度为“1”的第一个块将引用 genesis 文件作为其父级。")]),v._v(" "),_("p",[v._v("genesis 文件中定义的状态包含所有必要的信息，如初始令牌分配、创建时间、默认参数等。 我们来分别描述这些信息。")]),v._v(" "),_("h2",{attrs:{id:"genesis-时间和链id"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#genesis-时间和链id"}},[v._v("#")]),v._v(" Genesis 时间和链ID")]),v._v(" "),_("p",[_("code",[v._v("genesis_time")]),v._v("定义在 genesis 文件的顶部。 它是一个“UTC”时间戳，指示区块链何时启动。 此时，创世记验证人应该上线并开始参与共识过程。 当超过2/3的生成验证人（通过投票权加权）在线时，区块链启动。")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Z2VuZXNpc190aW1lJnF1b3Q7OiAmcXVvdDsyMDE5LTAzLTEzVDE3OjAwOjAwLjAwMDAwMDAwMFomcXVvdDssCg=="}}),v._v(" "),_("p",[_("code",[v._v("chain_id")]),v._v("是您的链的唯一标识符。 它有助于区分使用相同版本的软件的不同链。")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Y2hhaW5faWQmcXVvdDs6ICZxdW90O2Nvc21vc2h1Yi0xJnF1b3Q7LAo="}}),v._v(" "),_("h2",{attrs:{id:"共识参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#共识参数"}},[v._v("#")]),v._v(" 共识参数")]),v._v(" "),_("p",[v._v("接下来，创世文件定义共识参数。 共识参数覆盖与共识层相关的所有参数，"),_("code",[v._v("gaia")]),v._v(" 的共识层是 "),_("code",[v._v("Tendermint")]),v._v("。 我们来看看这些参数：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("block")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("max_bytes")]),v._v(": 每个块的最大字节数。")]),v._v(" "),_("li",[_("code",[v._v("max_gas")]),v._v(": 每个块的最大 gas 数量。 该区块中包含的每笔交易都会消耗一些 gas，包含在一个区块内的交易所使用的总 gas 不能超出。")])])]),v._v(" "),_("li",[_("code",[v._v("evidence")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("max_age")]),v._v(": 证据（evidence）是一种证明，表明验证者在同一高度（同一轮）签署了两个不同的区块。 这是一种明显的恶意行为，会在状态机层受到惩罚。 "),_("code",[v._v("max_age")]),v._v("定义"),_("strong",[v._v("块")]),v._v("的最大数量，在经过"),_("code",[v._v("max_age")]),v._v("块之后证据不再有效。")])])]),v._v(" "),_("li",[_("code",[v._v("validator")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("pub_key_types")]),v._v(": 可被验证人接受的公钥类型 (例如"),_("code",[v._v("ed25519")]),v._v(", "),_("code",[v._v("secp256k1")]),v._v(", ...) ，目前仅支持"),_("code",[v._v("ed25519")]),v._v("。")])])])]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Y29uc2Vuc3VzX3BhcmFtcyZxdW90OzogewogICAgJnF1b3Q7YmxvY2tfc2l6ZSZxdW90OzogewogICAgICAmcXVvdDttYXhfYnl0ZXMmcXVvdDs6ICZxdW90OzE1MDAwMCZxdW90OywKICAgICAgJnF1b3Q7bWF4X2dhcyZxdW90OzogJnF1b3Q7MTUwMDAwMCZxdW90OwogICAgfSwKICAgICZxdW90O2V2aWRlbmNlJnF1b3Q7OiB7CiAgICAgICZxdW90O21heF9hZ2UmcXVvdDs6ICZxdW90OzEwMDAwMDAmcXVvdDsKICAgIH0sCiAgICAmcXVvdDt2YWxpZGF0b3ImcXVvdDs6IHsKICAgICAgJnF1b3Q7cHViX2tleV90eXBlcyZxdW90OzogWwogICAgICAgICZxdW90O2VkMjU1MTkmcXVvdDsKICAgICAgXQogICAgfQogIH0sCg=="}}),v._v(" "),_("h2",{attrs:{id:"应用程序状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用程序状态"}},[v._v("#")]),v._v(" 应用程序状态")]),v._v(" "),_("p",[v._v("应用程序状态定义了状态机的初始状态。")]),v._v(" "),_("h3",{attrs:{id:"创世账号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创世账号"}},[v._v("#")]),v._v(" 创世账号")]),v._v(" "),_("p",[v._v("在本节中，定义了初始分配的 Token。 可以通过直接编辑 genesis 文件手动添加帐户，但也可以使用以下命令：")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ly8gRXhhbXBsZTogZ2FpYWQgYWRkLWdlbmVzaXMtYWNjb3VudCBjb3Ntb3MxcXM4dG53MnQ4bDZhbXR6dmRlbW5uc3E5ZHprMGFnMHozN2doM2ggMTAwMDAwMDB1YXRvbQoKZ2FpYWQgYWRkLWdlbmVzaXMtYWNjb3VudCAmbHQ7YWNjb3VudC1hZGRyZXNzJmd0OyAmbHQ7YW1vdW50Jmd0OyZsdDtkZW5vbSZndDsK"}}),v._v(" "),_("p",[v._v("这个命令在 "),_("code",[v._v("app_state.accounts")]),v._v(" 下创建一个条目。")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7YWNjb3VudHMmcXVvdDs6IFsKICAgICAgewogICAgICAgICZxdW90O2FkZHJlc3MmcXVvdDs6ICZxdW90O2Nvc21vczFxczh0bncydDhsNmFtdHp2ZGVtbm5zcTlkemswYWcwejM3Z2gzaCZxdW90OywKICAgICAgICAmcXVvdDtjb2lucyZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7MTAwMDAwMDAmcXVvdDsKICAgICAgICAgIH0KICAgICAgICBdLAogICAgICAgICZxdW90O3NlcXVlbmNlX251bWJlciZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICAgICAmcXVvdDthY2NvdW50X251bWJlciZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICAgICAmcXVvdDtvcmlnaW5hbF92ZXN0aW5nJnF1b3Q7OiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsyNjMwNjAwMDAwMCZxdW90OwogICAgICAgICAgfQogICAgICAgIF0sCiAgICAgICAgJnF1b3Q7ZGVsZWdhdGVkX2ZyZWUmcXVvdDs6IG51bGwsCiAgICAgICAgJnF1b3Q7ZGVsZWdhdGVkX3Zlc3RpbmcmcXVvdDs6IG51bGwsCiAgICAgICAgJnF1b3Q7c3RhcnRfdGltZSZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICAgICAmcXVvdDtlbmRfdGltZSZxdW90OzogJnF1b3Q7MTAwMDAmcXVvdDsKICAgICAgfQpdCg=="}}),v._v(" "),_("p",[v._v("让我们来分别解读这些参数：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("sequence_number")]),v._v(": 此编号用于计算此帐户发送的交易数。 每次事务包含在块中时它都会递增，并用于防止重放攻击，初始值为“0”。")]),v._v(" "),_("li",[_("code",[v._v("account_number")]),v._v(": 帐户的唯一标识符，它在包含此帐户的首次被打包到块的交易中生成。")]),v._v(" "),_("li",[_("code",[v._v("original_vesting")]),v._v(": 锁仓（Vesting） 由"),_("code",[v._v("gaia")]),v._v("原生支持。 您可以定义帐户需要锁仓 token 数量，这些 token 在一定时间之后才能流通。 锁仓中的 token 可用于委托。 默认值为“null”。")]),v._v(" "),_("li",[_("code",[v._v("delegated_free")]),v._v(": 在 vest 过期后可转让的委托 token 数量。在创世文件中，大部分情况是 "),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("delegated_vesting")]),v._v(": 锁仓中的 token 数量。在创世文件中，大部分情况是 "),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("start_time")]),v._v(": vesting 期开始区块高度。创世文件中，大部分情况是"),_("code",[v._v("0")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("end_time")]),v._v(": vesting 期结束区块高度。如果没有 token 在 vesting 期，这个值是"),_("code",[v._v("0")]),v._v("。")])]),v._v(" "),_("h3",{attrs:{id:"银行-bank"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#银行-bank"}},[v._v("#")]),v._v(" 银行（Bank）")]),v._v(" "),_("p",[_("code",[v._v("bank")]),v._v("模块负责 token。在本节中唯一 需要定义的参数是“转账”是否在创世文件启用。")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7YmFuayZxdW90OzogewogICAgICAmcXVvdDtzZW5kX2VuYWJsZWQmcXVvdDs6IGZhbHNlCiAgICB9Cg=="}}),v._v(" "),_("h3",{attrs:{id:"权益-staking"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#权益-staking"}},[v._v("#")]),v._v(" 权益（Staking）")]),v._v(" "),_("p",[_("code",[v._v("staking")]),v._v("模块处理状态机中的大多数 POS 逻辑。 此部分应如下所示：")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7c3Rha2luZyZxdW90OzogewogICAgICAmcXVvdDtwb29sJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7bm90X2JvbmRlZF90b2tlbnMmcXVvdDs6ICZxdW90OzEwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2JvbmRlZF90b2tlbnMmcXVvdDs6ICZxdW90OzAmcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7dW5ib25kaW5nX3RpbWUmcXVvdDs6ICZxdW90OzE4MTQ0MDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7bWF4X3ZhbGlkYXRvcnMmcXVvdDs6IDEwMCwKICAgICAgICAmcXVvdDttYXhfZW50cmllcyZxdW90OzogNywKICAgICAgICAmcXVvdDtib25kX2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtsYXN0X3RvdGFsX3Bvd2VyJnF1b3Q7OiAmcXVvdDswJnF1b3Q7LAogICAgICAmcXVvdDtsYXN0X3ZhbGlkYXRvcl9wb3dlcnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3ZhbGlkYXRvcnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O2JvbmRzJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDt1bmJvbmRpbmdfZGVsZWdhdGlvbnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3JlZGVsZWdhdGlvbnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O2V4cG9ydGVkJnF1b3Q7OiBmYWxzZQogICAgfQo="}}),v._v(" "),_("p",[v._v("让我们来分别解读这些参数：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("pool")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("not_bonded_tokens")]),v._v(": 在创世文件中没有绑定（即委托）的 token 数量。 通常情况下，它与权益 token （本例中是 "),_("code",[v._v("uatom")]),v._v("）的总供应量相等。")]),v._v(" "),_("li",[_("code",[v._v("bonded_tokens")]),v._v(": 在创世文件中绑定的 token 数量，通常是0。")])])]),v._v(" "),_("li",[_("code",[v._v("params")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("unbonding_time")]),v._v(": 以"),_("strong",[v._v("纳秒")]),v._v("为单位的解绑延迟时间。")]),v._v(" "),_("li",[_("code",[v._v("max_validators")]),v._v(": 最大验证人节点数量。")]),v._v(" "),_("li",[_("code",[v._v("max_entries")]),v._v(": 每对验证人和委托人之间可进行解委托、重新委托的最大条目数。")]),v._v(" "),_("li",[_("code",[v._v("bond_denom")]),v._v(": 权益代币符号。")])])]),v._v(" "),_("li",[_("code",[v._v("last_total_power")]),v._v(": 总投票权重。在创世文件通常是0（除非创世文件使用了之前的状态）。")]),v._v(" "),_("li",[_("code",[v._v("last_validator_powers")]),v._v(": 最后一个区块的状态中每个验证人的投票权重。在创世文件中通常是 null（除非创世文件使用了之前的状态）。")]),v._v(" "),_("li",[_("code",[v._v("validators")]),v._v(": 最后一个区块中的验证人列表。在创世文件中通常是 null（除非创世文件使用了之前的状态）。")]),v._v(" "),_("li",[_("code",[v._v("bonds")]),v._v(": 最后一个区块中的委托列表。在创世文件中通常是 null（除非创世文件使用了之前的状态）。")]),v._v(" "),_("li",[_("code",[v._v("unbonding_delegations")]),v._v(": 最后一个区块中的解绑委托列表。在创世文件中通常是 null（除非创世文件使用了之前的状态）。")]),v._v(" "),_("li",[_("code",[v._v("redelegations")]),v._v(": 最后一个区块中的重新委托列表。在创世文件中通常是 null（除非创世文件使用了之前的状态）。")]),v._v(" "),_("li",[_("code",[v._v("exported")]),v._v(": 创世文件是否是从之前的状态导出得到的。")])]),v._v(" "),_("h3",{attrs:{id:"挖矿-mint"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#挖矿-mint"}},[v._v("#")]),v._v(" 挖矿（Mint）")]),v._v(" "),_("p",[_("code",[v._v("mint")]),v._v("模块管理 token 供应的通胀逻辑。 创世文件中的"),_("code",[v._v("mint")]),v._v("部分如下所示：")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7bWludCZxdW90OzogewogICAgICAmcXVvdDttaW50ZXImcXVvdDs6IHsKICAgICAgICAmcXVvdDtpbmZsYXRpb24mcXVvdDs6ICZxdW90OzAuMDcwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2FubnVhbF9wcm92aXNpb25zJnF1b3Q7OiAmcXVvdDswLjAwMDAwMDAwMDAwMDAwMDAwMCZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IHsKICAgICAgICAmcXVvdDttaW50X2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgICAmcXVvdDtpbmZsYXRpb25fcmF0ZV9jaGFuZ2UmcXVvdDs6ICZxdW90OzAuMTMwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2luZmxhdGlvbl9tYXgmcXVvdDs6ICZxdW90OzAuMjAwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2luZmxhdGlvbl9taW4mcXVvdDs6ICZxdW90OzAuMDcwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2dvYWxfYm9uZGVkJnF1b3Q7OiAmcXVvdDswLjY3MDAwMDAwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtibG9ja3NfcGVyX3llYXImcXVvdDs6ICZxdW90OzYzMTE1MjAmcXVvdDsKICAgICAgfQogICAgfQo="}}),v._v(" "),_("p",[v._v("让我们来分别解读这些参数：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("minter")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("inflation")]),v._v("：总 token 供应量的年化通胀百分比，每周更新。值 “0.070000000000000000” 意味着目标是每年通货膨胀率为“7％”，每周重新计算一次。")]),v._v(" "),_("li",[_("code",[v._v("annual_provisions")]),v._v(": 每块重新计算。初始值是 "),_("code",[v._v("0.000000000000000000")]),v._v("。")])])]),v._v(" "),_("li",[_("code",[v._v("params")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("mint_denom")]),v._v(": 增发权益代币面值，此处是 "),_("code",[v._v("uatom")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("inflation_rate_change")]),v._v(": 通胀每年最大变化。")]),v._v(" "),_("li",[_("code",[v._v("inflation_max")]),v._v(": 最高通胀水平。")]),v._v(" "),_("li",[_("code",[v._v("inflation_min")]),v._v(": 最低通胀水平。")]),v._v(" "),_("li",[_("code",[v._v("goal_bonded")]),v._v(": 目标绑定量占总供应量百分比。如果委托 token 的百分比低于此目标，则通胀率会增加（在"),_("code",[v._v("inflation_rate_change")]),v._v("之后），直至达到"),_("code",[v._v("inflation_max")]),v._v("。 如果委托 token 的百分比高于此目标，则通胀率会下降（在"),_("code",[v._v("inflation_rate_change")]),v._v("之后），直至达到"),_("code",[v._v("inflation_min")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("blocks_per_year")]),v._v(": 每年出块量估算。用于计算出块收益中权益 token 的通胀部分（称之为块供给）。")])])])]),v._v(" "),_("h3",{attrs:{id:"分配-distribution"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分配-distribution"}},[v._v("#")]),v._v(" 分配（Distribution）")]),v._v(" "),_("p",[_("code",[v._v("distribution")]),v._v("模块处理每个块中发给验证人和委托人的挖矿及手续费的分配逻辑。 创世文件中的"),_("code",[v._v("distribution")]),v._v("部分如下所示：")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ICAgICZxdW90O2Rpc3RyaWJ1dGlvbiZxdW90OzogewogICAgICAmcXVvdDtmZWVfcG9vbCZxdW90OzogewogICAgICAgICZxdW90O2NvbW11bml0eV9wb29sJnF1b3Q7OiBudWxsCiAgICAgIH0sCiAgICAgICZxdW90O2NvbW11bml0eV90YXgmcXVvdDs6ICZxdW90OzAuMDIwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAmcXVvdDtiYXNlX3Byb3Bvc2VyX3Jld2FyZCZxdW90OzogJnF1b3Q7MC4wMTAwMDAwMDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICZxdW90O2JvbnVzX3Byb3Bvc2VyX3Jld2FyZCZxdW90OzogJnF1b3Q7MC4wNDAwMDAwMDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICZxdW90O3dpdGhkcmF3X2FkZHJfZW5hYmxlZCZxdW90OzogZmFsc2UsCiAgICAgICZxdW90O2RlbGVnYXRvcl93aXRoZHJhd19pbmZvcyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7cHJldmlvdXNfcHJvcG9zZXImcXVvdDs6ICZxdW90OyZxdW90OywKICAgICAgJnF1b3Q7b3V0c3RhbmRpbmdfcmV3YXJkcyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7dmFsaWRhdG9yX2FjY3VtdWxhdGVkX2NvbW1pc3Npb25zJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDt2YWxpZGF0b3JfaGlzdG9yaWNhbF9yZXdhcmRzJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDt2YWxpZGF0b3JfY3VycmVudF9yZXdhcmRzJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDtkZWxlZ2F0b3Jfc3RhcnRpbmdfaW5mb3MmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3ZhbGlkYXRvcl9zbGFzaF9ldmVudHMmcXVvdDs6IG51bGwKICAgIH0K"}}),v._v(" "),_("p",[v._v("让我们来分别解读这些参数：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("fee_pool")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("community_pool")]),v._v(": 用于支付奖励的 token 放在公共池中，它通过治理提案分配。在创世文件中通常是 null。")])])]),v._v(" "),_("li",[_("code",[v._v("community_tax")]),v._v(": 税率，即交易费和出块收益中需要放入公共池部分的百分比。")]),v._v(" "),_("li",[_("code",[v._v("base_proposer_reward")]),v._v(": 区块提议者在有效区块中收取的交易费用奖励的基础部分。 如果值为"),_("code",[v._v("0.010000000000000000")]),v._v("，则1％的费用将转给提议者。")]),v._v(" "),_("li",[_("code",[v._v("bonus_proposer_reward")]),v._v(": 如果区块提议者收集了 2/3 （该块有效的最小值）加权投票的预提交，则获得 "),_("code",[v._v("base_proposer_reward")]),v._v(" 奖励。  如果区块提议者收集了100％加权投票的预提交，则奖励会再线性增加"),_("code",[v._v("bonus_proposer_reward")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("withdraw_addr_enabled")]),v._v(": 如果是"),_("code",[v._v("true")]),v._v("，委托人可以设置不同的地址来取回他们的奖励。 如果要在创世时禁用转账，则要设置为"),_("code",[v._v("false")]),v._v("，因为它可以绕过转账限制。")]),v._v(" "),_("li",[_("code",[v._v("delegator_withdraw_infos")]),v._v(": 委托人收益地址列表。 如果没有从之前的状态导出，一般是"),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("previous_proposer")]),v._v(': 上一个块的提议者，  如果没有从之前的状态导出，则设置为""。')]),v._v(" "),_("li",[_("code",[v._v("outstanding_rewards")]),v._v(": 未付（未提取）奖励。如果没有从之前的状态导出，设置为"),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("validator_accumulated_commission")]),v._v(": 未付（未提取）验证人佣金。如果没有从之前的状态导出，设置为"),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("validator_historical_rewards")]),v._v(": 验证人的历史奖励相关的信息，由"),_("code",[v._v("distribution")]),v._v("模块用于各种计算。 如果没有从之前的状态导出，设置为"),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("validators_current_rewards")]),v._v(": 验证人的当前奖励相关的信息，由"),_("code",[v._v("distribution")]),v._v("模块用于各种计算。 如果没有从之前的状态导出，设置为"),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("delegator_starting_infos")]),v._v(": Tracks the previous validator period, the delegation's amount of staking token, and the creation height (to check later on if any slashes have occurred). 跟踪先前的验证人时期，委托的 token 数量和创建高度（稍后检查是否发生了需要惩罚的事件）。  如果没有从之前的状态导出，设置为"),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("validator_slash_events")]),v._v(": Set of information related to the past slashing of validators. Set to "),_("code",[v._v("null")]),v._v(" if genesis was not exported from previous state. 过往验证人惩罚事件相关的信息集。 如果没有从之前的状态导出，设置为"),_("code",[v._v("null")]),v._v("。")])]),v._v(" "),_("h3",{attrs:{id:"治理-governance"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#治理-governance"}},[v._v("#")]),v._v(" 治理（Governance）")]),v._v(" "),_("p",[_("code",[v._v("gov")]),v._v("模块处理所有与治理相关的事务。 "),_("code",[v._v("gov")]),v._v("部分的初始状态如下所示：")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Z292JnF1b3Q7OiB7CiAgICAgICZxdW90O3N0YXJ0aW5nX3Byb3Bvc2FsX2lkJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7LAogICAgICAmcXVvdDtkZXBvc2l0cyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7dm90ZXMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3Byb3Bvc2FscyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7ZGVwb3NpdF9wYXJhbXMmcXVvdDs6IHsKICAgICAgICAmcXVvdDttaW5fZGVwb3NpdCZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7NTEyMDAwMDAwJnF1b3Q7CiAgICAgICAgICB9CiAgICAgICAgXSwKICAgICAgICAmcXVvdDttYXhfZGVwb3NpdF9wZXJpb2QmcXVvdDs6ICZxdW90OzEyMDk2MDAwMDAwMDAwMDAmcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7dm90aW5nX3BhcmFtcyZxdW90OzogewogICAgICAgICZxdW90O3ZvdGluZ19wZXJpb2QmcXVvdDs6ICZxdW90OzEyMDk2MDAwMDAwMDAwMDAmcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7dGFsbHlfcGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7cXVvcnVtJnF1b3Q7OiAmcXVvdDswLjQmcXVvdDssCiAgICAgICAgJnF1b3Q7dGhyZXNob2xkJnF1b3Q7OiAmcXVvdDswLjUmcXVvdDssCiAgICAgICAgJnF1b3Q7dmV0byZxdW90OzogJnF1b3Q7MC4zMzQmcXVvdDssCiAgICAgICAgJnF1b3Q7Z292ZXJuYW5jZV9wZW5hbHR5JnF1b3Q7OiAmcXVvdDswLjAmcXVvdDsKICAgICAgfQogICAgfQo="}}),v._v(" "),_("p",[v._v("让我们来分别解读这些参数：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("starting_proposal_id")]),v._v(": 此参数定义第一个提案的ID，每个提案都由唯一ID标识。")]),v._v(" "),_("li",[_("code",[v._v("deposits")]),v._v(": 每个提案 ID 的保证金列表。如果没有从之前的状态导出，设置为"),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("votes")]),v._v(": 每个提案 ID 的投票列表。 如果没有从之前的状态导出，设置为"),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("proposals")]),v._v(": 所有提案列表。如果没有从之前的状态导出，设置为"),_("code",[v._v("null")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("deposit_params")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("min_deposit")]),v._v(": 使提案进入投票期的最小抵押数量，如果提供了多种面值，满足其一即可。")]),v._v(" "),_("li",[_("code",[v._v("max_deposit_period")]),v._v(": 最长抵押等待时间（单位"),_("strong",[v._v("纳秒")]),v._v("），之后就不能再进行抵押了。")])])]),v._v(" "),_("li",[_("code",[v._v("voting_params")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("voting_period")]),v._v(": 投票期时长（单位"),_("strong",[v._v("纳秒")]),v._v("）。")])])]),v._v(" "),_("li",[_("code",[v._v("tally_params")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("quorum")]),v._v(": 提议生效所需的投票数占总抵押数的最小百分比。")]),v._v(" "),_("li",[_("code",[v._v("threshold")]),v._v(": 提议生效所需 "),_("code",[v._v("YES")]),v._v(" 票占总投票数的最小百分比。")]),v._v(" "),_("li",[_("code",[v._v("veto")]),v._v(": 提议生效所需"),_("code",[v._v("NO_WITH_VETO")]),v._v(" 票占总投票数的最大百分比.")]),v._v(" "),_("li",[_("code",[v._v("governance_penalty")]),v._v(": 对未给特定提案进行投票的验证人的处罚。")])])])]),v._v(" "),_("h3",{attrs:{id:"惩罚-slashing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#惩罚-slashing"}},[v._v("#")]),v._v(" 惩罚（Slashing ）")]),v._v(" "),_("p",[v._v("The "),_("code",[v._v("slashing")]),v._v(" module handles the logic to slash delegators if their validator misbehave. The "),_("code",[v._v("slashing")]),v._v(" section in genesis looks as follows:")]),v._v(" "),_("p",[_("code",[v._v("slashing")]),v._v("模块处理对验证人行为不当的惩罚逻辑。 创世文件中的"),_("code",[v._v("slashing")]),v._v("部分如下：")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7c2xhc2hpbmcmcXVvdDs6IHsKICAgICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7bWF4X2V2aWRlbmNlX2FnZSZxdW90OzogJnF1b3Q7MTgxNDQwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtzaWduZWRfYmxvY2tzX3dpbmRvdyZxdW90OzogJnF1b3Q7MTAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7bWluX3NpZ25lZF9wZXJfd2luZG93JnF1b3Q7OiAmcXVvdDswLjA1MDAwMDAwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtkb3dudGltZV9qYWlsX2R1cmF0aW9uJnF1b3Q7OiAmcXVvdDs2MDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7c2xhc2hfZnJhY3Rpb25fZG91YmxlX3NpZ24mcXVvdDs6ICZxdW90OzAuMDUwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O3NsYXNoX2ZyYWN0aW9uX2Rvd250aW1lJnF1b3Q7OiAmcXVvdDswLjAwMDEwMDAwMDAwMDAwMDAwMCZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtzaWduaW5nX2luZm9zJnF1b3Q7OiB7fSwKICAgICAgJnF1b3Q7bWlzc2VkX2Jsb2NrcyZxdW90Ozoge30KICAgIH0K"}}),v._v(" "),_("p",[v._v("让我们来分别解读这些参数：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("params")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("max_evidence_age")]),v._v(": 证据最长有效期，单位 "),_("strong",[v._v("纳秒")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("signed_blocks_window")]),v._v(": 用于检验验证人节点可用性的滑动窗口，（单位"),_("strong",[v._v("块")]),v._v("）。")]),v._v(" "),_("li",[_("code",[v._v("min_signed_per_window")]),v._v(": 在滑动窗口中预提交的数量少于此值，认为验证人节点可用性差。")]),v._v(" "),_("li",[_("code",[v._v("downtime_jail_duration")]),v._v(": 验证人节点因可用性差被关监狱后，在监狱中被关的时间（"),_("strong",[v._v("纳秒")]),v._v("）。")]),v._v(" "),_("li",[_("code",[v._v("slash_fraction_double_sign")]),v._v(": 验证人节点双签时，需缴纳罚金占总委托数量的百分比。")]),v._v(" "),_("li",[_("code",[v._v("slash_fraction_downtime")]),v._v(": 验证人节点可用性差时，需缴纳罚金占总委托数量的百分比。")])])]),v._v(" "),_("li",[_("code",[v._v("signing_infos")]),v._v(":"),_("code",[v._v("slashing")]),v._v(" 模块所需的每个验证人节点的各种信息。如果没有从之前的状态导出，设置为"),_("code",[v._v("{}")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("missed_blocks")]),v._v(": "),_("code",[v._v("slashing")]),v._v(" 模块所需的与丢块相关的各种信息。如果没有从之前的状态导出，设置为"),_("code",[v._v("{}")]),v._v("。")])]),v._v(" "),_("h3",{attrs:{id:"创世交易-genesis-transactions"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创世交易-genesis-transactions"}},[v._v("#")]),v._v(" 创世交易（Genesis Transactions）")]),v._v(" "),_("p",[v._v("默认情况下，genesis文件不包含任何"),_("code",[v._v("gentxs")]),v._v("。 "),_("code",[v._v("gentx")]),v._v("是一种交易，在创世文件中的将"),_("code",[v._v("accounts")]),v._v("下的 token 委托给验证人节点，本质上就是在创世时创建验证人。 在"),_("code",[v._v("genesis_time")]),v._v("之后，一旦有超过 2/3 的验证人（加权投票）作为有效"),_("code",[v._v("gentx")]),v._v("的接收者上线，该链就会启动。")]),v._v(" "),_("p",[v._v("可以手动将"),_("code",[v._v("gentx")]),v._v("添加到genesis文件，或通过以下命令：")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29sbGVjdC1nZW50eHMK"}}),v._v(" "),_("p",[v._v("此命令将存储在"),_("code",[v._v("~/.gaia/config/gentx")]),v._v("中的所有"),_("code",[v._v("gentxs")]),v._v("添加到genesis文件中。 要创建创世纪交易，请单击"),_("RouterLink",{attrs:{to:"/zh/resources/validators/validator-setup.html#participation-in-genesis-as-a-validator"}},[v._v("此处")]),v._v("。\n")],1)],1)}),[],!1,null,null,null);d.default=s.exports}}]);
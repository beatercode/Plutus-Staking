export const stake1_address = "0x3b6eb879BBF2d90AecBb3A34C3a654f6e5Cb6C2f";
export const stake2_address = "0x3b6eb879BBF2d90AecBb3A34C3a654f6e5Cb6C2f";
export const stake3_address = "0x3b6eb879BBF2d90AecBb3A34C3a654f6e5Cb6C2f";
export const stake4_address = "0x3b6eb879BBF2d90AecBb3A34C3a654f6e5Cb6C2f"; //WBTC
export const stake5_address = "0x3b6eb879BBF2d90AecBb3A34C3a654f6e5Cb6C2f"; //PLSX
export const stake6_address = "0x3b6eb879BBF2d90AecBb3A34C3a654f6e5Cb6C2f"; //PLUTUS

export const Stake1_token_Address = "0x3501e336C5C07BfD214e69A700f2505D02D0e8F4";
export const Stake2_token_Address = "0x3501e336C5C07BfD214e69A700f2505D02D0e8F4";
export const Stake3_token_Address = "0x3501e336C5C07BfD214e69A700f2505D02D0e8F4";
export const Stake4_token_Address = "0x3501e336C5C07BfD214e69A700f2505D02D0e8F4";
export const Stake5_token_Address = "0x3501e336C5C07BfD214e69A700f2505D02D0e8F4";
export const Stake6_token_Address = "0x3501e336C5C07BfD214e69A700f2505D02D0e8F4";

export const stake1_abi = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      { type: "address", name: "_rewardToken", internalType: "address" },
      { type: "address", name: "_addrFee20", internalType: "address" },
      { type: "address", name: "_addrFee80", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "bool", name: "success", internalType: "bool" }],
    name: "Stake",
    inputs: [
      { type: "address", name: "lp_token", internalType: "address" },
      { type: "uint256", name: "_investedamount", internalType: "uint256" },
      { type: "uint256", name: "choose_val", internalType: "uint256" },
    ],
  },
  { type: "function", stateMutability: "view", outputs: [{ type: "uint256", name: "", internalType: "uint256" }], name: "Total_allowed_tokens", inputs: [] },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "add_allowed_token",
    inputs: [
      { type: "string", name: "_pairName", internalType: "string" },
      { type: "address", name: "_plp_Add", internalType: "address" },
    ],
  },
  { type: "function", stateMutability: "view", outputs: [{ type: "address", name: "", internalType: "address" }], name: "addrFee20", inputs: [] },
  { type: "function", stateMutability: "view", outputs: [{ type: "address", name: "", internalType: "address" }], name: "addrFee80", inputs: [] },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "all_staked_lp",
    inputs: [
      { type: "address", name: "", internalType: "address" },
      { type: "uint256", name: "", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "string", name: "pairName", internalType: "string" },
      { type: "address", name: "plp_add", internalType: "address" },
      { type: "uint256", name: "my_balance", internalType: "uint256" },
    ],
    name: "allowed_tokens",
    inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
  },
  { type: "function", stateMutability: "view", outputs: [{ type: "address", name: "", internalType: "contract IConverter" }], name: "converter", inputs: [] },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "timeframe", internalType: "uint256" },
      { type: "uint256", name: "APR", internalType: "uint256" },
    ],
    name: "details",
    inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "tuple[]",
        name: "tokens",
        internalType: "struct Plutus_Prc20_Pool.allowed_token[]",
        components: [
          { type: "string", name: "pairName", internalType: "string" },
          { type: "address", name: "plp_add", internalType: "address" },
          { type: "uint256", name: "my_balance", internalType: "uint256" },
        ],
      },
    ],
    name: "getAll_allowedTokens",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "tuple[]",
        name: "",
        internalType: "struct Plutus_Prc20_Pool.allInvestments[]",
        components: [
          { type: "uint256", name: "investedAmount", internalType: "uint256" },
          { type: "uint256", name: "withdrawnTime", internalType: "uint256" },
          { type: "uint256", name: "DepositTime", internalType: "uint256" },
          { type: "uint256", name: "investmentNum", internalType: "uint256" },
          { type: "uint256", name: "unstakeTime", internalType: "uint256" },
          { type: "bool", name: "unstake", internalType: "bool" },
          { type: "uint256", name: "reward", internalType: "uint256" },
          { type: "uint256", name: "apr", internalType: "uint256" },
          { type: "uint256", name: "timeframe", internalType: "uint256" },
        ],
      },
    ],
    name: "getAll_investments",
    inputs: [{ type: "address", name: "lp_token", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "tuple[]",
        name: "Invested",
        internalType: "struct Plutus_Prc20_Pool.allInvestments[]",
        components: [
          { type: "uint256", name: "investedAmount", internalType: "uint256" },
          { type: "uint256", name: "withdrawnTime", internalType: "uint256" },
          { type: "uint256", name: "DepositTime", internalType: "uint256" },
          { type: "uint256", name: "investmentNum", internalType: "uint256" },
          { type: "uint256", name: "unstakeTime", internalType: "uint256" },
          { type: "bool", name: "unstake", internalType: "bool" },
          { type: "uint256", name: "reward", internalType: "uint256" },
          { type: "uint256", name: "apr", internalType: "uint256" },
          { type: "uint256", name: "timeframe", internalType: "uint256" },
        ],
      },
    ],
    name: "getAll_investments_ForReward",
    inputs: [{ type: "address", name: "lp_token", internalType: "address" }],
  },
  { type: "function", stateMutability: "view", outputs: [{ type: "uint256", name: "", internalType: "uint256" }], name: "getReward", inputs: [] },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getTotalInvestment",
    inputs: [{ type: "address", name: "lp_token", internalType: "address" }],
  },
  { type: "function", stateMutability: "view", outputs: [{ type: "uint256", name: "", internalType: "uint256" }], name: "get_currTime", inputs: [] },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "get_perInv_Reward",
    inputs: [
      { type: "address", name: "lp_token", internalType: "address" },
      { type: "uint256", name: "invest_no", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isUser",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  { type: "function", stateMutability: "view", outputs: [{ type: "address", name: "", internalType: "address" }], name: "owner", inputs: [] },
  { type: "function", stateMutability: "view", outputs: [{ type: "uint256", name: "", internalType: "uint256" }], name: "per_day_divider", inputs: [] },
  { type: "function", stateMutability: "view", outputs: [{ type: "address", name: "", internalType: "address" }], name: "rewardToken", inputs: [] },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setConverter",
    inputs: [{ type: "address", name: "_converter", internalType: "contract IConverter" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setRewardToken",
    inputs: [{ type: "address", name: "_rewardToken", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "total_withdrawReward",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "total_withdraw_reaward",
    inputs: [{ type: "address", name: "lp_token", internalType: "address" }],
  },
  { type: "function", stateMutability: "view", outputs: [{ type: "uint256", name: "", internalType: "uint256" }], name: "totalbusiness", inputs: [] },
  { type: "function", stateMutability: "view", outputs: [{ type: "uint256", name: "", internalType: "uint256" }], name: "totalusers", inputs: [] },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferOwnership",
    inputs: [{ type: "address", name: "_owner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "bool", name: "success", internalType: "bool" }],
    name: "unStake",
    inputs: [
      { type: "uint256", name: "num", internalType: "uint256" },
      { type: "address", name: "lp_token", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "noOfInvestment", internalType: "uint256" },
      { type: "uint256", name: "totalInvestment", internalType: "uint256" },
      { type: "uint256", name: "totalWithdraw_reward", internalType: "uint256" },
      { type: "bool", name: "investBefore", internalType: "bool" },
    ],
    name: "user",
    inputs: [
      { type: "address", name: "", internalType: "address" },
      { type: "address", name: "", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "withdrawFunds",
    inputs: [
      { type: "address", name: "token_Add", internalType: "address" },
      { type: "uint256", name: "_amount", internalType: "uint256" },
    ],
  },
  { type: "function", stateMutability: "nonpayable", outputs: [{ type: "bool", name: "success", internalType: "bool" }], name: "withdrawReward", inputs: [] },
];
export const stake2_3_abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_investedamount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "choose_val",
        type: "uint256",
      },
    ],
    name: "Stake",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "unStake",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawReward",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "All_investors",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "details",
    outputs: [
      {
        internalType: "uint256",
        name: "timeframe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "APR",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_currTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_TotalReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "get_withdrawnTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAll_investments",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "investedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawnTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "DepositTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "investmentNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unstakeTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "unstake",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "reward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframe",
            type: "uint256",
          },
        ],
        internalType: "struct plutus_wPLS_WBTC_Pool.allInvestments[]",
        name: "Invested",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAll_investments_ForReward",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "investedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawnTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "DepositTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "investmentNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unstakeTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "unstake",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "reward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframe",
            type: "uint256",
          },
        ],
        internalType: "struct plutus_wPLS_WBTC_Pool.allInvestments[]",
        name: "Invested",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "getReward_perInv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalInvestment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isUser",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "per_day_divider",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "total_withdraw_reaward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalbusiness",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalusers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "user",
    outputs: [
      {
        internalType: "uint256",
        name: "noOfInvestment",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalInvestment",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalWithdraw_reward",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "investBefore",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "user_investments",
    outputs: [
      {
        internalType: "uint256",
        name: "investedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawnTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "DepositTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "investmentNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "unstake",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "apr",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeframe",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const token_abi = [
  { type: "constructor", stateMutability: "nonpayable", payable: false, inputs: [] },
  {
    type: "event",
    name: "Approval",
    inputs: [
      { type: "address", name: "owner", internalType: "address", indexed: true },
      { type: "address", name: "spender", internalType: "address", indexed: true },
      { type: "uint256", name: "value", internalType: "uint256", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Burn",
    inputs: [
      { type: "address", name: "sender", internalType: "address", indexed: true },
      { type: "uint256", name: "amount0", internalType: "uint256", indexed: false },
      { type: "uint256", name: "amount1", internalType: "uint256", indexed: false },
      { type: "address", name: "to", internalType: "address", indexed: true },
      { type: "address", name: "senderOrigin", internalType: "address", indexed: true },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Mint",
    inputs: [
      { type: "address", name: "sender", internalType: "address", indexed: true },
      { type: "uint256", name: "amount0", internalType: "uint256", indexed: false },
      { type: "uint256", name: "amount1", internalType: "uint256", indexed: false },
      { type: "address", name: "senderOrigin", internalType: "address", indexed: true },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Swap",
    inputs: [
      { type: "address", name: "sender", internalType: "address", indexed: true },
      { type: "uint256", name: "amount0In", internalType: "uint256", indexed: false },
      { type: "uint256", name: "amount1In", internalType: "uint256", indexed: false },
      { type: "uint256", name: "amount0Out", internalType: "uint256", indexed: false },
      { type: "uint256", name: "amount1Out", internalType: "uint256", indexed: false },
      { type: "address", name: "to", internalType: "address", indexed: true },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Sync",
    inputs: [
      { type: "uint112", name: "reserve0", internalType: "uint112", indexed: false },
      { type: "uint112", name: "reserve1", internalType: "uint112", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { type: "address", name: "from", internalType: "address", indexed: true },
      { type: "address", name: "to", internalType: "address", indexed: true },
      { type: "uint256", name: "value", internalType: "uint256", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "bytes32", name: "", internalType: "bytes32" }],
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "MINIMUM_LIQUIDITY",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "bytes32", name: "", internalType: "bytes32" }],
    name: "PERMIT_TYPEHASH",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "allowance",
    inputs: [
      { type: "address", name: "", internalType: "address" },
      { type: "address", name: "", internalType: "address" },
    ],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "approve",
    inputs: [
      { type: "address", name: "spender", internalType: "address" },
      { type: "uint256", name: "value", internalType: "uint256" },
    ],
    constant: false,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "balanceOf",
    inputs: [{ type: "address", name: "", internalType: "address" }],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [
      { type: "uint256", name: "amount0", internalType: "uint256" },
      { type: "uint256", name: "amount1", internalType: "uint256" },
    ],
    name: "burn",
    inputs: [
      { type: "address", name: "to", internalType: "address" },
      { type: "address", name: "senderOrigin", internalType: "address" },
    ],
    constant: false,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
    name: "decimals",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "factory",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [
      { type: "uint112", name: "_reserve0", internalType: "uint112" },
      { type: "uint112", name: "_reserve1", internalType: "uint112" },
      { type: "uint32", name: "_blockTimestampLast", internalType: "uint32" },
    ],
    name: "getReserves",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [],
    name: "initialize",
    inputs: [
      { type: "address", name: "_token0", internalType: "address" },
      { type: "address", name: "_token1", internalType: "address" },
    ],
    constant: false,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "kLast",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "uint256", name: "liquidity", internalType: "uint256" }],
    name: "mint",
    inputs: [
      { type: "address", name: "to", internalType: "address" },
      { type: "address", name: "senderOrigin", internalType: "address" },
    ],
    constant: false,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "name",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "nonces",
    inputs: [{ type: "address", name: "", internalType: "address" }],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [],
    name: "permit",
    inputs: [
      { type: "address", name: "owner", internalType: "address" },
      { type: "address", name: "spender", internalType: "address" },
      { type: "uint256", name: "value", internalType: "uint256" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
      { type: "uint8", name: "v", internalType: "uint8" },
      { type: "bytes32", name: "r", internalType: "bytes32" },
      { type: "bytes32", name: "s", internalType: "bytes32" },
    ],
    constant: false,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "price0CumulativeLast",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "price1CumulativeLast",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [],
    name: "skim",
    inputs: [{ type: "address", name: "to", internalType: "address" }],
    constant: false,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [],
    name: "swap",
    inputs: [
      { type: "uint256", name: "amount0Out", internalType: "uint256" },
      { type: "uint256", name: "amount1Out", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "bytes", name: "data", internalType: "bytes" },
    ],
    constant: false,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "symbol",
    inputs: [],
    constant: true,
  },
  { type: "function", stateMutability: "nonpayable", payable: false, outputs: [], name: "sync", inputs: [], constant: false },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "token0",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "token1",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalSupply",
    inputs: [],
    constant: true,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "transfer",
    inputs: [
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "value", internalType: "uint256" },
    ],
    constant: false,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "transferFrom",
    inputs: [
      { type: "address", name: "from", internalType: "address" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "value", internalType: "uint256" },
    ],
    constant: false,
  },
];

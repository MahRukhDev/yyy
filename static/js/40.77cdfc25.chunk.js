(this["webpackJsonp@sheepdex/interface"] =
  this["webpackJsonp@sheepdex/interface"] || []).push([
  [40],
  {
    1037: function (e, o) {
      e.exports = {
        messages: {
          $: "$",
          "$-": "$-",
          "${0}": ["$", ["0"]],
          "${0} ETH": ["$", ["0"], " ETH"],
          "(Max)": "(\u6700\u5927\u503c)",
          "(claim)": "(\u9818\u53d6)",
          "(clear all)": "(\u5168\u90e8\u6e05\u9664)",
          "(edit)": "(\u7de8\u8f2f)",
          "+{feeAmountFormatted}%": ["+", ["feeAmountFormatted"], "%"],
          "- Remove send": "- \u522a\u9664\u767c\u9001",
          "-{feeAmountFormatted}%": [["feeAmountFormatted"], "%"],
          "0 BUBBLES / week": "0 BUBBLES \u4ee3\u5e63 / \u6bcf\u5468",
          "0 UNI / week": "0 UNI / week",
          "0.05% fee": "0.05% \u624b\u7e8c\u8cbb",
          "0.1% fee": "0.1% \u624b\u7e8c\u8cbb",
          "0.2% fee": "0.2% \u624b\u7e8c\u8cbb",
          "0.5% fee": "0.5% \u624b\u7e8c\u8cbb",
          "1% fee": "1% \u624b\u7e8c\u8cbb",
          "24H Trading Volume": "24\u5c0f\u65f6\u4ea4\u6613\u91cf",
          "25%": "25%",
          "50%": "50%",
          "75%": "75%",
          "<0/> All Proposals": "<0/> \u6240\u6709\u63d0\u6848",
          "<0/> Votes": "<0/> \u6295\u7968",
          "<0>Account analytics and accrued fees</0><1> \u2197 </1>":
            "<0>\u5e33\u6236\u5206\u6790\u548c\u5df2\u7d2f\u7a4d\u7684\u624b\u7e8c\u8cbb</0><1>\u2197</1>",
          "<0>Back to </0>V3": "<0>\u8fd4\u56de</0>V3",
          "<0>Current Price:</0><1><2/></1><3>{0} per {1}</3>": [
            "<0>Current Price:</0><1><2/></1><3>",
            ["0"],
            " per ",
            ["1"],
            "</3>",
          ],
          "<0>Tip:</0> Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.":
            "<0>\u63d0\u793a\uff1a</0>\u9000\u51fa\u8cc7\u91d1\u6c60\uff0c\u6309\u7167\u7576\u524d\u532f\u7387\u5c07\u60a8\u7684\u8cc7\u91d1\u6c60\u4efd\u984d\u8f49\u63db\u56de\u539f\u672c\u4ee3\u5e63\u3002\u60a8\u6536\u5230\u7684\u4ee3\u5e63\u6578\u984d\u4e2d\u5c07\u5305\u542b\u5df2\u7d2f\u8a08\u7684\u624b\u7e8c\u8cbb\u3002",
          "<0>Tip:</0> Select an action and describe your proposal for the community. The proposal cannot be modified after submission, so please verify all information before submitting. The voting period will begin immediately and last for 7 days. To propose a custom action, <1>read the docs</1>.":
            "<0>\u63d0\u793a\uff1a</0>\u9078\u64c7\u4e00\u9805\u884c\u52d5\u4e26\u63cf\u8ff0\u60a8\u5c0d\u793e\u5340\u7684\u5efa\u8b70\u3002\u63d0\u6848\u63d0\u4ea4\u5f8c\u7121\u6cd5\u4fee\u6539\uff0c\u63d0\u4ea4\u524d\u8acb\u6838\u5c0d\u6240\u6709\u4fe1\u606f\u3002\u6295\u7968\u671f\u5c07\u7acb\u5373\u958b\u59cb\uff0c\u6301\u7e8c 7 \u5929\u3002\u8981\u63d0\u51fa\u81ea\u5b9a\u7fa9\u64cd\u4f5c\uff0c<1>\u95b1\u8b80\u6587\u6a94</1>.",
          "<0>Tip:</0> Use this tool to find v2 pools that don't automatically appear in the interface.":
            "<0>\u63d0\u793a\uff1a</0>\u4f7f\u7528\u6b64\u5de5\u5177\u53ef\u67e5\u627e\u672a\u81ea\u52d5\u51fa\u73fe\u5728\u754c\u9762\u4e2d\u7684 v2 \u6c60\u3002",
          "<0>Tip:</0> When you add liquidity, you will receive pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.":
            "<0>\u63d0\u793a\uff1a</0>\u7576\u60a8\u8a3b\u5165\u6d41\u52d5\u8cc7\u91d1\u6642\uff0c\u60a8\u5c07\u6536\u5230\u4ee3\u8868\u60a8\u4efd\u984d\u7684\u6d41\u52d5\u6c60\u4ee3\u5e63\u3002\u9019\u4e9b\u4ee3\u5e63\u5c07\u6839\u64da\u60a8\u5728\u6c60\u4e2d\u6240\u5360\u4efd\u984d\uff0c\u81ea\u52d5\u8cfa\u53d6\u548c\u7d2f\u8a08\u76f8\u7a31\u7684\u624b\u7e8c\u8cbb\uff0c\u4e26\u4e14\u53ef\u4ee5\u96a8\u6642\u8d16\u56de\u6d41\u52d5\u6c60\u5e63\u5c0d\u3002",
          "<0>Unlock voting</0> to prepare for the next proposal.":
            "<0>\u89e3\u9396\u6295\u7968</0>\uff0c\u4ee5\u6e96\u5099\u4e0b\u4e00\u500b\u63d0\u6848\u3002",
          "<0>\ud83c\udf89 </0>Welcome to team Unicorn :) <1>\ud83c\udf89</1>":
            "<0>\ud83c\udf89</0>\u6b61\u8fce\u52a0\u5165Unicorn\uff08\u7368\u89d2\u7378\uff09\u5718\u968a :) <1>\ud83c\udf89</1>",
          "A minimum threshold of 0.25% of the total BUBBLES supply is required to submit proposals":
            "\u63d0\u4ea4\u63d0\u6848\u6240\u9700\u7684\u6700\u4f4e\u9580\u6abb\u70ba BUBBLES \u7e3d\u4f9b\u61c9\u91cf\u7684 0.25%",
          "A minimum threshold of 0.25% of the total UNI supply is required to submit proposals":
            "A minimum threshold of 0.25% of the total UNI supply is required to submit proposals",
          APR: "APR",
          "APR is an estimated average value. It varies depending on the range order of LPs positions":
            "\u8a72\u6578\u503c\u50c5\u70ba\u5e73\u5747\u503c\uff0c\u6703\u56e0\u500b\u4eba\u5009\u4f4d\u5340\u9593\u4e0d\u540c\u800c\u8b8a\u5316\u3002",
          "APR is calculated based on the 24H fee, and this data is only an estimate.":
            "APR\u6839\u64da24H\u624b\u7e8c\u8cbb\u8a08\u7b97\u5f97\u51fa\uff0c\u8a72\u6578\u64da\u50c5\u70ba\u9810\u4f30\u503c\u3002",
          About: "\u95dc\u65bc",
          Accept: "\u63a5\u53d7",
          Account: "\u5e33\u6236",
          Active: "\u555f\u7528",
          Add: "\u65b0\u589e",
          "Add Delegate +": "\u6dfb\u52a0\u59d4\u6258 +",
          "Add Liquidity": "\u8a3b\u5165\u6d41\u52d5\u8cc7\u91d1",
          "Add Liquidity.": "\u8a3b\u5165\u6d41\u52d5\u8cc7\u91d1",
          "Add V2 Liquidity": "\u8a3b\u5165 V2 \u6d41\u52d5\u8cc7\u91d1",
          "Add liquidity.": "\u8a3b\u5165\u6d41\u52d5\u8cc7\u91d1\u3002",
          "Add more liquidity": "\u6dfb\u52a0\u66f4\u591a\u6d41\u52d5\u6027",
          "Add {0} to Metamask <0/>": [
            "\u5c07 ",
            ["0"],
            " \u6dfb\u52a0\u5230 Metamask <0/>",
          ],
          "Add {0} {1} and {2} {3}": [
            "\u8a3b\u5165 ",
            ["0"],
            " ",
            ["1"],
            " \u548c ",
            ["2"],
            " ",
            ["3"],
          ],
          "Add {0}-{1} liquidity": [
            "\u8a3b\u5165 ",
            ["0"],
            "-",
            ["1"],
            " \u6d41\u52d5\u8cc7\u91d1",
          ],
          "Add {0}/{1} liquidity": [
            "\u8a3b\u5165 ",
            ["0"],
            "/",
            ["1"],
            " \u6d41\u52d5\u8cc7\u91d1",
          ],
          "Added {0}": ["\u5df2\u6dfb\u52a0 ", ["0"]],
          "Address has no available claim":
            "\u5730\u5740\u6c92\u6709\u53ef\u9886\u53d6\u7684\u4ee3\u5e63",
          Against: "\u53cd\u5c0d",
          "Allow LP token migration":
            "\u5141\u8a31\u6d41\u52d5\u6c60\u4ee3\u5e63\u9077\u79fb",
          "Allow high price impact trades and skip the confirm screen. Use at your own risk.":
            "\u5141\u8a31\u9ad8\u514c\u63db\u7387\u5f71\u97ff\u7684\u4ea4\u6613\uff0c\u4e26\u8df3\u904e\u78ba\u8a8d\u6b65\u9a5f\u3002\u9808\u81ea\u884c\u627f\u64d4\u4f7f\u7528\u98a8\u96aa\u3002",
          "Allow the SheepDEX Protocol to use your {0}": [
            "\u5141\u8a31 Sheepdex \u8abf\u7528\u60a8\u7684 ",
            ["0"],
          ],
          "Allow the Uniswap Protocol to use your {0}": [
            "\u5141\u8a31 Uniswap \u4f7f\u7528\u60a8\u7684 ",
            ["0"],
          ],
          Allowed: "\u5df2\u5141\u8a31",
          "Always make sure the URL is<0>sheepdex.org</0> - bookmark it to be safe.":
            "\u52d9\u5fc5\u78ba\u4fdd\u7db2\u5740\u70ba<0>sheepdex.org</0> - \u5c07\u5176\u52a0\u5165\u66f8\u7c3d\uff0c\u4ee5\u78ba\u4fdd\u5b89\u5168\u3002",
          Amount: "\u6578\u984d",
          "An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with SheepDEX.":
            "\u5617\u8a66\u57f7\u884c\u6b64\u4ea4\u63db\u6642\u51fa\u932f\u3002\u60a8\u53ef\u80fd\u9700\u8981\u589e\u52a0\u60a8\u7684\u6ed1\u9ede\u5bb9\u5fcd\u5ea6\u3002\u5982\u679c\u9019\u4e0d\u8d77\u4f5c\u7528\uff0c\u5247\u53ef\u80fd\u8207\u60a8\u4ea4\u6613\u7684\u4ee3\u5e63\u4e0d\u517c\u5bb9\u3002\u6ce8\u610f\uff1a\u8f49\u8cec\u548c rebase \u4ee3\u5e63\u7684\u8cbb\u7528\u8207 SheepDEX \u4e0d\u517c\u5bb9\u3002",
          Analytics: "\u5206\u6790",
          Approve: "\u6279\u6e96",
          "Approve Token": "\u6279\u51c6\u4ee4\u724c",
          "Approve {0}": ["\u6279\u6e96 ", ["0"]],
          Approved: "\u5df2\u6279\u6e96",
          Approving: "\u6279\u6e96\u4e2d",
          "Approving {0}": ["\u6279\u6e96 ", ["0"]],
          "Are you sure?": "\u60a8\u78ba\u5b9a\u55ce\uff1f",
          "As a member of the SheepDEX community you may claim BUBBLES to be used for voting and governance.<0/><1/><2>Read more about BUBBLES</2>":
            "\u4f5c\u70ba Uniswap \u793e\u7fa4\u7684\u6210\u54e1\uff0c\u60a8\u53ef\u4ee5\u8a8d\u9818 BUBBLES \u4ee3\u5e63\uff0c\u7528\u65bc\u6295\u7968\u548c\u6cbb\u7406\u3002<0/><1/><2>\u95b1\u8b80\u66f4\u591a\u95dc\u65bc BUBBLES \u4ee3\u5e63\u7684\u8a0a\u606f</2>",
          "At least {0} {1} and {2} {3} will be refunded to your wallet due to selected price range.":
            [
              "\u6839\u64da\u9078\u5b9a\u7684\u514c\u63db\u7387\u7bc4\u570d\uff0c\u81f3\u5c11\u6703\u6709 ",
              ["0"],
              " ",
              ["1"],
              " \u548c ",
              ["2"],
              " ",
              ["3"],
              " \u5c07\u9000\u9084\u5230\u60a8\u7684\u9322\u5305\u3002",
            ],
          "Audit Agency": "\u5be9\u8a08\u5831\u544a",
          "Audit Report": "\u5be9\u8a08\u5831\u544a",
          Auto: "\u81ea\u52d5",
          "Available to deposit: {0}": [
            "\u53ef\u5b58\u5165\u7684\u6578\u984d\uff1a",
            ["0"],
          ],
          Back: "\u8fd4\u56de",
          "Balance:": "\u4f59\u984d\uff1a",
          "Balance: {0} {1}": ["\u4f59\u984d\uff1a", ["0"], " ", ["1"]],
          "Best for exotic pairs.":
            "\u8f03\u9069\u5408\u4f4e\u4ea4\u6613\u91cf\u7684\u5e63\u5c0d\u3002",
          "Best for most pairs.":
            "\u8f03\u9069\u5408\u5927\u90e8\u5206\u5e63\u5c0d\u3002",
          "Best for stable pairs.":
            "\u8f03\u9069\u5408\u7a69\u5b9a\u4ee3\u5e63\u5e63\u5c0d\u3002",
          "Blocked address": "\u5df2\u5c4f\u853d\u5730\u5740",
          "Burnt BUBBLES": "Burnt BUBBLES",
          "By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.":
            "\u901a\u904e\u8a3b\u5165\u6d41\u52d5\u8cc7\u91d1\uff0c\u60a8\u5c07\u6309\u60a8\u5728\u6d41\u52d5\u6c60\u4e2d\u6240\u5360\u4efd\u984d\u8cfa\u53d6\u5c0d\u61c9\u4ea4\u6613\u91cf\u76840.3%\u624b\u7e8c\u8cbb\u3002\u624b\u7e8c\u8cbb\u5c07\u5be6\u6642\u7d2f\u8a08\uff0c\u6dfb\u52a0\u5230\u6d41\u52d5\u6c60\u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u904e\u8d16\u56de\u60a8\u7684\u6d41\u52d5\u8cc7\u91d1\u5c07\u624b\u7e8c\u8cbb\u4e5f\u8d16\u56de\u3002",
          "By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.":
            "\u6dfb\u52a0\u6b64\u4ee3\u5e63\u5217\u8868\u4ee3\u8868\u60a8\u4fe1\u4efb\u5176\u6578\u64da\u662f\u6b63\u78ba\u7684\u3002\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u5275\u5efa\u4ee3\u5e63\u5217\u8868\uff0c\u5305\u62ec\u5275\u5efa\u5047\u5192\u5be6\u969b\u5217\u8868\u7684\u9020\u5047\u7248\u672c\uff0c\u4ee5\u53ca\u81ea\u6211\u8072\u7a31\u4ee3\u8868\u4e86\u67d0\u9805\u76ee\u7684\u4ee3\u5e63\u5217\u8868\u3002",
          "By connecting a wallet, you agree to Uniswap Labs\u2019 <0>Terms of Service</0> and acknowledge that you have read and understand the <1>Uniswap protocol disclaimer</1>.":
            "\u901a\u904e\u9023\u63a5\u9322\u5305\uff0c\u60a8\u540c\u610f\u63a5\u53d7 Uniswap \u5be6\u9a57\u5ba4\u7684<0>\u670d\u52d9\u689d\u6b3e</0>\uff0c\u4e26\u78ba\u8a8d\u60a8\u5df2\u95b1\u8b80\u548c\u7406\u89e3<1>Uniswap\u5354\u8b70\u514d\u8cac\u8072\u660e</1>\u3002",
          "Calculate your APR in real time and display it after a period of stake":
            "\u5be6\u6642\u8a08\u7b97\u60a8\u7684 APR \u4e26\u5728\u8cea\u62bc\u4e00\u6bb5\u6642\u9593\u5f8c\u986f\u793a",
          "Calculate your APR in real time, and display after adding liquidity for a period of time":
            "\u5be6\u6642\u8a08\u7b97\u60a8\u7684APR\uff0c\u4e26\u5728\u589e\u52a0\u6d41\u52d5\u6027\u4e00\u6bb5\u6642\u9593\u5f8c\u986f\u793a",
          "Calculation formula": "\u8a08\u7b97\u516c\u5f0f",
          "Capital efficiency increased by 7000 times":
            "\u8cc7\u672c\u6548\u7387\u63d0\u9ad87000\u500d",
          Change: "\u66f4\u6539",
          Chart: "Chart",
          Charts: "\u5716\u8868",
          Check: "\u53bb\u67e5\u770b",
          "Check it": "\u67e5\u770b",
          "Check out our v3 LP walkthrough and migration guides.":
            "\u67e5\u770b\u6211\u5011\u7684 v3 \u6d41\u52d5\u6c60\u4ecb\u7d39\u548c\u9077\u79fb\u6307\u5357\u3002",
          Circulation: "Circulation",
          Claim: "\u9818\u53d6",
          "Claim BUBBLES": "\u9818\u53d6 BUBBLES",
          "Claim BUBBLES Token": "\u9818\u53d6 BUBBLES \u4ee3\u5e63",
          "Claim UNI": "Claim UNI",
          "Claim UNI Token": "Claim UNI Token",
          "Claim accumulated BUBBLES rewards":
            "\u9818\u53d6\u7d2f\u7a4d\u7684 BUBBLES \u4ee3\u5e63\u734e\u52f5",
          "Claim accumulated UNI rewards": "Claim accumulated UNI rewards",
          "Claim fees": "\u9818\u53d6\u624b\u7e8c\u8cbb",
          "Claim your BUBBLES tokens":
            "\u9818\u53d6\u60a8\u7684 BUBBLES \u4ee3\u5e63",
          "Claim your UNI tokens": "Claim your UNI tokens",
          Claimed: "\u5df2\u9818\u53d6",
          "Claimed BUBBLES!": "\u5df2\u9818\u53d6 BUBBLES \u4ee3\u5e63\uff01",
          "Claimed UNI!": "Claimed UNI!",
          Claiming: "\u9818\u53d6\u4e2d",
          "Claiming BUBBLES": "\u6b63\u5728\u9818\u53d6 BUBBLES \u4ee3\u5e63",
          "Claiming UNI": "Claiming UNI",
          "Claiming {0} BUBBLES": [
            "\u6b63\u5728\u9818\u53d6 ",
            ["0"],
            " BUBBLES \u4ee3\u5e63",
          ],
          "Claiming {0} UNI": ["Claiming ", ["0"], " UNI"],
          "Clear All": "\u5168\u90e8\u6e05\u9664",
          "Clear all": "\u5168\u90e8\u6e05\u9664",
          Close: "\u95dc\u9589",
          Closed: "\u5df2\u95dc\u9589",
          "Closed positions": "\u5e73\u5009",
          Code: "\u4ee3\u78bc",
          Collect: "\u6536\u53d6",
          "Collect as WBNB": "Collect as WBNB",
          "Collect as WETH": "\u4ee5 WETH \u65b9\u5f0f\u6536\u53d6",
          "Collect fees": "\u6536\u53d6\u624b\u7e8c\u8cbb",
          Collected: "\u5df2\u6536\u53d6",
          Collecting: "\u6536\u53d6\u4e2d",
          "Collecting fees": "\u6536\u53d6\u624b\u7e8c\u8cbb",
          "Collecting fees will withdraw currently available fees for you.":
            "\u6536\u53d6\u624b\u7e8c\u8cbb\u7684\u64cd\u4f5c\u5c07\u70ba\u60a8\u63d0\u53d6\u60a8\u7576\u524d\u5df2\u7d2f\u7a4d\u7684\u624b\u7e8c\u8cbb\u3002",
          Colleged: "\u6536\u8d77",
          "Common bases": "\u5171\u540c\u57fa\u790e",
          Confirm: "\u78ba\u8a8d",
          "Confirm Create": "Confirm Create",
          "Confirm Supply": "\u78ba\u8a8d\u4f9b\u61c9",
          "Confirm Swap": "\u78ba\u8a8d\u514c\u63db",
          "Confirm this transaction in your wallet":
            "\u5728\u60a8\u7684\u9322\u5305\u4e2d\u78ba\u8a8d\u9019\u7b46\u4ea4\u6613",
          "Connect Wallet": "\u9023\u63a5\u9322\u5305",
          "Connect a wallet": "\u9023\u63a5\u9322\u5305",
          "Connect to a wallet": "\u9023\u63a5\u9322\u5305",
          "Connect to a wallet to find pools":
            "\u9023\u63a5\u5230\u9322\u5305\u4ee5\u67e5\u627e\u6d41\u52d5\u6c60",
          "Connect to a wallet to view your V2 liquidity.":
            "\u9023\u63a5\u5230\u9322\u5305\u4ee5\u67e5\u770b\u60a8\u7684 V2 \u6d41\u52d5\u8cc7\u91d1\u3002",
          "Connect to a wallet to view your liquidity.":
            "\u9023\u63a5\u5230\u9322\u5305\u4ee5\u67e5\u770b\u60a8\u7684\u6d41\u52d5\u8cc7\u91d1\u3002",
          "Connect wallet": "\u9023\u63a5\u9322\u5305",
          "Connected with {name}": ["\u5df2\u8207 ", ["name"], " \u9023\u63a5"],
          "Contact us": "\u806f\u7e6b\u6211\u5011",
          Copied: "\u5df2\u8907\u88fd",
          "Copy Address": "\u8907\u88fd\u5730\u5740",
          "Copy BUBBLES contract address":
            "\u8907\u88fdBUBBLES\u5408\u7d04\u5730\u5740",
          Countdown: "\u5012\u8a08\u6642",
          Create: "Create",
          "Create Pool & Supply":
            "\u5275\u5efa\u6d41\u52d5\u6c60\u548c\u4f9b\u61c9\u6d41\u52d5\u8cc7\u91d1",
          "Create Proposal": "\u5275\u5efa\u63d0\u6848",
          "Create a pair": "\u5275\u5efa\u5e63\u5c0d",
          "Create a pool": "\u5275\u5efa\u6d41\u52d5\u6c60",
          "Create an issue on GitHub":
            "\u5728GitHub\u4e0a\u5275\u5efa\u554f\u984c",
          "Create pool and add {0}/{1} liquidity": [
            "\u5275\u5efa\u6d41\u52d5\u6c60\u4e26\u8a3b\u5165 ",
            ["0"],
            "/",
            ["1"],
            " \u6d41\u52d5\u8cc7\u91d1",
          ],
          "Create pool.": "\u5275\u5efa\u6d41\u52d5\u6c60\u3002",
          "Create {0}/{1} V3 pool": ["Create ", ["0"], "/", ["1"], " V3 pool"],
          "Current Price": "\u7576\u524d\u514c\u63db\u7387",
          "Current price": "\u7576\u524d\u514c\u63db\u7387",
          "Current {0} Price:": [
            "\u7576\u524d ",
            ["0"],
            " \u514c\u63db\u7387\uff1a",
          ],
          "Daily Output": "\u65e5\u7522\u51fa",
          "Daily output": "\u65e5\u7522\u51fa",
          Dao: "Dao",
          "Delegate Votes": "\u59d4\u6258\u6295\u7968",
          "Delegated to:": "\u59d4\u6258\u7d66\uff1a",
          "Delegating votes": "\u59d4\u6258\u6295\u7968",
          Deposit: "\u5145\u503c",
          "Deposit Amounts": "\u5145\u503c\u6578\u984d",
          "Deposit BUBBLES-V2 LP Tokens":
            "\u5b58\u5165 BUBBLES-V2 \u6d41\u52d5\u6c60\u4ee3\u5e63",
          "Deposit UNI-V2 LP Tokens": "Deposit UNI-V2 LP Tokens",
          "Deposit liquidity": "\u5b58\u5165\u6d41\u52d5\u8cc7\u91d1",
          "Deposit vBUBBLES into the reward pool , vBUBBLES needs to be locked at least 30 days":
            "\u5c07vBUBBLES\u5b58\u5165\u4e0b\u65b9\u734e\u52f5\u6c60\uff0c\u5373\u53ef\u7372\u5f97DAO\u734e\u52f5\uff0cvBUBBLES\u81f3\u5c11\u9700\u9396\u5b9a30\u5929",
          "Deposit your Liquidity Provider tokens to receive BUBBLES, the SheepDEX protocol governance token.":
            "Deposit your Liquidity Provider tokens to receive BUBBLES, the SheepDEX protocol governance token.",
          "Deposit your Liquidity Provider tokens to receive BUBBLES, the Uniswap protocol governance token.":
            "\u5b58\u5165\u60a8\u7684\u6d41\u52d5\u6c60\u4ee3\u5e63\u4ee5\u9818\u53d6 UNI\uff08Uniswap \u7684\u6cbb\u7406\u4ee3\u5e63\uff09\u3002",
          "Deposit {0}": ["\u5b58\u5165 ", ["0"]],
          "Deposited liquidity:":
            "\u5df2\u5b58\u5165\u7684\u6d41\u52d5\u8cc7\u91d1\uff1a",
          "Deposited {0} BUBBLES-V2": [
            "\u5df2\u5b58\u5165 ",
            ["0"],
            " BUBBLES-V2",
          ],
          "Deposited {0} UNI-V2": ["Deposited ", ["0"], " UNI-V2"],
          "Deposited:": "\u5b58\u5165:",
          "Depositing Liquidity": "\u5b58\u5165\u6d41\u52d5\u8cc7\u91d1",
          Description: "\u63cf\u8ff0",
          Destroyed: "\u5df2\u92b7\u6bc0",
          Detailed: "\u8a73\u7d30\u4fe1\u606f",
          Details: "\u8a73\u7d30\u4fe1\u606f",
          "Disable Multihops":
            "\u505c\u7528\u201c\u591a\u7bc0\u9ede\u201d\uff08\u591a\u8df3\u5f0f\uff09\u514c\u63db\u9014\u5f91",
          Disconnect: "\u65b7\u958b",
          Discord: "Discord",
          Dismiss: "\u95dc\u9589",
          Docs: "\u6587\u6a94",
          Documents: "\u6587\u6a94",
          "Don\u2019t see one of your v2 positions? <0>Import it.</0>":
            "\u770b\u4e0d\u5230\u60a8\u7684\u4e00\u4e9b v2 \u6d41\u52d5\u8cc7\u91d1\u55ce\uff1f<0>\u5c07\u5b83\u624b\u52d5\u5c0e\u5165\u3002</0>",
          Earned: "Earned",
          "Earned BUBBLES tokens represent voting shares in Uniswap governance.":
            "\u5df2\u8cfa\u53d6\u7684 BUBBLES \u4ee3\u5e63\u4ee3\u8868\u4e86 Uniswap \u6cbb\u7406\u4e2d\u7684\u6295\u7968\u4efd\u984d\u3002",
          "Earned UNI tokens represent voting shares in Uniswap governance.":
            "Earned UNI tokens represent voting shares in Uniswap governance.",
          Edit: "\u4fee\u6539",
          "Efficiency Comparison": "Efficiency Comparison",
          Empty: "\u6682\u65e0\u6570\u636e",
          "Enter a percent": "\u8f38\u5165\u767e\u5206\u6bd4",
          "Enter a recipient": "\u8f38\u5165\u63a5\u6536\u8005",
          "Enter a valid slippage percentage":
            "\u8f38\u5165\u6709\u6548\u7684\u514c\u63db\u7387\u6ed1\u9ede\u767e\u5206\u6bd4",
          "Enter an address to trigger a BUBBLES claim. If the address has any claimable BUBBLES it will be sent to them on submission.":
            "\u8f38\u5165\u5730\u5740\u4f86\u67e5\u770b\u9818\u53d6 BUBBLES \u4ee3\u5e63\u7684\u8cc7\u8cea\u3002\u5982\u679c\u5730\u5740\u6709\u4efb\u4f55\u53ef\u9818\u53d6\u7684 UNI\uff0c\u4ee3\u5e63\u5c07\u5728\u63d0\u4ea4\u9818\u53d6\u7533\u8acb\u5f8c\u81ea\u52d5\u767c\u9001\u3002",
          "Enter an address to trigger a UNI claim. If the address has any claimable UNI it will be sent to them on submission.":
            "Enter an address to trigger a UNI claim. If the address has any claimable UNI it will be sent to them on submission.",
          "Enter an amount": "\u8f38\u5165\u6578\u984d",
          "Enter valid list location":
            "\u8f38\u5165\u6709\u6548\u7684\u4ee3\u5e63\u5217\u8868\u6e90",
          "Enter valid token address":
            "\u8f38\u5165\u6709\u6548\u7684\u4ee3\u5e63\u5730\u5740",
          Error: "\u932f\u8aa4",
          "Error connecting": "\u9023\u63a5\u932f\u8aa4",
          "Error connecting. Try refreshing the page.":
            "\u9023\u63a5\u932f\u8aa4\u3002\u8acb\u5617\u8a66\u5237\u65b0\u9801\u9762\u3002",
          "Error importing list": "\u5c0e\u5165\u5217\u8868\u6642\u51fa\u932f",
          "Estimated APR": "\u9810\u8a08APR",
          Expand: "\u5c55\u5f00",
          "Expanded results from inactive Token Lists":
            "\u5f9e\u5f85\u7528\u4ee3\u5e63\u5217\u8868\u4e2d\u64f4\u5c55\u51fa\u7684\u7d50\u679c",
          "Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result in bad rates and lost funds.":
            "\u201c\u5c08\u5bb6\u6a21\u5f0f\u201d\u5c07\u89e3\u9664\u78ba\u8a8d\u4ea4\u6613\u7684\u63d0\u793a\uff0c\u4e26\u5141\u8a31\u514c\u63db\u7387\u9ad8\u6ed1\u9ede\u7684\u4ea4\u6613\uff0c\u5f9e\u800c\u53ef\u80fd\u5c0e\u81f4\u8f03\u4e0d\u5229\u7684\u514c\u63db\u7387\u548c\u8cc7\u91d1\u640d\u5931\u3002",
          "Explore popular pools on Uniswap Analytics.":
            "\u5728 Uniswap \u6578\u64da\u5206\u6790\u4e2d\u63a2\u7d22\u8f03\u53d7\u6b61\u8fce\u7684\u6d41\u52d5\u6c60\u3002",
          Farm: "\u6d41\u52d5\u6027\u6316\u7926",
          Fee: "\u624b\u7e8c\u8cbb",
          "Fee APR": "Fee APR",
          "Fee Tier": "\u624b\u7e8c\u8cbb\u7d1a\u5225",
          "Fee tier": "Fee tier",
          Finished: "\u5df2\u4e0b\u67b6",
          For: "\u8d0a\u6210",
          "For each pool shown below, click migrate to remove your liquidity from Uniswap V2 and deposit it into SheepDEX.":
            "\u5c0d\u65bc\u4e0b\u9762\u986f\u793a\u7684\u6bcf\u500b\u6d41\u52d5\u6c60\uff0c\u55ae\u64ca\u201c\u9077\u79fb\u201d\u4ee5\u5f9e Uniswap V2 \u8d16\u56de\u60a8\u7684\u6d41\u52d5\u8cc7\u91d1\uff0c\u4e26\u5c07\u5176\u8a3b\u5165\u5230 SheepDEX\u3002",
          From: "\u6e90\u81ea",
          "From (at most)": "\u4f86\u6e90 (\u6700\u591a\u70ba)",
          "Full Range": "\u5168\u7bc4\u570d",
          "Full range positions may earn less fees than concentrated positions. Learn more <0>here</0>.":
            "\u5168\u7bc4\u570d\u5009\u4f4d\u53ef\u80fd\u6bd4\u96c6\u4e2d\u5009\u4f4d\u8cfa\u53d6\u66f4\u5c11\u7684\u8cbb\u7528\u3002\u5728<0>\u6b64\u8655</0>\u4e86\u89e3\u66f4\u591a\u3002",
          "Get reward": "Get reward",
          "Get support on Discord":
            "\u5728 Discord \u4e0a\u5c0b\u6c42\u6280\u8853\u652f\u6301",
          Hide: "\u96b1\u85cf",
          "High Price Impact": "\u9ad8\u514c\u63db\u7387\u5f71\u97ff",
          Home: "\u9996\u9801",
          "Hot Pools": "\u71b1\u9580\u6d41\u52d5\u6c60",
          "I Understand": "\u77ad\u89e3",
          "I understand": "\u6211\u5df2\u77e5\u6089",
          "If you purchase a token from this list, you may not be able to sell it back.":
            "\u5982\u679c\u60a8\u5f9e\u9019\u500b\u4ee3\u5e63\u5217\u8868\u4e2d\u8cfc\u8cb7\u4ee3\u5e63\uff0c\u60a8\u53ef\u80fd\u7121\u6cd5\u518d\u5c07\u5176\u552e\u51fa\u3002",
          Import: "\u5c0e\u5165",
          "Import List": "\u5c0e\u5165\u4ee3\u5e63\u5217\u8868",
          "Import Pool": "\u5c0e\u5165\u6d41\u52d5\u6c60",
          "Import V2 Pool": "\u5c0e\u5165 V2 \u6d41\u52d5\u6c60",
          "Import at your own risk":
            "\u81ea\u884c\u627f\u64d4\u5c0e\u5165\u7684\u98a8\u96aa",
          "In Progress": "\u9032\u884c\u4e2d",
          "In range": "\u5728\u7bc4\u570d\u5167",
          "Increase Liquidity": "\u589e\u52a0\u6d41\u52d5\u8cc7\u91d1",
          "Initial prices and pool share":
            "\u521d\u59cb\u514c\u63db\u7387\u548c\u6d41\u52d5\u6c60\u4efd\u984d",
          "Initializing...": "\u521d\u59cb\u5316\u4e2d...",
          "Input is estimated. You will sell at most <0>{0} {1}</0> or the transaction will revert.":
            [
              "\u8f38\u5165\u6578\u984d\u50c5\u70ba\u4f30\u503c\u3002\u60a8\u6700\u591a\u6703\u552e\u51fa<0>",
              ["0"],
              " ",
              ["1"],
              "</0> \u5426\u5247\u5c07\u9084\u539f\u4ea4\u6613\u3002",
            ],
          Insights: "\u884c\u60c5",
          "Install Metamask": "\u5b89\u88ddMetamask",
          "Insufficient liquidity for this trade.":
            "\u73fe\u6709\u6d41\u52d5\u91cf\u4e0d\u8db3\u4ee5\u652f\u6301\u6b64\u4ea4\u6613\u3002",
          "Insufficient liquidity for this trade. Try enabling multi-hop trades.":
            "\u73fe\u6709\u6d41\u52d5\u91cf\u4e0d\u8db3\u4ee5\u652f\u6301\u6b64\u4ea4\u6613\u3002\u8acb\u5617\u8a66\u555f\u7528\u201c\u591a\u7bc0\u9ede\u201d\uff08\u591a\u8df3\u5f0f\uff09\u4ea4\u6613\u9014\u5f91\u3002",
          "Insufficient {0} balance": [["0"], " \u4f59\u984d\u4e0d\u8db3"],
          "Interface Settings": "\u754c\u9762\u8a2d\u7f6e",
          "Invalid pair": "\u7121\u6548\u7684\u5e63\u5c0d",
          "Invalid pair.": "\u7121\u6548\u7684\u5e63\u5c0d\u3002",
          "Invalid price input":
            "\u7121\u6548\u7684\u514c\u63db\u7387\u8f38\u5165",
          "Invalid range selected. The min price must be lower than the max price.":
            "\u9078\u64c7\u7684\u7bc4\u570d\u7121\u6548\u3002\u6700\u5c0f\u514c\u63db\u7387\u5fc5\u9808\u4f4e\u65bc\u6700\u5927\u514c\u63db\u7387\u3002",
          "Invalid recipient": "\u7121\u6548\u7684\u63a5\u6536\u65b9",
          "LP outside the scope will not be rewarded~":
            "\u8d85\u51fa\u7bc4\u570d\u7684LP\u5c07\u4e0d\u4e88\u734e\u52f5",
          Learn: "\u77ad\u89e3",
          "Learn how to add liquidity":
            "\u67e5\u770b\u5982\u4f55\u6dfb\u52a0\u6d41\u52d5\u6027",
          Liquidity: "\u6d41\u52d5\u6027\u6316\u7926",
          "Liquidity Pools": "\u6d41\u52d5\u6c60",
          "Liquidity Provider Fee":
            "\u6d41\u52d5\u8cc7\u91d1\u63d0\u4f9b\u8005\u624b\u7e8c\u8cbb",
          "Liquidity data not available.": "Liquidity data not available.",
          "Liquidity provider rewards":
            "\u6d41\u52d5\u8cc7\u91d1\u63d0\u4f9b\u8005\u734e\u52f5",
          "Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.":
            "\u6d41\u52d5\u8cc7\u91d1\u63d0\u4f9b\u8005\u5728\u6240\u6709\u4ea4\u6613\u4e2d\u6309\u5176\u5728\u6d41\u52d5\u6c60\u4e2d\u7684\u4efd\u984d\u7372\u5f970.3%\u7684\u624b\u7e8c\u8cbb\u3002\u624b\u7e8c\u8cbb\u6309\u5be6\u6642\u7d2f\u8a08\u65b9\u5f0f\u6dfb\u52a0\u5230\u6d41\u52d5\u6c60\u4e2d\uff0c\u53ef\u8207\u6d41\u52d5\u8cc7\u91d1\u4e00\u8d77\u8d16\u56de\u3002",
          "Liquidity ratio": "\u6d41\u52d5\u6027\u4f54\u7387",
          Lists: "\u5217\u8868",
          Live: "\u5b58\u5728",
          Loaded: "\u5df2\u52a0\u8f09",
          Loading: "\u8f09\u5165\u4e2d",
          Locked: "\u5df2\u9396\u5b9a",
          "Make sure the URL is<0>sheepdex.org</0>":
            "\u8acb\u78ba\u8a8d\u7db2\u9801\u9023\u7d50\u70ba<0>sheepdex.org</0>",
          Manage: "\u7ba1\u7406",
          "Manage Liquidity in Rewards Pool":
            "\u5728\u734e\u52f5\u6c60\u4e2d\u7ba1\u7406\u6d41\u52d5\u8cc7\u91d1",
          "Manage Token Lists": "\u7ba1\u7406\u4ee3\u5e63\u5217\u8868",
          "Manage this pool.": "\u7ba1\u7406\u6b64\u6d41\u52d5\u6c60\u3002",
          Max: "\u6700\u5927\u503c",
          "Max Price": "\u6700\u9ad8\u514c\u63db\u7387",
          "Max price": "\u6700\u9ad8\u514c\u63db\u7387",
          "Max:": "\u6700\u5927\u503c\uff1a",
          "Maximum sent": "\u767c\u9001\u7684\u6700\u5927\u503c",
          Migrate: "\u9077\u79fb",
          "Migrate Liquidity": "\u9077\u79fb\u6d41\u52d5\u8cc7\u91d1",
          "Migrate Liquidity to V3":
            "\u5c07\u6d41\u52d5\u8cc7\u91d1\u9077\u79fb\u5230V3",
          "Migrate BUBBLES": "Migrate BUBBLES",
          "Migrate V2 Liquidity": "\u9077\u79fb V2 \u6d41\u52d5\u8cc7\u91d1",
          "Migrate V2 liquidity": "\u9077\u79fb V2 \u6d41\u52d5\u8cc7\u91d1",
          "Migrate vBUBBLES": "Migrate vBUBBLES",
          "Migrate your liquidity tokens from Uniswap V2 to SheepDEX.":
            "\u5c07\u60a8\u7684\u6d41\u52d5\u8cc7\u91d1\u5f9e Uniswap V2 \u9077\u79fb\u5230 SheepDEX\u3002",
          Migrating: "\u6b63\u5728\u9077\u79fb",
          "Min Price": "\u6700\u4f4e\u514c\u63db\u7387",
          "Min price": "\u6700\u4f4e\u514c\u63db\u7387",
          "Min:": "\u6700\u5c0f\u503c\uff1a",
          "Minimum received": "\u6536\u5230\u7684\u6700\u4f4e\u6578\u984d",
          More: "\u66f4\u591a",
          "New Position": "\u65b0\u5009\u4f4d",
          "No V2 Liquidity found.":
            "\u627e\u4e0d\u5230V2\u6d41\u52d5\u8cc7\u91d1\u3002",
          "No active pools": "\u7121\u904b\u884c\u4e2d\u7684\u6d41\u52d5\u6c60",
          "No liquidity found.":
            "\u672a\u627e\u5230\u6d41\u52d5\u8cc7\u91d1\u3002",
          "No pool found.": "\u672a\u627e\u5230\u6d41\u52d5\u6c60\u3002",
          "No proposals found.": "\u672a\u627e\u5230\u63d0\u6848\u3002",
          "No results found.":
            "\u672a\u627e\u5230\u4efb\u4f55\u7d50\u679c\u3002",
          "Not created": "\u672a\u5275\u5efa",
          OFF: "\u95dc\u9589",
          ON: "\u958b\u555f",
          "ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING.":
            "\u52d9\u5fc5\u5728\u8a73\u7d30\u4e86\u89e3\u6b64\u6a21\u5f0f\u61c9\u7528\u5f8c\u624d\u4f7f\u7528\u6b64\u6a21\u5f0f\u64cd\u4f5c\u3002",
          Off: "\u95dc\u9589",
          On: "\u958b\u555f",
          "Once you are happy with the rate click supply to review.":
            "\u5c0d\u8cbb\u7387\u611f\u5230\u6eff\u610f\u7684\u8a71\uff0c\u8acb\u9ede\u64ca\u201c\u4f9b\u61c9\u201d\u9375\uff0c\u5230\u5be9\u67e5\u6b65\u9a5f\u3002",
          "Only BUBBLES votes that were self delegated or delegated to another address before block {0} are eligible for voting.":
            [
              "\u53ea\u6709\u5728 ",
              ["0"],
              " \u5340\u584a\u7de8\u865f\u4e4b\u524d\u5df2\u81ea\u884c\u59d4\u6258\u6216\u59d4\u6258\u7d66\u53e6\u4e00\u500b\u5340\u584a\u93c8\u5730\u5740\u7684 BUBBLES \u4ee3\u5e63\u624d\u6709\u8cc7\u683c\u6295\u7968\u3002",
            ],
          "Only UNI votes that were self delegated or delegated to another address before block {0} are eligible for voting.":
            [
              "Only UNI votes that were self delegated or delegated to another address before block ",
              ["0"],
              " are eligible for voting.",
            ],
          "Oops! An unknown error occurred. Please refresh the page, or visit from another browser or device.":
            "\u7cdf\u7cd5\uff01\u51fa\u73fe\u672a\u77e5\u932f\u8aa4\u3002\u8acb\u5237\u65b0\u9801\u9762\uff0c\u6216\u5f9e\u5176\u4ed6\u700f\u89bd\u5668\u6216\u8a2d\u5099\u8a2a\u554f\u3002",
          Operation: "\u64cd\u4f5c",
          "Out of range": "\u8d85\u51fa\u7bc4\u570d",
          "Output is estimated. If the price changes by more than {0}% your transaction will revert.":
            [
              "\u8f38\u51fa\u6578\u984d\u50c5\u70ba\u4f30\u503c\u3002\u5982\u679c\u514c\u63db\u7387\u8b8a\u5316\u8d85\u904e ",
              ["0"],
              "%\uff0c\u60a8\u7684\u4ea4\u6613\u5c07\u6703\u9084\u539f\u3002",
            ],
          "Output is estimated. You will receive at least <0>{0} {1}</0> or the transaction will revert.":
            [
              "\u8f38\u51fa\u6578\u984d\u50c5\u70ba\u4f30\u503c\u3002\u60a8\u5c07\u6536\u5230\u81f3\u5c11 <0>",
              ["0"],
              " ",
              ["1"],
              "</0> \u4ee3\u5e63\uff0c\u5426\u5247\u5c07\u9084\u539f\u4ea4\u6613\u3002",
            ],
          "Output will be sent to <0>{0}</0>": [
            "\u8f38\u51fa\u4ee3\u5e63\u5c07\u767c\u9001\u81f3 <0>",
            ["0"],
            "</0>",
          ],
          Owner: "\u64c1\u6709\u8005",
          "Participating pools": "\u53c3\u8207\u7684\u6d41\u52d5\u6c60",
          Partner: "\u5408\u4f5c\u4f19\u4f34",
          "Please connect to the appropriate BSC network.":
            "\u8acb\u9023\u63a5\u5230\u9069\u7576\u7684\u7db2\u7d61\u3002",
          "Please connect to the appropriate Ethereum network.":
            "\u8acb\u9023\u63a5\u5230\u9069\u7576\u7684\u4ee5\u592a\u574a\u7db2\u7d61\u3002",
          'Please type the word "{confirmWord}" to enable expert mode.': [
            "\u8acb\u8f38\u5165\u55ae\u8a5e\u201c",
            ["confirmWord"],
            "\u201d\u4ee5\u555f\u7528\u5c08\u5bb6\u6a21\u5f0f\u3002",
          ],
          Pool: "\u6d41\u52d5\u6c60",
          "Pool Found!": "\u5df2\u627e\u5230\u6d41\u52d5\u6c60\uff01",
          "Pool Rate": "\u6d41\u52d5\u6c60\u8cbb\u7387",
          "Pool rate": "\u6d41\u52d5\u6c60\u8cbb\u7387",
          "Pool tokens in rewards pool:":
            "\u734e\u52f5\u6c60\u4e2d\u7684\u6d41\u52d5\u6c60\u4ee3\u5e63\uff1a",
          "Pooled {0}:": ["\u6d41\u52d5\u6c60\u532f\u96c6 ", ["0"], ":"],
          Pools: "\u6d41\u52d5\u6c60",
          "Pools Overview": "\u6d41\u52d5\u6c60\u6982\u89bd",
          Price: "\u514c\u63db\u7387",
          "Price Difference:": "\u514c\u63db\u7387\u5dee\u7570\uff1a",
          "Price Impact": "\u514c\u63db\u7387\u5f71\u97ff",
          "Price Impact Too High": "\u514c\u63db\u7387\u5f71\u97ff\u592a\u9ad8",
          "Price Updated": "\u514c\u63db\u7387\u5df2\u66f4\u65b0",
          "Price range": "\u514c\u63db\u7387\u7bc4\u570d",
          "Price:": "\u514c\u63db\u7387\uff1a",
          "Prices and pool share":
            "\u514c\u63db\u7387\u548c\u6d41\u52d5\u6c60\u4efd\u984d",
          Proposal: "\u63d0\u8b70",
          "Proposal Submitted": "\u63d0\u4ea4\u7684\u63d0\u6848",
          "Proposal Title": "\u63d0\u6848\u6a19\u984c",
          Proposals: "\u63d0\u6848",
          "Proposals submitted by community members will appear here.":
            "\u793e\u5340\u6210\u54e1\u63d0\u4ea4\u7684\u63d0\u6848\u5c07\u5728\u6b64\u986f\u793a\u3002",
          "Proposed Action": "\u63d0\u8b70\u7684\u884c\u52d5",
          Proposer: "\u63d0\u6848\u4eba",
          Rates: "\u8cbb\u7387",
          "Read more about BUBBLES":
            "\u4e86\u89e3\u6709\u95dc BUBBLES \u7684\u66f4\u591a\u8cc7\u8a0a",
          "Read more about UNI": "Read more about UNI",
          "Read more about Uniswap governance":
            "\u95b1\u8b80\u6709\u95dc Uniswap \u6cbb\u7406\u7684\u66f4\u591a\u8cc7\u8a0a",
          "Read more about providing liquidity":
            "\u95b1\u8b80\u6709\u95dc\u63d0\u4f9b\u6d41\u52d5\u8cc7\u91d1\u7684\u66f4\u591a\u8cc7\u8a0a",
          "Read more about unsupported assets":
            "\u95b1\u8b80\u6709\u95dc\u4e0d\u53d7\u652f\u6301\u7684\u4ee3\u5e63\u7684\u66f4\u591a\u8cc7\u8a0a",
          Receive: "\u6536\u5230",
          "Recent Transactions": "\u6700\u8fd1\u4ea4\u6613",
          Redeem: "\u8d16\u56de",
          Remove: "\u53bb\u9664",
          "Remove Amount": "\u53bb\u9664\u6578\u984d",
          "Remove Delegate": "\u53bb\u9664\u6295\u7968\u6b0a\u4ee3\u8868",
          "Remove Liquidity": "\u53bb\u9664\u6d41\u52d5\u8cc7\u91d1",
          "Remove list": "\u53bb\u9664\u4ee3\u5e63\u5217\u8868",
          "Remove {0} {1} and {2} {3}": [
            "\u53bb\u9664 ",
            ["0"],
            " ",
            ["1"],
            " \u548c ",
            ["2"],
            " ",
            ["3"],
          ],
          "Remove {0}/{1} liquidity": [
            "\u53bb\u9664 ",
            ["0"],
            "/",
            ["1"],
            " \u6d41\u52d5\u8cc7\u91d1",
          ],
          "Removing {0} {1} and {2} {3}": [
            "\u6b63\u5728\u53bb\u9664 ",
            ["0"],
            " ",
            ["1"],
            " \u548c ",
            ["2"],
            " ",
            ["3"],
          ],
          "Repurchase Amount": "Repurchase Amount",
          "Restricts swaps to direct pairs only.":
            "\u5c07\u4ea4\u6613\u9650\u88fd\u70ba\u53ea\u91dd\u5c0d\u76f4\u63a5\u5e63\u5c0d\u3002",
          Return: "\u8fd4\u56de",
          Reward: "\u734e\u52f5",
          "Reward History": "\u6b77\u53f2\u734e\u52f5",
          "Rewards will be automatically collected upon release":
            "\u734e\u52f5\u96a8\u89e3\u62bc\u81ea\u52d5\u9818\u53d6",
          Route: "\u8def\u7dda",
          "BUBBLES Price": "BUBBLES Price",
          "BUBBLES Upgrade": "BUBBLES Upgrade",
          "BUBBLES has arrived": "BUBBLES \u4ee3\u5e63\u5df2\u5230\u8cec",
          "BUBBLES in circulation:":
            "\u6d41\u901a\u4e2d\u7684 BUBBLES \u4ee3\u5e63\uff1a",
          "BUBBLES price:": "BUBBLES \u4ee3\u5e63\u514c\u63db\u7387\uff1a",
          "BUBBLES tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party.":
            "BUBBLES \u4ee3\u5e63\u4ee3\u8868\u4e86 Uniswap \u6cbb\u7406\u4e2d\u7684\u6295\u7968\u4efd\u984d\u3002\u60a8\u53ef\u4ee5\u81ea\u884c\u70ba\u63d0\u6848\u9032\u884c\u6295\u7968\uff0c\u6216\u5c07\u60a8\u7684\u6295\u7968\u6b0a\u59d4\u6258\u7d66\u7b2c\u4e09\u65b9\u3002",
          "BUBBLES {0}/{1} Burned": [
            "BUBBLES ",
            ["0"],
            "/",
            ["1"],
            " \u5df2\u92b7\u6bc0",
          ],
          "BUBBLES-V2 LP tokens are required. Once you've added liquidity to the {0}-{1} pool you can stake your liquidity tokens on this page.":
            [
              "\u9700\u8981 BUBBLES-V2 \u6d41\u52d5\u6c60\u4ee3\u5e63\u3002\u4e00\u65e6\u60a8\u5df2\u8a3b\u5165\u6d41\u52d5\u8cc7\u91d1\u5230 ",
              ["0"],
              "-",
              ["1"],
              " \u6c60\uff0c\u60a8\u5c31\u53ef\u4ee5\u5728\u6b64\u9801\u9762\u4e0a\u62b5\u62bc\u60a8\u7684\u6d41\u52d5\u6c60\u4ee3\u5e63\u3002",
            ],
          "BUBBLES-V2 {0}-{1}": ["BUBBLES-V2 ", ["0"], "-", ["1"]],
          "Search name or paste address":
            "\u641c\u7d22\u540d\u7a31\u6216\u7c98\u8cbc\u5730\u5740",
          "See how to calculate": "\u67e5\u770b\u5982\u4f55\u8a08\u7b97",
          "Select Pair": "\u9078\u64c7\u5e63\u5c0d",
          "Select Pool": "\u9078\u64c7\u6d41\u52d5\u6c60",
          "Select a pool type based on your preferred liquidity provider fee.":
            "\u6839\u64da\u60a8\u9996\u9078\u7684\u624b\u7e8c\u8cbb\u7387\u4f86\u9078\u64c7\u6d41\u52d5\u6c60\u985e\u578b\u3002",
          "Select a token": "\u9078\u64c7\u4ee3\u5e63",
          "Select a token to find your v2 liquidity.":
            "\u9078\u64c7\u4ee3\u5e63\u4ee5\u67e5\u627e\u60a8\u7684 v2 \u6d41\u52d5\u8cc7\u91d1\u3002",
          "Select an action": "\u9078\u64c7\u4e00\u500b\u52d5\u4f5c",
          "Select pair": "\u9078\u64c7\u5e63\u5c0d",
          "Selected Range": "\u9078\u5b9a\u7bc4\u570d",
          Self: "\u81ea\u8eab",
          "Self Delegate": "\u81ea\u6211\u4ee3\u8868",
          "Set Price Range": "\u8a2d\u7f6e\u514c\u63db\u7387\u7bc4\u570d",
          "Set Starting Price": "\u8a2d\u7f6e\u8d77\u59cb\u514c\u63db\u7387",
          "Share of Pool": "\u6d41\u52d5\u6c60\u4efd\u984d",
          "Share of Pool:": "\u6d41\u52d5\u6c60\u4efd\u984d\uff1a",
          SheepDEX: "SheepDEX",
          "SheepDEX is here!": "SheepDEX \u5df2\u767c\u5e03\uff01",
          Show: "\u986f\u793a",
          "Show Portis": "\u986f\u793a Portis",
          Simple: "\u7c21\u55ae\u578b",
          "Slippage tolerance": "\u6ed1\u9ede\u5bb9\u5dee",
          "Smart Contracts": "\u5951\u7d04\u6587\u6a94",
          "Some assets are not available through this interface because they may not work well with the smart contracts or we are unable to allow trading for legal reasons.":
            "\u6709\u4e9b\u4ee3\u5e63\u7121\u6cd5\u901a\u904e\u6b64\u754c\u9762\u4f7f\u7528\uff0c\u56e0\u70ba\u5b83\u5011\u53ef\u80fd\u7121\u6cd5\u5f88\u597d\u5730\u8abf\u7528\u667a\u80fd\u5408\u7d04\uff0c\u6216\u8005\u7531\u65bc\u6cd5\u5f8b\u539f\u56e0\u7121\u6cd5\u5141\u8a31\u4ea4\u6613\u3002",
          "Something went wrong": "\u51fa\u554f\u984c\u4e86",
          Stake: "\u8cea\u62bc",
          "Stake BUBBLES V2, you will receive equal vBUBBLES":
            "\u8cea\u62bcBUBBLES V2\uff0c\u60a8\u5c07\u6703\u7372\u5f97\u7b49\u984d\u7684vBUBBLES",
          "Stake BUBBLES, you will receive the same amount of vBUBBLES":
            "Stake BUBBLES, you will receive the same amount of vBUBBLES",
          "Stake {0}": ["\u8cea\u62bc ", ["0"]],
          Staked: "\u5df2\u8cea\u62bc",
          "Step 1. Get BUBBLES-V2 Liquidity tokens":
            "\u7b2c 1 \u6b65\uff1a\u7372\u53d6 BUBBLES-V2 \u6d41\u52d5\u6c60\u4ee3\u5e63",
          "Step 1. Get UNI-V2 Liquidity tokens":
            "Step 1. Get UNI-V2 Liquidity tokens",
          "Submitted new proposal": "\u63d0\u4ea4\u4e86\u65b0\u63d0\u6848",
          "Submitting Proposal": "\u63d0\u4ea4\u63d0\u6848",
          "Submitting Vote": "\u63d0\u4ea4\u6295\u7968",
          Supply: "\u4f9b\u61c9",
          "Supplying {0} {1} and {2} {3}": [
            "\u4f9b\u61c9 ",
            ["0"],
            " ",
            ["1"],
            " \u548c ",
            ["2"],
            " ",
            ["3"],
          ],
          Swap: "\u4ea4\u6613",
          "Swap Anyway": "\u4ecd\u8981\u514c\u63db",
          "Swap BUBBLES": "Swap BUBBLES",
          "Swapping {0} {1} for {2} {3}": [
            "\u5c07 ",
            ["0"],
            " ",
            ["1"],
            " \u514c\u63db\u70ba ",
            ["2"],
            " ",
            ["3"],
          ],
          "Thanks for being part of the SheepDEX community <0/>":
            "\u611f\u8b1d\u60a8\u52a0\u5165 Uniswap \u793e\u5340 <0/>",
          "The % you will earn in fees.": "The % you will earn in fees.",
          "The SheepDEX invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":
            "\u514c\u63db\u4ea4\u6613\u4e0d\u6eff\u8db3 Uniswap \u4e0d\u8b8a\u91cf X \xd7 Y = K \u7684\u8981\u6c42\u3002\u9019\u901a\u5e38\u610f\u5473\u8457\u60a8\u8981\u514c\u63db\u7684\u4ee3\u5e63\u4e4b\u4e00\u5728\u4ee3\u5e63\u8f49\u8cec\u904e\u7a0b\u4e2d\u5e36\u6709\u4e00\u4e9b\u81ea\u5b9a\u7fa9\u4ee3\u5e63\u5408\u7d04\u7279\u6027\u3002",
          "The input token cannot be transferred. There may be an issue with the input token.":
            "\u8f38\u5165\u4ee3\u5e63\u7121\u6cd5\u9032\u884c\u8f49\u8cec\u3002\u8f38\u5165\u4ee3\u5e63\u53ef\u80fd\u6709\u4e9b\u554f\u984c\u3002",
          "The market price is outside your specified price range. Single-asset deposit only.":
            "\u5e02\u5834\u514c\u63db\u7387\u8d85\u51fa\u60a8\u6307\u5b9a\u7684\u7bc4\u570d\u3002\u5c07\u53ea\u8a3b\u5165\u55ae\u9805\u4ee3\u5e63\u3002",
          "The output token cannot be transferred. There may be an issue with the output token.":
            "\u8f38\u51fa\u4ee3\u5e63\u7121\u6cd5\u9032\u884c\u8f49\u8cec\u3002\u8f38\u51fa\u4ee3\u5e63\u53ef\u80fd\u6709\u4e9b\u554f\u984c\u3002",
          "The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with SheepDEX.":
            "\u8f38\u51fa\u4ee3\u5e63\u7121\u6cd5\u9032\u884c\u8f49\u8cec\u3002\u8f38\u51fa\u4ee3\u5e63\u53ef\u80fd\u6709\u4e9b\u554f\u984c\u3002\u8a3b\uff1a\u8f49\u8cec\u6642\u5e36\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e63\u548c\u6703\u81ea\u52d5\u91cd\u65b0\u5b9a\u50f9\uff08rebase\uff09\u7684\u4ee3\u5e63\u90fd\u8207SheepDEX\u4e0d\u76f8\u5bb9\u3002",
          "The price of this pool is outside of your selected range. Your position is not currently earning fees.":
            "\u6b64\u6d41\u52d5\u6c60\u7684\u514c\u63db\u7387\u8d85\u51fa\u4e86\u60a8\u9078\u5b9a\u7684\u7bc4\u570d\u3002\u56e0\u6b64\u60a8\u7684\u6d41\u52d5\u8cc7\u91d1\u76ee\u524d\u6c92\u5728\u8cfa\u53d6\u624b\u7e8c\u8cbb\u3002",
          "The price of this pool is within your selected range. Your position is currently earning fees.":
            "\u6b64\u6d41\u52d5\u6c60\u7684\u514c\u63db\u7387\u5728\u60a8\u9078\u5b9a\u7684\u7bc4\u570d\u5167\u3002\u56e0\u6b64\u60a8\u7684\u6d41\u52d5\u8cc7\u91d1\u76ee\u524d\u6b63\u5728\u8cfa\u53d6\u624b\u7e8c\u8cbb\u3002",
          "The ratio of tokens you add will set the price of this pool.":
            "\u60a8\u8a3b\u5165\u7684\u4ee3\u5e63\u6bd4\u7387\u5c07\u6c7a\u5b9a\u6b64\u6d41\u52d5\u6c60\u7684\u521d\u59cb\u514c\u63db\u7387\u3002",
          "The reward is calculated, if your position is out of range, the displayed data may be inaccurate":
            "\u8a08\u7b97\u734e\u52f5\uff0c\u5982\u679c\u60a8\u7684\u4f4d\u7f6e\u8d85\u51fa\u7bc4\u570d\uff0c\u986f\u793a\u7684\u6578\u64da\u53ef\u80fd\u4e0d\u51c6\u78ba",
          "The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":
            "\u7531\u65bc\u671f\u9650\u5df2\u904e\uff0c\u56e0\u6b64\u7121\u6cd5\u767c\u9001\u4ea4\u6613\u3002\u8acb\u6aa2\u67e5\u60a8\u7684\u4ea4\u6613\u622a\u6b62\u671f\u9650\u8a2d\u7f6e\u3002",
          "There is no liquidity data.": "There is no liquidity data.",
          "These tokens are commonly paired with other tokens.":
            "\u9019\u4e9b\u4ee3\u5e63\u901a\u5e38\u8207\u5176\u4ed6\u4ee3\u5e63\u914d\u5c0d\u3002",
          "This data is only an estimate.":
            "\u8a72\u6578\u64da\u50c5\u70ba\u9810\u4f30\u503c\u3002",
          "This pool must be initialized before you can add liquidity. To initialize, select a starting price for the pool. Then, enter your liquidity price range and deposit amount. Gas fees will be higher than usual due to the initialization transaction.":
            "\u9700\u8981\u5148\u521d\u59cb\u5316\uff0c\u7136\u5f8c\u518d\u6dfb\u52a0\u6d41\u52d5\u6027\u3002\u521d\u59cb\u5316\u6642\uff0c\u8acb\u5148\u9078\u64c7\u8d77\u59cb\u50f9\u683c\uff0c\u7136\u5f8c\u8f38\u5165\u60a8\u7684\u6d41\u52d5\u6027\u50f9\u683c\u7bc4\u570d\u548c\u5b58\u6b3e\u91d1\u984d\u3002\u56e0\u9700\u9032\u884c\u521d\u59cb\u5316\u76f8\u95dc\u64cd\u4f5c\uff0cGas \u8cbb\u5c07\u6bd4\u5e73\u6642\u9ad8\u4e00\u4e9b\u3002",
          "This pool must be initialized on {0} before you can add liquidity. To initialize, select a starting price for the pool. Then, enter your liquidity price range and deposit amount.":
            [
              "This pool must be initialized on ",
              ["0"],
              " before you can add liquidity. To initialize, select a starting price for the pool. Then, enter your liquidity price range and deposit amount.",
            ],
          "This token doesn't appear on the active token list(s). Make sure this is the token that you want to trade.":
            "\u6b64\u4ee3\u5e63\u672a\u51fa\u73fe\u5728\u6fc0\u6d3b\u7684\u4ee3\u5e63\u5217\u8868\u4e2d\u3002\u8acb\u78ba\u4fdd\u9019\u662f\u60a8\u60f3\u8981\u4ea4\u6613\u7684\u4ee3\u5e63\u3002",
          "This tool will safely migrate your {0} liquidity to V3. The process is completely trustless thanks to the":
            [
              "\u8a72\u5de5\u5177\u5c07\u5b89\u5168\u5730\u5c07\u60a8\u7684 ",
              ["0"],
              " \u6d41\u52d5\u8cc7\u91d1\u9077\u79fb\u5230 V3\u3002\u8a72\u904e\u7a0b\u5b8c\u5168\u4e0d\u4f9d\u8cf4\u4efb\u4f55\u4fe1\u4efb\u9700\u6c42",
            ],
          "This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with SheepDEX.":
            "\u7531\u65bc\u514c\u63db\u7387\u8b8a\u52d5\uff0c\u8a72\u4ea4\u6613\u5c07\u4e0d\u6703\u6210\u529f\u3002\u8acb\u5617\u8a66\u589e\u52a0\u6ed1\u9ede\u5bb9\u5dee\u3002\u8a3b\uff1a\u8f49\u8cec\u6642\u5e36\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e63\u548c\u6703\u81ea\u52d5\u91cd\u65b0\u5b9a\u50f9\uff08rebase\uff09\u7684\u4ee3\u5e63\u90fd\u8207SheepDEX\u4e0d\u517c\u5bb9\u3002",
          "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":
            "\u7531\u65bc\u514c\u63db\u7387\u8b8a\u52d5\u6216\u4ee3\u5e63\u5e36\u6709\u8f49\u8cec\u6642\u7684\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\uff0c\u8a72\u4ea4\u6613\u5c07\u4e0d\u6703\u6210\u529f\u3002\u8acb\u5617\u8a66\u589e\u52a0\u6ed1\u9ede\u5bb9\u5dee\u3002",
          "Tip: Custom tokens are stored locally in your browser":
            "\u63d0\u793a\uff1a\u81ea\u5b9a\u7fa9\u4ee3\u5e63\u4fe1\u606f\u6703\u672c\u5730\u5b58\u5132\u5728\u60a8\u7684\u700f\u89bd\u5668\u4e2d",
          To: "\u81f3",
          "To (at least)": "\u5230\uff08\u81f3\u5c11\uff09",
          "To Be Stake": "\u672a\u8cea\u62bc",
          "Tobe Reward": "\u5f85\u734e\u52f5",
          "To be a decentralized Binance":
            "\u6253\u9020\u53bb\u4e2d\u5fc3\u5316\u7684\u5e63\u5b89",
          "To get the DAO reward, save the vBUBBLES to the reward pool below. The vBUBBLES must be locked for at least 30 days":
            "To get the DAO reward, save the vBUBBLES to the reward pool below. The vBUBBLES must be locked for at least 30 days",
          "Toggle Expert Mode": "\u5207\u63db\u5c08\u5bb6\u6a21\u5f0f",
          Tokens: "\u4ee3\u5e63",
          "Tokens from inactive lists. Import specific tokens below or click Manage to activate more lists.":
            "\u5f85\u7528\u4ee3\u5e63\u5217\u8868\u4e2d\u7684\u4ee3\u5e63\u3002\u5728\u4e0b\u9762\u5c0e\u5165\u7279\u5b9a\u4ee3\u5e63\u6216\u55ae\u64ca\u201c\u7ba1\u7406\u201d\u4ee5\u6fc0\u6d3b\u66f4\u591a\u4ee3\u5e63\u5217\u8868\u3002",
          "Top pools": "\u8f03\u6d3b\u8e8d\u7684\u6d41\u52d5\u6c60",
          "Total Locked Position": "Total Locked Position",
          "Total Supply": "\u7e3d\u4f9b\u61c9\u91cf",
          "Total Value Locked\uff08TVL\uff09": "\u7e3d\u9396\u5009\u91cf",
          "Total deposited": "\u5b58\u5165\u7e3d\u984d",
          "Total deposits": "\u5b58\u6b3e\u7e3d\u984d",
          Trading: "\u4ea4\u6613\u6316\u7926",
          "Trading Fees Earned": "\u4ea4\u6613\u624b\u7e8c\u8cbb\u734e\u52f5",
          "Trading Volume": "7\u65e5\u4ea4\u6613\u91cf",
          "Transaction Mining": "\u4ea4\u6613\u6316\u7926",
          "Transaction Rewards": "\u4ea4\u6613\u734e\u52f5",
          "Transaction Settings": "\u4ea4\u6613\u8a2d\u5b9a",
          "Transaction Submitted": "\u4ea4\u6613\u5df2\u63d0\u4ea4",
          "Transaction deadline": "\u4ea4\u6613\u622a\u6b62\u671f\u9650",
          "Transaction fee earned": "\u4ea4\u6613\u734e\u52f5",
          "Transfer Token": "\u8f49\u79fb\u4ee4\u724c",
          "Try Again": "\u518d\u8a66\u4e00\u6b21",
          "Turn On Expert Mode": "\u958b\u555f\u5c08\u5bb6\u6a21\u5f0f",
          "UNI has arrived": "UNI has arrived",
          "UNI in circulation:": "UNI in circulation:",
          "UNI price:": "UNI price:",
          "UNI tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party.":
            "UNI tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party.",
          "UNI {0}/{1} Burned": ["UNI ", ["0"], "/", ["1"], " Burned"],
          "UNI-V2 LP tokens are required. Once you've added liquidity to the {0}-{1} pool you can stake your liquidity tokens on this page.":
            [
              "UNI-V2 LP tokens are required. Once you've added liquidity to the ",
              ["0"],
              "-",
              ["1"],
              " pool you can stake your liquidity tokens on this page.",
            ],
          "UNI-V2 {0}-{1}": ["UNI-V2 ", ["0"], "-", ["1"]],
          "Unclaimed BUBBLES":
            "\u672a\u88ab\u9818\u53d6\u7684 BUBBLES \u4ee3\u5e63",
          "Unclaimed UNI": "Unclaimed UNI",
          "Unclaimed fees": "\u672a\u9818\u53d6\u7684\u624b\u7e8c\u8cbb",
          "Unclaimed:": "\u672a\u9818\u53d6\uff1a",
          "Uniswap Governance": "Uniswap\u6cbb\u7406",
          "Uniswap available in: <0>{0}</0>": [
            "Uniswap \u53ef\u9078\u8a9e\u8a00\uff1a<0>",
            ["0"],
            "</0>",
          ],
          "Uniswap liquidity mining":
            "Uniswap \u6d41\u52d5\u8cc7\u91d1\u6316\u7926",
          "Uniswap migration contract\u2197":
            "Uniswap \u9077\u79fb\u5408\u7d04\u2197",
          "Unknown Source": "\u672a\u77e5\u4f86\u6e90",
          "Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with SheepDEX.":
            [
              "\u672a\u77e5\u932f\u8aa4",
              ["0"],
              "\u3002\u8acb\u5617\u8a66\u589e\u52a0\u6ed1\u9ede\u5bb9\u5dee\u3002\u8a3b\uff1a\u8f49\u8cec\u6642\u5e36\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e63\u548c\u6703\u81ea\u52d5\u91cd\u65b0\u5b9a\u50f9\uff08rebase\uff09\u7684\u4ee3\u5e63\u90fd\u8207SheepDEX\u4e0d\u76f8\u5bb9\u3002",
            ],
          "Unlock Votes": "\u89e3\u9396\u6295\u7968",
          "Unlock Voting": "\u89e3\u9396\u6295\u7968",
          "Unlocking Votes": "\u89e3\u9396\u6295\u7968",
          Unstake: "\u89e3\u62bc",
          "Unstake {0}": ["\u89e3\u62bc ", ["0"]],
          "Unsupported Asset": "\u4e0d\u652f\u6301\u7684\u8cc7\u7522",
          "Unsupported Assets": "\u4e0d\u652f\u6301\u7684\u8cc7\u7522",
          Unwrap: "\u5c55\u958b",
          "Update Delegation": "\u66f4\u65b0\u6295\u7968\u6b0a\u59d4\u6258",
          "Update list": "\u66f4\u65b0\u4ee3\u5e63\u5217\u8868",
          "Use concentrated liquidity":
            "\u4f7f\u7528\u300c\u805a\u5408\u6d41\u52a8\u6027\u529f\u80fd\u300d",
          User: "\u7528\u6236",
          "V1 has no BUBBLES rewards, please remove the tokens in V1, deposit V2 to get BUBBLES-V2 rewards.":
            "V1\u5df2\u505c\u6b62\u767c\u653e\u734e\u52f5\uff0c\u8acb\u60a8\u5c07V1\u4e2d\u7684\u8cc7\u7522\u53d6\u51fa\uff0c\u5b58\u5165V2\u4ee5\u7372\u5f97\u734e\u52f5\u3002",
          "V2 liquidity": "V2 \u6d41\u52d5\u8cc7\u91d1",
          V3: "V3",
          "V3 {0} Price:": ["V3 ", ["0"], " Price:"],
          Value: "\u50f9\u503c",
          "View BUBBLES Analytics":
            "\u67e5\u770b BUBBLES \u4ee3\u5e63\u5206\u6790",
          "View UNI Analytics": "View UNI Analytics",
          "View V2 Liquidity": "\u67e5\u770b V2 \u6d41\u52d5\u8cc7\u91d1",
          "View accrued fees and analytics<0>\u2197</0>":
            "\u67e5\u770b\u5df2\u7d2f\u7a4d\u624b\u7e8c\u8cbb\u548c\u6578\u64da\u5206\u6790<0>\u2197</0>",
          "View list": "\u67e5\u770b\u4ee3\u5e63\u5217\u8868",
          "View on Etherscan": "\u5728Etherscan\u4e0a\u67e5\u770b",
          "View on Explorer":
            "\u5728\u8cc7\u6e90\u700f\u89bd\u5668\u4e0a\u67e5\u770b",
          "View transaction on Explorer":
            "\u5728\u8cc7\u6e90\u700f\u89bd\u5668\u4e0a\u67e5\u770b",
          Vote: "\u6295\u7968",
          "Vote Against": "\u6295\u7968\u53cd\u5c0d",
          "Vote For": "\u6295\u7968\u8d0a\u6210",
          "Vote against proposal {proposalId}": [
            "\u6295\u7968\u53cd\u5c0d\u63d0\u6848 ",
            ["proposalId"],
          ],
          "Vote for proposal {proposalId}": [
            "\u6295\u7968\u8d0a\u6210\u63d0\u6848 ",
            ["proposalId"],
          ],
          "Voting ended {0}": ["\u6295\u7968\u7d50\u675f ", ["0"]],
          "Voting ends approximately {0}": [
            "\u6295\u7968\u5927\u7d04\u7d50\u675f\u65bc ",
            ["0"],
          ],
          "Vulnerability Reward Program":
            "\u6f0f\u6d1e\u8cde\u91d1\u8a08\u5283",
          "Waiting For Confirmation": "\u7b49\u5f85\u78ba\u8a8d\u4e2d",
          "Weekly Rewards": "\u6bcf\u9031\u734e\u52f5",
          "Welcome to team Unicorn :)":
            "\u6b61\u8fce\u4f86\u5230 Unicorn \uff08\u7368\u89d2\u7378\uff09\u5718\u968a :)",
          "When you claim without withdrawing your liquidity remains in the mining pool.":
            "\u7576\u60a8\u9818\u53d6\u734e\u52f5\u4f46\u6c92\u8d16\u56de\u6d41\u52d5\u8cc7\u91d1\u6642\uff0c\u6d41\u52d5\u8cc7\u91d1\u4ecd\u7136\u7559\u5728\u7926\u6c60\u5167\u3002",
          "When you withdraw, the contract will automagically claim BUBBLES on your behalf!":
            "\u7576\u60a8\u8d16\u56de\u6d41\u52d5\u8cc7\u91d1\u6642\uff0c\u667a\u80fd\u5408\u7d04\u5c07\u81ea\u52d5\u70ba\u60a8\u9818\u53d6 BUBBLES \u4ee3\u5e63\uff01",
          "When you withdraw, the contract will automagically claim UNI on your behalf!":
            "When you withdraw, the contract will automagically claim UNI on your behalf!",
          "When you withdraw, your BUBBLES is claimed and your liquidity is removed from the mining pool.":
            "\u7576\u60a8\u8d16\u56de\u6d41\u52d5\u8cc7\u91d1\u6642\uff0c\u60a8\u7684 BUBBLES \u4ee3\u5e63\u5c07\u88ab\u9818\u53d6\uff0c\u6d41\u52d5\u8cc7\u91d1\u4e5f\u5c07\u5f9e\u7926\u6c60\u4e2d\u79fb\u9664\u3002",
          "When you withdraw, your UNI is claimed and your liquidity is removed from the mining pool.":
            "When you withdraw, your UNI is claimed and your liquidity is removed from the mining pool.",
          Withdraw: "\u8d16\u56de",
          "Withdraw & Claim": "\u8d16\u56de\u548c\u9818\u53d6",
          "Withdraw deposited liquidity":
            "\u8d16\u56de\u8a3b\u5165\u7684\u6d41\u52d5\u8cc7\u91d1",
          "Withdraw {0}": ["Withdraw ", ["0"]],
          "Withdrawing {0} BUBBLES-V2": [
            "\u8d16\u56de ",
            ["0"],
            " BUBBLES-V2 \u6d41\u52d5\u6c60\u4ee3\u5e63",
          ],
          "Withdrawing {0} UNI-V2": ["Withdrawing ", ["0"], " UNI-V2"],
          "Withdrew BUBBLES-V2!": "\u5df2\u8d16\u56de BUBBLES-V2\uff01",
          "Withdrew UNI-V2!": "Withdrew UNI-V2!",
          Wrap: "\u5305\u88f9",
          "Wrong Network": "\u932f\u8aa4\u7684\u7db2\u7d61",
          "Yield Farming": "\u6d41\u52d5\u6027\u6316\u7926",
          "You already have an active or pending proposal":
            "\u60a8\u5df2\u7d93\u6709\u4e00\u500b\u6709\u6548\u6216\u5f85\u8655\u7406\u7684\u63d0\u6848",
          "You are creating a pool":
            "\u60a8\u6b63\u5728\u5275\u5efa\u4e00\u500b\u6d41\u52d5\u6c60",
          "You are the first liquidity provider for this SheepDEX pool. Your liquidity will migrate at the current {0} price.":
            [
              "\u60a8\u662f\u6b64 SheepDEX \u6d41\u52d5\u6c60\u7684\u7b2c\u4e00\u500b\u6d41\u52d5\u8cc7\u91d1\u63d0\u4f9b\u8005\u3002\u60a8\u7684\u6d41\u52d5\u8cc7\u91d1\u5c07\u4ee5\u7576\u524d\u7684 ",
              ["0"],
              " \u514c\u63db\u7387\u9077\u79fb\u3002",
            ],
          "You are the first liquidity provider.":
            "\u60a8\u662f\u7b2c\u4e00\u500b\u6d41\u52d5\u8cc7\u91d1\u63d0\u4f9b\u8005\u3002",
          "You can either vote on each proposal yourself or delegate your votes to a third party.":
            "\u60a8\u53ef\u4ee5\u5c0d\u6bcf\u500b\u63d0\u6848\u81ea\u884c\u9032\u884c\u6295\u7968\uff0c\u4e5f\u53ef\u4ee5\u5c07\u60a8\u7684\u6295\u7968\u6b0a\u59d4\u6258\u7d66\u7b2c\u4e09\u65b9\u3002",
          "You can now trade {0}": [
            "\u60a8\u73fe\u5728\u53ef\u4ee5\u4ea4\u6613 ",
            ["0"],
          ],
          "You don't have enough votes to submit a proposal":
            "\u60a8\u6c92\u6709\u8db3\u5920\u7684\u7968\u6578\u4f86\u63d0\u4ea4\u63d0\u6848",
          "You don\u2019t have liquidity in this pool yet.":
            "\u60a8\u5728\u6b64\u6d41\u52d5\u6c60\u4e2d\u9084\u672a\u6709\u6d41\u52d5\u8cc7\u91d1\u3002",
          "You must connect an account.":
            "\u60a8\u5fc5\u9808\u9023\u63a5\u5e33\u6236\u3002",
          "You must give the SheepDEX smart contracts permission to use your {0}. You only have to do this once per token.":
            [
              "\u60a8\u5fc5\u9808\u6388\u4e88 SheepDEX \u667a\u80fd\u5408\u7d04\u4f7f\u7528\u60a8\u7684 ",
              ["0"],
              " \u7684\u6b0a\u9650\u3002\u6bcf\u500b\u4ee3\u5e63\u53ea\u9700\u8981\u6388\u6b0a\u4e00\u6b21\u3002",
            ],
          "You must have {formattedProposalThreshold} votes to submit a proposal":
            [
              "\u60a8\u5fc5\u9808\u6709 ",
              ["formattedProposalThreshold"],
              " \u7968\u624d\u80fd\u63d0\u4ea4\u63d0\u6848",
            ],
          "You should only deposit liquidity into SheepDEX at a price you believe is correct. <0/>If the price seems incorrect, you can either make a swap to move the price or wait for someone else to do so.":
            "\u8acb\u78ba\u4fdd\u4ee5\u60a8\u8a8d\u70ba\u662f\u6b63\u78ba\u7684\u514c\u63db\u7387\u4f86\u5c07\u6d41\u52d5\u8cc7\u91d1\u8a3b\u5165\u5230 SheepDEX\u3002 <0/>\u5982\u679c\u514c\u63db\u7387\u770b\u8d77\u4f86\u4e0d\u6b63\u78ba\uff0c\u60a8\u53ef\u4ee5\u9032\u884c\u514c\u63db\u4ea4\u6613\u4ee5\u79fb\u52d5\u514c\u63db\u7387\uff0c\u6216\u8005\u7b49\u5f85\u5225\u4eba\u9032\u884c\u6b64\u64cd\u4f5c\u3002",
          "You will also collect fees earned from this position.":
            "\u60a8\u9084\u5c07\u5f9e\u6b64\u5009\u4f4d\u4e2d\u9818\u53d6\u5df2\u8cfa\u53d6\u7684\u624b\u7e8c\u8cbb\u3002",
          "You will receive": "\u60a8\u5c07\u6536\u5230",
          "Your BUBBLES Breakdown":
            "\u60a8\u7684 BUBBLES \u4ee3\u5e63\u660e\u7d30\u8868",
          "Your UNI Breakdown": "Your UNI Breakdown",
          "Your V2 liquidity": "\u60a8\u7684V2\u6d41\u52d5\u8cc7\u91d1",
          "Your liquidity deposits":
            "\u60a8\u8a3b\u5165\u7684\u6d41\u52d5\u8cc7\u91d1",
          "Your liquidity positions will appear here.":
            "\u60a8\u7684 \u6d41\u52d5\u8cc7\u91d1\u5c07\u5728\u6b64\u986f\u793a\u3002",
          "Your liquidity will only earn fees when the market price of the pair is within your range. <0>Need help picking a range?</0>":
            "\u53ea\u6709\u7576\u4ee3\u5e63\u7684\u5e02\u5834\u514c\u63db\u7387\u5728\u60a8\u8a2d\u7f6e\u7684\u7bc4\u570d\u5167\u6642\uff0c\u60a8\u7684\u6d41\u52d5\u8cc7\u91d1\u624d\u6703\u8cfa\u53d6\u624b\u7e8c\u8cbb\u3002 <0>\u9700\u8981\u5e6b\u52a9\u9078\u64c7\u7bc4\u570d\u8a2d\u7f6e\u55ce\uff1f</0>",
          "Your pool share:":
            "\u60a8\u7684\u6d41\u52d5\u6c60\u4efd\u984d\uff1a",
          "Your position": "\u60a8\u7684\u6d41\u52d5\u8cc7\u91d1\u5009\u4f4d",
          "Your position has 0 liquidity, and is not earning fees.":
            "\u60a8\u7684\u5009\u4f4d\u6c92\u6709\u4efb\u4f55\u6d41\u52d5\u8cc7\u91d1\uff0c\u6c92\u5728\u8cfa\u53d6\u624b\u7e8c\u8cbb\u3002",
          "Your position will appear here.":
            "\u60a8\u7684\u5009\u4f4d\u5c07\u5728\u6b64\u986f\u793a\u3002",
          "Your position will be 100% composed of {0} at this price": [
            "\u5728\u9054\u5230\u6b64\u514c\u63db\u7387\u6642\uff0c\u60a8\u7684\u5009\u4f4d\u6d41\u52d5\u8cc7\u91d1\u5c07 100% \u7531 ",
            ["0"],
            " \u6240\u7d44\u6210\u3002",
          ],
          "Your position will be 100% {0} at this price.": [
            "\u5728\u9054\u5230\u6b64\u514c\u63db\u7387\u6642\uff0c\u60a8\u7684\u5009\u4f4d\u6d41\u52d5\u8cc7\u91d1\u5c07 100% \u7531 ",
            ["0"],
            " \u6240\u7d44\u6210\u3002",
          ],
          "Your position will not earn fees or be used in trades until the market price moves into your range.":
            "\u60a8\u7684\u5009\u4f4d\u5728\u5e02\u5834\u514c\u63db\u7387\u8b8a\u5316\u9032\u5165\u5230\u60a8\u8a2d\u7f6e\u7684\u7bc4\u570d\u5167\u4e4b\u524d\u4e0d\u6703\u8cfa\u53d6\u624b\u7e8c\u8cbb\u6216\u88ab\u7528\u65bc\u9032\u884c\u514c\u63db\u4ea4\u6613\u3002",
          "Your positions": "\u60a8\u7684\u5009\u4f4d",
          "Your rate": "\u60a8\u7684\u8cbb\u7387",
          "Your total pool tokens:":
            "\u60a8\u7684\u6d41\u52d5\u6c60\u4ee3\u5e63\u7e3d\u984d\uff1a",
          "Your transaction cost will be much higher as it includes the gas to create the pool.":
            "\u7531\u65bc\u9700\u5305\u542b\u5275\u5efa\u6d41\u52d5\u6c60\u7684 gas \u8cbb\u7528\uff0c\u60a8\u7684\u6b64\u4ea4\u6613\u6210\u672c\u5c07\u9ad8\u51fa\u8a31\u591a\u3002",
          "Your transaction may be frontrun":
            "\u60a8\u7684\u4ea4\u6613\u53ef\u80fd\u6703\u88ab\u5225\u4eba\u201c\u6436\u5148\u201d\uff08\u5f9e\u800c\u8cfa\u53d6\u5dee\u50f9\uff09",
          "Your transaction may fail":
            "\u60a8\u7684\u4ea4\u6613\u53ef\u80fd\u5931\u6557",
          "Your transaction will revert if it is pending for more than this period of time.":
            "\u5982\u679c\u60a8\u7684\u4ea4\u6613\u5f85\u8655\u7406\u8d85\u904e\u6b64\u6642\u9593\u671f\u9650\uff0c\u5247\u5c07\u9084\u539f\u8a72\u4ea4\u6613\u3002",
          "Your transaction will revert if the price changes unfavorably by more than this percentage.":
            "\u5982\u679c\u514c\u63db\u7387\u8b8a\u52d5\u8d85\u904e\u6b64\u767e\u5206\u6bd4\uff0c\u5247\u5c07\u9084\u539f\u8a72\u4ea4\u6613\u3002",
          "Your transactions will appear here...":
            "\u60a8\u7684\u4ea4\u6613\u5c07\u51fa\u73fe\u5728\u9019\u88cf...",
          "Your unclaimed BUBBLES":
            "\u60a8\u672a\u9818\u53d6\u7684 BUBBLES \u4ee3\u5e63",
          "Your unclaimed UNI": "Your unclaimed UNI",
          confirm: "\u78ba\u8a8d",
          "for {0}": ["\u70ba ", ["0"]],
          "has socks emoji": "\u6709 socks \u8868\u60c5\u5305",
          "https:// or ipfs:// or ENS name":
            "https:// \u6216 ipfs:// \u6216 ENS \u540d",
          minutes: "\u5206\u9418",
          "needs to be locked at least 30 days":
            "\u81f3\u5c11\u9700\u9396\u5b9a30\u5929",
          "redemption for BUBBLES V2, charge 7% fee, used for destruction":
            "\u8d16\u56de\u70baBUBBLES V2\u6642\uff0c\u6536\u53d67%\u624b\u7e8c\u8cbb\uff0c\u7528\u65bc\u92b7\u6bc0",
          "to earn more": "\u7372\u5f97\u66f4\u591a\u6536\u76ca",
          "via {0}": ["\u901a\u904e ", ["0"]],
          "via {0} token list": ["\u5f9e ", ["0"], " \u4ee3\u5e63\u5217\u8868"],
          "{0, plural, one {Import token} other {Import tokens}}": [
            [
              "0",
              "plural",
              {
                one: "\u5c0e\u5165\u4ee3\u5e63",
                other: "\u5c0e\u5165\u4ee3\u5e63",
              },
            ],
          ],
          "{0}": [["0"]],
          "{0} %": [["0"], " %"],
          "{0} <0/> per <1/>": [["0"], " <0/> \u6bcf <1/>"],
          "{0} BNB": [["0"], " BNB"],
          "{0} Custom Tokens": [["0"], " \u81ea\u5b9a\u7fa9\u4ee3\u5e63"],
          "{0} Deposited": ["\u8a3b\u5165 ", ["0"]],
          "{0} ETH": [["0"], " ETH"],
          "{0} Fees Earned:": [
            ["0"],
            " \u5df2\u8cfa\u53d6\u624b\u7e8c\u8cbb\uff1a",
          ],
          "{0} Pending": [["0"], " \u5f85\u8655\u7406"],
          "{0} Price:": [["0"], " \u514c\u63db\u7387\uff1a"],
          "{0} BUBBLES": [["0"], " BUBBLES"],
          "{0} BUBBLES / week": [["0"], " BUBBLES /\u9031"],
          "{0} BUBBLES-V2": [["0"], " BUBBLES-V2"],
          "{0} BUBBLES-V2 LP tokens available": [
            ["0"],
            " BUBBLES-V2 \u6d41\u52d5\u6c60\u4ee3\u5e63\u53ef\u7528",
          ],
          "{0} UNI": [["0"], " UNI"],
          "{0} UNI / week": [["0"], " UNI / week"],
          "{0} UNI-V2": [["0"], " UNI-V2"],
          "{0} UNI-V2 LP tokens available": [
            ["0"],
            " UNI-V2 LP tokens available",
          ],
          "{0} Votes": [["0"], " \u7968"],
          "{0} per {1}": [["0"], " \u6bcf ", ["1"]],
          "{0} price": [["0"], " \u514c\u63db\u7387"],
          "{0} tokens": [["0"], " \u4ee3\u5e63"],
          "{0} {1} Price:": [["0"], " ", ["1"], " \u514c\u63db\u7387\uff1a"],
          "{0} \u2022 Added by user": [
            ["0"],
            " \u2022 \u7531\u7528\u6236\u6dfb\u52a0",
          ],
          "{0}%": [["0"], "%"],
          "{0}% fee tier": [["0"], "% \u624b\u7e8c\u8cbb\u7d1a\u5225"],
          "{0}% select": ["\u9078\u64c7 ", ["0"], "%"],
          "{0}-{1} Liquidity Mining": [
            ["0"],
            "-",
            ["1"],
            " \u6d41\u52d5\u8cc7\u91d1\u91c7\u7926",
          ],
          "{0}/{1} LP NFT": [
            ["0"],
            "/",
            ["1"],
            " \u6d41\u52d5\u6c60 NFT \u4ee3\u5e63",
          ],
          "{0}/{1} LP Tokens": [
            ["0"],
            ["1"],
            " \u6d41\u52d5\u6c60\u4ee3\u5e63",
          ],
          "{SOCKS_AMOUNT} BUBBLES": [["SOCKS_AMOUNT"], " BUBBLES \u4ee3\u5e63"],
          "{USER_AMOUNT} BUBBLES": [["USER_AMOUNT"], " BUBBLES"],
          "{percentForSlider}%": [["percentForSlider"], "%"],
          "{quote} per {base}": [["quote"], " per ", ["base"]],
          "{tokenB} per {tokenA}": [["tokenB"], " \u6bcf ", ["tokenA"]],
          "~$ <0/>": "\u301c$ <0 />",
          "\u2190 Back to Pools Overview":
            "\u2190 \u8fd4\u56de\u6d41\u52d5\u6c60\u6982\u8ff0",
          "\u5f53\u524d\u5151\u6362\u7387": "\u5f53\u524d\u5151\u6362\u7387",
        },
      };
    },
  },
]);

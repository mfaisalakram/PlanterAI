export const yoarray = {
  result: [
    {
      "Key": "\u0000nft\u000010\u0000",
      "Record": {
        "tokenId": 10,
        "owner": "x509::/OU=org1/OU=client/OU=department1/CN=ahmad::/C=US/ST=North Carolina/L=Durham/O=org1.example.com/CN=ca.org1.example.com",
        "tokenURI": "{\"temp_a0\":35,\"temp_a1\":42,\"temp_a2\":45,\"temp_a3\":46,\"humidity_a0\":55,\"humidity_a1\":22,\"humidity_a2\":45,\"humidity_a3\":48,\"pressure\":35,\"temp\":55,\"acceleration\":-466,\"light\":42,\"sound\":33,\"count\":579,\"time\":\"2023-01-08T19:55:42.374Z\"}"
      }
    },
    {
      "Key": "\u0000nft\u000011\u0000",
      "Record": {
        "tokenId": 11,
        "owner": "x509::/OU=org1/OU=client/OU=department1/CN=ahmad::/C=US/ST=North Carolina/L=Durham/O=org1.example.com/CN=ca.org1.example.com",
        "tokenURI": "{\"temp_a0\":35,\"temp_a1\":42,\"temp_a2\":45,\"temp_a3\":46,\"humidity_a0\":333333,\"humidity_a1\":22,\"humidity_a2\":45,\"humidity_a3\":48,\"pressure\":35,\"temp\":55,\"acceleration\":-44,\"light\":42,\"sound\":42,\"count\":30,\"time\":\"2023-01-08T21:15:27.018Z\"}"
      }
    },
  ],
  error: null,
  errorData: null
}



export const dummyArray = yoarray.result.map((item) => {
  return JSON.parse(item.Record.tokenURI.replace(/\\/g, ""))
})

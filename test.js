const fs = require("fs");
const { NlpManager } = require("node-nlp");

const data = fs.readFileSync("model.nlp", "utf8");
const manager = new NlpManager();
manager.import(data);

(async () => {
  // const response = await manager.process("vi", "cút");
  // console.log(response);
  const response1 = await manager.process("vi", "cái đồng hồ chạy sai rồi");
  console.log(response1);
})();

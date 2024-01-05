const { NlpManager } = require("node-nlp");

const manager = new NlpManager({
  languages: ["vi"],
  forceNER: true,
  nlu: { log: false },
});
// Adds the utterances and intents for the NLP
manager.addDocument("vi", "tạm biệt", "greetings.bye");
manager.addDocument("vi", "chào tạm biệt", "greetings.bye");
manager.addDocument("vi", "gặp lại sau", "greetings.bye");
manager.addDocument("vi", "tôi phải rời đi rồi", "greetings.bye");
manager.addDocument("vi", "hẹn gặp lại", "greetings.bye");
//
manager.addDocument("vi", "xin chào", "greetings.hello");
manager.addDocument("vi", "rất chào bạn", "greetings.hello");
manager.addDocument("vi", "chào bạn", "greetings.hello");

//
manager.addDocument("vi", "dịch vụ ở đây gồm những gì", "list.categories");
manager.addDocument("vi", "có những dịch vụ nào", "list.categories");
manager.addDocument(
  "vi",
  "tôi có thể tìm kiếm những dịch vụ gì gì",
  "list.categories"
);

// đồ gia dụng
manager.addDocument("vi", "tôi bị hư cái quạt rồi", "category.dogiadung");
manager.addDocument(
  "vi",
  "cái bếp gas của tôi gặp vấn đề",
  "category.dogiadung"
);
manager.addDocument(
  "vi",
  "cái quạt của tôi nó bị hư rồi",
  "category.dogiadung"
);
manager.addDocument(
  "vi",
  "cái lò vi sóng của tôi không hoạt động",
  "category.dogiadung"
);

// đồ điện lạnh
manager.addDocument("vi", "tủ lạnh của tôi bị hư", "category.dienlanh");
manager.addDocument(
  "vi",
  "tủ lạnh của tôi không hoạt động",
  "category.dienlanh"
);
manager.addDocument("vi", "giúp tôi sửa máy điều hòa", "category.dienlanh");
manager.addDocument("vi", "điều hòa của tôi bị hư rồi", "category.dienlanh");
manager.addDocument(
  "vi",
  "máy giặt của tôi không hoạt động",
  "category.dienlanh"
);

// đồ nội thất
manager.addDocument(
  "vi",
  "bộ bàn ghế của tôi cần được sửa chữa",
  "category.noithat"
);
manager.addDocument("vi", "cái kệ quần áo của tôi bị hư", "category.noithat");
manager.addDocument("vi", "cái tủ đựng đồ của tôi bị gãy", "category.noithat");
manager.addDocument("vi", "cái ghế của tôi bị gãy chân", "category.noithat");

// điện nước
manager.addDocument(
  "vi",
  "hệ thống nước của tôi bị rò rỉ",
  "category.diennuoc"
);
manager.addDocument(
  "vi",
  "tôi muốn làm lại hệ thống điện của nhà tôi",
  "category.diennuoc"
);
manager.addDocument(
  "vi",
  "tôi muốn nâng cấp hệ thống điện",
  "category.diennuoc"
);

// an ninh
manager.addDocument("vi", "tôi muốn làm camera chống trộm", "category.anninh");
manager.addDocument(
  "vi",
  "tôi muốn lắp đặt thiết bị chống trộm",
  "category.anninh"
);
manager.addDocument(
  "vi",
  "thiết bị an ninh của tôi gặp sự cố",
  "category.anninh"
);
manager.addDocument(
  "vi",
  "máy quét vân tay của tôi không hoạt động",
  "category.anninh"
);

// Train also the NLG
manager.addAnswer("vi", "greetings.bye", "Hẹn gặp lại");
manager.addAnswer("vi", "greetings.bye", "Tạm biệt bạn");
manager.addAnswer("vi", "greetings.bye", "Gút bai bờ rô");
manager.addAnswer("vi", "greetings.hello", "Chào đằng ấy");
manager.addAnswer("vi", "greetings.hello", "Hế lô fen");
manager.addAnswer("vi", "greetings.hello", "Chao xìn");

manager.addAnswer(
  "vi",
  "list.categories",
  "Đây là những dịch vụ của chúng tôi...."
);

manager.addAnswer(
  "vi",
  "category.anninh",
  "Vấn đề của bạn thuộc về dịch vụ An ninh, sau đây là những đại lý thuộc dịch vụ an ninh tốt nhất ở đây ..."
);
manager.addAnswer(
  "vi",
  "category.diennuoc",
  "Vấn đề của bạn thuộc về dịch vụ Điện nước, sau đây là những đại lý thuộc dịch vụ điện nước tốt nhất ở đây ..."
);
manager.addAnswer(
  "vi",
  "category.noithat",
  "Vấn đề của bạn thuộc về dịch vụ Nội thất, sau đây là những đại lý thuộc dịch vụ nội thất tốt nhất ở đây ..."
);
manager.addAnswer(
  "vi",
  "category.dienlanh",
  "Vấn đề của bạn thuộc về dịch vụ Điện lạnh, sau đây là những đại lý thuộc dịch vụ điện lạnh tốt nhất ở đây ..."
);
manager.addAnswer(
  "vi",
  "category.dogiadung",
  "Vấn đề của bạn thuộc về dịch vụ Đồ gia dụng, sau đây là những đại lý thuộc dịch vụ Đồ gia dụng tốt nhất ở đây ..."
);

// Train and save the model.
(async () => {
  await manager.train();
  manager.save();
  const response = await manager.process("vi", "cái quạt của tôi có vấn đề");
  console.log(response);
})();

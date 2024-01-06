const { NlpManager } = require("node-nlp");

const manager = new NlpManager({
  languages: ["vi"],
  forceNER: true,
  nlu: { log: false },
});

// Hello
manager.addDocument("vi", "hi", "greetings.hello");
manager.addDocument("vi", "hi cu", "greetings.hello");
manager.addDocument("vi", "hi cưng", "greetings.hello");
manager.addDocument("vi", "hello", "greetings.hello");
manager.addDocument("vi", "hi there", "greetings.hello");
manager.addDocument("vi", "khỏe không", "greetings.hello");
manager.addDocument("vi", "rất chào bạn", "greetings.hello");
manager.addDocument("vi", "có gì mới không", "greetings.hello");
manager.addDocument("vi", "chào", "greetings.hello");
manager.addDocument("vi", "xin chào", "greetings.hello");
manager.addDocument("vi", "đang làm gì", "greetings.hello");
manager.addDocument("vi", "sửa tận nơi", "greetings.hello");
manager.addDocument("vi", "chào buổi tối", "greetings.hello");
manager.addDocument("vi", "chào buổi sáng", "greetings.hello");
manager.addDocument("vi", "hôm nay thế nào", "greetings.hello");
manager.addDocument("vi", "Bạn là ai", "greetings.hello");
manager.addDocument("vi", "Bạn đã đến từ đâu", "greetings.hello");
manager.addDocument("vi", "Có gì đặc biệt không", "greetings.hello");
manager.addDocument("vi", "dịch vụ sửa chữa tận nơi", "greetings.hello");
// Bye
manager.addDocument("vi", "bye", "greetings.bye");
manager.addDocument("vi", "cút", "greetings.bye");
manager.addDocument("vi", "biến", "greetings.bye");
manager.addDocument("vi", "lượn", "greetings.bye");
manager.addDocument("vi", "tạm biệt", "greetings.bye");
manager.addDocument("vi", "gặp lại sau", "greetings.bye");
manager.addDocument("vi", "hẹn gặp lại", "greetings.bye");
manager.addDocument("vi", "tôi phải rời đi", "greetings.bye");
manager.addDocument("vi", "Tạm biệt và hẹn gặp lại ", "greetings.bye");
manager.addDocument("vi", "Hẹn gặp lại sau giờ làm việc", "greetings.bye");
// Categories
manager.addDocument("vi", "dịch vụ gì", "list.categories");
manager.addDocument("vi", "dịch vụ nào", "list.categories");
manager.addDocument("vi", "dịch vụ ở đây", "list.categories");
manager.addDocument("vi", "tất cả dịch vụ", "list.categories");
manager.addDocument("vi", "dịch vụ chính là gì", "list.categories");
manager.addDocument("vi", "có những dịch vụ nào", "list.categories");
manager.addDocument(
  "vi",
  "xem danh sách đầy đủ các dịch vụ",
  "list.categories"
);
manager.addDocument(
  "vi",
  "tôi có thể tìm kiếm những dịch vụ gì gì",
  "list.categories"
);
manager.addDocument(
  "vi",
  "Dịch vụ của bạn có sẵn trên toàn quốc không",
  "list.categories"
);
// Xe máy
manager.addDocument("vi", "xe", "category.xemay");
manager.addDocument("vi", "xe", "category.xemay");
manager.addDocument("vi", "BMW", "category.xemay");
manager.addDocument("vi", "lốp", "category.xemay");
manager.addDocument("vi", "Ford", "category.xemay");
manager.addDocument("vi", "tay ga", "category.xemay");
manager.addDocument("vi", "gắn máy", "category.xemay");
manager.addDocument("vi", "hành trình", "category.xemay");
manager.addDocument("vi", "km", "category.xemay");
manager.addDocument("vi", "bình", "category.xemay");
manager.addDocument("vi", "acquy", "category.xemay");
manager.addDocument("vi", "Honda", "category.xemay");
manager.addDocument("vi", "Toyota", "category.xemay");
manager.addDocument("vi", "vô lăng", "category.xemay");
manager.addDocument("vi", "baga", "category.xemay");
manager.addDocument("vi", "taxi", "category.xemay");
manager.addDocument("vi", "ắc quy", "category.xemay");
manager.addDocument("vi", "tự lái", "category.xemay");
manager.addDocument("vi", "chiếu hậu", "category.xemay");
manager.addDocument("vi", "nhiên liệu", "category.xemay");
manager.addDocument("vi", "ô tô", "category.xemay");
manager.addDocument("vi", "xe cộ", "category.xemay");
manager.addDocument("vi", "xe oto", "category.xemay");
manager.addDocument("vi", "xe máy", "category.xemay");
manager.addDocument("vi", "hộp số", "category.xemay");
manager.addDocument("vi", "tự hành", "category.xemay");
manager.addDocument("vi", "va chạm", "category.xemay");
manager.addDocument("vi", "tai nạn", "category.xemay");
manager.addDocument("vi", "phanh ABS", "category.xemay");
manager.addDocument("vi", "bảo hiểm xe", "category.xemay");
manager.addDocument("vi", "nội thất xe", "category.xemay");
manager.addDocument("vi", "xăng", "category.xemay");
manager.addDocument("vi", "động cơ", "category.xemay");
manager.addDocument("vi", "giao thông", "category.xemay");
manager.addDocument("vi", "dầu", "category.xemay");
manager.addDocument("vi", "lái", "category.xemay");
manager.addDocument("vi", "nhớt", "category.xemay");
manager.addDocument("vi", "mã lực", "category.xemay");
// Đồ gia dụng
manager.addDocument("vi", "TV", "category.dogiadung");
manager.addDocument("vi", "bếp", "category.dogiadung");
manager.addDocument("vi", "loa", "category.dogiadung");
manager.addDocument("vi", "quạt", "category.dogiadung");
manager.addDocument("vi", "tivi", "category.dogiadung");
manager.addDocument("vi", "bếp từ", "category.dogiadung");
manager.addDocument("vi", "đồng hồ", "category.dogiadung");
manager.addDocument("vi", "bàn ủi", "category.dogiadung");
manager.addDocument("vi", "ấm siêu tốc", "category.dogiadung");
manager.addDocument("vi", "bình nấu nước", "category.dogiadung");
manager.addDocument("vi", "bàn là", "category.dogiadung");
manager.addDocument("vi", "máy sấy", "category.dogiadung");
manager.addDocument("vi", "máy giặt", "category.dogiadung");
manager.addDocument("vi", "máy đánh trứng", "category.dogiadung");
manager.addDocument("vi", "máy nướng bánh mì", "category.dogiadung");
manager.addDocument("vi", "đèn", "category.dogiadung");
manager.addDocument("vi", "máy trộn", "category.dogiadung");
manager.addDocument("vi", "máy sưởi", "category.dogiadung");
manager.addDocument("vi", "lò nướng", "category.dogiadung");
manager.addDocument("vi", "máy tạo ẩm", "category.dogiadung");
manager.addDocument("vi", "máy xay sinh tố", "category.dogiadung");
manager.addDocument("vi", "máy lọc không khí", "category.dogiadung");
manager.addDocument("vi", "lò vi sóng", "category.dogiadung");
manager.addDocument("vi", "máy sấy tóc", "category.dogiadung");
manager.addDocument("vi", "máy hút bụi", "category.dogiadung");
manager.addDocument("vi", "nồi cơm điện", "category.dogiadung");
manager.addDocument("vi", "máy xay thịt", "category.dogiadung");
manager.addDocument("vi", "máy làm bánh", "category.dogiadung");
manager.addDocument("vi", "máy lọc nước", "category.dogiadung");
manager.addDocument("vi", "máy xay cà phê", "category.dogiadung");
manager.addDocument("vi", "máy pha cà phê", "category.dogiadung");
manager.addDocument("vi", "bàn là hơi nước", "category.dogiadung");
manager.addDocument("vi", "đồ gia dụng", "category.dogiadung");
manager.addDocument("vi", "đồ dùng gia đình", "category.dogiadung");
manager.addDocument("vi", "sửa chữa đồ gia dụng", "category.dogiadung");
manager.addDocument("vi", "cái bếp của tôi gặp vấn đề", "category.dogiadung");
manager.addDocument("vi", "cái quạt của tôi nó bị hư", "category.dogiadung");
manager.addDocument(
  "vi",
  "lò vi sóng của tôi không hoạt động",
  "category.dogiadung"
);
// Đồ điện lạnh
manager.addDocument("vi", "đèn", "category.dienlanh");
manager.addDocument("vi", "nóng", "category.dienlanh");
manager.addDocument("vi", "tủ mát", "category.dienlanh");
manager.addDocument("vi", "tủ đông", "category.dienlanh");
manager.addDocument("vi", "tủ lạnh", "category.dienlanh");
manager.addDocument("vi", "điều hoà", "category.dienlanh");
manager.addDocument("vi", "điện lạnh", "category.dienlanh");
manager.addDocument("vi", "chảy nước", "category.dienlanh");
manager.addDocument("vi", "máy làm đá", "category.dienlanh");
manager.addDocument("vi", "không lạnh", "category.dienlanh");
// Đồ nội thất
manager.addDocument("vi", "bàn", "category.noithat");
manager.addDocument("vi", "cửa", "category.noithat");
manager.addDocument("vi", "ghế", "category.noithat");
manager.addDocument("vi", "sofa", "category.noithat");
manager.addDocument("vi", "tranh", "category.noithat");
manager.addDocument("vi", "bàn ghế", "category.noithat");
manager.addDocument("vi", "nội thất", "category.noithat");
manager.addDocument("vi", "đồ nội thất", "category.noithat");
manager.addDocument("vi", "tủ", "category.noithat");
manager.addDocument("vi", "kệ", "category.noithat");
manager.addDocument("vi", "gương", "category.noithat");
manager.addDocument("vi", "cái giường", "category.noithat");
manager.addDocument(
  "vi",
  "bộ bàn ghế của tôi cần được sửa chữa",
  "category.noithat"
);
manager.addDocument("vi", "cái ghế của tôi bị gãy chân", "category.noithat");
manager.addDocument("vi", "cái kệ quần áo của tôi bị hư", "category.noithat");
manager.addDocument("vi", "cái tủ đựng đồ của tôi bị gãy", "category.noithat");
// Điện nước
manager.addDocument("vi", "CP", "category.diennuoc");
manager.addDocument("vi", "ổ cắm", "category.diennuoc");
manager.addDocument("vi", "ổ điện", "category.diennuoc");
manager.addDocument("vi", "máy bơm", "category.diennuoc");
manager.addDocument("vi", "cầu dao", "category.diennuoc");
manager.addDocument("vi", "cầu giao", "category.diennuoc");
manager.addDocument("vi", "đường nước", "category.diennuoc");
manager.addDocument("vi", "hệ thống điện", "category.diennuoc");
manager.addDocument("vi", "hệ thống nước", "category.diennuoc");
manager.addDocument("vi", "cầu phích cắm", "category.diennuoc");
manager.addDocument("vi", "công tắc điện", "category.diennuoc");
manager.addDocument("vi", "năng lượng mặt trời", "category.diennuoc");
manager.addDocument("vi", "bồn tắm", "category.diennuoc");
manager.addDocument("vi", "vòi sen", "category.diennuoc");
manager.addDocument("vi", "máy bơi", "category.diennuoc");
manager.addDocument("vi", "công tắc", "category.diennuoc");
manager.addDocument("vi", "công tắc", "category.diennuoc");
manager.addDocument("vi", "bồn nước", "category.diennuoc");
manager.addDocument("vi", "lọc nước", "category.diennuoc");
manager.addDocument("vi", "ống nước", "category.diennuoc");
manager.addDocument("vi", "vòi nước", "category.diennuoc");
manager.addDocument("vi", "điện nước", "category.diennuoc");
manager.addDocument("vi", "vòi rửa chén", "category.diennuoc");
manager.addDocument("vi", "bồn rửa chén", "category.diennuoc");
manager.addDocument("vi", "máy nước nóng", "category.diennuoc");
manager.addDocument("vi", "bình nóng lạnh", "category.diennuoc");
manager.addDocument("vi", "máy bơi lọc nước", "category.diennuoc");
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
// An ninh
manager.addDocument("vi", "nổ", "category.anninh");
manager.addDocument("vi", "cháy", "category.anninh");
manager.addDocument("vi", "bảo vệ", "category.anninh");
manager.addDocument("vi", "ghi âm", "category.anninh");
manager.addDocument("vi", "khẩn cấp", "category.anninh");
manager.addDocument("vi", "chống sét", "category.anninh");
manager.addDocument("vi", "chuyển động", "category.anninh");
manager.addDocument("vi", "camera", "category.anninh");
manager.addDocument("vi", "thẻ từ", "category.anninh");
manager.addDocument("vi", "mạng", "category.anninh");
manager.addDocument("vi", "vân tay", "category.anninh");
manager.addDocument("vi", "mật khẩu", "category.anninh");
manager.addDocument("vi", "khuôn mặt", "category.anninh");
manager.addDocument("vi", "chuyển động", "category.anninh");
manager.addDocument("vi", "khóa cửa điện tử", "category.anninh");
manager.addDocument("vi", "mã", "category.anninh");
manager.addDocument("vi", "firewall", "category.anninh");
manager.addDocument("vi", "khóa cửa", "category.anninh");
manager.addDocument("vi", "khóa cổng", "category.anninh");
manager.addDocument("vi", "tường lửa", "category.anninh");
manager.addDocument("vi", "Ổ cứng", "category.anninh");
manager.addDocument("vi", "mã PIN", "category.anninh");
manager.addDocument("vi", "an ninh", "category.anninh");
manager.addDocument("vi", "bảo mật", "category.anninh");
manager.addDocument("vi", "cảm biến", "category.anninh");
manager.addDocument("vi", "quét", "category.anninh");
manager.addDocument("vi", "cam", "category.anninh");
manager.addDocument("vi", "trộm", "category.anninh");
manager.addDocument("vi", "cướp", "category.anninh");
manager.addDocument("vi", "từ xa", "category.anninh");
manager.addDocument("vi", "kiểm soát", "category.anninh");
manager.addDocument("vi", "điều khiển từ xa", "category.anninh");
manager.addDocument("vi", "bảng điều khiển từ xa", "category.anninh");
manager.addDocument("vi", "vân tay", "category.anninh");
manager.addDocument("vi", "báo cháy", "category.anninh");
manager.addDocument("vi", "chống trộm", "category.anninh");
manager.addDocument("vi", "hệ thống báo cháy", "category.anninh");
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
// Văn phòng
manager.addDocument("vi", "PC", "category.vanphong");
manager.addDocument("vi", "mực", "category.vanphong");
manager.addDocument("vi", "bút", "category.vanphong");
manager.addDocument("vi", "giấy", "category.vanphong");
manager.addDocument("vi", "photo", "category.vanphong");
manager.addDocument("vi", "phô tô", "category.vanphong");
manager.addDocument("vi", "đếm tiền", "category.vanphong");
manager.addDocument("vi", "Máy đếm tiền", "category.vanphong");
manager.addDocument("vi", "MIC", "category.vanphong");
manager.addDocument("vi", "fax", "category.vanphong");
manager.addDocument("vi", "scan", "category.vanphong");
manager.addDocument("vi", "Máy fax", "category.vanphong");
manager.addDocument("vi", "Microphone", "category.vanphong");
manager.addDocument("vi", "USB", "category.vanphong");
manager.addDocument("vi", "Webcam", "category.vanphong");
manager.addDocument("vi", "laptop", "category.vanphong");
manager.addDocument("vi", "bàn phím", "category.vanphong");
manager.addDocument("vi", "tai nghe ", "category.vanphong");
manager.addDocument("vi", "chuột máy tính", "category.vanphong");
manager.addDocument("vi", "ARM", "category.vanphong");
manager.addDocument("vi", "chuột", "category.vanphong");
manager.addDocument("vi", "máy in", "category.vanphong");
manager.addDocument("vi", "màn hình", "category.vanphong");
manager.addDocument("vi", "máy tính", "category.vanphong");
manager.addDocument("vi", "máy quét", "category.vanphong");
manager.addDocument("vi", "màn hình", "category.vanphong");
manager.addDocument("vi", "máy chiếu", "category.vanphong");
manager.addDocument("vi", "văn phòng", "category.vanphong");
manager.addDocument("vi", "thiết bị văn phòng", "category.vanphong");

/////////////////////////// ANSWERS ////////////////////////

// Train also the NLG
manager.addAnswer("vi", "greetings.bye", "VNFIXER cảm ơn và hẹp gặp lại");
manager.addAnswer("vi", "greetings.bye", "Cảm ơn và hẹn gặp lại");
manager.addAnswer("vi", "greetings.bye", "Rất vui vì đã được hỗ trợ cho bạn");
manager.addAnswer(
  "vi",
  "greetings.bye",
  "Nếu có bất kỳ thắc mắc nào đừng ngần ngại hỏi tôi nhé"
);
manager.addAnswer(
  "vi",
  "greetings.hello",
  "Tôi là trợ lý VNFIXER, tôi có thể giúp gì cho bạn?"
);
manager.addAnswer(
  "vi",
  "greetings.hello",
  "Tôi là trợ lý VNFIXER, rất vui được gặp bạn"
);
manager.addAnswer("vi", "greetings.hello", "Tôi rất chào bạn");

manager.addAnswer(
  "vi",
  "list.categories",
  "Đây là những dịch vụ của chúng tôi...."
);

manager.addAnswer(
  "vi",
  "category.xemay",
  "Vấn đề của bạn thuộc về dịch vụ Xe máy, sau đây là những đại lý thuộc dịch vụ xe máy tốt nhất ở đây ..."
);
manager.addAnswer(
  "vi",
  "category.vanphong",
  "Vấn đề của bạn thuộc về dịch vụ Văn phòng, sau đây là những đại lý thuộc dịch vụ văn phòng tốt nhất ở đây ..."
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
manager.addAnswer(
  "vi",
  "category.diennuoc",
  "Vấn đề của bạn thuộc về dịch vụ Điện nước, sau đây là những đại lý thuộc dịch vụ điện nước tốt nhất ở đây ..."
);
manager.addAnswer(
  "vi",
  "category.anninh",
  "Vấn đề của bạn thuộc về dịch vụ An ninh, sau đây là những đại lý thuộc dịch vụ an ninh tốt nhất ở đây ..."
);

// Train and save the model.
(async () => {
  await manager.train();
  manager.save();
  // const response = await manager.process("vi", "cái quạt của tôi có vấn đề");
  // console.log(response);
})();

# BÁO CÁO LỖI (BUG REPORTS)
**Dự án:** Hệ thống Website bán hàng online (E-commerce Alpha Shop)
**Tổng số Bug ghi nhận:** 10 Bugs (2 Critical, 4 Major, 4 Minor)

| Bug ID | Tóm tắt (Summary) | Các bước tái hiện (Steps to Reproduce) | Kết quả mong đợi (Expected) | Kết quả thực tế (Actual) | Độ nghiêm trọng (Severity) | Độ ưu tiên (Priority) | Môi trường (Environment) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **BUG_AUTH_001** | Lỗi trắng trang khi bấm Đăng ký liên tục | 1. Nhập email: valid@test.com<br>2. Nhập pass: "12345678"<br>3. Click nút "Đăng ký" nhanh 3 lần liên tiếp | Đăng ký thành công, nút Đăng ký bị disable sau click đầu tiên | Web bị crash (Trắng trang / White Screen of Death) | **Critical** | High | Chrome 114, Win 11 |
| **BUG_CART_001** | Tính sai tổng tiền giỏ hàng khi tổng item > 2 | 1. Thêm 1 SP A (100k)<br>2. Thêm 2 SP B (50k/cái) | Tổng giá trị giỏ hàng = 200.000đ | Giỏ hàng hiển thị tổng = 150.000đ (Không cộng dồn số lượng SP B) | **Critical** | High | Chrome 114, Win 11 |
| **BUG_AUTH_002** | Hệ thống vẫn cho phép đăng ký khi Pass = 7 ký tự | 1. Nhập email: abc@test.com<br>2. Nhập mật khẩu là "1234567"<br>3. Bấm Đăng ký | Hệ thống báo lỗi "Mật khẩu tối thiểu 8 ký tự" | Hệ thống báo "Đăng ký thành công", tạo user database | **Major** | High | Chrome 114, Win 11 |
| **BUG_CART_002** | Sản phẩm trong giỏ bị làm trống khi Refresh (F5) | 1. Thêm 1 SP A vào giỏ hàng<br>2. Bấm F5 hoặc Reload trang bằng nút trình duyệt | Sản phẩm A vẫn giữ nguyên trạng thái trong giỏ hàng | Giỏ hàng báo "Trống rỗng", mất cookie session lưu giỏ | **Major** | High | Chrome 114, Win 11 |
| **BUG_CHECK_001** | Cổng thanh toán thẻ Visa luôn báo lỗi kết nối | 1. Tại Checkout, khai báo đủ thông tin<br>2. Chọn Phương thức: Visa<br>3. Bấm Đặt Hàng | Chuyển hướng thành công tới Sandbox Visa | Pop-up báo lỗi "500 Internal Server Error - Lỗi hệ thống cổng" | **Major** | High | Chrome 114, Win 11 |
| **BUG_CART_003** | Nút "Xóa" sản phẩm chức năng chập chờn (Bấm 2 lần) | 1. Vào Giỏ hàng có 1 Item<br>2. Bấm Icon "Thùng rác" (Xóa) lần 1 | Item bị xóa ngay lập tức | Không có gì xảy ra. Bấm lần 2 mới thực sự xóa Item | **Major** | Medium | Chrome 114, Win 11 |
| **BUG_UI_001** | Text sai chính tả trên button Đăng ký | 1. Truy cập trang Authentication (Register view) | Text trên button là "Đăng ký" | Text đang hiển thị sai chính tả thành "Đăng kí" | Minor | Low | Chrome 114, Win 11 |
| **BUG_UI_002** | Màu nút "Đặt hàng" ở trang Checkout bị sai mã màu | 1. Mở trang Checkout | Nút "Đặt hàng" màu Xanh lá (#28a745) theo design | Nút "Đặt hàng" đang có màu Đỏ (#dc3545) | Minor | Low | Chrome 114, Win 11 |
| **BUG_UI_003** | Khung nhập (Input box) của Email bị lệch margin | 1. Mở trang Login | Width của input Email bằng với input Password | Khung nhập Email dài hơn khung Password 2px | Minor | Low | Chrome 114, Win 11 |
| **BUG_UI_004** | Thông báo lỗi Toast Message không tự động ẩn đi | 1. Nhập sai định dạng email<br>2. Đợi 5 giây sau khi lỗi hiện lên góc màn hình | Thông báo tự động fade out và biến mất sau 3-5s | Dòng thông báo màu đỏ hiển thị vĩnh viễn không biến mất | Minor | Low | Chrome 114, Win 11 |

---
**Nhận xét quá trình log bug:**
- Các lỗi Critical tập trung vào luồng checkout và register, gây ảnh hưởng nghiêm trọng tới flow vận hành.
- Lỗi Major chủ yếu nằm ở phần validation logic và quản lý session của giỏ hàng.
- Lỗi Minor chỉ là sai sót về UI/UX cơ bản, ít ảnh hưởng chức năng chính.

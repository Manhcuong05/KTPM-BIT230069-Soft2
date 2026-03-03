# MA TRẬN TRUY VẾT YÊU CẦU (REQUIREMENT TRACEABILITY MATRIX - RTM)

**Dự án:** Hệ thống Website bán hàng online (E-commerce Alpha Shop)
**Độ bao phủ yêu cầu (Coverage):** 100% (16/16 Requirements)

| Requirement ID | Mô tả Yêu cầu | Test Case ID Mapped | Trạng thái (Status) |
| --- | --- | --- | --- |
| **R1** | Người dùng đăng ký bằng email hợp lệ | TC_AUTH_001, TC_AUTH_005, TC_AUTH_006 | Covered |
| **R2** | Không cho đăng ký khi email sai định dạng | TC_AUTH_002, TC_AUTH_003, TC_AUTH_007, TC_AUTH_008 | Covered |
| **R3** | Mật khẩu tối thiểu 8 ký tự | TC_AUTH_004, TC_AUTH_005 | Covered |
| **R4** | Đăng nhập thành công với thông tin hợp lệ | TC_AUTH_009, TC_AUTH_015 | Covered |
| **R5** | Đăng nhập thất bại khi sai mật khẩu / tk | TC_AUTH_010, TC_AUTH_011, TC_AUTH_012 | Covered |
| **R6** | Quên mật khẩu gửi email đặt lại | TC_AUTH_013, TC_AUTH_014 | Covered |
| **R7** | Tìm kiếm hiển thị đúng kết quả | TC_CART_001, TC_CART_002, TC_CART_003 | Covered |
| **R8** | Lọc theo giá hoạt động đúng | TC_CART_004, TC_CART_005 | Covered |
| **R9** | Xem chi tiết sản phẩm | TC_CART_006, TC_CART_007 | Covered |
| **R10** | Thêm sản phẩm vào giỏ thành công | TC_CART_008, TC_CART_009, TC_CART_010, TC_CART_011 | Covered |
| **R11** | Cập nhật số lượng trong giỏ | TC_CART_012, TC_CART_013, TC_CART_014, TC_CART_015 | Covered |
| **R12** | Xoá sản phẩm khỏi giỏ | TC_CART_016, TC_CART_017, TC_CART_019 | Covered |
| **R13** | Thanh toán bắt buộc nhập địa chỉ | TC_CHECK_001, TC_CHECK_003 | Covered |
| **R14** | Chọn phương thức thanh toán | TC_CHECK_001, TC_CHECK_002, TC_CHECK_004, TC_CHECK_005 | Covered |
| **R15** | Đặt hàng thành công | TC_CHECK_001, TC_CHECK_002, TC_CHECK_008, TC_CHECK_009 | Covered |
| **R16** | Lưu lịch sử đơn hàng | TC_CHECK_006, TC_CHECK_007 | Covered |

---
**Nhận xét:**
- 100% Requirements (16/16) đã được ánh xạ với tối thiểu **2 Test Cases** (đảm bảo cả Positive và Negative/Boundary flow).
- Tổng Test Cases cover cho RTM: 45 Test Cases.
- Coverage = (16 / 16) * 100 = 100% (Thỏa mãn tiêu chí > 95% của dự án).

# KẾ HOẠCH KIỂM THỬ (TEST PLAN)
**Dự án:** Hệ thống Website bán hàng online (E-commerce Alpha Shop)
**Mô tả:** Tài liệu Kế hoạch kiểm thử (Test Plan) định nghĩa chiến lược, phạm vi, tài nguyên, và lịch trình kiểm thử cho hệ thống E-commerce.

---

## 1. Giới thiệu (Introduction)
Tài liệu này xác định mục tiêu, chiến lược, phạm vi và nguồn lực kiểm thử cho hệ thống Web giả lập E-commerce (Alpha Shop). Mục tiêu của dự án kiểm thử là đảm bảo chất lượng, tính ổn định và đáp ứng đúng các yêu cầu nghiệp vụ cho 3 phân hệ cốt lõi trước khi hệ thống được phát hành cho người dùng cuối cùng. Đảm bảo trải nghiệm mua sắm mượt mà, chính xác và an toàn.

## 2. Phạm vi kiểm thử (Scope)

### 2.1. In-scope (Trong phạm vi kiểm thử)
Quá trình kiểm thử tập trung vào 3 phân hệ (module) chính của hệ thống với các tính năng sau:
- **Module 1 – Xác thực người dùng (Authentication):**
  - Đăng ký tài khoản mới (Valid/Invalid Data).
  - Đăng nhập hệ thống.
  - Quên mật khẩu và khôi phục cài đặt.
  - Đăng xuất an toàn.
- **Module 2 – Sản phẩm & Giỏ hàng (Product & Cart):**
  - Tìm kiếm sản phẩm theo tên, từ khóa.
  - Lọc sản phẩm theo khoảng giá và danh mục.
  - Xem thông tin chi tiết của sản phẩm.
  - Thêm mới sản phẩm vào giỏ hàng.
  - Quản lý giỏ hàng (cập nhật số lượng, xóa sản phẩm).
- **Module 3 – Thanh toán (Checkout):**
  - Khai báo và xác nhận địa chỉ giao hàng.
  - Lựa chọn phương thức thanh toán (COD / thẻ Visa giả lập).
  - Xác nhận đặt hàng và thanh toán.
  - Tra cứu và xem lịch sử đơn hàng đã đặt.

### 2.2. Out-of-scope (Ngoài phạm vi kiểm thử)
Các hoạt động sau không được thực hiện trong đợt kiểm thử này:
- **Kiểm thử hiệu năng (Performance/Load Testing):** Không kiểm tra tải tối đa và giới hạn đáp ứng của server.
- **Kiểm thử tự động (Automation Testing):** Chỉ thực hiện Manual Testing 100%.
- **Kiểm thử bảo mật (Security/Penetration Testing chuyên sâu):** Ngoại trừ các kiểm tra bảo mật ở mức cơ bản (như SQL Injection nhẹ qua form login hoặc format mật khẩu).
- **Hệ thống admin/Backend:** Không kiểm tra phần quản trị nội dung của website.

---

## 3. Phương pháp kiểm thử (Test Approach)

### 3.1. Kỹ thuật thiết kế Test Case
- **Phân tích giá trị biên (Boundary Value Analysis - BVA):** Áp dụng cho các trường dữ liệu như độ dài mật khẩu (tối thiểu 8 ký tự), số lượng sản phẩm thêm vào giỏ hàng (0, 1, 99...).
- **Phân vùng tương đương (Equivalence Partitioning - EP):** Phân chia các lớp dữ liệu hợp lệ và không hợp lệ (ví dụ: định dạng email đúng/sai).
- **Đoán lỗi (Error Guessing):** Dựa vào kinh nghiệm để đưa ra các case có thể gây lỗi (spam click, nhập ký tự đặc biệt...).

### 3.2. Loại hình kiểm thử
- **Kiểm thử chức năng (Functional Testing / Black-box):** Đảm bảo hệ thống hoạt động đúng theo các Requirement (R1 - R16).
- **Kiểm thử giao diện (UI Basic Testing):** Kiểm tra bố cục, màu sắc nút bấm, font chữ, alignment cơ bản của các page (Login, Cart, Checkout).
- **Kiểm thử bảo mật cơ bản:** Bắt buột độ dài mật khẩu, định dạng email chuẩn.
- **Kiểm thử hồi quy (Regression test / Smoke test):** Đảm bảo không phát sinh lỗi mới nếu có bản patch sửa lỗi trong quá trình test.

---

## 4. Môi trường kiểm thử (Test Environment)

Môi trường kiểm thử cần đồng nhất để việc tái hiện lỗi chính xác:
- **Phần cứng:** PC / Laptop độ phân giải tối thiểu 1366x768 (Khuyến nghị 1920x1080).
- **Hệ điều hành:** Windows 10 / Windows 11.
- **Trình duyệt (Browser):** Google Chrome (Phiên bản mới nhất, tối thiểu version 110+). Không cấu hình chặn JavaScript hay cache.
- **Môi trường Deploy / URL:** File HTML giả lập nội bộ (Localhost) hoặc môi trường Staging nội bộ của nhóm dự án.
- **Dữ liệu test:** Dữ liệu người dùng ảo tự sinh (Dummy Data), tài khoản thẻ Visa giả lập được cung cấp từ phía Developer (VD: 4242 4242...).

---

## 5. Điều kiện vào / ra (Entry & Exit Criteria)

### 5.1. Điều kiện bắt đầu (Entry Criteria)
- Tài liệu Đặc tả yêu cầu hệ thống (Requirement Specification) hoặc User Stories đã được phê duyệt (16 Requirements).
- Hệ thống giả lập web đã build, deploy xong lên môi trường test và truy cập được ổn định (Smoke test pass).
- Kế hoạch kiểm thử, Test cases đã được review và phê duyệt.
- Đội ngũ QA đã được cấp quyền, thông tin đăng nhập và dữ liệu test.

### 5.2. Điều kiện kết thúc (Exit Criteria)
- 100% Test Case đã được thực thi (Execution Rate).
- Độ bao phủ yêu cầu (Requirement Coverage) phải đạt ≥ 95%.
- **KHÔNG CÒN** bất kỳ lỗi/bug nào ở mức độ **Critical** hoặc **Major** ở trạng thái Mở (Open).
- Các lỗi **Minor** có thể giữ lại với số lượng < 10% tổng số test case, và có plan fix ở phase sau.
- Các Báo cáo lỗi (Bug Reports), Ma trận RTM, và Báo cáo kiểm thử (Test Report) đã được hoàn thiện nốt.

---

## 6. Rủi ro & Biện pháp giảm thiểu (Risks & Mitigation)

| ID Rủi ro | Mô tả Rủi ro (Risk Description) | Mức độ | Biện pháp giảm thiểu (Mitigation Plan) |
| --- | --- | --- | --- |
| **RSK-01** | UI giao diện vỡ trên các màn hình và độ phân giải khác nhau làm cản trở thao tác test chức năng. | Medium | Quy định test UI trên một độ phân giải chuẩn 1920x1080. Ưu tiên test luồng Functional trước. |
| **RSK-02** | Hệ thống giả lập đôi lúc bị timeout / mất kết nối cơ sở dữ liệu khi thanh toán. | High | Phối hợp với team Dev chuẩn bị sẵn file log và môi trường backup. Khởi động lại service khi có lỗi. |
| **RSK-03** | Thiếu thời gian để thực thi toàn bộ số lượng test case. | Medium | Ưu tiên thực thi các test case chức năng quan trọng (High Priority như Login, Cart, Checkout) và các test case rẽ nhánh chính. |
| **RSK-04** | Nhầm lẫn trong việc tracking quá trình kiểm thử nếu hệ thống liên tục được code và update. | High | Thống nhất Version/Release build với bên Dev, sau khi chốt bản build test mới được tiến hành test chính thức (Freeze Code). |

---

## 7. Vai trò & Trách nhiệm (Roles & Responsibilities)

| Vai trò | Số lượng | Trách nhiệm |
| --- | --- | --- |
| **QA Manager / Mentor** | 1 | Quản lý tiến độ dự án. Review Test Plan, Test Case và đánh giá kết quả kiểm thử. Đưa ra quyết định Go/No-Go final. |
| **Manual QA (Tester)** | 1-2 | Thiết kế Test Cases (Positive, Negative, Boundary). Thực thi test trên hệ thống giả lập. Ghi nhận lỗi (Bug report) và thiết lập RTM. Cập nhật trạng thái liên tục. |
| **Developer / SE** | 1-2 | Deploy code lên môi trường Test. Fix bù các lỗi phát sinh do Tester báo cáo. Hỗ trợ dữ liệu đầu vào. |

---

## 8. Lịch trình kiểm thử (Test Schedule)
> *Lịch trình giả lập cho 1 chu trình Spint (1 tuần).*

| Tên Giai đoạn (Phase) | Hoạt động chính | Thời gian dự kiến | Output giao nộp |
| --- | --- | --- | --- |
| **Planning & Design** | Phân tích tài liệu Requirement. Viết Test Plan & thiết kế Test Cases, ma trận RTM. | Ngày 1 - Ngày 2 | Test Plan, Test Cases, RTM |
| **Test Execution** | Thực thi Smoke test. Thực thi bộ Test Case trên nền tảng web (Version 1.0). Đẩy bug report. | Ngày 3 - Ngày 4 | Bug Reports |
| **Bug Fixing & Retest** | Dev tiến hành phân tích log và fix bug. QA tiến hành Verify và Regression test lại hệ thống. | Ngày 5 | Cập nhật Status Bug |
| **Reporting & Sign-off** | Tổng hợp số liệu Metrics, lập Báo cáo kiểm thử. Xem xét điều kiện ra và ra quyết định release. | Ngày 6 | Test Report, Test Metrics |

---
*Tài liệu này được lập ra để phục vụ cho đồ án Bài tập kiểm thử phần mềm. Toàn bộ thông tin được thiết kế bám sát thực tế của một dự án Agile.*

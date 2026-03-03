# BÁO CÁO KIỂM THỬ (TEST REPORT)

**Dự án:** Hệ thống Website bán hàng online (E-commerce Alpha Shop)
**Giai đoạn:** Phase 1 – Kiểm thử Tính năng cốt lõi (Core Functional Testing)

---

## 1. Tóm tắt Thực thi (Execution Summary)
- **Tổng số Test Case:** 45 Test Cases
- **Số Test Case Đã thực thi:** 45 (Đạt **100% Execution Rate**)
- **Kết quả thực thi:**
  - **Pass (Đạt):** 35 (77.8%)
  - **Fail (Thất bại / Lỗi):** 10 (22.2%)
  - **Blocked (Bị chặn do lỗi khác):** 0 (0%)

## 2. Top 5 Lỗi Nghiêm Trọng Nhất Hệ Thống
Dưới đây là 5 Bug có độ nghiêm trọng cao nhất (Critical / Major) đang tồn tại trên môi trường Test, gây ảnh hưởng trực tiếp tới luồng người dùng:
1. **[BUG_AUTH_001] (Critical):** Lỗi trắng trang (crash) khi user click đúp / bấm liên tục vào nút Đăng ký. Gây gián đoạn toàn bộ hệ thống đăng ký.
2. **[BUG_CART_001] (Critical):** Hệ thống tính sai tổng tiền giỏ hàng khi add > 2 sản phẩm khác nhau. Sai số trên hóa đơn thanh toán trực tiếp gây thiệt hại về doanh thu.
3. **[BUG_AUTH_002] (Major):** Bỏ qua Validation password ở tầng Backend, vẫn tạo thành công tài khoản khi pass = 7 ký tự (mặc dù frontend báo lỗi).
4. **[BUG_CART_002] (Major):** Giỏ hàng sử dụng state lưu ở RAM mà chưa lưu xuống LocalStorage, dẫn đến việc mất 100% dữ liệu giỏ hàng khi người dùng tải lại trang (F5).
5. **[BUG_CHECK_001] (Major):** Hệ thống Gateway thanh toán thẻ Visa đang bị sập (lỗi 500) không cho phép hoàn tất kết nối, chặn flow mua hàng bằng Credit Card.

## 3. Nhận xét Chất lượng Hệ thống (System Quality Feedback)
- **Về tính ổn định luồng chức năng (Stability):** Hệ thống E-commerce hiện tại **chưa ổn định**. Hệ thống xử lý giỏ hàng gặp lỗ hổng lớn về logic tính tiền và caching dữ liệu session. Chức năng Authentication và Checkout vẫn còn những "điểm nghẽn" rủi ro cao (như Crash page hay Lỗi 500 API). 
- **Về Giao diện (UI/UX):** Phía frontend thiết kế khá trực quan và bám sát yêu cầu, tuy nhiên vẫn gặp các lỗi về margin, sai màu nút bấm và sai lệch format chữ / lỗi chính tả nhỏ giọt.

## 4. Quyết định Phát hành (Release Decision)

**➡️ KẾT LUẬN: NO-RELEASE (TỪ CHỐI PHÁT HÀNH / TỪ CHỐI CHUYỂN GIAO)**

- **Lý do từ chối:** 
  1. Sản phẩm tồn đọng **2 lỗi Critical và 4 lỗi Major** liên quan mật thiết tới luồng thanh toán và xác thực.
  2. Bất kỳ sự cố nào trong số các Bug Critical này lọt ra môi trường thật (Production) đều có thể dẫn tới thất thoát tài chính cho công ty hoặc khiến người dùng không thể tạo tài khoản, gây drop-off nghiêm trọng.
- **Hành động tiếp theo (Next Action):** 
  - Trả lại bản Build cho đội Dev sửa 100% các lỗi Critical và Major. Các lỗi Minor có thể dời sang Sprint tiếp theo (Backlog).
  - Đội QA sẽ tiến hành lên lịch Regression Test đợt 2 sau khi có email báo patch từ Developer.

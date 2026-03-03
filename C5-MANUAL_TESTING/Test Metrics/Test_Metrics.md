# CHỈ SỐ KIỂM THỬ (TEST METRICS)

**Dự án:** Hệ thống Website bán hàng online (E-commerce Alpha Shop)
**Giai đoạn:** Phase 1 – Kiểm thử Tính năng cốt lõi

---

## 1. Tỷ lệ thực thi test (Test Execution Rate)
Đây là chỉ số đánh giá khối lượng công việc kiểm thử mà Testing Team đã hoàn thành.

* **Công thức tính (Formula):** 
`Tiến độ thực thi (%) = (Tổng số TC đã chạy / Tổng số TC đã viết) * 100`

* **Số liệu thực tế (Data):**
  - Số lượng Test Case đã viết (Total Designed): 45
  - Số lượng Test Case đã thực thi (Total Executed): 45
  - Chưa được chạy (Not Executed / Blocked): 0

➡️ **Tỷ lệ thực thi đạt (Execution Rate):** `(45 / 45) * 100% = 100%`

## 2. Mật độ lỗi theo Module (Defect Density per Module)
Chỉ số này cho biết chất lượng mã nguồn (code quality) của từng khu vực nghiệp vụ. Khu vực nào có mật độ lỗi trên lượng Test Case cao hơn thì dev code lỏng lẻo hơn.

* **Phân bổ Bug theo logic (Dựa trên 10 Bugs ghi nhận):**
  - **Module Xác thực (Auth):** 5 lỗi (Bao gồm các bug logic Backend và Frontend ID UI_001, UI_003, UI_004)
  - **Module Giỏ hàng / Sản phẩm (Product & Cart):** 3 lỗi
  - **Module Thanh toán (Checkout):** 2 lỗi (Bao gồm lỗi cổng kết nối lỗi và sai màu UI_002)

* **Số liệu phân tách Mật độ (Density Calculation):**
  - **[M1] Auth Defect Density:** `(5 Lỗi / 15 Test Case) = 0.33` (Khoảng **33.3%** lỗi sinh ra mỗi tính năng).
  - **[M2] Cart Defect Density:** `(3 Lỗi / 20 Test Case) = 0.15` (Khoảng **15.0%** lỗi sinh ra mỗi tính năng).
  - **[M3] Checkout Defect Density:** `(2 Lỗi / 10 Test Case) = 0.20` (Khoảng **20.0%** lỗi sinh ra mỗi tính năng).

➡️ **Nhận xét (Feedback):** Module Xác thực đang mắc nhiều Bug nhất (chiếm 50% tổng số bug và có mật độ 0.33 cao nhất), đội Developer cần focus đặc biệt vào logic form Validation và API register. 

## 3. Phân bố mức độ nghiêm trọng (Severity Distribution)
Đây là thước đo nhận định mức rủi ro hiện có của đợt Release.

* **Số liệu Bug Severity Profile (Trên tổng 10 Bugs):**
  - Lỗi **Critical (Nghiêm trọng cao):** 2
  - Lỗi **Major (Nghiêm trọng vừa):** 4
  - Lỗi **Minor (Sai sót nhỏ):** 4

➡️ **Biểu đồ tỷ lệ (Percentage Profile):**
`Critical: 20.0% | Major: 40.0% | Minor: 40.0%`
* **Cảnh báo (Warning Alert):** Tổng tỷ trọng của nhóm Critical & Major lên tới 60%, vượt quá mức Release Constraint an toàn cho phép của dự án E-commerce.

## 4. Độ bao phủ Yêu cầu (Requirement Coverage %)
Chỉ số chứng minh Hệ thống User Stories / Features đã được Tester scan qua đầy đủ theo hợp đồng, tránh rủi ro bỏ sót requirement (Missing Requirements).

* **Công thức:** 
`Độ bao phủ = (Số lượng Requirement đã test / Tổng số Requirement) * 100`

* **Số liệu (Data):**
  - Tổng số Requirement (R1 - R16): 16
  - Số lượng Req được map với Test Cases: 16
  - Đặc biệt: Mỗi Requirent đều có tối thiểu 2 Test Case cover (1 Positive, >=1 Negative/Boundary).

➡️ **Tỷ lệ bao phủ (Coverage Status):** `(16 / 16) * 100% = 100%`

---
**Tổng kết (Summary Conclusion):**
Testing Team đã hoàn thành việc cover Toàn bộ yêu cầu ban đầu của dự án. Giai đoạn test cho ra các số liệu hợp lý để chỉ ra "điểm mù" về luồng dữ liệu bên trong hệ thống E-commerce hiện tại.

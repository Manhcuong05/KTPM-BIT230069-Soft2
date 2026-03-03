# CA KIỂM THỬ (TEST CASES)
**Dự án:** Hệ thống Website bán hàng online (E-commerce Alpha Shop)
**Tổng số TC:** 45 cases

---

## 1. Module Xác thực (Authentication) - 15 TC

| TC_ID | Tiêu đề (Title) | Điều kiện trước | Các bước (Steps) | Kết quả mong đợi (Expected) | Độ ưu tiên | Loại test |
| --- | --- | --- | --- | --- | --- | --- |
| **TC_AUTH_001** | Đăng ký tài khoản hợp lệ | Không | 1. Nhập email: valid@gmail.com<br>2. Nhập pass: "12345678"<br>3. Bấm Đăng ký | Hiển thị thông báo "Đăng ký thành công" | High | Positive |
| **TC_AUTH_002** | Đăng ký thiếu ký tự @ trong email | Không | 1. Nhập email: "validgmail.com"<br>2. Nhập pass: "12345678"<br>3. Bấm Đăng ký | Báo lỗi định dạng email "Email không hợp lệ" | High | Negative |
| **TC_AUTH_003** | Đăng ký chứa khoảng trắng trong email | Không | 1. Nhập email: "val id@gmail.com"<br>2. Nhập pass: "12345678"<br>3. Bấm Đăng ký | Báo lỗi định dạng email | Med | Negative |
| **TC_AUTH_004** | Đăng ký với mật khẩu 7 ký tự | Không | 1. Nhập email: valid1@gmail.com<br>2. Nhập pass: "1234567"<br>3. Bấm Đăng ký | Báo lỗi "Mật khẩu tối thiểu 8 ký tự" | High | Boundary |
| **TC_AUTH_005** | Đăng ký với mật khẩu đúng 8 ký tự | Không | 1. Nhập email: valid2@gmail.com<br>2. Nhập pass: "12345678"<br>3. Bấm Đăng ký | Đăng ký thành công | High | Boundary |
| **TC_AUTH_006** | Đăng ký với mật khẩu 9 ký tự | Không | 1. Nhập email: valid3@gmail.com<br>2. Nhập pass: "123456789"<br>3. Bấm Đăng ký | Đăng ký thành công | Med | Boundary |
| **TC_AUTH_007** | Đăng ký với email đã tồn tại hệ thống | Tài khoản đã tạo | 1. Nhập email: valid@gmail.com<br>2. Nhập pass: "12345678"<br>3. Bấm Đăng ký | Báo lỗi "Email đã được sử dụng" | High | Negative |
| **TC_AUTH_008** | Đăng ký bỏ trống ô email | Không | 1. Bỏ trống email<br>2. Nhập pass: "12345678"<br>3. Bấm Đăng ký | Báo lỗi "Vui lòng không để trống Email" | High | Negative |
| **TC_AUTH_009** | Đăng nhập với thông tin hợp lệ | Tài khoản đã tạo | 1. Nhập email: valid@gmail.com<br>2. Nhập pass: "12345678"<br>3. Bấm Đăng nhập | Đăng nhập thành công, chuyển hướng về Home | High | Positive |
| **TC_AUTH_010** | Đăng nhập với mật khẩu sai | Tài khoản đã tạo | 1. Nhập email: valid@gmail.com<br>2. Nhập pass: "wrongpass"<br>3. Bấm Đăng nhập | Báo lỗi "Sai mật khẩu hoặc email" | High | Negative |
| **TC_AUTH_011** | Đăng nhập với email không tồn tại | Không | 1. Nhập email: invalid@gmail.com<br>2. Nhập pass: "12345678"<br>3. Bấm Đăng nhập | Báo lỗi "Tài khoản không tồn tại" | High | Negative |
| **TC_AUTH_012** | Đăng nhập bỏ trống trường mật khẩu | Tài khoản đã tạo | 1. Nhập email: valid@gmail.com<br>2. Bấm Đăng nhập | Nút login bị mờ hoặc báo lỗi nhập thiếu | Med | Negative |
| **TC_AUTH_013** | Quên mật khẩu với email hợp lệ | Tài khoản đã tạo | 1. Bấm Quên mật khẩu<br>2. Nhập email đã đky<br>3. Gửi | Báo "Đã gửi mail cấu hình mật khẩu thành công" | High | Positive |
| **TC_AUTH_014** | Quên mật khẩu với email không tồn tại | Không | 1. Bấm Quên mật khẩu<br>2. Nhập email lạ<br>3. Gửi | Báo lỗi "Không tìm thấy tài khoản" | Med | Negative |
| **TC_AUTH_015** | Đăng xuất thành công | Đã đăng nhập | 1. Bấm Avatar<br>2. Chọn Đăng xuất | Quay về trang chủ và session bị clear hoàn toàn | High | Positive |

---

## 2. Module Sản phẩm & Giỏ hàng (Product & Cart) - 20 TC

| TC_ID | Tiêu đề (Title) | Điều kiện trước | Các bước (Steps) | Kết quả mong đợi (Expected) | Độ ưu tiên | Loại test |
| --- | --- | --- | --- | --- | --- | --- |
| **TC_CART_001** | Tìm kiếm sản phẩm đúng tên (chính xác) | Đã Login | 1. Gõ "Sản phẩm A" vào search<br>2. Bấm ICON Tìm | Kết quả trả về đúng danh sách sản phẩm khớp tên | High | Positive |
| **TC_CART_002** | Tìm kiếm sản phẩm không tồn tại | Đã Login | 1. Gõ "KhôngCóThật_XYZ"<br>2. Bấm Tìm | Hiển thị "Không tìm thấy sản phẩm" | Med | Negative |
| **TC_CART_003** | Tìm kiếm bằng ký tự đặc biệt XSS | Đã Login | 1. Gõ "<script>alert(1)</script>"<br>2. Bấm Tìm | Không thực thi mã XSS, trả về mảng rỗng | High | Negative |
| **TC_CART_004** | Lọc theo giá 0 đến 100,000 VND | Đã Login | 1. Chọn Min=0, Max=100k<br>2. Bấm Lọc | Danh sách chỉ hiện SP có giá ≤ 100,000 | High | Boundary |
| **TC_CART_005** | Lọc theo giá Min lớn hơn Max | Đã Login | 1. Chọn Min=200k, Max=100k<br>2. Bấm Lọc | Báo lỗi "Min không hợp lệ" | Med | Negative |
| **TC_CART_006** | Xem chi tiết sản phẩm hợp lệ | Đã Login | 1. Click vào "Sản phẩm A" trong danh sách | Mở page thông tin chi tiết (Mô tả, giá, hình ảnh) | High | Positive |
| **TC_CART_007** | Bypass xem chi tiết SP không hợp lệ (URL giả) | Đã Login | 1. Sửa URL params Id=-1<br>2. Enter | Hiển thị trang 404 (Không tìm thấy SP) | Med | Negative |
| **TC_CART_008** | Thêm 1 sản phẩm vào giỏ hàng | Đã Login, kho > 1 | 1. Trong Product Detail<br>2. Bấm Thêm (SL=1) | Hiện popup "Thêm thành công", icon giỏ số '+1' | High | Positive |
| **TC_CART_009** | Thêm 99 sản phẩm vào giỏ hàng | Đã Login | 1. Nhập Số Lượng = 99<br>2. Bấm Thêm | Thêm thành công (Nếu kho cho phép) | Med | Boundary |
| **TC_CART_010** | Thêm vượt quá 99 sản phẩm (giới hạn giỏ) | Đã Login | 1. Nhập Số Lượng = 100<br>2. Bấm Thêm | Báo lỗi "Số lượng tối đa 99" | Low | Boundary |
| **TC_CART_011** | Thêm 2 loại sản phẩm khác nhau vào giỏ | Đã Login | 1. Thêm SP A<br>2. Thêm SP B | Giỏ hàng hiển thị 2 dòng SP khác nhau (A và B) | High | Positive |
| **TC_CART_012** | Cập nhật số lượng item thành 0 | Có 1 SP trong giỏ | 1. Mở trang Giỏ<br>2. Đổi Số Lượng = 0 | Tự động loại bỏ dòng sản phẩm khỏi giỏ | High | Boundary |
| **TC_CART_013** | Cập nhật số lượng item thành 1 | Có SP SL=2 | 1. Đổi qty từ 2 thành 1 | Tiền được trừ tương ứng | High | Boundary |
| **TC_CART_014** | Cập nhật số lượng thành số âm (-1) | Có 1 SP | 1. Edit SL thành -1 | Tự động trả về 1 hoặc báo lỗi format | High | Negative |
| **TC_CART_015** | Cập nhật qty thành chữ cái ('abc') | Có 1 SP | 1. Gõ 'abc' vào qty input | Không cho gõ vào field hoặc báo lỗi | Med | Negative |
| **TC_CART_016** | Xoá trực tiếp bằng nút Delete trên giỏ | Có 1 SP | 1. Bấm "Xóa" cạnh Item | Xoá item và pop-up confirm | High | Positive |
| **TC_CART_017** | Xóa phần tử cuối cùng trong giỏ | Giỏ chứa 1 SP duy nhất | 1. Bấm "Xóa" SP A | Giỏ hàng ghi nhận trạng thái Trống (Empty state) | High | Positive |
| **TC_CART_018** | Kiểm tra hiển thị tổng tiền | Giỏ chứa 2 SP | 1. Add SP A (10k), SP B (20k) | Tổng tiền giỏ hàng tính chuẩn 30,000 VND | High | Positive |
| **TC_CART_019** | Bấm Check-out khi giỏ không có SP | Giỏ hàng trống | 1. Tại Giỏ, bấm Mua ngay | Mờ nút hoặc báo lỗi "Không có SP để checkout" | High | Negative |
| **TC_CART_020** | Giữ trạng thái giỏ sau refresh (F5) | Có SP trong giỏ | 1. Tải lại trang (F5) | Sản phẩm vẫn nằm trong giỏ, không bị mất đi | Med | Positive |

---

## 3. Module Thanh toán (Checkout) - 10 TC

| TC_ID | Tiêu đề (Title) | Điều kiện trước | Các bước (Steps) | Kết quả mong đợi (Expected) | Độ ưu tiên | Loại test |
| --- | --- | --- | --- | --- | --- | --- |
| **TC_CHECK_001** | Khai báo đủ thông tin & chọn COD | Giỏ có SP | 1. Nhập Địa Chỉ đủ<br>2. Chọn COD<br>3. Bấm Đặt hàng | Báo "Đặt hàng thành công", ID đơn sinh ra | High | Positive |
| **TC_CHECK_002** | Khởi tạo qua thanh toán bằng thẻ Visa | Giỏ có SP | 1. Nhập full details<br>2. Chọn Visa<br>3. Đặt Hàng | Chuyển hướng tới cổng thẻ giả lập thành công | High | Positive |
| **TC_CHECK_003** | Thanh toán bỏ trống dòng địa chỉ | Giỏ có SP | 1. Bỏ trống ô Địa chỉ<br>2. Chọn COD<br>3. Đặt Hàng | Báo lỗi "Vui lòng nhập địa chỉ nhận hàng" | High | Negative |
| **TC_CHECK_004** | Thanh toán khi Visa thiếu Card Number | Giỏ có SP | 1. Nhập Địa Chỉ<br>2. Chọn Visa<br>3. Không gõ số thẻ | Báo lỗi bắt buộc nhập Card Number | High | Negative |
| **TC_CHECK_005** | Thanh toán khi Visa Card Number ngắn hơn format | Đã nhập đủ | 1. Gõ thẻ số "424" (Thiếu)<br>2. Bấm Xác nhận | Báo "Thẻ không hợp lệ độ dài" | Med | Negative |
| **TC_CHECK_006** | Kiểm tra Lịch sử sau khi đặt hàng | Vừa checkout successful | 1. Vào mục "Lịch sử đơn"<br>2. Xem List | Đơn hàng mới nằm trên cùng, trạng thái Pending | High | Positive |
| **TC_CHECK_007** | Lịch sử phải hiển thị đúng tổng giá tiền đơn hàng | Vừa checkout | 1. Mở Lịch sử đơn hàng | Tổng bill của LS bằng đúng tổng lúc confirm checkout | High | Positive |
| **TC_CHECK_008** | Nhập tên người nhận dài quá 100 char | Giỏ có SP | 1. Nhập chuỗi tê>100 ký tự<br>2. Bấm Đặt hàng | Báo lỗi "Tên quá độ dài cho phép" | Low | Boundary |
| **TC_CHECK_009** | Nhập số điện thoại đúng 10 số (hoặc 9 số format cũ) | Giỏ có SP | 1. Nhập "0912345678" | Pass validation số điện thoại | Med | Boundary |
| **TC_CHECK_010** | Cancel quay lùi lại giữa chừng checkout | Đang ở bước cổng Visa | 1. Bấm Cancel / Quay về | Huỷ payment session, trả về Giỏ hàng bình thường | High | Positive |

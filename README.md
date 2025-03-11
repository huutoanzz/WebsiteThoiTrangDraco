# Website Bán Hàng Thời Trang Draco

## 📋 Mô tả dự án
Website bán hàng thời trang Draco cung cấp một nền tảng thương mại điện tử hiện đại, giúp người dùng dễ dàng tìm kiếm và mua sắm các sản phẩm thời trang như quần áo, giày dép và nhiều mặt hàng liên quan khác. Với giao diện thân thiện và các chức năng mạnh mẽ, Draco hỗ trợ tối ưu hóa trải nghiệm mua sắm trực tuyến.

## 🚀 Demo
Link GitHub Repository: [WebsiteThoiTrangDraco](https://github.com/huutoanzz/WebsiteThoiTrangDraco)

## 👥 Thành viên nhóm
Số lượng thành viên: **04**

## 🛠 Công nghệ sử dụng
- **Front-end**:  
  - **Ngôn ngữ:** React JavaScript  
  - **Frameworks/Thư viện:** Tailwind CSS, Ant Design, Redux Toolkit, React Router DOM, Axios, Framer Motion  
  - **Các công cụ hỗ trợ:** React Icons, Date-fns, Firebase  

- **Back-end**:  
  - **Ngôn ngữ:** .NET Webcore API  
  - **Thư viện chính:** Swashbuckle.AspNetCore (Swagger tài liệu hóa API), AutoMapper (chuyển đổi giữa DTO và Model), Entity Framework Core  

- **Database**: SQL Server  

## ✨ Các chức năng chính
1. **Quản lý sản phẩm**:
   - Hiển thị danh sách sản phẩm.
   - Xem chi tiết từng sản phẩm.
   - Tìm kiếm và lọc sản phẩm theo danh mục.
2. **Giỏ hàng & Thanh toán**:
   - Thêm, xóa sản phẩm khỏi giỏ hàng.
   - Hỗ trợ thanh toán trực tuyến dễ dàng.
3. **Quản lý tài khoản**:
   - Đăng ký tài khoản mới.
   - Đăng nhập và cập nhật thông tin cá nhân.
4. **Quản lý đơn hàng**:
   - Xem lịch sử mua hàng của người dùng.
   - Theo dõi trạng thái đơn hàng (đang xử lý, đã giao,...).

## 📂 Cấu trúc dự án
### **Front-end**
- **Công nghệ**: React JavaScript
- **Thư mục chính**:
  - `/components`: Chứa các thành phần giao diện tái sử dụng.
  - `/firebase`: Quản lý các cấu hình và tương tác với Firebase.
  - `/hooks`: Chứa các hook tùy chỉnh để xử lý logic và trạng thái.
  - `/layout`: Các thành phần bố cục chính như header, footer.
  - `/pages`: Các trang chính của ứng dụng như sản phẩm, giỏ hàng, đơn hàng.
  - `/redux`: Quản lý trạng thái ứng dụng thông qua Redux.
  - `/services`: Chứa các logic gọi API để giao tiếp với back-end.

### **Back-end**
- **Công nghệ**: .NET Webcore API
- **Thư mục chính**:
  - `/Controllers`: Xử lý yêu cầu từ client và định tuyến đến các dịch vụ.
  - `/Models`: Chứa các model dữ liệu đại diện cho các thực thể trong hệ thống.
  - `/Dtos`: Chứa các Data Transfer Objects (DTOs) để truyền dữ liệu giữa các tầng.
  - `/Interfaces`: Định nghĩa các hợp đồng (contracts) cho repository và service.
  - `/Services`: Chứa các dịch vụ xử lý logic nghiệp vụ.
  - `/Mappers`: Chuyển đổi giữa model, DTO và các thực thể khác.


## 📈 Hướng dẫn cài đặt và chạy dự án
### Yêu cầu:
1. **Node.js** và **npm** hoặc **yarn**.
2. **.NET Core SDK**.
3. **SQL Server** được cài đặt và cấu hình.

### Cài đặt Front-end:
1. Clone repository.
2. Điều hướng đến thư mục Front-end:
   cd /draco-website-frontend
3. Cài đặt dependencies:
  npm install
4. Chạy ứng dụng:
  npm start

### Cài đặt Back-end:
1. Clone repository.
2. Điều hướng đến thư mục Backend-end:
   cd / draco-website-backend
3. Chạy ứng dụng:
    dotnet watch run

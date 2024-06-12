## Requirement

This project using nodejs version `v21.7.1` and npm version `10.5.0`

## Installation
To install and run this project, follow these steps:

1. Clone the repository:
  ```bash
  $ git clone git@github.com:haouit/NT208.O23.ANTT-Group-4.git PetCare
  ```

2. Navigate to the project directory:
  ```bash
  $ cd PetCare
  ```

3. Install the dependencies and build svelte-kit:
  ```bash
  $ cd Frontend/
  $ npm i
  $ npm run build
  ```

4. Create ./.env file contain ACCESS_TOKEN_SECRET and MONGO_URI, for example:
```
ACCESS_TOKEN_SECRET='your-access-token-secret'
MONGO_URI='mongodb+srv://your-mongo-database-uri'
```

5. Start server Express:
  ```bash
  $ npm i
  $ node index.js
  ```

6. Open your web browser and visit localhost following terminal to view the application.

That's it! You have successfully installed and run the project.

# **Đồ án môn học: Lập trình Ứng dụng Web**
## Mục lục
- [Giới thiệu thành viên](#giới-thiệu-thành-viên)
- [Giới thiệu đề tài](#giới-thiệu-đề-tài)
- [Sơ đồ chức năng web](#sơ-đồ-chức-năng-web)
- [Công nghệ và mô hình sử dụng](#công-nghệ-và-mô-hình-sử-dụng)
- [Workflow chung về mô hình MVC của nhóm](#workflow-chung-về-mô-hình-mvc-của-nhóm)
  - [Tổng quan về mô hình của nhóm](#tổng-quan-về-mô-hình-của-nhóm)
- [Chi tiết về mô hình MVC nhóm đã thiết kế](#chi-tiết-về-mô-hình-mvc-nhóm-đã-thiết-kế)
  - [View](#view)
  - [Model](#model)
  - [Controller](#controller)
- [Giải đáp câu hỏi Seminar](#giải-đáp-câu-hỏi-seminar)
## Giới thiệu thành viên
![Team & members](img/Slide01.png)

## Giới thiệu đề tài
> Tên đề tài: ***Ứng dụng web nuôi thú cưng***

> Mô tả đề tài: "Ứng dụng web nuôi thú cưng" là một nền tảng trực tuyến được thiết kế để cung cấp trải nghiệm nuôi thú cưng trong môi trường web. Ứng dụng này cho phép người dùng lựa chọn và tùy chỉnh loài thú cưng ảo mà họ muốn nuôi. Ứng dụng có thể bao gồm các tính năng như lên cấp độ, thu thập điểm thưởng để mua đồ cho thú cưng, tham gia các nhiệm vụ cùng với thú để thêm độ thân thiết và kỷ niệm về việc nuôi thú cưng ảo.

## Sơ đồ chức năng web
![](img/Slide02.png)

## Công nghệ và mô hình sử dụng
![](img/Slide03.png)

## Workflow chung về mô hình MVC của nhóm
![](img/Slide04.png)

### Tổng quan về mô hình của nhóm 
![](img/Slide05.png)

## Chi tiết về mô hình MVC nhóm đã thiết kế
### View
![](img/Slide06.png)
### Model
![](img/Slide07.png)
### Controller
![](img/Slide08.png)
![](img/Slide09.png)
![](img/Slide10.png)
![](img/Slide11.png)

## Giải đáp câu hỏi Seminar
Các câu hỏi nhận được từ các nhóm khác:
1. Svelte có những công cụ nào vượt trội so với Vue hay React?
2. Routing cua Svelte có những ưu điểm gì so với những framework khác?

Trả lời:

1. Svelte có những công cụ nào vượt trội so với Vue hay React?

| | Svelte | Vue & React |
| :--- | :--- | :--- |
| [**Runtime**](https://en.wikipedia.org/wiki/Runtime_system) | Không cần runtime do nó đã là một compiler. Bạn chỉ cần build project Svelte, nó sẽ chuyển đổi mã nguồn thành HTML, CSS, JavaScript thuần. | Cần runtime để xử lý mã nguồn và thực thi bên trong trình duyệt.
| **Hiệu suất** | Nhờ việc không có runtime, Svelte thường có hiệu suất cao hơn, giảm thiểu thời gian tải trang và giảm kích thước [bundle](https://developer.chrome.com/docs/web-platform/web-bundles). | Cần runtime, dẫn đến có thể làm tăng thời gian tải trang và kích thước bundle.
| **Cú pháp** | Trực quan và dễ hiểu, đặc biệt đối với người mới bắt đầu. Mã Svelte thường ngắn gọn và dễ đọc. | Vue: Cú pháp cũng khá đơn giản nhưng có thể trở nên phức tạp hơn khi sử dụng [Vuex](https://vuex.vuejs.org/) hoặc các plugin phức tạp.<br/>React: Sử dụng [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html), có thể khiến cú pháp trở nên phức tạp hơn, đặc biệt đối với những người mới. 
| **Reactivity** | Svelte có hệ thống reactivity built-in rất mạnh mẽ và đơn giản, không cần đến state management libraries như [Redux](https://redux.js.org/) hoặc Vuex. | Vue: Vue có hệ thống reactivity riêng, nhưng việc quản lý state phức tạp hơn thường cần sử dụng Vuex.<br/>React: Phải sử dụng state management libraries như Redux, [MobX](https://mobx.js.org/README.html), hoặc các hook như useState và useEffect để quản lý state và side effects.
| **Component Lifecycle** | Svelte có lifecycle methods nhưng ít phức tạp hơn, làm cho việc quản lý component lifecycle trở nên đơn giản. | Vue: Có hệ thống lifecycle hooks chi tiết và mạnh mẽ, nhưng có thể phức tạp hơn đối với người mới.<br/>React: Có các lifecycle methods và hooks, nhưng việc quản lý có thể trở nên phức tạp hơn với các ứng dụng lớn. 
| **Hỗ trợ TypeScript** | SvelteKit tích hợp tốt với TypeScript, giúp các nhà phát triển tạo ra các ứng dụng mạnh mẽ và an toàn hơn. | Cả hai đều hỗ trợ TypeScript, nhưng có thể yêu cầu thêm cấu hình và setup ban đầu.


2. Routing cua Svelte có những ưu điểm gì so với những framework khác?

- **Tích hợp chặt chẽ với framework:**
SvelteKit: SvelteKit cung cấp một giải pháp routing tích hợp sẵn, giúp giảm bớt việc cấu hình và thiết lập. Điều này mang lại trải nghiệm liền mạch và dễ sử dụng cho các nhà phát triển.
- **Hiệu suất:**
Svelte: Nhờ vào việc Svelte compile code thành JavaScript thuần túy, các ứng dụng sử dụng Svelte router thường có thời gian tải trang và chuyển trang nhanh hơn.
- **Cấu hình đơn giản và linh hoạt:**
SvelteKit: SvelteKit cung cấp cấu hình routing đơn giản dựa trên file system, giúp quản lý các route dễ dàng và trực quan.

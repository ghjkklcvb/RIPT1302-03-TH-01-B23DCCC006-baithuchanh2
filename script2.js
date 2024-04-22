// Đoạn mã JavaScript nếu cần
// Ví dụ: Xử lý sự kiện click trên các nút trong menu
document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.sidebar ul li a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Ngăn chặn hành vi mặc định của thẻ a (chuyển hướng)
            event.preventDefault();

            // Lấy href của thẻ a (đường dẫn trang web cần chuyển hướng đến)
            var href = this.getAttribute('href');

            // Chuyển hướng sang trang web được chỉ định
            window.location.href = href;
        });
    });
});

const express = require("express");
const router = express.Router();
const { Admin } = require("../model/admin");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("username", req.body);
  try {
    // Tìm sinh viên với username tương ứng trong cơ sở dữ liệu
    const admin = await Admin.findOne({ username });
    console.log("admin", admin);
    if (!admin) {
      // Nếu không tìm thấy sinh viên với username này
      return res.status(401).json({ message: "Tên đăng nhập không tồn tại." });
    }

    if (password !== admin.password) {
      // Nếu mật khẩu không khớp
      return res.status(401).json({ message: "Mật khẩu không chính xác." });
    }

    // Nếu username và password hợp lệ
    res.status(200).json({ message: "Đăng nhập thành công.", status: true });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi đăng nhập:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi khi đăng nhập." });
  }
});

// GET: Retrieve all students
router.get("/", async (req, res) => {
  console.log("get all admin");
});

module.exports = router;

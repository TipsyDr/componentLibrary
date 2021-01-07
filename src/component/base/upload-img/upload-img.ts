/**
 * input上传图片
 * @param {HTMLInputElement} el 
 */
function upLoadImage(el: any) {
    /** 上传文件 */
    const file = el.files[0];
    /** 上传类型数组 */
    const types = ["image/jpg", "image/png", "image/jpeg", "image/gif"];
    // 判断文件类型
    if (types.indexOf(file.type) < 0) {
        file.value = null; // 这里一定要清空当前错误的内容
        return alert("文件格式只支持：jpg 和 png");
    }
    // 判断大小
    if (file.size > 2 * 1024 * 1024) {
        file.value = null;
        return alert("上传的文件不能大于2M");
    }

    const formData = new FormData();    // 这个是传给后台的数据
    formData.append("img", file);       // 这里"img"是跟后台约定好的字段
    console.log(formData, file);
}
